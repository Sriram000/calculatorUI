import { React } from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	const component = render(<App/>).getByRole('App');

	expect(component).toBeInTheDocument();
	expect(component).toHaveClass('App');
});
