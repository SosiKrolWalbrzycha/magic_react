import React from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { createContext } from 'react'
import MainHeader from './mainheader.jsx'
import ProductHeader from './productheader.jsx'

export const NavigationContext = createContext()




const Header = props => {
	const navigate = useNavigate()



	return (
		<header className='container'>
			
				<Routes>
					<Route element={<MainHeader />} path='/' />
					<Route element={<Navigate to='/' />} path='*' />
					<Route element={<ProductHeader />} path='/origami-concrete-flower-vase' />
					<Route element={<ProductHeader />} path='/unicus-cement-flower-vase' />
					<Route element={<ProductHeader />} path='/twistedsquare-cement-cigarette-ashtray' />
					<Route element={<ProductHeader />} path='/heavyloop-concrete-phone-holder' />
					<Route element={<ProductHeader />} path='/lightwave-concrete-phone-stand' />
					<Route element={<ProductHeader />} path='/helios-concrete-wall-clock' />
					<Route element={<ProductHeader />} path='/cannonball-cement-planter-pot' />
					<Route element={<ProductHeader />} path='/castor-concrete-tealight-stand' />
					<Route element={<ProductHeader />} path='/regulus-beton-flower-vase' />
					<Route element={<ProductHeader />} path='/regulus-concrete-flower-pot' />
					<Route element={<ProductHeader />} path='/twisted-sqaure-concrete-vase' />
					<Route element={<ProductHeader />} path='/cannonball-xl-concrete-planter-pot' />
					<Route element={<ProductHeader />} path='/spica-concrete-tealight-holder' />
					<Route element={<ProductHeader />} path='/origami-concrete-candle-holder' />
					<Route element={<ProductHeader />} path='/regulus-concrete-cigarette-ashtray' />
				</Routes>
			
		</header>
	)
}

export default Header

