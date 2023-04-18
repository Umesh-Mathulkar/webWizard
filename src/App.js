import React from "react";
import './App.css'

import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Team from "./Components/Team/Team";
import Test from "./Components/Testimonials/Test";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <Hero/>
    <About/>
    <Services/>
    <Team/>
    <Test/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default App;
