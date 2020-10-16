import React from 'react'
import PropTypes from 'prop-types'
import { SequenceIndicatorButton } from '../../components/buttons/SequenceIndicatorButton'
import { PlayPauseButton } from '../../components/buttons/PlayPauseButton'
import { NextPreviousButton } from '../../components/buttons/NextPreviousButton'
import { HeroItem } from '../heroItem/HeroItem'

export const Hero = (props) => {
	const data: object = props.data
	const dataGrid: string = props.isFullBleed ? '' : 'container'
	const autoPlay: string = data.autoPlay ? 'f-auto-play' : ''

	return (
		<div className="m-hero" data-grid={dataGrid}>
			<div
				className={`c-carousel f-multi-slide ${autoPlay}`}
				aria-label={data.ariaLabel}
				role="region"
				data-js-interval="6000">
				<div className="c-group">
					<div className="c-sequence-indicator" role="tablist">
						{data.sequenceIndicatorButtons.map((button, index) => (
							<SequenceIndicatorButton
								key={button.id}
								id={button.id}
								ariaLabel={button.ariaLabel}
								ariaSelected={index === 0 ? true : false}
								tooltipId={button.tooltipId}
								title={button.title}
							/>
						))}
					</div>
					<PlayPauseButton />
				</div>

				{data.nextPreviousButtons.map((button) => (
					<NextPreviousButton
						key={button.direction}
						chevronDirection={button.direction}
						ariaLabel={button.ariaLabel}
					/>
				))}

				<div itemScope="" itemType="https://schema.org/ItemList">
					<ul>
						{data.heroItems.map((heroItem, index) => (
							<li
								key={heroItem.id}
								id={heroItem.id}
								data-f-theme={heroItem.theme}
								className={index === 0 ? 'f-active' : ''}>
								<HeroItem data={heroItem} />
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

Hero.propTypes = {
	data: PropTypes.object,
}
