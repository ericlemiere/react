import React from "react";
//import { AppWrap } from "./wrapper";

import {
  About,
  Footer,
  Header,
  Skills,
  Portfolio,
  Notables,
} from "./container";
import { Navbar, NavigationDots, SocialMedia } from "./components";
import "./App.scss";

const App = () => {



  return (
    <div className="app" id="home">
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Notables />
      {/* <Testimonials /> */}
      <Footer />
      <NavigationDots />
      <SocialMedia />
    </div>
  );
};

export default App;
