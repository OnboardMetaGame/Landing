import { Flex } from '@chakra-ui/react';

const SectionContainer = ({ children }) => (
	<Flex
		direction={'column'}
		w='80%'
		minH='100vh'
		mx='auto'
		my='5rem'
		justify={'center'}
		align='center'>
		{children}
	</Flex>
);

export default SectionContainer;
