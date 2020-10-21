import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from '../../components/image/Image'
import { Price } from '../../components/price/Price'
import { CTA } from '../../components/cta/CTA'

// custom CSS if needed
const HeroItemWrapper = styled.div``

export const HeroItem = (props) => {
	const data: object = props.data
	const horizontalPosition: string = data.horizontalPosition
		? `f-x-${data.horizontalPosition}`
		: ''
	const verticalPosition: string = data.verticalPosition
		? `f-y-${data.verticalPosition}`
		: ''
	const mask: string = data.mask ? `f-mask-${data.mask}` : ''
	const context: string = data.context ? `context-${data.context}` : ''
	const theme: string = data.theme ? `theme-${data.theme}` : ''

	const renderSubHeading = () => {
		if (data.subHeading?.title)
			return (
				<p className={data.subHeading.className}>{data.subHeading.title}</p>
			)
	}

	const renderPrice = () => {
		if (data.price?.price) return <Price data={data.price}></Price>
	}

	const renderCTA = () => {
		if (data.callToActions?.length) {
			const multipleCTAClass: string =
				data.callToActions.length > 1 ? 'c-group' : ''

			return (
				<div class={multipleCTAClass}>
					{data.callToActions.map((cta, index) => (
						<CTA key={index} data={cta}></CTA>
					))}
				</div>
			)
		}
	}

	return (
		<HeroItemWrapper>
			<div
				className={`m-hero-item ${horizontalPosition} ${verticalPosition} ${mask} ${context} ${theme}`}
				itemScope=""
				itemType="https://schema.org/Product"
				role="tabpanel">
				<Image data={data.image} />
				<div>
					<div>
						<h1 className={data.heading.className}>{data.heading.title}</h1>
						{renderSubHeading()}
						{renderPrice()}
						{renderCTA()}
					</div>
				</div>
			</div>
		</HeroItemWrapper>
	)
}

HeroItem.propTypes = {
	data: PropTypes.object,
}
