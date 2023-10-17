import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import MainHeader from './mainheader.jsx'
import ProductHeader from './productheader.jsx'
import Content from './content.jsx'

const Header = () => {
	return (
		<header className='container'>
			<Routes>
				<Route element={<ProductHeader />} path='/concrete-flower-vase-origami' />

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

				<Route element={<MainHeader />} path='/' />
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</header>
	)
}

export default Header
