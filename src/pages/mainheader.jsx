import React, { Component } from "react";
import Slider from "react-slick";
import '../styles/mainheader.scss'
import graph1 from '../img/magic_concrete_design_flower_vase_origami_small.jpg'



export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
	  next: true,
      infinite: true,
      speed: 4,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="mainSlider">

        <Slider {...settings}>
          <div className="slide s1">
		  <button className="darksquare"><h4>Gray is the New Black</h4></button>
			<div className="lightsqaure">
            <h4>Elegance</h4>
            <h3>of Origami flower vase</h3>
			</div>
          </div>
          <div className="slide s2">
			<button className="darksquare"><h4>See all Origami products</h4></button>
			<div className="lightsqaure">
            <h4>Ligth as a paper</h4>
            <h3>line of Origami producs</h3>
			</div>
          </div>
          <div className="slide s3">
		  <button className="darksquare"><h4>Discover the regularity</h4></button>
			<div className="lightsqaure">
            <h4>Regularity of shape</h4>
            <h3>Regulus planter pot</h3>
			</div>
          </div>
          <div className="slide s4">
		  <button className="darksquare"><h4>Meet twisted design</h4></button>
			<div className="lightsqaure">
            <h4>Rotating kinetic energy</h4>
            <h3>of Twistedsquare flower vase</h3>
			</div>
          </div>
          
        </Slider>
      </div>
    );
  }
}