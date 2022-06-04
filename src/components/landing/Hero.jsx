import { Box, Image, Button } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box position={'relative'}>
			<Image src='/assets/sky1.png' h='90vh' />
			<Button
				size={'3xl'}
				bg='brand.accent.100'
				transition={'all 0.2s ease-in-out'}
				_hover={{ filter: 'brightness(105%)' }}
				fontWeight={'700'}
				py='0.5rem'
				px='2rem'
				fontSize={'1.8rem'}
				border={'3px ridge'}
				borderColor={'brand.accent.900'}
				mt='-2rem'>
				Get Onboard
			</Button>
			<Image
				src='/assets/island.png'
				position='absolute'
				w='15rem'
				right='5rem'
				bottom='50%'
				opacity={'0.7'}
			/>
			<Image
				src='/assets/show-ship.png'
				position='absolute'
				w='35rem'
				bottom='4rem'
				left='4rem'
			/>
			<Image
				src='/assets/cloud1.png'
				position='absolute'
				w='10rem'
				right='3rem'
				bottom='55%'
			/>
			<Image
				src='/assets/cloud2.png'
				position='absolute'
				w='10rem'
				right='13rem'
				bottom='50%'
			/>
			<Image
				src='/assets/logo-full.png'
				position='absolute'
				w='30rem'
				right='5rem'
				bottom='8rem'
			/>
		</Box>
	);
};

export default Hero;
