import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Image } from '../../components/image/Image'

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
						<p className={data.subHeading.className}>{data.subHeading.title}</p>
						<div
							className="c-price"
							itemProp="offers"
							itemScope=""
							itemType="https://schema.org/Offer">
							<meta itemProp="priceCurrency" content={data.price.currency} />
							<span>{data.price.currencySymbol}</span>
							<span itemProp="price">{data.price.price}</span>
							<link itemProp="availability" href="https://schema.org/InStock" />
						</div>
						<div>
							{data.callToActions.map((cta, index) => (
								<a
									key={index}
									href={cta.href}
									className="c-call-to-action c-glyph">
									<span>{cta.title}</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</HeroItemWrapper>
	)
}

HeroItem.propTypes = {
	data: PropTypes.object,
}
