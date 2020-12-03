import React from 'react'
import PropTypes from 'prop-types'

export const CTA = ({ data }) => {
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
	data: PropTypes.shape({
		href: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		openNewTab: PropTypes.bool,
	}),
}
