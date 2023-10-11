import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'
import OrigamiFlowerVase from '../products/origamiflowervase.jsx'
import UnicusFlowerVase from '../products/unicusflowervase.jsx'
import RegulusFlowerVase from '../products/regulusflowervase.jsx'
import TwistedSquareFlowerVase from '../products/twistedflowervase.jsx'
import MainPage from '../products/mainpage.jsx'

const Content = () => {
	return (
		<main>
			<Routes>
				<Route element={<Navigate to='/' />} path='*' />
				<Route element={<MainPage />} path='/' />
				<Route element={<OrigamiFlowerVase />} path='/concrete-flower-vase-origami' />
				<Route element={<UnicusFlowerVase />} path='/concrete-flower-vase-unicus' />
				<Route element={<RegulusFlowerVase />} path='/concrete-flower-vase-regulus' />
				<Route element={<TwistedSquareFlowerVase />} path='/concrete-flower-vase-twistedsquare' />
			</Routes>
		</main>
	)
}

export default Content
