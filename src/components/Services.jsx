// import armen from "../../assets/armen.png";
// import hovo_industry from "../../assets/hovo_industry.png";
// import xumb_kino from "../../assets/xumb_kino.png";
// import home_electrical from "../../assets/home_electrical.svg";
// import Electric_industry_icon from "../../assets/Electric_industry_icon.svg";
// import building_icon from "../../assets/building_icon.svg";
// import Title from "../Title/Title";
// import "./Services.css";

// const Services = () => {
//   return (
//     <section className="section-wrapper" id="services">
//       <Title subTitle="Our Services" title="What We Offer" />
//       <div className="services">
//         <div className="service">
//           <img src={armen} alt="" />
//           <div className="caption">
//             <img src={home_electrical} style={{ height: "150px" }} alt="" />
//             <p>Aprtment Electrical Installation</p>
//           </div>
//         </div>
//         <div className="service">
//           <img src={hovo_industry} alt="" />
//           <div className="caption">
//             <img
//               src={Electric_industry_icon}
//               style={{ height: "150px" }}
//               alt=""
//             />
//             <p>Manufacturing Electrical Installation</p>
//           </div>
//         </div>
//         <div className="service">
//           <img src={xumb_kino} alt="" />
//           <div className="caption">
//             <img src={building_icon} style={{ height: "150px" }} alt="" />
//             <p>Building Electrical Installation</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import armen from "@/assets/armen.png";
import hovo_industry from "@/assets/hovo_industry.png";
import xumb_kino from "@/assets/xumb_kino.png";
import Title from "@/components/Title.jsx";
import { FaHome } from "react-icons/fa";
import { MdFactory } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

const Services = () => {
  return (
    <section id="services" className="flex flex-col items-center py-20 px-4">
      <Title subTitle="Our Services" title="What We Offer" />
      <div className="flex flex-wrap justify-between gap-10 w-full max-w-6xl mt-10">
        {[ 
          {
            img: armen,
            icon: <FaHome size={50} />,
            caption: "Apartment Electrical Installation",
          },
          {
            img: hovo_industry,
            icon: <MdFactory size={50} />,
            caption: "Manufacturing Electrical Installation",
          },
          {
            img: xumb_kino,
            icon: <FaBuilding size={50} />,
            caption: "Building Electrical Installation",
          },
        ].map(({ img, icon, caption }, idx) => (
          <div
            key={idx}
            className="relative flex-[1_1_31%] max-w-[500px] h-[250px] rounded-lg overflow-hidden group"
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/30 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 flex flex-col items-center justify-center text-white cursor-pointer">
              {icon}
              <p className="text-center font-medium">{caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
