import React from 'react'
import PropTypes from 'prop-types'

const getMinWidthFromViewPort = (viewPort: number): string => {
	switch (viewPort) {
		case 1:
			return '0'
			break
		case 2:
			return '540'
			break
		case 3:
			return '768'
			break
		case 4:
			return '1084'
			break
		case 5:
			return '1400'
			break
		case 6:
			return '1779'
			break
	}
}

export const Image = (props) => {
	const data: object = props.data

	return (
		<picture>
			{data.source.map((source) => (
				<source
					key={source.viewPort}
					srcSet={source.src}
					media={`(min-width: ${getMinWidthFromViewPort(source.viewPort)}px)`}
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
