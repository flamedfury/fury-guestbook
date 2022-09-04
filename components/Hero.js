import { useState, useEffect } from 'react'
import { useGuestbookEntries, createGuestbookEntry } from '../graphql/api'
import Header from './Header'
import GuestbookEntry from './GuestbookEntry'
import GuestbookEntryDivider from './GuestbookEntryDivider'
import {
  hero,
  heroContainer,
  heroForm,
  heroFormFieldset,
  heroFormTextArea,
  heroFormWebInput,
  heroFormSiteInput,
  heroFormSubmitButton,
  heroEntries,
} from '../styles/hero'

function getEntries(data) {
  return data ? data.entries.data.reverse() : []
}

export default function Hero(props) {
  const { data, errorMessage } = useGuestbookEntries()
  const [entries, setEntries] = useState([])
  const [webHandle, setWebHandle] = useState('')
  const [webSite, setWebSite] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    if (!entries.length) {
      setEntries(getEntries(data))
    }
  }, [data, entries.length])

  function handleSubmit(event) {
    event.preventDefault()
    if (webHandle.trim().length === 0) {
      alert('please provide your web handle :)')
      return
    }
    if (message.trim().length === 0) {
      alert('no favorite memory? why are you even here!')
      return
    }
    setSubmitting(true)
    createGuestbookEntry(webHandle, webSite, message)
      .then((data) => {
        entries.unshift(data.data.createGuestbookEntry)
        setWebHandle('')
        setWebSite('')
        setMessage('')
        setEntries(entries)
        setSubmitting(false)
      })
      .catch((error) => {
        console.log(`boo :( ${error}`)
        alert('🤷‍♀️')
        setSubmitting(false)
      })
  }

  function handleMessageChange(event) {
    setMessage(event.target.value)
  }

  function handleWebChange(event) {
    setWebHandle(event.target.value)
  }

  function siteWebChange(event) {
    setWebSite(event.target.value)
  }

  return (
    <div class="container">
      <div class="flex">
        <main class="main">
          <article>
            <h1>sign my guestbook</h1>
            <form className={heroForm.className} onSubmit={handleSubmit}>
              <fieldset
                className={heroFormFieldset.className}
                disabled={submitting && 'disabled'}
              >
                <textarea
                  className={heroFormTextArea.className}
                  rows="5"
                  cols="50"
                  name="message"
                  placeholder="what is your favorite memory of the early web?"
                  onChange={handleMessageChange}
                  value={message}
                />
                <input
                  className={heroFormWebInput.className}
                  type="text"
                  placeholder="web handle"
                  onChange={handleWebChange}
                  value={webHandle}
                />
                <input
                  className={heroFormSiteInput.className}
                  type="text"
                  placeholder="website address"
                  onChange={siteWebChange}
                  value={webSite}
                />
                <input
                  className={heroFormSubmitButton.className}
                  type="submit"
                  value="submit"
                />
              </fieldset>
            </form>
            <hr />

            <div className={heroEntries.className}>
              {errorMessage ? (
                <p>{errorMessage}</p>
              ) : !data ? (
                <p>Loading entries...</p>
              ) : (
                entries.map((entry, index, allEntries) => {
                  const date = new Date(entry._ts / 1000)
                  return (
                    <div key={entry._id}>
                      <GuestbookEntry
                        web_handle={entry.web_handle}
                        web_site={entry.web_site}
                        message={entry.message}
                        date={date}
                      />
                      {index < allEntries.length - 1 && <GuestbookEntryDivider />}
                    </div>
                  )
                })
              )}
            </div>
            <hr />
            <p>return <a href="https://flamedfury.com">home</a>!</p>
            {heroEntries.styles}
            {heroFormSubmitButton.styles}
            {heroFormWebInput.styles}
            {heroFormTextArea.styles}
            {heroFormFieldset.styles}
            {heroForm.styles}
            {heroContainer.styles}
            {hero.styles}
          </article>
        </main>

        <footer class="footer">
          <p><strong>Public Service Announcement 2000</strong></p>

          <p>Copyright © 2000 by fLaMEd. Some rights reserved. Don't jack.</p>
        </footer>
      </div>
    </div>
  )
}
