import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import '../styles/popup.scss'

const Popup = props => {
	const location = useLocation()

	const [popupState, setPopupState] = useState(1)
	const [productState, setProductState] = useState(location.pathname.slice(1))
	const [colorState, setColorState] = useState('Black color')
	const [emailState, setEmailState] = useState('')
	const [isEmailValid, setIsEmailValid] = useState(false)
	const [nameState, setNameState] = useState('')
	const [msgState, setMsgState] = useState('')

	//OBSŁUGA PRZYCISKÓW

	const adPointToState = () => {
		popupState > 2 ? setPopupState(3) : setPopupState(prevState => prevState + 1)
	}
	const subtractPointToState = () => {
		popupState > 1 ? setPopupState(prevState => prevState - 1) : setPopupState(1)
	}

	//OBSŁUGA INPUTÓW

	const handleProductSelect = e => {
		setProductState(e.target.value)
	}
	const handleColorSelect = e => {
		setColorState(e.target.value)
	}

	//OBsŁUGA POL

	const handleNameInput = e => {
		setNameState(e.target.value)
	}

	const handleMsgField = e => {
		setMsgState(e.target.value)
	}

	//WALIDAJCJA EMAIL

	const isValidEmail = email => {
		const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
		setIsEmailValid(regex.test(email))
	}

	const handleEmailChange = e => {
		isValidEmail(e.target.value)
		setEmailState(e.target.value)
	}

	return (
		<div className='popup-bg'>
			<button className='close_icon' onClick={props.hide}>
				<i className='fa-solid fa-xmark'></i>
			</button>

			<div className={popupState === 1 ? 'form active' : 'form'}>
				<h2>Select the product you want to inquire about:</h2>
				<select name='product' id='1' value={productState} onChange={handleProductSelect}>
					<option value='origami-concrete-flower-vase'>Origami - concrete flower vase</option>
					<option value='unicus-cement-flower-vase'>Unicus - cement flower vase</option>
					<option value='twistedsquare-cement-cigarette-ashtray'>Twistedsquare - cement cigarette ashtray</option>
					<option value='heavyloop-concrete-phone-holder'>HeavyLoop - concrete phone holder</option>
					<option value='lightwave-concrete-phone-stand'>Lightwave - concrete phone stand</option>
					<option value='helios-concrete-wall-clock'>Helios - concrete wall clock</option>
					<option value='cannonball-cement-planter-pot'>CannonBall - cement planter pot</option>
					<option value='castor-concrete-tealight-stand'>Castor- concrete tealight stand</option>
					<option value='regulus-beton-flower-vase'>Regulus - beton-flower-vase</option>
					<option value='regulus-concrete-flower-pot'>Regulus - concrete flower pot</option>
					<option value='twisted-sqaure-concrete-vase'>TwistedSqaure - concrete vase</option>
					<option value='cannonball-xl-concrete-planter-pot'>CannonBall XL - concrete planter pot</option>
					<option value='spica-concrete-tealight-holder'>Spica - concrete tealight holder</option>
					<option value='origami-concrete-candle-holder'>Origami - concrete candle holder</option>
					<option value='regulus-concrete-cigarette-ashtray'>Regulus - concrete cigarette ashtray</option>
				</select>
			</div>
			<div className={popupState === 2 ? 'form active' : 'form'}>
				<h2>Please select the color you like the most:</h2>
				<select name='product' id='1' value={colorState} onChange={handleColorSelect}>
					<option value='Black color'>Black color (graphite)</option>
					<option value='White color'>White color</option>
					<option value='Gray color'>Gray color</option>
					<option value='Dark gray color'>Dark gray color</option>
					<option value='Any color'>Any color</option>
				</select>
			</div>
			<div className={popupState === 3 ? 'form active' : 'form'}>
				<h2>Please provide your contact details so I can respond to your question.</h2>
				<div className='personalData'>
					<label htmlFor='name'>Enter your name:</label>
					<input type='name' id='name' name='name' value={nameState} onChange={handleNameInput} />
					<label htmlFor='email'>Enter your email here:</label>
					<input
						type='email'
						id='email'
						name='email'
						value={emailState}
						onChange={handleEmailChange}
						className={!isEmailValid && 'alert'}
					/>
					<label htmlFor='email'>Enter your message to me:</label>
					<textarea name='message' className='messageField' value={msgState} onChange={handleMsgField} />
				</div>
			</div>

			<div className='buttons'>
				<div className={popupState === 1 ? 'go_mid btn1 active' : 'go_mid btn1'}>
					<button className='go_next btn1' onClick={adPointToState}>
						{'Next step - choose a color >>'}
					</button>
				</div>

				<div className={popupState === 2 ? 'go_mid btn2 active' : 'go_mid btn2'}>
					<button className='go_next' onClick={subtractPointToState}>
						{'<< Previous step - choose a product'}
					</button>
					<button className='go_next' onClick={adPointToState}>
						{'Next step - describe the need >>'}
					</button>
				</div>

				<div className={popupState === 3 ? 'go_mid btn3 active' : 'go_mid btn3'}>
					<button className='go_next' onClick={subtractPointToState}>
						Previous step - choose a color
					</button>
					<button disabled={!isEmailValid} className='go_next' onClick={adPointToState}>
						Send an inquiry to MagicConcrete
					</button>
				</div>
			</div>

			<div className='form_navi'>
				<div className='steps'>
					<div className={popupState === 1 ? 'step step1 active' : 'step step1'}>1</div>
					<div className={popupState === 2 ? 'step step2 active' : 'step step2'}>2</div>
					<div className={popupState === 3 ? 'step step3 active' : 'step step3'}>3</div>
				</div>
				<div className='steps_line'>Steps no.</div>
			</div>
		</div>
	)
}

export default Popup
