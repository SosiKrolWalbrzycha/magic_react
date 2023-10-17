import React from 'react'

import { Routes, Route, Navigate, useLocation } from 'react-router-dom'


const Content = () => {


	const location = useLocation()

	return (
		<main>
	<h1>{location.pathname.slice(1)}</h1>
		</main>
	)
}

export default Content
