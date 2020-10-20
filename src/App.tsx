import React from 'react'
import './App.css'
import { Hero } from './modules/hero/Hero'
import { data } from './data/data.json'

function App() {
	return (
		<main id="mainContent">
			<Hero data={data} />
		</main>
	)
}

export default App
