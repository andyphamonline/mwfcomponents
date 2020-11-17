import React from 'react'
import PropTypes from 'prop-types'

export const CTA = (props) => {
	const data = props.data
	const glyphName = data.glyphName ? `glyph-${data.glyphName}` : ''
	const openNewTab = data.openNewTab ? '_blank' : ''

	return (
		<a
			href={data.href}
			className={`c-call-to-action c-glyph ${glyphName}`}
			target={openNewTab}>
			<span>{data.title}</span>
		</a>
	)
}

CTA.propTypes = {
	data: PropTypes.object,
}

// CTA.propTypes: {
// 	data: React.PropTypes.shape({
// 		id: React.PropTypes.number.isRequired,
// 		title: React.PropTypes.string,
// 	})
// }
