import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Serivices/Services';
import Title from './Components/Title/Title';
import About from './Components/About/About';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div classNmae="container">
        <Title subTitle='Our Services' title='What We Offer'/>
        <Services/>
      </div>
      <About/>
      <Title subTitle='Gallery' title='220.am Photos' />
      {/* <Company /> */}
    </div>
  )
}

export default App
