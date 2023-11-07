import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from './pages/header.jsx'
import Content1 from './pages/content1.jsx'
import Footer from './pages/footer.jsx'
import FooterSeo from './pages/footerseo.jsx'
import Navbar from './pages/navbar.jsx'
import Popup from './pages/popup.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'

export const PopupContext = React.createContext()

const App = () => {
	const [visibilityState, setVisibilityState] = useState(false)

	const hidePopup = () => {
		setVisibilityState(false)
	}



	return (
		<div>
			<PopupContext.Provider value={{visibilityState, setVisibilityState}}>
				<BrowserRouter>
					{visibilityState && <Popup hide={hidePopup} />}
					<Navbar />
					<Header />
					<Content1 />
					<Footer />
					<FooterSeo />
					<ScrollToTop />
				</BrowserRouter>
			</PopupContext.Provider>
		</div>
	)
}

const ScrollToTop = () => {
	const { pathname } = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return null
}

export default App
