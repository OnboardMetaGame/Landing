import { Flex, Text, Button, Image } from '@chakra-ui/react';
import { SiTwitter, SiDiscord, SiMedium } from 'react-icons/si';
import { ExternalLink } from '../Links';

const Footer = () => {
	return (
		<Flex
			direction='column'
			w='full'
			bg='brand.dark.100'
			align='center'
			color='brand.light'
			p='2rem'>
			<Text
				textTransform='uppercase'
				fontSize={'2rem'}
				fontWeight={'700'}
				textAlign='center'>
				Join Our Community
			</Text>
			<Flex
				w='75%'
				direction={{ base: 'column', md: 'row' }}
				align={'center'}
				justify={'center'}
				my='1rem'>
				<SocialButton
					social='Discord'
					href='https://discord.gg/u3qaCmmVwf'
				/>
				<SocialButton
					social='Twitter'
					href='https://twitter.com/getonboard_gg'
				/>
				<SocialButton
					social='Medium'
					href='https://medium.com/@getonboard_gg/about'
				/>
			</Flex>
			<Image
				src='/assets/logo-full.png'
				width={{ base: '60%', md: '40%' }}
				minW='10ch'
			/>
		</Flex>
	);
};

const SocialButton = ({ social, href }) => (
	<Button
		w={{ base: '100%', md: 'auto' }}
		size={'2xl'}
		py='0.5rem'
		px='1rem'
		bg='brand.accent.100'
		color={'brand.dark.100'}
		fontWeight='700'
		mx={{ base: 0, md: '0.5rem' }}
		my={{ base: '0.25rem', md: 0 }}
		role={'group'}
		_hover={{
			filter: 'brightness(105%)',
		}}>
		<ExternalLink
			href={href}
			textDecoration='none'
			_hover={{
				textDecoration: 'none',
			}}>
			<Flex align='center'>
				{social === 'Discord' && <SiDiscord />}
				{social === 'Twitter' && <SiTwitter />}
				{social === 'Medium' && <SiMedium />}
				<Text
					as='span'
					ml='0.5rem'
					transition={'all 0.2s ease-in-out'}
					_groupHover={{ ml: '0.75rem' }}>
					{social}
				</Text>
			</Flex>
		</ExternalLink>
	</Button>
);

export default Footer;
