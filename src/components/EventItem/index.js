import './index.css'

const EventItem = props => {
  const {details, changeId} = props
  const {imageUrl, name, location, registrationStatus} = details
  const changeActive = () => {
    changeId(registrationStatus)
  }
  return (
    <li onClick={changeActive} className="item">
      <button type="button">
        <img className="image" src={imageUrl} alt="event" />
        <p className="name">{name}</p>
        <p className="location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
