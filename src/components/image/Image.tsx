import React from 'react'
import PropTypes from 'prop-types'

enum ViewPort {
	'1' = '0',
	'2' = '540',
	'3' = '768',
	'4' = '1084',
	'5' = '1400',
	'6' = '1779',
}

export const Image = (props) => {
	const data: object = props.data

	return (
		<picture>
			{data.source.map((source) => (
				<source
					key={source.viewPort}
					srcSet={source.src}
					media={`(min-width: ${ViewPort[source.viewPort]}px)`}
				/>
			))}
			<img
				srcSet={data.source[0].src}
				src={data.source[0].src}
				alt={data.altText}
			/>
		</picture>
	)
}

Image.propTypes = {
	data: PropTypes.object,
}
