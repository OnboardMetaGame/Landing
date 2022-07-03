import { Flex, Text } from '@chakra-ui/react';

const InfoCard = ({ title, content }) => {
	return (
		<Flex
			direction={{ base: 'column', md: 'row' }}
			align='center'
			justify='center'
			w='full'
			my='0.75rem'
			bg='brand.light'
			p='1.5rem'
			borderRadius={'lg'}
			boxShadow='lg'>
			<Flex
				w={{ base: 'full', md: '30%' }}
				textAlign={{ base: 'center', md: 'right' }}
				p={'2rem'}
				align='center'
				justify='center'
				textTransform={'capitalize'}
				_after={{
					content: '""',
					display: { base: 'none', md: 'block' },
					width: '6px',
					height: '8ch',
					border: '2px solid',
					borderColor: 'brand.dark.200',
					backgroundColor: 'brand.accent.100',
					margin: 'auto',
					marginLeft: '1.5rem',
					borderRadius: '1rem',
				}}>
				<Text fontSize={'1.5rem'} fontWeight='600'>
					{title}
				</Text>
			</Flex>
			<Text
				w={{ base: 'full', md: '60%' }}
				textAlign={{ base: 'center', md: 'left' }}
				ml='0.3rem'>
				{content}
			</Text>
		</Flex>
	);
};

export default InfoCard;
