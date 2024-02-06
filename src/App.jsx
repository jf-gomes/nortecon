import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import Advantages from './components/Advantages';
import OurProducts from './components/OurProducts';
import AllAbout from './components/AllAbout';
import Footer from './components/Footer';
import About from './components/About';

function App() {

  return (
    <>
      <Header />
      <FirstSection />
      <About />
      <Advantages />
      <OurProducts />
      <AllAbout />
      <Footer />
    </>
  )
}

export default App
