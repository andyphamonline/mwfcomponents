import React from 'react'

export const PlayPauseButton = () => {
	return (
		<button
			className="c-action-toggle c-glyph glyph-play f-toggle"
			data-toggled-label="Pause"
			data-toggled-glyph="glyph-pause"
			aria-label="Play"
			aria-pressed="false"
		></button>
	)
}
