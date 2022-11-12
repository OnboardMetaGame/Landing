import { Flex, Text } from '@chakra-ui/react';
import SectionContainer from '../styled/SectionContainer';
import RoadmapElementCard from '../cards/RoadmapElementCard';
import HeadingText from '../styled/HeadingText';

const Roadmap = () => {
	const stages = [
		{
			status: 'done',
			content: 'Community Building and Deploying the Voyager Academy',
		},
		{
			status: 'ip',
			content: 'Making DAO Learning Paths and Boards',
		},
		{
			status: 'todo',
			content: 'MetaGoverners and our first NFT Drop',
		},
		{
			status: 'todo',
			content: 'Repitation Scoring System and Staking Protocol',
		},
		{
			status: 'todo',
			content: 'Lands and Guild for DAOs',
		},
		{
			status: 'todo',
			content: 'The METAVERSE Island of Onboard',
		},
	];

	return (
		<SectionContainer>
			<HeadingText ident={'roadmap'}>roadmap</HeadingText>
			<Flex
				direction={{ base: 'column-reverse', md: 'row' }}
				align='center'
				justify={'center'}
				my='2rem'>
				<Flex direction='column' w={{ base: '85%', md: '70%' }}>
					{stages.map((stage, index) => (
						<RoadmapElementCard {...stage} key={index} />
					))}
				</Flex>
				<Flex
					direction='column'
					align={'cetner'}
					justify={'center'}
					w='30ch'
					textAlign={'center'}
					ml={{ base: 0, md: '4rem' }}
					mb={{ base: '2rem', md: 0 }}
					bg='brand.dark.100'
					color='brand.light'
					p='2rem'
					borderRadius={'lg'}
					boxShadow='lg'>
					<Text
						fontSize={'2rem'}
						color='brand.accent.100'
						fontWeight={'700'}
						textTransform='uppercase'>
						Phase 1
					</Text>
					<Flex direction={'column'} gap='0.5rem'>
						<Text fontSize={'sm'}>- Test launch Onboard</Text>
						<Text fontSize={'sm'}>- Launch Onboard Academy</Text>
						<Text fontSize={'sm'}>- Build DAO hubs</Text>
						<Text fontSize={'sm'}>
							- Launch contributor rewards protocol
						</Text>
					</Flex>
				</Flex>
			</Flex>
		</SectionContainer>
	);
};

export default Roadmap;
