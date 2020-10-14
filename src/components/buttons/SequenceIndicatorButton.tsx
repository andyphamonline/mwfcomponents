import React from 'react'
import PropTypes from 'prop-types'

export const SequenceIndicatorButton = (props) => {
	const id: string = props.id
	const ariaLabel: string = props.ariaLabel
	const ariaSelected: boolean = props.ariaSelected
	const tooltipId: string = props.tooltipId
	const title: string = props.title

	return (
		<>
			<button
				id={id}
				aria-label={ariaLabel}
				aria-selected={ariaSelected}
				data-f-describedby={tooltipId}
				role="tab"
			></button>
			<span
				id={tooltipId}
				aria-hidden="true"
				className="c-tooltip"
				role="tooltip"
			>
				{title}
			</span>
		</>
	)
}

SequenceIndicatorButton.propTypes = {
	id: PropTypes.string,
	ariaLabel: PropTypes.string,
	ariaSelected: PropTypes.bool,
	tooltipId: PropTypes.string,
	title: PropTypes.string.isRequired,
}
