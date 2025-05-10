// import hovo_armen from "@/assets/hovo_armen.png";
// import hovo_peto from "@/assets/hovo_peto.png";
// import hovo_peto1 from "@/assets/hovo_peto1.png";
// import hovo from "@/assets/hovo.png";
// import xumb from "@/assets/xumb.png";
// import acSupply from "@/assets/acSupply.svg";
// import "./Company.css";
// import Title from "@/components/Title/Title";

// const Company = () => {
//   return (
//     <section id="pictures" className="company">
//       <Title subTitle="Gallery" title="220.am Photos" />
//       <div className="gallery">
//         <img src={hovo_armen} alt="" />
//         <img src={hovo_peto} alt="" />
//         <img src={hovo_peto1} alt="" />
//         <img src={hovo} alt="" />
//         <img src={xumb} alt="" />
//       </div>
//       <button className="btn dark-btn">See more here<img src={acSupply} alt="" /></button>
//     </section>
//   );
// };

// export default Company;


import hovo_armen from "@/assets/hovo_armen.png";
import hovo_peto from "@/assets/hovo_peto.png";
import hovo_peto1 from "@/assets/hovo_peto1.png";
import hovo from "@/assets/hovo.png";
import xumb from "@/assets/xumb.png";
import acSupply from "@/assets/acSupply.svg";
import Title from "@/components/Title";

const Company = () => {
  return (
    <section id="pictures" className="w-[90%] mx-auto my-20 text-center">
      <Title subTitle="Gallery" title="220.am Photos" />

      <div className="flex flex-wrap justify-around items-center gap-4 mb-10">
        {[hovo_armen, hovo_peto, hovo_peto1, hovo, xumb].map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Gallery image ${index + 1}`}
            className="h-[250px] object-cover rounded-lg"
          />
        ))}
      </div>

      <button className="bg-gray-900 text-white px-6 py-2 rounded-full inline-flex items-center gap-2 hover:bg-gray-700 transition">
        See more here
        <img src={acSupply.src} alt="Arrow" className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Company;
