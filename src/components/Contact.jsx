// import React from 'react'
// import './Contact.css'

// const Contact = () => {
//   return (
//     <section id="contact us" className='contact'>
//       <div className="contact-col">
//         <h3>Send us a message</h3>
//         <p>Feel free to reach out through contact form or find our contact 
//             information below. Your feedback, questions, and suggestions are 
//             important to us as we strive to provide exceptional services to our 
//             company.</p>
//             <ul>
//                 <li>info@220.am</li>
//                 <li>+(374) 77 076 220</li>
//                 <li>Kurghinyan 27/41</li>
//             </ul>
//       </div>
//       <div className="contact-col"></div>
//     </section>
//   )
// }

// export default Contact


const Contact = () => {
  return (
    <section
      id="contact-us"
      className="max-w-[90%] mx-auto my-20 flex flex-col md:flex-row items-start justify-between gap-10"
    >
      <div className="md:flex-1 text-[#676767]">
        <h3 className="text-2xl text-[#000F38] font-medium flex items-center ml-2">
          Send us a message
        </h3>
        <p className="max-w-[450px] mt-4">
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional services to our
          company.
        </p>
        <ul className="flex flex-col gap-2 mt-6 text-base">
          <li>info@220.am</li>
          <li>+(374) 77 076 220</li>
          <li>Kurghinyan 27/41</li>
        </ul>
      </div>

      <div className="md:flex-1">
        {/* Placeholder for future content, e.g. a contact form or map */}
      </div>
    </section>
  );
};

export default Contact;
