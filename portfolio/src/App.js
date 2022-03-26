import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Modals from "./components/Modals";
import Copyright from "./components/Copyright";
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Section />
      <About />
      <Contact />
      <Footer />
      <Copyright />
      <Modals />
    </div>
  );
}

export default App;
