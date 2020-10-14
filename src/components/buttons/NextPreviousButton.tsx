import React from 'react'
import PropTypes from 'prop-types'

export const NextPreviousButton = (props) => {
	const chevronDirection: string = props.chevronDirection
	const ariaLabel: string = props.ariaLabel

	return (
		<button
			aria-hidden="false"
			role="presentation"
			tabIndex="0"
			className={`c-flipper ${chevronDirection}`}
			aria-label={ariaLabel}
		></button>
	)
}

NextPreviousButton.propTypes = {
	class: PropTypes.string,
	ariaLabel: PropTypes.string,
}
