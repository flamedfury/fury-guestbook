import {
  guestbookEntry,
  guestbookEntryUserDetail,
  guestbookEntryUserDetailAvatar,
  guestbookEntryUserDetailAvatarImg,
  guestbookEntryUserDetailTimestamp,
  guestbookEntryUserDetailBiolink,
  guestbookEntryMessage,
  guestbookEntryShare,
  guestbookEntryShareTwitterButton,
  guestbookEntryShareTwitterButtonLogo1,
  guestbookEntryShareTwitterButtonLogo2,
} from '../styles/guestbookentry'

export default function GuestbookEntry(props) {
  return (
    <>
      <div className={guestbookEntry.className}>
        <div className={guestbookEntryUserDetail.className}>
          <a
            className={guestbookEntryUserDetailBiolink.className}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://github.com/${props.web_handle}/`}
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
      {guestbookEntryShareTwitterButton.styles}
      {guestbookEntryShareTwitterButtonLogo1.styles}
      {guestbookEntryShareTwitterButtonLogo2.styles}
      {guestbookEntryMessage.styles}
      {guestbookEntryUserDetail.styles}
      {guestbookEntryUserDetailAvatar.styles}
      {guestbookEntryUserDetailAvatarImg.styles}
      {guestbookEntryUserDetailBiolink.styles}
      {guestbookEntryUserDetailTimestamp.styles}
    </>
  )
}
