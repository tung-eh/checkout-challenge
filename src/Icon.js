import { ReactComponent as AccountCircle } from './icons/account_circle-24px.svg'
import { ReactComponent as Email } from './icons/email-24px.svg'
import { ReactComponent as Home } from './icons/home-24px.svg'
import { ReactComponent as LocationCity } from './icons/location_city-24px.svg'
import { ReactComponent as MarkunreadMailbox } from './icons/markunread_mailbox-24px.svg'
import { ReactComponent as Phone } from './icons/phone-24px.svg'
import { ReactComponent as Public } from './icons/public-24px.svg'

const MAP = {
  account_circle: AccountCircle,
  email: Email,
  home: Home,
  location_city: LocationCity,
  markunread_mailbox: MarkunreadMailbox,
  phone: Phone,
  public: Public,
}

const Icon = ({ name, ...props }) => {
  const Component = MAP[name]

  if (!Component) return null

  return <Component {...props} />
}

export default Icon