import { Box, Flex, Heading, Button } from '@chakra-ui/react';
import bgImage from '../assets/imagen-ciclista.jpg';

const Header = () => {
  return (
    <header>
      <Box
        py={70}
        px={190}
        color="white"
        textAlign="center"
        position="relative"
        maxW="900px"
        mx="auto"
      >
        <Box
          bgImage={`url(${bgImage})`}
          bgPosition="center"
          bgSize="cover"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.5}
          zIndex={-1}
        />
        <Flex direction="column" alignItems="center">
          <Heading as="h1" size="4xl" mb={100}>
            DOMINA EL TERRENO
          </Heading>
          <Flex>
            <Button
              size="lg"
              variant="outline"
              colorScheme="white"
              borderColor="white"
              color="white"
              mr={4}
            >
              VER DETALLES
            </Button>
            <Button 
            size="lg"
            variant="outline"
            colorScheme="white"
            borderColor="white"
            color="white"
            mr={0}
            >
              VER VIDEO
            </Button>
          </Flex>
        </Flex>
      </Box>
    </header>
  );
};

export default Header;
