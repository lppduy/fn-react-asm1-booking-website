import Header from '../../components/Header/Header';
import Homepage from '../../components/Hompage/Homepage';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="home-container">
        <Homepage />
        {/* <MailList /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Home;
