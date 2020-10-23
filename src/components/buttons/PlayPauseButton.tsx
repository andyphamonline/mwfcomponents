import React from 'react'
import PropTypes from 'prop-types'

export const PlayPauseButton = (props) => {
	return (
		<button
			className="c-action-toggle c-glyph glyph-play f-toggle"
			data-toggled-label="Pause"
			data-toggled-glyph="glyph-pause"
			aria-label={props.ariaLabel}
			aria-pressed="false"></button>
	)
}

PlayPauseButton.propTypes = {
	ariaLabel: PropTypes.string,
}
