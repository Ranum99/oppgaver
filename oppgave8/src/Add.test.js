import { render, screen } from '@testing-library/react';
import { Add } from './Add';

it('should start at 0', () => {
  render(<Add />);
  const paragraph = document.querySelector('p');
  expect(paragraph).toHaveTextContent('Result is: 0');
});
