import React from 'react'
import PropTypes from 'prop-types'

export const NextPreviousButton = (props) => {
	const data = props.data
	const chevronDirection: string =
		data.direction === 'previous' ? 'f-previous' : 'f-next'

	return (
		<button
			aria-hidden="false"
			role="presentation"
			tabIndex="0"
			className={`c-flipper ${chevronDirection}`}
			aria-label={data.ariaLabel}></button>
	)
}

NextPreviousButton.propTypes = {
	data: PropTypes.object,
}
