import React from 'react';
import './Services.css';
import armen from '../../assets/armen.png';
import hovo_industry from '../../assets/hovo_industry.png';
import xumb_kino from '../../assets/xumb_kino.png';
import home_electrical from '../../assets/home_electrical.svg';
import Electric_industry_icon from '../../assets/Electric_industry_icon.svg';
import building_icon from '../../assets/building_icon.svg';

const Services = () => {
	return (
		<div className="services">
			<div className="service">
				<img src={armen} alt="" />
				<div className="caption">
					<img src={home_electrical} style={{height: '150px'}} alt="" />
					<p>Aprtment Electrical Installation</p>
				</div>
			</div>
			<div className="service">
				<img src={hovo_industry} alt="" />
				<div className="caption">
					<img src={Electric_industry_icon} style={{height: '150px'}} alt="" />
					<p>Manufacturing Electrical Installation</p>
				</div>
			</div>
			<div className="service">
				<img src={xumb_kino} alt="" />
				<div className="caption">
					<img src={building_icon} style={{height: '150px'}} alt="" />
					<p>Building Electrical Installation</p>
				</div>
			</div>
		</div>
	)
}

export default Services;
