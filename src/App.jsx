import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Hero from './components/hero/Hero';
import Stack from './components/stack/Stack';
import Projects from './components/projects/Projects';
import ContactForm from './components/contactForm/ContactForm';
import Footer from './components/footer/Footer';
import ResumeViewer from './components/resumeviewer/ResumeViewer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/stack" component={Stack} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={ContactForm} />
          <Route path="/resume" component={ResumeViewer} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
