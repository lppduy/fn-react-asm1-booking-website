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
  const itemClass = active ? 'navbarItem active' : 'navbarItem';
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
    <div className={itemClass}>
      <FontAwesomeIcon icon={iconData} />
      <span>{type}</span>
    </div>
  );
}

export default NavbarItem;
