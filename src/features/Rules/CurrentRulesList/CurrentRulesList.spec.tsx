import { screen } from '@testing-library/react';
import { renderWithState } from '../../../utils/test-helpers';
import { CurrentRulesList } from './CurrentRulesList.component';

describe('CurrentRulesList', () => {
  test('Should show no rules info when no rules are passed', () => {
    renderWithState(<CurrentRulesList currentRules={[]} />);
    expect(screen.getByText(/No rules for current round./i)).toBeInTheDocument();
  });
});
