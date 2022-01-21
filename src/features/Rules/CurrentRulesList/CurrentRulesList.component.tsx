import { Flex, Wrap } from '@chakra-ui/react';
import { CurrentRule } from '../../../models/Rules.types';
import { Rule } from '../Rule/Rule.component';

interface CurrentRulesListProps {
  currentRules: CurrentRule[];
}

export const CurrentRulesList = ({ currentRules }: CurrentRulesListProps) => {
  if (!currentRules || currentRules.length === 0) {
    return (
      <Flex alignItems="center" justifyContent="center" fontWeight={500} p={7}>
        No rules for current round. Draw a new rule when you land on a free parking
      </Flex>
    );
  }

  return (
    <Wrap spacing={5} justify={['center', 'flex-start']} p={7}>
      {currentRules.map((rule) => (
        <Rule rule={rule} key={rule.id} />
      ))}
    </Wrap>
  );
};
