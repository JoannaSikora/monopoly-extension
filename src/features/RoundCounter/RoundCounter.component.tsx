import { Button, Flex, Box } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { selectCurrentRound, nextRound } from '../../state/GamaSlice';
import { Card } from '../../ui-kit/Card';

export const RoundCounter = () => {
  const currentRound = useAppSelector(selectCurrentRound);
  const dispatch = useAppDispatch();

  return (
    <Card p={5} mb={10}>
      <Flex alignItems="end" justifyContent="end">
        <Button onClick={() => dispatch(nextRound())}>Next round</Button>
      </Flex>
      <Flex justifyContent="center" mt={-7}>
        <Box data-testid="round-number" align="center" fontWeight={500} mr={5}>
          <Box fontSize="4xl" fontWeight={700}>
            {currentRound}
          </Box>
          Round
        </Box>
      </Flex>
    </Card>
  );
};
