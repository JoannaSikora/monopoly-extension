import { Flex, Text, CloseButton, WrapItem } from '@chakra-ui/react';
import { CurrentRule } from '../../../models/Rules.types';
import { pluralize } from './Rule.helpers';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import { ruleRemoved, selectCurrentRound } from '../../../state/GamaSlice';

interface RuleProps {
  rule: CurrentRule;
}

export const Rule = ({ rule }: RuleProps) => {
  const currentRound = useAppSelector(selectCurrentRound);
  const dispatch = useAppDispatch();

  const ruleDurationLeft = (lastRound: number) => {
    return lastRound - currentRound;
  };

  return (
    <WrapItem data-testid="current-rule">
      <Flex
        flexDir="column"
        justifyContent="space-between"
        p={5}
        h={72}
        w={48}
        position="relative"
        boxShadow="2xl"
        rounded="lg"
        borderTopWidth={40}
        borderTopColor={rule.color}>
        <CloseButton
          data-testid="remove-rule-button"
          position="absolute"
          bg="white"
          rounded="lg"
          boxShadow="lg"
          top={-9}
          right={1}
          onClick={() => dispatch(ruleRemoved(rule.id))}
        />
        <Text align="center" fontWeight={700}>
          {rule.title}
        </Text>
        <Text align="center" fontSize="xs">
          {rule.description}
        </Text>
        <Text data-testid="rule-validation-time" fontSize="sm" color={rule.color}>
          Valid for <strong>{ruleDurationLeft(rule.lastRound)}</strong> more{' '}
          {pluralize(ruleDurationLeft(rule.lastRound), 'round')}
        </Text>
      </Flex>
    </WrapItem>
  );
};
