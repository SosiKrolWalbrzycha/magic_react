import React, { useState} from 'react'
import { useLocation} from 'react-router-dom'
import '../styles/productheader.scss'


import Content from './content.jsx'

const ProductHeader = (props) => {
	const location = useLocation()
	

	const [productState, setProductState] = useState(1)
	

	const addOne = () => {
		setProductState(productState < 8 ? productState + 1 : productState)
	}
	const subOne = () => {
		setProductState(productState > 1 ? productState - 1 : productState)
	}

	const buttonHandler = e => {
		setProductState(Number(e.target.id))
	
	}


	const name = location.pathname.slice(1)



	return (
		<div className='productcontainer'>
		
			<div className='gallery'>
				<div className='mainphoto'>
					<img
						src={`/products/${location.pathname.slice(1)}-${productState}.png`}
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
						<img id='1'
							src={`/products/${location.pathname.slice(1)}-1.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='2'
						style={{ border: productState === 2 ? '2px solid black' : 'transparent' }}>
						<img id='2'
							src={`/products/${location.pathname.slice(1)}-2.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='3'
						style={{ border: productState === 3 ? '2px solid black' : 'transparent' }}>
						<img id='3'
							src={`/products/${location.pathname.slice(1)}-3.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='4'
						style={{ border: productState === 4 ? '2px solid black' : 'transparent' }}>
						<img id='4'
							src={`/products/${location.pathname.slice(1)}-4.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
				</div>

				<div className='navphoto'>
					<button
						onClick={buttonHandler}
						id='5'
						style={{ border: productState === 5 ? '2px solid black' : 'transparent' }}>
						<img id='5'
							src={`/products/${location.pathname.slice(1)}-5.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='6'
						style={{ border: productState === 6 ? '2px solid black' : 'transparent' }}>
						<img 	id='6'
							src={`/products/${location.pathname.slice(1)}-6.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='7'
						style={{ border: productState === 7 ? '2px solid black' : 'transparent' }}>
						<img id='7'
							src={`/products/${location.pathname.slice(1)}-7.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
					<button
						onClick={buttonHandler}
						id='8'
						style={{ border: productState === 8 ? '2px solid black' : 'transparent' }}>
						<img id='8'
							src={`/products/${location.pathname.slice(1)}-8.png`}
							alt={location.pathname.slice(1).replace(/[^a-zA-Z0-9]/g, ' ')}
						/>
					</button>
				</div>
			</div>

			<Content name={name}/>
	
			
		</div>
	)

}

export default ProductHeader
