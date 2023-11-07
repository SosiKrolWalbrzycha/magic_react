import React, { Component } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import '../styles/mainheader.scss'
import LinkMaker1 from './header.jsx'
import { NavigationContext } from './header.jsx'


const MainHeader = () => {
	const navigate = useNavigate()



const Dupa = (e) => {
if (Number(e.target.id) === 1) {navigate('/origami-concrete-flower-vase')}
else if (Number(e.target.id) === 2) {navigate('/origami-concrete-candle-holder')}
else if (Number(e.target.id) === 3) {navigate('/regulus-concrete-flower-pot')}
else if (Number(e.target.id) === 4) {navigate('/unicus-cement-flower-vase')}
}



	return ( <SimpleSlider arg={Dupa}/> );
}
 

class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			next: true,
			infinite: true,
			speed: 4,
			slidesToShow: 1,
			slidesToScroll: 1,
		}

		return (
			<div className='mainSlider'>
				<Slider {...settings}>
					<div className='slide s1'>
						<button className='darksquare d1' id='1' onClick={this.props.arg }>
							<h4 id='1'>Gray is the New Black</h4>
						</button>
						<div className='lightsqaure l1'>
							<h4>Elegance</h4>
							<h3>of Origami flower vase</h3>
						</div>
					</div>
					<div className='slide s2'>
						<button className='darksquare d2' id='2' onClick={this.props.arg }>
							<h4 id='2'>See all Origami products</h4>
						</button>
						<div className='lightsqaure l2'>
							<h4>Ligth as a paper</h4>
							<h3>line of Origami producs</h3>
						</div>
					</div>
					<div className='slide s3'>
						<button className='darksquare d3' id='3' onClick={this.props.arg }>
							<h4 id='3'>Discover the regularity</h4>
						</button>
						<div className='lightsqaure l3'>
							<h4>Regularity of shape</h4>
							<h3>Regulus planter pot</h3>
						</div>
					</div>
					<div className='slide s4'>
						<button className='darksquare d4' id='4' onClick={this.props.arg }>
							<h4 id='4'>Meet twisted design</h4>
						</button>
						<div className='lightsqaure l4'>
							<h4>Rotating kinetic energy</h4>
							<h3>of Twistedsquare flower vase</h3>
						</div>
					</div>
				</Slider>
			</div>
		)
	}
}
export default MainHeader
