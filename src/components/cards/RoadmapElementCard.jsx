import { Flex, Text } from '@chakra-ui/react';
import {
	FaRocket,
	FaPlaneDeparture as Ready,
	FaCheckSquare as Check,
} from 'react-icons/fa';

const RoadmapElementCard = ({ status, content }) => {
	return (
		<Flex
			my='0.5rem'
			w='full'
			align='center'
			justify={'center'}
			bg={'brand.light'}
			borderRadius='lg'
			boxShadow={status === 'ip' ? 'xl' : 'md'}
			py='0.75rem'
			px='1.5rem'>
			{status === 'ip' && <FaRocket size={'1.5rem'} color={'#47c710'} />}
			{status === 'todo' && <Ready size={'1.5rem'} color={'#a9a9a9'} />}
			{status === 'done' && <Check size={'1.5rem'} color={'#000'} />}
			<Text
				ml='1rem'
				w='90%'
				fontWeight={status === 'ip' ? '700' : '400'}
				color={status === 'todo' ? 'blackAlpha.600' : 'brand.dark.100'}
				textDecoration={status === 'done' ? 'line-through' : 'none'}>
				{content}
			</Text>
		</Flex>
	);
};

export default RoadmapElementCard;
