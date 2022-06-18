import { Flex } from '@chakra-ui/react';

const SectionContainer = ({ ref, children }) => (
	<Flex
		direction={'column'}
		w='80%'
		minH={{ base: '80vh', md: '100vh' }}
		mx='auto'
		my={{ base: '1rem', md: '2rem' }}
		justify={'center'}
		align='center'
		ref={ref}>
		{children}
	</Flex>
);

export default SectionContainer;
