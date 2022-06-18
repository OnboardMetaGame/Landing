import {
	Text,
	Center,
	Box,
	Image,
	HStack,
	IconButton,
	Flex,
} from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';
import { SiTwitter, SiLinkedin } from 'react-icons/si';
import { ExternalLink } from '../Links';

const TeamMemberCard = ({ name, role, pfp, linkedin, twitter }) => {
	// const navigate = useNavigate();
	return (
		<Center py={6} minW={'340px'} mt='1rem'>
			<Box
				border={'3px ridge'}
				borderColor={'brand.dark.200'}
				role={'group'}
				p={6}
				maxW={'330px'}
				w={'full'}
				bg={'brand.dark.400'}
				boxShadow={'2xl'}
				rounded={'xl'}
				pos={'relative'}
				zIndex={1}>
				<Pfp imageURL={pfp} />
				<Flex direction='column' align={'center'}>
					<Text
						as={'span'}
						color={'brand.light'}
						fontSize={'2xl'}
						fontWeight={'600'}
						textTransform={'capitalize'}>
						{name}
					</Text>
					<Text
						as={'span'}
						color={'brand.light'}
						fontSize='0.8rem'
						fontWeight={'600'}
						textTransform={'uppercase'}
						opacity={'0.6'}
						m={0}>
						{role}
					</Text>
					<HStack align={'center'} mt='1rem'>
						{twitter && (
							<ExternalLink href={twitter}>
								<IconButton
									icon={<SiTwitter />}
									variant='ghost'
									colorScheme={'green'}
									color='brand.accent.100'
									_hover={{
										bg: 'brand.accent.900',
									}}
								/>
							</ExternalLink>
						)}
						{linkedin && (
							<ExternalLink href={linkedin}>
								<IconButton
									icon={<SiLinkedin />}
									variant='ghost'
									colorScheme={'green'}
									color='brand.accent.100'
									_hover={{
										bg: 'brand.accent.900',
									}}
								/>
							</ExternalLink>
						)}
					</HStack>
				</Flex>
			</Box>
		</Center>
	);
};
const Pfp = ({ imageURL }) => {
	return (
		<Box
			rounded={'xl'}
			mt={-16}
			pos={'relative'}
			height={'230px'}
			transition={'all 0.2s ease-in-out'}
			_after={{
				transition: 'all .3s ease',
				content: '""',
				w: '60%',
				h: '60%',
				pos: 'absolute',
				bottom: 7,
				left: '50%',
				transform: 'translateX(-50%)',
				backgroundImage: `url(${imageURL})`,
				filter: 'blur(18px)',
				zIndex: -1,
			}}
			_groupHover={{
				_after: {
					filter: 'blur(24px)',
				},
			}}>
			<Image
				rounded={'full'}
				width={200}
				objectFit={'cover'}
				src={imageURL}
				mx='auto'
			/>
		</Box>
	);
};

export default TeamMemberCard;
