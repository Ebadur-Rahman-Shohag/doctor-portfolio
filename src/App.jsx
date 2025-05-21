import "./App.css";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Interest from "./components/Interest/Interest";
import Internship from "./components/Internship/Internship";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Education />
      <Internship />
      <Skills />
      <Interest />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
