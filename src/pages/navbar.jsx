import React, { useState } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import '../styles/navbar.scss'
import logo from '../img/magic_concrete_art_logo.jpg'



const Navbar = props => {
	const navigate = useNavigate();

	const [menuState, setMenuState] = useState(false)

	const handleBurgerButton = () => setMenuState(!menuState)

	const backToMainPage = () => { navigate('/')

	}


	return (
		<nav className='navigation'>
			<div className='abovepart'>
				<div className='logo'>
					<img src={logo} alt='MagicConcrete Logo' onClick={backToMainPage}/>
				</div>
				<div className='icons'>
					<button className='facebook_icon icon social' onClick={() => window.open(`https://www.facebook.com/magicconcreteart`, '_blank')}>
					<i className="fa-brands fa-facebook-f"></i>
					</button>
					<button className='insta_icon icon' onClick={() => window.open(`https://www.instagram.com/magicconcretedesign`, '_blank')}>
					<i className="fa-brands fa-instagram"></i>
					</button>
					<button className='etsy_icon icon' onClick={() => window.open(`https://www.etsy.com/pl/shop/MagicConcreteDesign`, '_blank')}>
					<i className="fa-brands fa-etsy"></i>
					</button>
					<button className='email_icon icon' onClick={props.show}>
					<i className="fa-regular fa-envelope"></i>
					</button>
				</div>
				<div className='burger'>
					<button className='icon' onClick={handleBurgerButton}>{menuState ? <i className="fa-solid fa-arrow-down"></i> : <i className="fa-solid fa-bars"></i>}
					
					</button>
				</div>
			</div>
			<div className={menuState ? 'belowpart active' : 'belowpart'}>
				<div className='belowfirstpart'>
					<ul>
						<li>
							<NavLink to='/origami-concrete-flower-vase' onClick={handleBurgerButton}>
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
