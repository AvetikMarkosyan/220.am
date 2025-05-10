// import about_img from "../../assets/about_img.png";
// import play_icon from "../../assets/play_icon.svg";
// import "./About.css";

// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-left">
//         <img src={about_img} alt="" className="about-img" />
//         <img src={play_icon} alt="" className="play-icon" />
//       </div>
//       <div className="about-right">
//         <h3>ABOUT COMPANY</h3>
//         <h2>Professional Services Focus</h2>
//         <p>
//           Welcome to 220.am! We are a dedicated team of electrical specialists
//           committed to delivering top-notch solutions for residential,
//           commercial, and industrial projects. With years of experience and a
//           customer-first approach, we aim to provide services that are both
//           reliable and innovative.
//         </p>
//         <p>
//           Our mission is to power your spaces with precision and care, ensuring
//           that every project meets the highest standards of quality and safety.
//           Whether you're building from the ground up or upgrading existing
//           systems, our expertise guarantees results that last.
//         </p>
//         <p>
//           At 220.am, we value sustainability and innovation. By leveraging
//           cutting-edge technologies and eco-friendly practices, we not only meet
//           today's demands but also contribute to a greener future for
//           generations to come.
//         </p>
//         <p>
//           Our team believes in transparency, trust, and teamwork. From
//           consultation to project completion, we work closely with you to bring
//           your vision to life. Let us handle the details while you enjoy peace
//           of mind knowing your project is in expert hands.
//         </p>
//         <p>
//           Thank you for choosing 220.am as your trusted electrical partner.
//           Together, let’s build a brighter, more sustainable future!
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;


import about_img from "@/assets/about_img.png";
import play_icon from "@/assets/play_icon.svg";

const About = () => {
  return (
    <section
      id="about"
      className="w-[90%] mx-auto my-24 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* Left side (Image with icon overlay) */}
      <div className="relative flex-1 max-w-md">
        <img
          src={about_img.src}
          alt="About"
          className="w-full rounded-lg filter grayscale"
        />
        <img
          src={play_icon.src}
          alt="Play"
          className="w-14 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Right side (Text content) */}
      <div className="flex-1">
        <h3 className="text-[#212EA0] text-lg font-semibold uppercase">
          About Company
        </h3>
        <h2 className="text-3xl text-[#000F38] font-bold my-3 max-w-sm">
          Professional Services Focus
        </h2>
        <div className="text-[#676767] space-y-4 text-base">
          <p>
            Welcome to 220.am! We are a dedicated team of electrical specialists
            committed to delivering top-notch solutions for residential,
            commercial, and industrial projects.
          </p>
          <p>
            Our mission is to power your spaces with precision and care,
            ensuring that every project meets the highest standards of quality
            and safety.
          </p>
          <p>
            At 220.am, we value sustainability and innovation. By leveraging
            cutting-edge technologies and eco-friendly practices, we contribute
            to a greener future.
          </p>
          <p>
            Our team believes in transparency, trust, and teamwork. From
            consultation to project completion, we work closely with you to
            bring your vision to life.
          </p>
          <p>
            Thank you for choosing 220.am as your trusted electrical partner.
            Together, let’s build a brighter, more sustainable future!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
