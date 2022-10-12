import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import Qualification from './components/Qualification/Qualification';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About /> 
        <Skills />
        <Qualification />
      </main>
    </>
  );
}

export default App;
 