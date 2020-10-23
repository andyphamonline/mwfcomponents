import React from 'react'
import PropTypes from 'prop-types'

export const SequenceIndicatorButton = (props) => {
	const data = props.data

	return (
		<>
			<button
				aria-label={data.ariaLabel}
				aria-selected={props.index === 0}
				data-f-describedby={data.tooltipId}
				role="tab"></button>
			<span
				id={data.tooltipId}
				aria-hidden="true"
				className="c-tooltip"
				role="tooltip">
				{data.title}
			</span>
		</>
	)
}

SequenceIndicatorButton.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
}
