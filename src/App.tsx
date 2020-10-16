import React from 'react'
import './App.css'
import { Hero } from './modules/hero/Hero'

const heroData = {
	data: {
		autoPlay: true,
		ariaLabel: 'Hero aria label',
		isFullBleed: false,
		sequenceIndicatorButtons: [
			{
				id: 'slideOneId',
				ariaLabel: 'View slide One aria label',
				tooltipId: 'tooltipOneId',
				title: 'Slide One',
			},
			{
				id: 'slideTwoId',
				ariaLabel: 'View slide Two aria label',
				tooltipId: 'tooltipTwoId',
				title: 'Slide Two',
			},
		],
		nextPreviousButtons: [
			{
				direction: 'previous',
				ariaLabel: 'View previous',
			},
			{
				direction: 'next',
				ariaLabel: 'View next',
			},
		],
		heroItems: [
			{
				id: 'heroItemOne',
				theme: 'dark',
				horizontalPosition: 'left', // 'center' | 'right'
				verticalPosition: 'top', // 'center' | 'bottom'
				context: 'accessory',
				image: {
					altText: 'Hero Item image One alt text',
					source: [
						{
							src: 'https://placehold.it/1600x600',
							viewPort: 6,
						},
						{
							src: 'https://placehold.it/1600x600',
							viewPort: 5,
						},
						{
							src: 'https://placehold.it/1259x472',
							viewPort: 4,
						},
						{
							src: 'https://placehold.it/1083x609',
							viewPort: 3,
						},
						{
							src: 'https://placehold.it/767x431',
							viewPort: 2,
						},
						{
							src: 'https://placehold.it/539x303',
							viewPort: 1,
						},
					],
				},
				heading: {
					className: 'c-heading',
					title: 'Hero Item One',
				},
				subHeading: {
					className: 'c-subheading',
					title: 'Subheading',
				},
				price: {
					currency: 'USD',
					currencySymbol: '$',
					price: 100,
				},
				callToActions: [
					{
						href: '#',
						title: 'CALL TO ACTION',
					},
				],
			},

			{
				id: 'heroItemTwo',
				theme: 'dark',
				horizontalPosition: 'center',
				verticalPosition: 'center',
				context: 'accessory',
				image: {
					altText: 'Hero Item image Two alt text',
					source: [
						{
							src: 'https://placehold.it/1600x600',
							viewPort: 6,
						},
						{
							src: 'https://placehold.it/1600x600',
							viewPort: 5,
						},
						{
							src: 'https://placehold.it/1259x472',
							viewPort: 4,
						},
						{
							src: 'https://placehold.it/1083x609',
							viewPort: 3,
						},
						{
							src: 'https://placehold.it/767x431',
							viewPort: 2,
						},
						{
							src: 'https://placehold.it/539x303',
							viewPort: 1,
						},
					],
				},
				heading: {
					className: 'c-heading',
					title: 'Hero Item Two',
				},
				subHeading: {
					className: 'c-subheading',
					title: 'Subheading',
				},
				price: {
					currency: 'USD',
					currencySymbol: '$',
					price: 200,
				},
				callToActions: [
					{
						href: '#',
						title: 'CALL TO ACTION',
					},
				],
			},
		],
	},
}

function App() {
	return (
		<main id="mainContent">
			<Hero data={heroData.data} />
		</main>
	)
}

export default App
