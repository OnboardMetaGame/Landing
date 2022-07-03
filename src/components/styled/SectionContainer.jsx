import { Flex } from '@chakra-ui/react';

const SectionContainer = ({ children }) => (
	<Flex
		direction={'column'}
		w={{ base: '85%', md: '75%' }}
		minH={{ base: '80vh', md: '100vh' }}
		mx='auto'
		my={{ base: '1rem', md: '2rem' }}
		justify={'center'}
		align='center'>
		{children}
	</Flex>
);

export default SectionContainer;
