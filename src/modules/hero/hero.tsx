import React from 'react'
import PropTypes from 'prop-types'
import { SequenceIndicatorButton } from '../../components/buttons/SequenceIndicatorButton'
import { PlayPauseButton } from '../../components/buttons/PlayPauseButton'
import { NextPreviousButton } from '../../components/buttons/NextPreviousButton'

export const Hero = (props) => {
	const autoPlay: string = props.autoPlay ? 'f-auto-play' : ''
	const ariaLabel: string = props.ariaLabel
	const dataGrid: string = props.isFullBleed ? '' : 'container'

	return (
		<div className="m-hero" data-grid={dataGrid}>
			<div
				className={`c-carousel f-multi-slide ${autoPlay}`}
				aria-label={ariaLabel}
				role="region"
				data-js-interval="6000"
			>
				<div className="c-group">
					<div className="c-sequence-indicator" role="tablist">
						<SequenceIndicatorButton
							id={'slideOneId'}
							ariaLabel={'View slide one aria label'}
							ariaSelected={false} // TO DO: - when loop thru data, render aria-selected true only for the 1st element
							tooltipId={'tooltipOneId'}
							title={'Slide One'}
						/>
						<SequenceIndicatorButton
							id={'slideTwoId'}
							ariaLabel={'View slide one aria label'}
							ariaSelected={false}
							tooltipId={'tooltipTwoIder'}
							title={'Slide Two'}
						/>
					</div>
					<PlayPauseButton />
				</div>

				<NextPreviousButton
					chevronDirection={'f-previous'}
					ariaLabel={'View previous'}
				/>
				<NextPreviousButton
					chevronDirection={'f-next'}
					ariaLabel={'View next'}
				/>

				<div itemScope="" itemType="https://schema.org/ItemList">
					<ul>
						<li id="x-align-left" data-f-theme="dark" className="f-active">
							<section
								className="m-hero-item f-x-left f-y-top context-accessory theme-dark"
								itemScope=""
								itemType="https://schema.org/Product"
								role="tabpanel"
							>
								<picture>
									<source
										srcSet="https://placehold.it/1600x600"
										media="(min-width: 1779px)"
									/>
									<source
										srcSet="https://placehold.it/1600x600"
										media="(min-width: 1400px)"
									/>
									<source
										srcSet="https://placehold.it/1259x472"
										media="(min-width: 1084px)"
									/>
									<source
										srcSet="https://placehold.it/1083x609"
										media="(min-width:768px)"
									/>
									<source
										srcSet="https://placehold.it/767x431"
										media="(min-width:540px)"
									/>
									<source
										srcSet="https://placehold.it/539x303"
										media="(min-width:0)"
									/>
									<img
										srcSet="https://placehold.it/1259x472"
										src="https://placehold.it/1259x472"
										alt="Placeholder with grey background and dimension watermark without any imagery"
									/>
								</picture>
								<div>
									<div>
										<h1 className="c-heading">x-align-left</h1>
										<p className="c-subheading">Subheading</p>
										<div
											className="c-price"
											itemProp="offers"
											itemScope=""
											itemType="https://schema.org/Offer"
										>
											<meta itemProp="priceCurrency" content="USD" />
											<span>$</span>
											<span itemProp="price">100</span>
											<link
												itemProp="availability"
												href="https://schema.org/InStock"
											/>
										</div>
										<div>
											<a href="#" className="c-call-to-action c-glyph">
												<span>Call To Action</span>
											</a>
										</div>
									</div>
								</div>
							</section>
						</li>
						<li id="x-align-center" data-f-theme="dark">
							<section
								className="m-hero-item f-x-center f-y-top context-accessory theme-dark"
								itemScope=""
								itemType="https://schema.org/Product"
								role="tabpanel"
							>
								<picture>
									<source
										srcSet="https://placehold.it/1600x600"
										media="(min-width: 1779px)"
									/>
									<source
										srcSet="https://placehold.it/1600x600"
										media="(min-width: 1400px)"
									/>
									<source
										srcSet="https://placehold.it/1259x472"
										media="(min-width: 1084px)"
									/>
									<source
										srcSet="https://placehold.it/1083x609"
										media="(min-width:768px)"
									/>
									<source
										srcSet="https://placehold.it/767x431"
										media="(min-width:540px)"
									/>
									<source
										srcSet="https://placehold.it/539x303"
										media="(min-width:0)"
									/>
									<img
										srcSet="https://placehold.it/1259x472"
										src="https://placehold.it/1259x472"
										alt="Placeholder with grey background and dimension watermark without any imagery"
									/>
								</picture>
								<div>
									<div>
										<h1 className="c-heading">x-align-center</h1>
										<p className="c-subheading">Subheading</p>
										<div
											className="c-price"
											itemProp="offers"
											itemScope=""
											itemType="https://schema.org/Offer"
										>
											<meta itemProp="priceCurrency" content="USD" />
											<span>$</span>
											<span itemProp="price">100</span>
											<link
												itemProp="availability"
												href="https://schema.org/InStock"
											/>
										</div>
										<div>
											<a href="#" className="c-call-to-action c-glyph">
												<span>Call To Action</span>
											</a>
										</div>
									</div>
								</div>
							</section>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

Hero.propTypes = {
	autoPlay: PropTypes.bool,
	ariaLabel: PropTypes.string,
	isFullBleed: PropTypes.bool,
}
