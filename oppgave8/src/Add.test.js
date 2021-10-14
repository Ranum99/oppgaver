import { fireEvent, render, screen } from '@testing-library/react';
import { Add } from './Add';

it('should start at 0', () => {
  render(<Add />);
  const paragraph = document.querySelector('p');
  expect(paragraph).toHaveTextContent('Result is: 0');
});

it('should be 5 when add is pressed', () => {
  render(<Add/>)
  
  expect(document.querySelector('p')).toHaveTextContent('Result is: 0')

  fireEvent.change(screen.getByLabelText('First number:'), {target: {value: 5}})
  fireEvent.click(screen.getByText('Add'))
  expect(document.querySelector('p')).toHaveTextContent('Result is: 5')
})