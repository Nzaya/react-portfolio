import React, { useState } from 'react';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const App = () => {

  const [prefillMessage, setPrefillMessage] = useState('');

  return (
    <>
      <Header setPrefillMessage={setPrefillMessage} />

      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />

      <Contact prefillMessage={prefillMessage} />

      <Footer />
    </>
  );
};

export default App;