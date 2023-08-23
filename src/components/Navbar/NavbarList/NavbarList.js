import NavbarItem from './NavbarItem/NavbarItem';
import './NavbarList.css';

function NavbarItems() {
  const navbarData = [
    {
      type: 'Stays',
      icon: 'fa-bed',
      active: true,
    },
    {
      type: 'Flights',
      icon: 'fa-plane',
      active: false,
    },
    {
      type: 'Car rentals',
      icon: 'fa-car',
      active: false,
    },
    {
      type: 'Attractions',
      icon: 'fa-bed',
      active: false,
    },
    {
      type: 'Airport taxis',
      icon: 'fa-taxi',
      active: false,
    },
  ];

  return (
    <div className="navbarListContainer">
      {navbarData.map(data => (
        <NavbarItem type={data.type} active={data.active} icon={data.icon} />
      ))}
      {/* <NavbarItem
        type={navbarData.type}
        active={navbarData.active}
        icon={navbarData.icon}
      /> */}
    </div>
  );
}

export default NavbarItems;
