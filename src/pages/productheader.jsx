import React, { useState, useEffect } from 'react'
import { useLocation, Routes, Route, Navigate } from 'react-router-dom'
import '../styles/productheader.scss'
import OrigamiFlowerVase from './origami-flower-vase.jsx'
import TwistedSquareFlowerVase from './twistedsquare-vase.jsx'

const ProductHeader = () => {
	const location = useLocation()
	const adress = location.pathname.slice(1)

	const [productState, setProductState] = useState(1)
	const [buttonActive, setButtonActive] = useState(1)

	const addOne = () => {
		setProductState(productState < 8 ? productState + 1 : productState)
	}
	const subOne = () => {
		setProductState(productState > 1 ? productState - 1 : productState)
	}

	const buttonHandler = e => {
		setProductState(Number(e.target.id))
	}


	return (
		<div className='productcontainer'>
			<div className='gallery'>
				<div className='mainphoto'>
					<img
						src={`/products/${location.pathname.slice(1)}-${productState}.jpg`}
						alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
					/>
					<button className='galleryControl subOne' onClick={subOne}>
						<img src='/products/arrow-left-circle-concrete.svg' alt='' />
					</button>
					<button className='galleryControl addOne' onClick={addOne}>
						<img src='/products/arrow-right-circle-concrete.svg' alt='' />
					</button>
				</div>
				<div className='navphoto'>
					<button
						onClick={buttonHandler}
						id='1'
						style={{ border: productState === 1 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-1.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='2'
						style={{ border: productState === 2 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-2.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='3'
						style={{ border: productState === 3 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-3.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='4'
						style={{ border: productState === 4 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-4.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
				</div>

				<div className='navphoto'>
					<button
						onClick={buttonHandler}
						id='5'
						style={{ border: productState === 5 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-5.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='6'
						style={{ border: productState === 6 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-6.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='7'
						style={{ border: productState === 7 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-7.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='8'
						style={{ border: productState === 8 ? '2px solid black' : 'transparent' }}>
						<img
							src={`/products/${location.pathname.slice(1)}-8.jpg`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
				</div>
			</div>

			<div className='description'>

{location.pathname.slice(1)==='concrete-flower-vase-origami' ? <OrigamiFlowerVase /> : null}
{location.pathname.slice(1)==='concrete-flower-vase-twistedsquare' ? <TwistedSquareFlowerVase /> : null}
			
				
			</div>
		</div>
	)
}

export default ProductHeader
