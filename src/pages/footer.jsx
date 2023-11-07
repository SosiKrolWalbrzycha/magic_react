import React from 'react'
import { useLocation } from 'react-router-dom'
import '../styles/footer.scss'

const ContentForFooter = {
	'': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'origami-concrete-flower-vase': [
		[
			'Unfolding Beauty in Every Edge',
			"Immerse yourself in the artistry that transcends centuries with our Origami Concrete Flower Vase. Infused with the spirit of Asian heritage, this piece merges the traditional art of Japanese origami with the robust medium of concrete, creating a harmonious blend of strength and delicacy. It stands not just as a vessel for blooms but as a centerpiece that commands attention, making it a profound statement in home decor. The vase's raw, tactile surface reflects the ethos of concrete art, bringing an avant-garde twist to classical inspiration.",
		],
		[
			'Crafted Elegance for the Modern Home',
			"Each Origami vase narrates a tale of craftsmanship and precision. Handmade with a dedication that pays homage to the meticulous nature of japońska sztuka, it brings the essence of azja into the heart of your living space. The vase's multifaceted structure challenges the conventional, introducing a new dimension to contemporary design. It’s an object of utility and beauty, offering a minimalist yet sophisticated charm that enhances the ambiance of both lush outdoor gardens and cozy indoor retreats.",
		],
		[
			'A Cultural Rendezvous of Form and Function',
			"This vase isn’t merely a receptacle for flowers; it's a conversation starter, a bridge between cultures, and a piece of concrete art that stands the test of time. Its durability is matched only by its style, which draws admirers close in a blend of curiosity and admiration. Whether placed as a solitary showpiece or among a collection of cherished items, the Origami concrete flower vase is a tribute to the fusion of Eastern tradition and modern design, a truly unique addition to any home seeking a touch of artistic flair.",
		],
	],
	'unicus-cement-flower-vase': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'twistedsquare-cement-cigarette-ashtray': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'heavyloop-concrete-phone-holder': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'lightwave-concrete-phone-stand': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'helios-concrete-wall-clock': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'cannonball-cement-planter-pot': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'castor-concrete-tealight-stand': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'regulus-beton-flower-vase': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'regulus-concrete-flower-pot': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'twisted-sqaure-concrete-vase': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'cannonball-xl-concrete-planter-pot': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'spica-concrete-tealight-holder': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'origami-concrete-candle-holder': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
	'regulus-concrete-cigarette-ashtray': [
		['header1', 'content1'],
		['header2', 'content2'],
		['header3', 'content3'],
	],
}

const Footer = () => {
	const location = useLocation()
	const pathname = location.pathname.replace('/', '')
	const content = ContentForFooter[pathname]

	const FooterContentGenerator = content.map((item, index) => (
		<div className='seoDesc' key={index}>
			<div className='oneItem'>
				<h2 className='title'>{item[0]}</h2>
				<p className='txtp'>{item[1]}</p>
			</div>
		</div>
	))

	return (
		<div className='footerContent'>
			{FooterContentGenerator}
			<h2 className='title'>Our products on Etsy:</h2>{' '}
		</div>
	)
}

export default Footer
