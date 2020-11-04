import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { render } from '@testing-library/react'

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
	const div = document.createElement('div')
	ReactDOM.render(<App />, div)
})
