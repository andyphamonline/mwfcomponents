import React from 'react'
import './App.css'

import { Hero } from './modules/hero/hero'

function App() {
	return (
		<main id="mainContent">
			<Hero autoPlay={true} ariaLabel={'Hero aria label'} isFullBleed={false} />
		</main>
	)
}

export default App
