import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { SequenceIndicatorButton } from '../../components/buttons/SequenceIndicatorButton'
import { PlayPauseButton } from '../../components/buttons/PlayPauseButton'
import { NextPreviousButton } from '../../components/buttons/NextPreviousButton'
import { HeroItem } from '../heroItem/HeroItem'

// custom CSS if needed
const HeroWrapper = styled.div``

export const Hero = (props) => {
	const data: object = props.data
	const dataGrid: string = props.isFullBleed ? '' : 'container'
	const autoPlay: string = data.autoPlay ? 'f-auto-play' : ''
	const theme: string = data.theme ? `theme-${data.theme}` : ''

	return (
		<HeroWrapper>
			<div className="m-hero" data-grid={dataGrid}>
				<div
					className={`c-carousel f-multi-slide ${autoPlay} ${theme}`}
					aria-label={data.ariaLabel}
					role="region"
					data-js-interval="6000">
					<div className="c-group">
						<div className="c-sequence-indicator" role="tablist">
							{data.sequenceIndicatorButtons.map((button, index) => (
								<SequenceIndicatorButton
									data={button}
									index={index}
									key={index}
								/>
							))}
						</div>
						<PlayPauseButton ariaLabel={data.playPauseButton.ariaLabel} />
					</div>

					{data.nextPreviousButtons.map((button, index) => (
						<NextPreviousButton data={button} key={button.index} />
					))}

					<div itemScope="" itemType="https://schema.org/ItemList">
						<ul>
							{data.heroItems.map((heroItem, index) => (
								<li
									key={heroItem.index}
									data-f-theme={heroItem.theme}
									className={index === 0 ? 'f-active' : ''}>
									<HeroItem data={heroItem} />
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</HeroWrapper>
	)
}

Hero.propTypes = {
	data: PropTypes.object,
}
