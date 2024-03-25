import logo from './logo.svg';
import './App.css';
import NavBar from './Componenets/NavBar';
import Home from './Componenets/Home';
import Aboutus from './Componenets/Aboutus';
import Skills from './Componenets/Skills';
import Portfolio from './Componenets/Portfolio';
import Companies from './Componenets/Companies';
import Contact from './Componenets/Contact';
import Footer from './Componenets/Footer';

function App() {
  return (
    <div className='p-[20px]'>{/*padding*/}
     
      {/*Nav Bar */}
     <NavBar />
      {/* Intro */}
      <Home />
      {/* About me */}
      <Aboutus />
      {/* Skills */}
      <Skills />
      {/* Portfolio */}
      <Portfolio />
      {/* Companies */}
      <Companies />
      {/* Contact Us */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
