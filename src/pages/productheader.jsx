import React from 'react'
import {useLocation} from 'react-router-dom'

const ProductHeader = () => {
	const location = useLocation()
	console.log(location.pathname)
	return <h1>ProductHeader{location.pathname}</h1>
}

export default ProductHeader
