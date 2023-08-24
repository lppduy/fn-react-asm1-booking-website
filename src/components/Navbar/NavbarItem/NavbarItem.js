import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './NavbarItem.css';

function NavbarItem({ type, icon, active }) {
  // const itemClass = active ? 'navbar-item active' : 'navbar-item';
  let iconData;
  switch (icon) {
    case 'fa-bed':
      iconData = faBed;
      break;
    case 'fa-car':
      iconData = faCar;
      break;
    case 'fa-plane':
      iconData = faPlane;
      break;
    case 'fa-taxi':
      iconData = faTaxi;
      break;
    default:
      break;
  }
  return (
    <div className={`navbar-item ${active ? 'active' : ''}`}>
      <FontAwesomeIcon icon={iconData} />
      <span>{type}</span>
    </div>
  );
}

export default NavbarItem;
