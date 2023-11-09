import { useState } from 'react'
import '../styles/footerseo.scss'

const FooterSeo = () => {
	const [seoLinks, setSeoLinks] = useState([
		['Concrete design', 'https://www.etsy.com/pl/shop/MagicConcreteDesign'],
		['Concrete flower pot CannonBall', 'https://www.etsy.com/pl/listing/1106278795/concrete-flower-pot-cannonball-0405-dark'],
		['Concrete flower pot Unicus', 'hhttps://www.etsy.com/pl/listing/1383782985/concrete-flower-pot-unicus-0220-gray'],
		['Concrete pot set', 'https://www.etsy.com/pl/listing/1170178526/concrete-pot-set-3x-cannonball-0412-0413'],
		['Black concrete flower pot Regulus', 'https://www.etsy.com/pl/listing/1384490599/dark-gray-concrete-modernist-flower-pot'],
		['Regulus concrete pot', 'https://www.etsy.com/pl/listing/1385033357/elegant-concrete-planter-for-succulent'],
		['Origami concrete candle holders', 'https://www.etsy.com/pl/listing/950200208/set-of-3-concrete-candle-holders-origami'],
		['Modern home decor', 'https://www.etsy.com/pl/listing/1106269431/modern-home-decor-sleek-concrete-planter'],
		['Concrete ashtray', 'https://www.etsy.com/pl/listing/964372982/handmade-concrete-ashtray-luxury-modern'],
		['Concrete Vase', 'https://www.etsy.com/pl/listing/1384329351/concrete-flower-vase-regulus-0225-gray'],
		['Black concrete pot', 'https://www.etsy.com/pl/listing/1526028758/concrete-flower-pot-regulus-0420-black'],
		['Indoor Planter Pot', 'https://www.etsy.com/pl/listing/1383583693/concrete-flower-pot-regulus-0228-gray'],
		['Home decor pot', 'https://www.etsy.com/pl/listing/1092794010/concrete-pot-cannonball-0407-flower-pot'],
		['White Concrete', 'https://www.etsy.com/pl/listing/1092802062/concrete-flower-pot-cannonball-0408'],
		['Minimalist Planter Pot ', 'https://www.etsy.com/pl/listing/1384813041/sleek-concrete-minimalist-planter-pot'],
		['Candle Holder', 'https://www.etsy.com/pl/listing/741739105/castor-0108-candle-holder-white-concrete'],
		['Concrete Vase', 'https://www.etsy.com/pl/listing/1369550950/concrete-flower-vasepot-regulus-0226'],
		['Beton pot', 'https://www.etsy.com/pl/listing/1371071294/modern-interior-beton-flower-pot'],
		['COncrete flower vase', 'https://www.etsy.com/pl/listing/967326015/concrete-flower-vase-twisted-square-0212'],
		['Chic home decor', 'https://www.etsy.com/pl/listing/964175197/concrete-flower-vase-chic-home-decor'],
		['Scandinavian home decor', 'https://www.etsy.com/pl/listing/1386369479/chic-white-flower-pot-scandinavian-home'],
		['Chic Flower Pot', 'https://www.etsy.com/pl/listing/1386369479/chic-white-flower-pot-scandinavian-home'],
		['Unique ashtray', 'https://www.etsy.com/pl/listing/1385143323/unique-ashtray-for-stylish-smokers'],
		['Concrete planter', 'https://www.etsy.com/pl/listing/1385140177/elegant-dark-gray-concrete-planter'],
		['Modern flower vase', 'https://www.etsy.com/pl/listing/1385111311/architectural-concrete-details-modern'],
		['Stylish brutalist interior element', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Concrete floral vessel', 'https://www.etsy.com/pl/listing/950856400/concrete-floral-vessel-functional-art'],
		['Handmade ashtry', 'https://www.etsy.com/pl/listing/978342411/handmade-concrete-ashtray-for-stylish'],
		['Concrete flower holder', 'https://www.etsy.com/pl/listing/1115094245/concrete-flower-holder-stylish-table'],
		['Origami', 'https://www.etsy.com/pl/listing/964151969/origami-0114-candleholder-gray-concrete'],
		['Candle holders', 'https://www.etsy.com/pl/listing/962976087/tri-color-concrete-tealight-holders-chic'],
		['Original gift', 'https://www.etsy.com/pl/listing/950220566/black-concrete-flower-vase-original-gift'],
		['Candle holder', 'https://www.etsy.com/pl/listing/962962205/castor-0125-candle-holder-gray-concrete'],
		['Concrete candle holder', 'https://www.etsy.com/pl/listing/967896205/spica-0116-candle-holder-gray-concrete'],
		['Candle stick', 'https://www.etsy.com/pl/listing/953928582/spica-0105-candle-holder-gray-concrete'],
		['white candle holder', 'https://www.etsy.com/pl/listing/950192280/origami-0111-candleholder-white-concrete'],
		['Smartphone stand', 'https://www.etsy.com/pl/listing/1115490807/smartphone-stand-heavyloop-0502-concrete'],
		['Wall clock', 'https://www.etsy.com/pl/listing/1174940707/helios-0602-concrete-wall-clock-black'],
		['Castor candle holder', 'https://www.etsy.com/pl/listing/948990974/castor-0101-candle-holder-white-concrete'],
		['Phone stand', 'https://www.etsy.com/pl/listing/1527505248/smartphone-stand-lightwave-0511-black'],
		['Phone holder', 'https://www.etsy.com/pl/listing/1101561016/smartphone-stand-heavyloop-0502-black'],
		['Mobile phone stand', 'https://www.etsy.com/pl/listing/1115106107/smartphone-stand-heavyloop-0501-concrete'],
		['Handmade wall clock', 'https://www.etsy.com/pl/listing/1161051034/helios-0601-concrete-wall-clock-black'],
		['Candle chic holder', 'https://www.etsy.com/pl/listing/967909779/spica-0126-candle-holder-gray-concrete'],
		['Candle holder', 'https://www.etsy.com/pl/listing/948985536/castor-0127-candle-holder-light-gray'],
		['Vase for flowers', 'https://www.etsy.com/pl/listing/1165959592/stunning-vase-for-flowers-elevate-your'],
		

	])

	const year = new Date().getFullYear()

	const Linki = seoLinks.map((element, index) => (
		<p className='seolink' key={index}>
			<a href={element[1]} target='_blank' title={'Link to ' + element[0]}>
				{element[0]}
			</a>
		</p>
	))

	return (
		<div className='footerSeo'>
			<div className='links'>{Linki}</div>
			<hr className='dashed' />
			<div className='company'>
				<p>{'© MagicConcrete Design ' + year}</p>
			</div>
		</div>
	)
}

export default FooterSeo
