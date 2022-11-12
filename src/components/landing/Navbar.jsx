import {
	Flex,
	Image,
	Button,
	IconButton,
	Spacer,
	Text,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	useDisclosure,
} from '@chakra-ui/react';
import { NavLink } from '../NavLinks';
import { ExternalLink } from '../Links';
import { SiDiscord, SiTwitter, SiMedium } from 'react-icons/si';
import { VscMenu } from 'react-icons/vsc';

const Navbar = () => {
	const navLinks = [
		{
			name: 'About',
			path: '/#moto',
			id: 'moto',
		},
		{
			name: 'Team',
			path: '/#team',
			id: 'team',
		},
		{
			name: 'Roadmap',
			path: '/#roadmap',
			id: 'roadmap',
		},
	];

	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Flex
			zIndex={'100'}
			w='80%'
			minW='20rem'
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
			<Image
				cursor={'pointer'}
				src={'/assets/logo.png'}
				h='full'
				onClick={() =>
					document.getElementById('hero').scrollIntoView({
						block: 'center',
						behavior: 'smooth',
					})
				}
			/>
			<Flex
				display={{ base: 'none', md: 'flex' }}
				direction={'row'}
				justify='space-around'
				fontSize='sm'
				ml='2rem'>
				{navLinks.map((link, index) => (
					<NavLink
						key={index}
						to={link.path}
						role='group'
						onClick={() =>
							document.getElementById(link.id).scrollIntoView({
								block: 'center',
								behavior: 'smooth',
							})
						}>
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
			</Flex>
			<Spacer />
			<Flex align='center' justify={'center'} mr='1rem'>
				<ExternalLink href='https://twitter.com/getonboard_gg'>
					<IconButton
						icon={<SiTwitter />}
						variant='ghost'
						color='brand.accent.100'
						_hover={{ bg: 'none' }}
					/>
				</ExternalLink>
				<ExternalLink href='https://discord.gg/u3qaCmmVwf'>
					<IconButton
						icon={<SiDiscord />}
						variant='ghost'
						color='brand.accent.100'
						_hover={{ bg: 'none' }}
					/>
				</ExternalLink>
				<ExternalLink href='https://medium.com/@getonboard_gg/about'>
					<IconButton
						icon={<SiMedium />}
						variant='ghost'
						color='brand.accent.100'
						_hover={{ bg: 'none' }}
					/>
				</ExternalLink>
			</Flex>
			<IconButton
				display={{ base: 'block', md: 'none' }}
				align='center'
				icon={<VscMenu size={20} />}
				variant={'ghost'}
				onClick={onOpen}
				_hover={{ bg: 'none' }}
				_focus={{ outline: 'none', bg: 'none' }}
				_active={{ outline: 'none', bg: 'none' }}
			/>
			<Drawer onClose={onClose} isOpen={isOpen} size={'sm'}>
				<DrawerOverlay />
				<DrawerContent bg='brand.dark.100' color='brand.light'>
					<DrawerCloseButton />
					<DrawerBody>
						<Flex
							direction='column'
							w='full'
							justify='center'
							align='center'
							textAlign={'center'}>
							<Image
								src='/assets/logo-full.png'
								width='80%'
								my='3rem'
								minW='10ch'
							/>
							{navLinks.map((link, index) => (
								<NavLink
									key={index}
									to={link.path}
									role='group'>
									<Button
										w='75%'
										variant='ghost'
										transition='all 0.2s ease-in-out'
										onClick={() => {
											document
												.getElementById(link.id)
												.scrollIntoView({
													block: 'center',
													behavior: 'smooth',
												});
											onClose();
										}}
										fontSize='xl'
										textTransform={'uppercase'}
										_groupHover={{
											color: 'brand.accent.100',
											fontWeight: '600',
											bg: 'whiteAlpha.100',
										}}>
										{link.name}
									</Button>
								</NavLink>
							))}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
			<ExternalLink
				display={{ base: 'none', md: 'block' }}
				href={'https://app.getonboard.gg'}>
				<Button
					color={'brand.dark.100'}
					bg='brand.accent.100'
					transition={'all 0.2s ease-in-out'}
					_hover={{ filter: 'brightness(105%)' }}>
					Onboard
				</Button>
			</ExternalLink>
		</Flex>
	);
};

export default Navbar;
