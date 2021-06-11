import css from 'styled-jsx/css'

export const heroContainer = css.resolve`
  div {
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const hero = css.resolve`
  div {
    width: 70%;
    max-width: 700px;
    text-align: center;
    flex-basis: 30%;
  }
`

export const heroForm = css.resolve`
  form {
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 50%;
    margin-bottom: 60px;
  }
`

export const heroFormFieldset = css.resolve`
  fieldset {
    outline: none;
    border: none;
  }
`
export const heroFormTextArea = css.resolve`
  textarea {
    font-size: inherit;
    font-family: inherit;
    padding: .5rem;
    margin-bottom: .5rem;
    color: var(--text);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 5px;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  textarea:hover,
  textarea:focus {
    outline: none !important;
    border: 1.2px solid var(--pink2);
  }
`
export const heroFormWebInput = css.resolve`
  input {
    font-size: inherit;
    font-family: inherit;
    padding: .5rem;
    margin-bottom: .5rem;
    color: var(--text);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 5px;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input:hover,
  input:focus {
    outline: none !important;
    border: 1.2px solid var(--pink2);
  }
`
export const heroFormSiteInput = css.resolve`
  input {
    font-size: inherit;
    font-family: inherit;
    padding: .5rem;
    margin-bottom: .5rem;
    color: var(--text);
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 5px;
    box-shadow: none;
    box-sizing: border-box;
    width: 100%;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }

  input:hover,
  input:focus {
    outline: none !important;
    border: 1.2px solid var(--pink2);
  }
`
export const heroFormSubmitButton = css.resolve`
  input {
    border: none;
    border-radius: 5px;
    background: var(--pink2);
    font-size: 1rem;
    color: var(--white);
    padding: .7rem .9rem;
    margin: .5rem 0;
    transition: .4s;
    width: 100%;
  }

  input:hover {
    cursor: pointer;
    font-weight: bold;
  }
`
export const heroEntries = css.resolve`
  div {
    flex-grow: 0;
    flex-shrink: 10;
    flex-basis: 60%;
    overflow-y: auto;
    overflow-x: hidden;
    position: relative;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;
    max-width: 900px;
    text-align: center;
  }

  div::-webkit-scrollbar {
    width: 2px;
  }

  div::-webkit-scrollbar-thumb {
    background: rgba(50, 63, 203, 0.5);
  }
`
