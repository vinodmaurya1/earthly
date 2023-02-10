import React from "react";
import About from "./About";
import CardCarousel from "./CardCarousel";
import Carousel from "./Carousel";
import ChatBot from "./ChatBot";
import Contact from "./Contact";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
<Carousel/>
<CardCarousel/>
<About/>
<Contact/>
<Footer/>
<ChatBot/>
    </div>
  );
};

export default Home;
