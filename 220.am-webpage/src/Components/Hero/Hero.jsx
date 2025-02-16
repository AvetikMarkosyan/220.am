import "./Hero.css";
import battery from "../../assets/battery.svg";

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <h1>We Ensure better electrical installation for a better</h1>
        <p>
          At 220.am, we deliver top-quality electrical solutions designed to
          meet your unique needs. From residential to commercial and industrial
          services, our experienced team ensures safety, efficiency, and
          excellence in every project..
        </p>
        <button className="btn-explore">
          Explore more
          <img height={70} src={battery} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
