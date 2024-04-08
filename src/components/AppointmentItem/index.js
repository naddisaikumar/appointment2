import './index.css' // Corrected import statement

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarted} = props
  const {id, title, date, isStarred} = appointmentDetails
  const starImgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    // Added const keyword for function declaration
    toggleIsStarted(id)
  }

  return (
    <li className="appointmentItem">
      <div className="header-container">
        {' '}
        {/* Corrected class name */}
        <p className="title">{title}</p>
        <button onClick={onClickStar}>
          {' '}
          {/* Added onClick event handler */}
          <img src={starImgUrl} alt="star" className="star" />
        </button>
      </div>
      <p className="date">Date: {date}</p> {/* Added space after "Date:" */}
    </li>
  )
}

export default AppointmentItem
