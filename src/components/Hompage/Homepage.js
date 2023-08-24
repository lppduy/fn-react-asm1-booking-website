import CityList from './CityList/CityList';
import './Homepage.css';
import PropertyList from './PropertyList/PropertyList';

function Homepage() {
  return (
    <>
      {/* <Featured /> -> <CityList /> */}
      <CityList />
      <h1 className="homepage-title">Browse by property type</h1>
      <PropertyList />
      <h1 className="homepage-title">Homes guests love</h1>
      {/* <FeaturedProperties /> -> <HotelList */}
    </>
  );
}

export default Homepage;
