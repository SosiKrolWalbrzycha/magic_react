import React, { Component } from 'react'
import Header from './pages/header.jsx'
import Content1 from './pages/content1.jsx'
import Footer from './pages/footer.jsx'
import FooterSeo from './pages/footerseo.jsx'
import Navbar from './pages/navbar.jsx'
import { BrowserRouter } from 'react-router-dom'
import './App.scss'

class App extends Component {
	state = {}
	render() {
		return (
			<div>
				<BrowserRouter>

					<Navbar />
					<Header />
					<Content1 />
					<Footer />
					<FooterSeo />
				</BrowserRouter>
			</div>
		)
	}
}

export default App
