import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchComponent';

test('controlled component', () => {
    const placeholderText = 'Search here...';
    render(<SearchBox placeholder={placeholderText} />);

    const inputField = screen.getByRole('textbox');

    userEvent.type(inputField, 'Search new value');

    expect(inputField).toHaveValue('Search new value');
    expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
});
