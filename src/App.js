import "./App.css";
import Aboutus from "./components/aboutus/Aboutus";
import Advantages from "./components/advantages/Advantages";
import Contact from "./components/contactus/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Protfolio from "./components/Protfolio/Protfolio";
import Testimonals from "./components/Testimonals/Testimonals";
import Whatwedo from "./components/whatwedo/Whatwedo";

function App() {
  return (
    <>
      <Header />
      <Hero />

      <Advantages />
      <Whatwedo />

      <Aboutus />

      <Protfolio />

      <Testimonals />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
