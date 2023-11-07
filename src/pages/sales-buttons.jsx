import React, { useContext } from 'react'
import { PopupContext } from '../App.js'
import '../styles/sales-buttons.scss'

const SalesButons = props => {
	const { visibilityState, setVisibilityState } = useContext(PopupContext);

	const aim = props.name.split(' ')[0]

	return (
		<div className='SalesButtons'>
  
			<button className='ask' onClick={() => setVisibilityState(true)} >
				Ask for product
			</button>

			<button
				className='buy'
				onClick={() => window.open(`https://www.etsy.com/pl/shop/MagicConcreteDesign?search_query=${aim}`, '_blank')}>
				Buy on Etsy
			</button>
		</div>
	)
}

export default SalesButons
