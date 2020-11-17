import React from 'react'
import { CTA } from './CTA'
import { shallow } from 'enzyme'

describe('CTA testings', () => {
	let wrapper
	beforeEach(() => {
		wrapper = shallow(
			<CTA
				data={{
					href: 'https://google.com',
					title: 'Google',
					openNewTab: true,
				}}></CTA>
		)
	})

	it('renders CTA title', () => {
		expect(wrapper.find('span').text()).toEqual('Google')
	})

	it('renders CTA href, target', () => {
		expect(wrapper.prop('href')).toEqual('https://google.com')
		expect
	})

	it('renders CTA with target blank', () => {
		expect(wrapper.prop('target')).toEqual('_blank')
	})

	// TO DO:
	// remove beforeEach, create wrapper separately in each test
	// need to test openNewTab = true / false or not pass in openNewTab
})
