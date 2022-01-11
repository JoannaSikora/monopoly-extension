import { Box, Text, Flex, Image } from '@chakra-ui/react';
import { Rules } from './features/Rules/Rules.component';
import { RoundCounter } from './features/RoundCounter/RoundCounter.component';
import MonopolyLogo from './assets/monopoly-logo.png';

const App = () => {
  return (
    <Flex minH="100vh" justifyContent="center" pb={10} pt={10}>
      <Box w="full" maxW="1000px">
        <Box align="center" mb={10}>
          <Image src={MonopolyLogo} alt="Monopoly Logo" w={300} />
          <Text fontSize="2xl" ml={2}>
            <strong>Extension</strong>
          </Text>
        </Box>

        <Box p={5}>
          <RoundCounter />
          <Rules />
        </Box>
      </Box>
    </Flex>
  );
};

export default App;
