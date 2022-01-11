import { Button, Flex } from '@chakra-ui/react';
import { CurrentRulesList } from './CurrentRulesList.component';
import { useEffect, useState } from 'react';
import { CurrentRule, Rule } from '../../models/Rules.types';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentRound } from '../RoundCounter/RoundCounterSlice';
import { Color } from '../../models/Colors.types';
import { allRules } from './allRules';
import { colors } from './colors';
import { Card } from '../../ui-kit/Card';

export const Rules = () => {
  const [currentRules, setCurrentRules] = useState<CurrentRule[]>([]);
  const currentRound = useAppSelector(selectCurrentRound);
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
    setCurrentRules((prevState) => [...prevState, randomRule]);
  };

  useEffect(() => {
    const filteredRules = currentRules.filter((rule) => {
      return rule.lastRound !== currentRound;
    });
    setCurrentRules(filteredRules);
  }, [currentRound]);

  return (
    <Card p={5}>
      <Flex alignItems="end" justifyContent="end">
        <Button onClick={pickRandomRule}>Draw a new rule</Button>
      </Flex>
      <CurrentRulesList currentRules={currentRules} />
    </Card>
  );
};
