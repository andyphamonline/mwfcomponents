import React from 'react'
import PropTypes from 'prop-types'

export const CTA = (props) => {
	const data = props.data
	const glyphName = data.glyphName ? `glyph-${data.glyphName}` : ''

	return (
		<a href={data.href} className={`c-call-to-action c-glyph ${glyphName}`}>
			<span>{data.title}</span>
		</a>
	)
}

CTA.propTypes = {
	data: PropTypes.object,
}
