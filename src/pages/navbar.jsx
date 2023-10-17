import React, { useState } from 'react'
import { NavLink} from 'react-router-dom'
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
								Origami - concrete flower vase
							</NavLink>
						</li>
						<li>
							<NavLink to='/unicus-cement-flower-vase' onClick={handleBurgerButton}>
								Unicus - cement flower vase
							</NavLink>
						</li>
						<li>
							<NavLink to='/twistedsquare-cement-cigarette-ashtray' onClick={handleBurgerButton}>
								Twisted Square - cement cigarette ashtray 
							</NavLink>
						</li>
						<li>
							<NavLink to='/heavyloop-concrete-phone-holder' onClick={handleBurgerButton}>
								HeavyLoop - concrete phone holder
							</NavLink>
						</li>
						<li>
							<NavLink to='/lightwave-concrete-phone-stand' onClick={handleBurgerButton}>
								LightWave - concrete phone stand
							</NavLink>
						</li>
						<li>
							<NavLink to='/helios-concrete-wall-clock' onClick={handleBurgerButton}>
								Helios - concrete wall clock
							</NavLink>
						</li>
						<li>
							<NavLink to='/cannonball-cement-planter-pot' onClick={handleBurgerButton}>
								CannonBall L - cement planter pot
							</NavLink>
						</li>
						<li>
							<NavLink to='/castor-concrete-tealight-stand' onClick={handleBurgerButton}>
								Castor - concrete tealight stand
							</NavLink>
						</li>
					</ul>
				</div>
				<div className='belowfirstpart'>
					<ul>
						<li>
							<NavLink to='/regulus-beton-flower-vase' onClick={handleBurgerButton}>
								Regulus - beton flower vase
							</NavLink>
						</li>
						<li>
							<NavLink to='/regulus-concrete-flower-pot' onClick={handleBurgerButton}>
								Regulus - concrete flower pot
							</NavLink>
						</li>
						<li>
							<NavLink to='/twisted-sqaure-concrete-vase' onClick={handleBurgerButton}>
							Twisted Sqaure - concrete vase
							</NavLink>
						</li>
						<li>
							<NavLink to='/cannonball-xl-concrete-planter-pot' onClick={handleBurgerButton}>
								CannonBall XL - concrete planter pot
							</NavLink>
						</li>
						<li>
							<NavLink to='/spica-concrete-tealight-holder' onClick={handleBurgerButton}>
								Spica - concrete tealight holder
							</NavLink>
						</li>
						<li>
							<NavLink to='/origami-concrete-candle-holder' onClick={handleBurgerButton}>
								Origami - concrete candle holder
							</NavLink>
						</li>
						<li>
							<NavLink to='/regulus-concrete-cigarette-ashtray' onClick={handleBurgerButton}>
								Regulus - concrete cigarette ashtray
							</NavLink>
						</li>
						<li>
							<a href='https://www.etsy.com/pl/shop/MagicConcreteDesign'>
								Magic Concrete Etsy profile
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
