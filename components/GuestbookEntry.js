import {
  guestbookEntry,
  guestbookEntryUserDetail,
  guestbookEntryUserDetailTimestamp,
  guestbookEntryUserDetailBiolink,
  guestbookEntryMessage,
  guestbookEntryShare,
} from '../styles/guestbookentry'

export default function GuestbookEntry(props) {
  return (
    <>
      <div className={guestbookEntry.className}>
        <div className={guestbookEntryUserDetail.className}>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${props.web_site}/`}
          >
            {props.web_handle}
          </a>
          <span className={guestbookEntryUserDetailTimestamp.className}>
            {props.date.toDateString()}
          </span>
        </div>
        <div className={guestbookEntryMessage.className}>{props.message}</div>
      </div>
      {guestbookEntry.styles}
      {guestbookEntryShare.styles}
      {guestbookEntryMessage.styles}
      {guestbookEntryUserDetail.styles}
      {guestbookEntryUserDetailBiolink.styles}
      {guestbookEntryUserDetailTimestamp.styles}
    </>
  )
}
