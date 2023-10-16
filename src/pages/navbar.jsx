import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../styles/navbar.scss'
import logo from '../img/magic_concrete_art_logo.jpg'


const Navbar = () => {
	const [menuState, setMenuState] = useState(false)

	const handleBurgerButton = () => setMenuState(!menuState)

	return (
		<nav className='navigation'>
			<div className='abovepart'>
				<div className='logo'>
					<img src={logo} alt='B' />
				</div>
				<div className='icons'>
					<button className='facebook_icon icon social'>
					<i class="fa-brands fa-facebook-f"></i>
					</button>
					<button className='insta_icon icon'>
					<i class="fa-brands fa-instagram"></i>
					</button>
					<button className='etsy_icon icon'>
					<i class="fa-brands fa-etsy"></i>
					</button>
				</div>
				<div className='burger'>
					<button className='icon' onClick={handleBurgerButton}>{menuState ? <i class="fa-solid fa-arrow-down"></i> : <i class="fa-solid fa-bars"></i>}
					
					</button>
				</div>
			</div>
			<div className={menuState ? 'belowpart active' : 'belowpart'}>
				<div className='belowfirstpart'>
					<ul>
						<li>
							<NavLink to='/concrete-flower-vase-origami' onClick={handleBurgerButton}>
								Origami flower vase
							</NavLink>
						</li>
						<li>
							<NavLink to='/concrete-flower-vase-unicus' onClick={handleBurgerButton}>
								Unicus flower vase
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='belowfirstpart'>
					<ul>
						<li>
							<NavLink to='/concrete-flower-vase-regulus' onClick={handleBurgerButton}>
								Regulus flower vase
							</NavLink>
						</li>
						<li>
							<NavLink to='/concrete-flower-vase-twistedsquare' onClick={handleBurgerButton}>
								Twisted Sqaure flower vase
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
