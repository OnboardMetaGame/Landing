import {
	Flex,
	Image,
	HStack,
	Button,
	IconButton,
	Spacer,
	Text,
} from '@chakra-ui/react';
import { NavLink } from '../NavLinks';
import { ExternalLink } from '../Links';
import { SiDiscord, SiTwitter } from 'react-icons/si';

const Navbar = () => {
	const navLinks = [
		{
			name: 'Moto',
			path: '/moto',
		},
		{
			name: 'Team',
			path: '/team',
		},
		{
			name: 'Roadmap',
			path: '/roadmap',
		},
	];

	return (
		<Flex
			zIndex={'100'}
			w='80%'
			minW='40rem'
			h='5rem'
			px='2rem'
			py='1.2rem'
			bg='brand.dark.100'
			align='center'
			justify='space-between'
			left='50%'
			ml='-40%'
			borderRadius='0 0 1rem 1rem'
			position='fixed'
			color='brand.light'>
			<Image src={'/assets/logo.png'} h='full' />
			<HStack justify='space-around' fontSize='sm' ml='2rem'>
				{navLinks.map((link, index) => (
					<NavLink key={index} to={link.path} role='group'>
						<Text
							transition='all 0.2s ease-in-out'
							_groupHover={{
								color: 'brand.accent.100',
								fontWeight: '600',
							}}>
							{link.name}
						</Text>
					</NavLink>
				))}
			</HStack>
			<Spacer />
			<Flex align='center' justify={'center'} mr='1rem'>
				<ExternalLink href='https://twitter.com/getonboard_gg'>
					<IconButton
						icon={<SiTwitter />}
						variant='ghost'
						color='brand.accent.100'
						_hover={{ bg: 'brand.accent.900' }}
					/>
				</ExternalLink>

				<ExternalLink href='https://discord.gg/QbXnYGMG'>
					<IconButton
						icon={<SiDiscord />}
						variant='ghost'
						color='brand.accent.100'
						_hover={{ bg: 'brand.accent.900' }}
					/>
				</ExternalLink>
			</Flex>
			<Button
				color={'brand.dark.100'}
				bg='brand.accent.100'
				transition={'all 0.2s ease-in-out'}
				_hover={{ filter: 'brightness(105%)' }}>
				Onboard
			</Button>
		</Flex>
	);
};

export default Navbar;
