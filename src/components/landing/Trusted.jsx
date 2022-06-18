import { Flex, Wrap, WrapItem } from '@chakra-ui/react';
import TrustedCard from '../cards/TrustedCard';
import { ExternalLink } from '../Links';
import HeadingText from '../styled/HeadingText';

const Trusted = () => {
	const orgs = [
		{
			name: 'Polygon Studios',
			logo: '/assets/orgs/polygon-studios.png',
			url: 'https://polygonstudios.com/',
		},
		{
			name: 'DxDy Dao',
			logo: '/assets/orgs/dxdy-dao.jpeg',
			url: 'https://dxdy.exchange/',
		},
	];

	return (
		<Flex align='center' direction={'column'} mt='5rem'>
			<HeadingText>trusted by</HeadingText>
			<Wrap spacing='1rem' align='center' justify={'center'} mt='2rem'>
				{orgs.map((org, index) => (
					<ExternalLink href={org.url} key={index}>
						<WrapItem>
							<TrustedCard org={org.name} logo={org.logo} />
						</WrapItem>
					</ExternalLink>
				))}
			</Wrap>
		</Flex>
	);
};

export default Trusted;
