import './App.css';
import HomeBody from './components/HomeBody';
import Navbar from './components/Navbar';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Contactsection from './components/contact_section/Contactsection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <HomeBody />
      <Navbar />
      <Section2 />
      <div className='breakline'></div>
      <Section3 />
      <Section4 />
      <Contactsection/>
      <Footer/>
    </div>
  );
}

export default App;
