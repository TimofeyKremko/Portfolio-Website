import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/home/Home'
import Qualification from './components/Qualification/Qualification';
import Scrollup from './components/Scrollup/Scrollup';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
 