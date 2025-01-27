import React from 'react';
import './About.css';
import about_img from '../../assets/about_img.png'
import play_icon from '../../assets/play_icon.svg'

const About = () => {
  return (
    <div id="about" className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">            
           <h3>ABOUT COMPANY</h3> 
           <h2>Professional Services Focus</h2>
           <p>Welcome to 220.am! We are a dedicated team of electrical specialists committed 
            to delivering top-notch solutions for residential, commercial, and industrial projects. 
            With years of experience and a customer-first approach, we aim to provide services that 
            are both reliable and innovative.</p>
           <p>Our mission is to power your spaces with precision and care, 
            ensuring that every project meets the highest standards of quality and safety. 
            Whether you're building from the ground up or upgrading existing systems, 
            our expertise guarantees results that last.</p>
           <p>At 220.am, we value sustainability and innovation. 
            By leveraging cutting-edge technologies and eco-friendly practices, 
            we not only meet today's demands but also contribute to a greener future for generations to come.</p>
           <p>Our team believes in transparency, trust, and teamwork. 
            From consultation to project completion, we work closely with you to bring your vision to life. 
            Let us handle the details while you enjoy peace of mind knowing your project is in expert hands.</p>
           <p>Thank you for choosing 220.am as your trusted electrical partner. Together, let’s build a brighter, 
            more sustainable future!</p>
        </div>
    </div>
  )
}

export default About
