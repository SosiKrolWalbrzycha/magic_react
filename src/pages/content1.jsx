import React from 'react'
import MainContent from './mainContent.jsx'
import ProductContent from './productContent.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'

const Content1 = () => {
    return ( 
        <header className='container'>
			<Routes>
				<Route element={<ProductContent />} path='/concrete-flower-vase-origami' />
                <Route element={<ProductContent />} path='/unicus-cement-flower-vase' />

				<Route element={<ProductContent />} path='/twistedsquare-cement-cigarette-ashtray' />
				<Route element={<ProductContent />} path='/heavyloop-concrete-phone-holder' />
				<Route element={<ProductContent />} path='/lightwave-concrete-phone-stand' />
				<Route element={<ProductContent />} path='/helios-concrete-wall-clock' />
				<Route element={<ProductContent />} path='/cannonball-cement-planter-pot' />
				<Route element={<ProductContent />} path='/castor-concrete-tealight-stand' />
				<Route element={<ProductContent />} path='/regulus-beton-flower-vase' />
				<Route element={<ProductContent />} path='/regulus-concrete-flower-pot' />
				<Route element={<ProductContent />} path='/twisted-sqaure-concrete-vase' />
				<Route element={<ProductContent />} path='/cannonball-xl-concrete-planter-pot' />
				<Route element={<ProductContent />} path='/spica-concrete-tealight-holder' />
				<Route element={<ProductContent />} path='/origami-concrete-candle-holder' />
				<Route element={<ProductContent />} path='/regulus-concrete-cigarette-ashtray' />
				<Route element={<MainContent />} path='/' />
				<Route element={<Navigate to='/' />} path='*' />
			</Routes>
		</header>
     );
}
 
export default Content1;