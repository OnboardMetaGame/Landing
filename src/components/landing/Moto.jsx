import { Text, Flex } from '@chakra-ui/react';
import HeadingText from '../styled/HeadingText';
import SectionContainer from '../styled/SectionContainer';

const Moto = ({ motoRef }) => {
	return (
		<SectionContainer ref={motoRef}>
			<HeadingText>What's onboard</HeadingText>
			<Flex
				w={{ base: '100%', md: '85%', lg: '70%' }}
				direction='column'
				mt='2rem'
				align={'center'}
				textAlign={'center'}>
				<Para>
					The Future of Work is developing in front of our eyes. With
					the growth of DeFi and NFT, Web3 has unlocks new potentials
					in how we can interact online and given rise to DAOs. All
					these terms and concepts can be hard to truly understand
					which is why we're here to support on your learnings.
				</Para>
				<Para>
					Complete Learning Pathways in the Onboard Academy to test
					your knowledge and earn in-game and on-chain rewards in the
					process. You'll become a Web3 Wizard in no time and together
					we will defeat Moloch.
				</Para>
				<Text
					fontSize={'1.5rem'}
					fontWeight='700'
					textEmphasis={'open sesame #555'}
					color='brand.accent.900'>
					It's time to Get Onboard!
				</Text>
			</Flex>
		</SectionContainer>
	);
};

const Para = ({ children }) => (
	<Text fontSize={'1rem'} fontWeight='500' my='0.75rem'>
		{' '}
		{children}
	</Text>
);

export default Moto;
