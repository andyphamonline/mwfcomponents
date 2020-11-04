import React from 'react'
import { CTA } from './CTA'
import { shallow } from 'enzyme'

it('renders CTA with link to Google', () => {
	const link = shallow(<CTA data={{ href: 'https://google.com' }}></CTA>)
	console.log(link)
	expect(link).toMatchSnapShot
})
