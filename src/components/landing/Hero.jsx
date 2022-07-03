import { Image, Button, Flex } from '@chakra-ui/react';
import { ExternalLink } from '../Links';

const Hero = ({ mainRef }) => {
	return (
		<>
			<Flex
				id='hero'
				ref={mainRef}
				direction={'column'}
				bgImage={"url('/assets/landing-bg.png')"}
				bgRepeat='no-repeat'
				bgSize={'cover'}
				bgPosition={'center'}
				h={{ base: '53vh', md: '70vh' }}
				justify={'end'}
				align='center'>
				<ExternalLink
					href='https://app.getonboard.gg'
					_hover={{ textDecoration: 'none' }}>
					<Button
						bg='brand.accent.100'
						transition={'all 0.2s ease-in-out'}
						_hover={{ filter: 'brightness(105%)' }}
						fontWeight={'600'}
						fontSize={'1.2rem'}
						px='1rem'
						py='0.5rem'
						border={'2px ridge'}
						borderColor={'brand.accent.900'}
						mb='-1.5rem'>
						Get Onboard
					</Button>
				</ExternalLink>
			</Flex>
			<Flex
				w={{ base: '80%', md: '60%', lg: '75%' }}
				m='auto'
				mt={{ base: '8rem', md: '2rem' }}
				maxW='50ch'
				justify='center'
				// bg='blackAlpha.800'
				// borderRadius={'xl'}
				// boxShadow={'lg'}>
			>
				<Image src='/assets/logo-full.png' w='full' />
			</Flex>
		</>
	);
};

export default Hero;
