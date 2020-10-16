import React from 'react'
import PropTypes from 'prop-types'
import { Image } from '../../components/image/Image'

const getHorizontalPosition = (direction: string): string => {
	switch (direction) {
		case 'left':
			return 'f-x-left'
			break
		case 'center':
			return 'f-x-center'
			break
		case 'right':
			return 'f-x-right'
			break
		default:
			return ''
			break
	}
}

const getVerticalPosition = (direction: string): string => {
	switch (direction) {
		case 'top':
			return 'f-y-top'
			break
		case 'center':
			return 'f-y-center'
			break
		case 'bottom':
			return 'f-y-bottom'
			break
		default:
			return ''
			break
	}
}

export const HeroItem = (props) => {
	const data: object = props.data
	const horizontalPosition: string = getHorizontalPosition(
		data.horizontalPosition
	)
	const verticalPosition: string = getVerticalPosition(data.verticalPosition)

	return (
		<section
			className={`m-hero-item ${horizontalPosition} ${verticalPosition} context-${data.context} theme-${data.theme}`}
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
		</section>
	)
}

HeroItem.propTypes = {
	data: PropTypes.object,
}
