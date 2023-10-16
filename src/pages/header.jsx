import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import OrigamiFlowerVase from '../products/origamiflowervase.jsx'
import UnicusFlowerVase from '../products/unicusflowervase.jsx'
import RegulusFlowerVase from '../products/regulusflowervase.jsx'
import TwistedSquareFlowerVase from '../products/twistedflowervase.jsx'
import MainPage from '../products/mainpage.jsx'
import MainHeader from './mainheader.jsx'
import ProductHeader from './productheader.jsx'

const Header = () => {
	return (
		<header className='container'>
			<Routes>
				<Route element={<Navigate to='/' />} path='*' />
				<Route element={<MainHeader />} path='/' />
				<Route element={<ProductHeader />} path='/concrete-flower-vase-origami' />
				<Route element={<ProductHeader />} path='/concrete-flower-vase-unicus' />
				<Route element={<ProductHeader />} path='/concrete-flower-vase-regulus' />
				<Route element={<ProductHeader />} path='/concrete-flower-vase-twistedsquare' />
			</Routes>
		</header>
	)
}

export default Header
