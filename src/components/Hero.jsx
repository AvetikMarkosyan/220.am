// import "./Hero.css";
// import battery from "../../assets/battery.svg";

// const Hero = () => {
//   return (
//     <section id="home" className="hero container">
//       <div className="hero-text">
//         <h1>We Ensure better electrical installation for a better</h1>
//         <p>
//           At 220.am, we deliver top-quality electrical solutions designed to
//           meet your unique needs. From residential to commercial and industrial
//           services, our experienced team ensures safety, efficiency, and
//           excellence in every project..
//         </p>
//         <button className="btn-explore">
//           Explore more
//           <img height={70} src={battery} alt="" />
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;


import battery from "@/assets/battery.svg";
import heroBg from "@/assets/hero_ara.png"; // optional if using inline bg

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(8,0,58,0.7), rgba(8,0,58,0.7)), url(${heroBg.src})`,
      }}
    >
      <div className="text-center max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-semibold">
          We Ensure better electrical installation for a better
        </h1>
        <p className="max-w-2xl mx-auto mt-4 mb-6 leading-relaxed text-lg">
          At 220.am, we deliver top-quality electrical solutions designed to
          meet your unique needs. From residential to commercial and industrial
          services, our experienced team ensures safety, efficiency, and
          excellence in every project.
        </p>
        <div className="flex justify-center">
          <button className="bg-white text-gray-900 px-6 py-3 text-lg rounded-full flex items-center gap-3 hover:bg-gray-200 transition">
            Explore more
            <img src={battery.src} alt="Battery icon" className="h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
