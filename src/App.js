import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='port_container'>
      <Header />
      <main>
        <About />
        <ProjectsList />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
