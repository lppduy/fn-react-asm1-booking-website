import CityList from './CityList/CityList';
import './Homepage.css';
import HotelList from './HotelList/HotelList';
import PropertyList from './PropertyList/PropertyList';

function Homepage() {
  return (
    <>
      <CityList />
      <h1 className="homepage-title">Browse by property type</h1>
      <PropertyList />
      <h1 className="homepage-title">Homes guests love</h1>
      <HotelList />
    </>
  );
}

export default Homepage;
