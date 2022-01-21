import { screen } from '@testing-library/react';
import { renderWithState } from '../../utils/test-helpers';
import { Rules } from './Rules.component';
import userEvent from '@testing-library/user-event';

describe('Rules', () => {
  test('Should add a new rule after clicking "Draw a new rule" button', () => {
    renderWithState(<Rules />);
    const drawNewRuleButton = screen.getByText('Draw a new rule');

    userEvent.click(drawNewRuleButton);

    const currentRules = screen.getAllByTestId('current-rule');

    expect(currentRules.length).toBe(1);
  });

  test('Should remove a rule if remove rule button is clicked', () => {
    renderWithState(<Rules />);
    const drawNewRuleButton = screen.getByText('Draw a new rule');

    userEvent.click(drawNewRuleButton);

    const removeRuleButton = screen.getByTestId('remove-rule-button');
    userEvent.click(removeRuleButton);
    const currentRules = screen.queryAllByTestId('current-rule');

    expect(currentRules.length).toBe(0);
  });
});
