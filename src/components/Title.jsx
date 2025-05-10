// import "./Title.css";

// const Title = ({ subTitle, title }) => {
//   return (
//     <div className="title">
//       <p>{subTitle}</p>
//       <h2>{title}</h2>
//     </div>
//   );
// };

// export default Title;

const Title = ({ subTitle, title }) => {
  return (
    <div className="text-center text-[#212EA0] uppercase font-semibold text-sm my-16">
      <p>{subTitle}</p>
      <h2 className="text-3xl text-[#000F38] mt-1 normal-case">{title}</h2>
    </div>
  );
};

export default Title;

