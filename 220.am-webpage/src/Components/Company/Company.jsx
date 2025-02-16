import hovo_armen from "../../assets/hovo_armen.png";
import hovo_peto from "../../assets/hovo_peto.png";
import hovo_peto1 from "../../assets/hovo_peto1.png";
import hovo from "../../assets/hovo.png";
import xumb from "../../assets/xumb.png";
import acSupply from "../../assets/acSupply.svg";
import "./Company.css";
import Title from "../Title/Title";

const Company = () => {
  return (
    <section id="pictures" className="company">
      <Title subTitle="Gallery" title="220.am Photos" />
      <div className="gallery">
        <img src={hovo_armen} alt="" />
        <img src={hovo_peto} alt="" />
        <img src={hovo_peto1} alt="" />
        <img src={hovo} alt="" />
        <img src={xumb} alt="" />
      </div>
      <button className="btn dark-btn">See more here</button>
    </section>
  );
};

export default Company;
