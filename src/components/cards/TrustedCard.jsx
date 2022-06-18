import { Flex, Image } from '@chakra-ui/react';

const TrustedCard = ({ org, logo }) => {
	return (
		<Flex
			align={'center'}
			justify='center'
			h='12ch'
			borderRadius='lg'
			p={'1rem'}>
			<Image
				src={logo}
				h='full'
				alt={org}
				borderRadius='lg'
				boxShadow={'lg'}
			/>
		</Flex>
	);
};

export default TrustedCard;
