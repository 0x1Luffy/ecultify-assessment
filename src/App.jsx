import About from './components/About';
import CardGridImages from './components/CardGridImages';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Section/>
      <About/>
      <CardGridImages/>
      <Footer/>
    </div>
  );
}

export default App;
