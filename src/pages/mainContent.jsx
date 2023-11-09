import React from 'react'
import '../styles/maincontent.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const MainContent = () => {
	

	const products = [
		'origami-concrete-flower-vase',
		'unicus-cement-flower-vase',
		'twistedsquare-cement-cigarette-ashtray',
		'heavyloop-concrete-phone-holder',
		'lightwave-concrete-phone-stand',
		'helios-concrete-wall-clock',
		'cannonball-cement-planter-pot',
		'castor-concrete-tealight-stand',
		'regulus-beton-flower-vase',
		'regulus-concrete-flower-pot',
		'twisted-sqaure-concrete-vase',
		'cannonball-xl-concrete-planter-pot',
		'spica-concrete-tealight-holder',
		'origami-concrete-candle-holder',
		'regulus-concrete-cigarette-ashtray',
	]

	const ProductsListGenerator = () => {

const navigate = useNavigate();


		const Words = props => {
			return (
				props.name
					.replace(/[^a-zA-Z0-9]/g, ' ')
					.charAt(0)
					.toUpperCase() + props.name.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')
			)
		}



		return products.map((item, index) => (
			<button key={index} className='item' onClick={() => navigate(`/${item}`)}>
				<img src={`../products/${item}-1.png`} alt={item} />
				<div class='itemtitle'>
					<h3>
						<Words name={item} />
					</h3>
					<p>click to see details</p>
				</div>
			</button>
		))
	}

	return (
		<div>
			<div className='about'>
				<div className='text'>
					<h1>MagicConcrete Design:</h1>
					<h2>Concrete Everyday Art</h2>
					<p>
						At MagicConcrete, we fuse artistry with concrete to birth modern, hand-crafted decorative pieces. Our
						designs, inspired by unique geometric patterns, emanate from our dedicated workshop in Wroclaw, Poland. As
						we tirelessly innovate, we invite you to explore our collection on Etsy, where each piece is given a unique
						identifier, evident in its photos. Beyond our showcased creations, we cater to personalized needs. Whether
						it's a variation of our classics or a new vision, we're here to transform your ideas into tangible reality.
						If you're seeking a blend of modern design and timeless craft, MagicConcrete is your destination. Connect
						with us, and together, let's shape your concrete dreams.
					</p>
				</div>

				<div className='etsy'>
					<div className='evaluation'>4,94</div>
					<div className='description'>Our realibility on Etsy:</div>
					<div className='stars'>
						<i class='fa-sharp fa-solid fa-star'></i>
						<i class='fa-sharp fa-solid fa-star'></i>
						<i class='fa-sharp fa-solid fa-star'></i>
						<i class='fa-sharp fa-solid fa-star'></i>
						<i class='fa-sharp fa-solid fa-star'></i>
					</div>
				</div>
			</div>

			<div className='products'>
				<h1>MagicConcrete Products:</h1>

				<div className='productslist'>
					<ProductsListGenerator />
				</div>
			</div>
		</div>
	)
}

export default MainContent
