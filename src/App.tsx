import React from 'react'
import './App.css'
import IMAGES from './configs/images'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={IMAGES.LOGO} className='App-logo' alt='logo' />
				<a className='App-link' href='https://koykoy200078.github.io/' target='_blank' rel='noopener noreferrer'>
					Visit My Portfolio
				</a>
			</header>
		</div>
	)
}

export default App
