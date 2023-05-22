import './App.css';
import HomeBody from './components/HomeBody';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Projects from './components/Projects';
import About from './components/About';
import Contactsection from './components/contact_section/Contactsection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <HomeBody />
      <Navbar />
      <Gallery />
      <div className='breakline'></div>
      <Projects />
      <About />
      <Contactsection/>
      <Footer/>
    </div>
  );
}

export default App;
