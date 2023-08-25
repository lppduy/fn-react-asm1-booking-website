import './Detail.css';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
// './images/hotel_search_3.jpg'
const Detail = () => {
  const detailData = {
    name: 'Tower Street Apartments',
    address: 'Elton St 125 New york',
    distance: 'Excellent location - 500m from center',
    price: 'Book a stay over $114 at this property and get a free airport taxi',
    photos: [
      '/images/hotel_detail_1.jpg',
      '/images/hotel_detail_2.jpg',
      '/images/hotel_detail_3.jpg',
      '/images/hotel_detail_4.jpg',
      '/images/hotel_detail_5.jpg',
      '/images/hotel_detail_6.jpg',
    ],
    title: 'Stay in the heart of City',
    description:
      "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
    nine_night_price: 955,
  };

  const photos = [...detailData.photos];
  // console.log(photos);

  return (
    <>
      <Navbar />
      <div className="hotel-container">
        <div className="hotel-wrapper">
          <button className="book-now">Reserve or Book Now!</button>
          <h1 className="hotel-title">Tower Street Apartments</h1>
          <div className="hotel-address">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New york</span>
          </div>
          <span className="hotel-distance">
            Excellent location – 500m from center
          </span>
          <span className="hotel-price-highlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotel-images">
            {photos.map((photo, i) => (
              <div className="hotel-img__wrapper" key={i}>
                <img src={photo} alt="" className="hotel-img" />
              </div>
            ))}
          </div>

          <div className="hotel-details">
            <div className="hotel-details__texts">
              <h1 className="hotel-title">Stay in the heart of City</h1>
              <p className="hotel-description">
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </p>
            </div>
            <div className="hotel-details__price">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <RegisterForm />
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Detail;
