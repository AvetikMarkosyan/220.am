import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Services from "./Components/Serivices/Services";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Company from "./Components/Company/Company";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div>
        <Services />
        <About />
        <Company />
      </div>
    </div>
  );
};

export default App;
