import React from 'react';
//import { AppWrap } from './wrapper';

import { About, Footer, Header, Skills, Portfolio, Notables } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Notables />
      {/* <Testimonials /> */}
      <Footer />
    </div>

  )
};

export default App