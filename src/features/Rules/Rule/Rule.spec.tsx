import { screen } from '@testing-library/react';
import { renderWithState } from '../../../utils/test-helpers';
import { Rule } from './Rule.component';
import { pluralize } from './Rule.helpers';

const mockRule = {
  id: 1,
  title: 'test title',
  description: 'test description',
  lastRound: 2
};

describe('Rule', () => {
  test('Should render rule details', () => {
    renderWithState(<Rule rule={mockRule} />);
    expect(screen.getByText(mockRule.title)).toBeInTheDocument();
    expect(screen.getByText(mockRule.description)).toBeInTheDocument();
  });

  test('Should render accurate rule validation time', () => {
    renderWithState(<Rule rule={mockRule} />);
    const ruleValidationTime = screen.getByTestId('rule-validation-time');
    expect(ruleValidationTime).toHaveTextContent('Valid for 1 more round');
  });

  test.each`
    count | noun       | result
    ${1}  | ${'round'} | ${'round'}
    ${2}  | ${'round'} | ${'rounds'}
    ${5}  | ${'round'} | ${'rounds'}
  `('Should pluralize accurately', ({ count, noun, result }) => {
    const pluralized = pluralize(count, noun);
    expect(pluralized).toEqual(result);
  });
});
