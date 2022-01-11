import { Flex, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { CurrentRule } from '../../models/Rules.types';
import { pluralize } from './CurrentRulesList.helpers';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentRound } from '../RoundCounter/RoundCounterSlice';

interface CurrentRulesListProps {
  currentRules: CurrentRule[];
}

export const CurrentRulesList = ({ currentRules }: CurrentRulesListProps) => {
  const currentRound = useAppSelector(selectCurrentRound);

  if (!currentRules || currentRules.length === 0) {
    return (
      <Flex alignItems="center" justifyContent="center" fontWeight={500} p={7}>
        No rules for current round. Draw a new rule when you land on a free parking
      </Flex>
    );
  }

  const ruleDurationLeft = (lastRound: number) => {
    return lastRound - currentRound;
  };

  return (
    <Wrap spacing={5} justify={['center', 'flex-start']} p={7}>
      {currentRules.map((rule) => (
        <WrapItem key={rule.id}>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            p={5}
            h={72}
            w={48}
            boxShadow="2xl"
            rounded="lg"
            borderTopWidth={40}
            borderTopColor={rule.color}>
            <Text align="center" fontWeight={700}>
              {rule.title}
            </Text>
            <Text align="center" fontSize="xs">
              {rule.description}
            </Text>
            <Text fontSize="sm" color={rule.color}>
              Valid for <strong>{ruleDurationLeft(rule.lastRound)}</strong> more{' '}
              {pluralize(ruleDurationLeft(rule.lastRound), 'round')}
            </Text>
          </Flex>
        </WrapItem>
      ))}
    </Wrap>
  );
};
