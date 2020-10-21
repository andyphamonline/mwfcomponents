import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PriceWrapper = styled.div``

export const Price = (props) => {
	const data = props.data

	return (
		<PriceWrapper>
			<div
				className="c-price"
				itemProp="offers"
				itemScope=""
				itemType="https://schema.org/Offer">
				<meta itemProp="priceCurrency" content={data.currency} />
				<span>{data.currencySymbol}</span>
				<span itemProp="price">{data.price}</span>
				<link itemProp="availability" href="https://schema.org/InStock" />
			</div>
		</PriceWrapper>
	)
}

Price.propTypes = {
	data: PropTypes.object,
}
