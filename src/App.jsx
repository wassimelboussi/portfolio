import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Stack from './components/stack/Stack';
import Projects from './components/projects/Projects';
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';


function App() {
  return (
      <div>
        <NavBar />
        <Hero />
        <Stack />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
  );
}

export default App;
