import { Flex, Text, HStack, Button, Image } from '@chakra-ui/react';
import { SiTwitter, SiDiscord } from 'react-icons/si';
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
				fontWeight={'700'}>
				Join Our Community
			</Text>
			<HStack my='1rem'>
				<SocialButton
					social='Discord'
					href='https://discord.gg/QbXnYGMG'
				/>
				<SocialButton
					social='Twitter'
					href='https://twitter.com/getonboard_gg'
				/>
			</HStack>
			<Image src='/assets/logo-full.png' width='40%' minW='10ch' />
		</Flex>
	);
};

const SocialButton = ({ social, href }) => (
	<Button
		size={'2xl'}
		py='0.5rem'
		px='1rem'
		bg='brand.accent.100'
		color={'brand.dark.100'}
		fontWeight='700'
		mx='0.5rem'
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
				{social === 'Discord' ? <SiDiscord /> : <SiTwitter />}
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
