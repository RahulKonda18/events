import './index.css'

const activeStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
  initial: 'INITIAL',
}

const ActiveEventRegistrationDetails = props => {
  const {active} = props

  const initialView = () => (
    <div className="eve">
      <p>Click on an event, to view its registration details</p>
    </div>
  )
  const registeredView = () => (
    <div className="eve">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1>You have already registered for the event</h1>
    </div>
  )

  const registrationsClosedView = () => (
    <div className="eve">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
      />
      <h1>Registrations Are Closed Now!</h1>
      <p>Stay tuned. We will reopen</p>
    </div>
  )

  const yetView = () => (
    <div className="eve">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p>
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art
      </p>
      <button type="button" className="button">
        Register Here
      </button>
    </div>
  )

  switch (active) {
    case activeStatus.initial:
      return initialView()
    case activeStatus.yetToRegister:
      return yetView()
    case activeStatus.registered:
      return registeredView()
    case activeStatus.registrationsClosed:
      return registrationsClosedView()
    default:
      return initialView()
  }
}

export default ActiveEventRegistrationDetails
