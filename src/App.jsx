import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Videos from "./components/Videos";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
       <Hero />
       <Services />
        <Gallery />
        <Videos />
        <About />
              <Contact />
               <Footer />


      {/* Temporary spacing because navbar is fixed */}
      <div className="pt-16"></div>
    </>
  );
}

export default App;