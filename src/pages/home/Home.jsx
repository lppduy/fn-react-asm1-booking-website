import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Homepage from '../../components/Hompage/Homepage';
import Navbar from '../../components/Navbar/Navbar';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Homepage />
        <RegisterForm />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
