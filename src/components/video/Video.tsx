import React from 'react'
import PropTypes from 'prop-types'

export const Video = (props) => {
	const data: object = props.data

	return (
		<video
			role="img"
			aria-label={data.ariaLabel}
			alt={data.alt}
			poster={data.poster}
			muted={data.muted}
			autoplay={data.autoplay}
			loop={data.loop}>
			{data.source.map((src) => (
				<source src={src.src} type={src.type} />
			))}
		</video>
	)
}

Video.propTypes = {
	data: PropTypes.object,
}
