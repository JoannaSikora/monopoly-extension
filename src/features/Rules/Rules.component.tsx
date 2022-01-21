import { Button, Flex } from '@chakra-ui/react';
import { CurrentRulesList } from './CurrentRulesList/CurrentRulesList.component';
import { CurrentRule, Rule } from '../../models/Rules.types';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectCurrentRound, newRuleAdded, selectCurrentRules } from '../../state/GamaSlice';
import { Color } from '../../models/Colors.types';
import { allRules } from './allRules';
import { colors } from './colors';
import { Card } from '../../ui-kit/Card';

export const Rules = () => {
  const currentRound = useAppSelector(selectCurrentRound);
  const currentRules = useAppSelector(selectCurrentRules);
  const dispatch = useAppDispatch();
  const pickRandomColor = () => colors[Math.floor(Math.random() * colors.length)];
  const generateRuleNameWithColor = (name: string, color: string) => {
    return name.replace('{COLOR}', color);
  };
  const pickRandomRule = () => {
    const pickedRule: Rule = allRules[Math.floor(Math.random() * allRules.length)];
    const pickedColor: Color = pickRandomColor();

    const randomRule: CurrentRule = {
      id: Math.random(),
      title: pickedRule.hasColor
        ? generateRuleNameWithColor(pickedRule.title, pickedColor.name)
        : pickedRule.title,
      description: pickedRule.description,
      lastRound: currentRound + pickedRule.duration,
      color: pickedRule.hasColor ? pickedColor.color : undefined
    };
    dispatch(newRuleAdded(randomRule));
  };

  return (
    <Card p={5}>
      <Flex alignItems="end" justifyContent="end">
        <Button onClick={pickRandomRule}>Draw a new rule</Button>
      </Flex>
      <CurrentRulesList currentRules={currentRules} />
    </Card>
  );
};
