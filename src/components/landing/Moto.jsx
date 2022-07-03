import SectionContainer from '../styled/SectionContainer';
import InfoCard from '../cards/InfoCard';
import { Flex } from '@chakra-ui/react';

const Moto = ({ motoRef }) => {
	const elements = [
		{
			title: 'why onboard?',
			content:
				'Web3 unlocks new ways of collaborating online, and DAOs allow internet users globally to trust each other and to coordinate capital. The future of work is developing in front of our very eyes, and it is time to join the revolution.',
		},
		{
			title: 'onboard whom?',
			content:
				'But first, join the learnvolution! Complete Learning Pathways in the Onboard Academy to test your knowledge and earn in-game and on-chain rewards in the process.',
		},
		{
			title: 'advanced onboarder!',
			content:
				'Already a Web3 wizard and avid DAO contributor, but having trouble coordinating talent? Tired of pesky mercenary liquidity miners holding your project hostage? Perfect — Onboard introduces an innovative governance mechanism and compensation model that allows you to be more fairly compensated for your hard work. Welcome to the Web3 meritocracy.',
		},
		{
			title: 'get onboard!',
			content:
				'With Web3, the power is in your hands. It' +
				`’` +
				's time to get onboard and set sail for a better Web3 future.',
		},
	];
	return (
		<SectionContainer ref={motoRef}>
			<Flex
				id='moto'
				ref={motoRef}
				direction={'column'}
				align='center'
				justify='start'
				w={'full'}
				my='3rem'>
				{elements.map((element, index) => (
					<InfoCard key={index} {...element} />
				))}
			</Flex>
		</SectionContainer>
	);
};

export default Moto;
