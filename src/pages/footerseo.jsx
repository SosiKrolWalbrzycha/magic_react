import { useState } from 'react'
import '../styles/footerseo.scss'

const FooterSeo = () => {
	const [seoLinks, setSeoLinks] = useState([
		['Artistic concrete products', 'https://www.etsy.com/pl/shop/MagicConcreteDesign'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
		['Gray Concrete Pot', 'https://www.etsy.com/pl/listing/1385082023/gray-concrete-pot-0221-stylish-brutalist'],
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
