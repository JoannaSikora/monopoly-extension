import { screen } from '@testing-library/react';
import { renderWithState } from '../../utils/test-helpers';
import { RoundCounter } from './RoundCounter.component';
import userEvent from '@testing-library/user-event';

describe('RoundCounter', () => {
  test('Should render initial state', () => {
    renderWithState(<RoundCounter />);
    expect(screen.getByTestId('round-number')).toHaveTextContent('1Round');
  });

  test('Should increase round count when pressing "Next round" button', () => {
    renderWithState(<RoundCounter />);
    const nextRoundButton = screen.getByText('Next round');
    userEvent.click(nextRoundButton);

    expect(screen.getByTestId('round-number')).toHaveTextContent('2Round');
  });
});
