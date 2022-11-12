import { Flex } from '@chakra-ui/react';
import TeamMemberCard from '../cards/TeamMemberCard';
import { advisors } from '../../utils/advisors';
import HeadingText from '../styled/HeadingText';
import SectionContainer from '../styled/SectionContainer';

const Team = () => {
	return (
		<SectionContainer>
			<HeadingText ident={'team'}>advisors</HeadingText>
			<Flex
				flexWrap='wrap'
				align={'center'}
				justify={'space-around'}
				mt='3rem'>
				{advisors.map((advisor, index) => (
					<TeamMemberCard
						key={index}
						name={advisor.name}
						role={advisor.role}
						pfp={advisor.pfp}
						linkedin={advisor.linkedin}
						twitter={advisor?.twitter}
					/>
				))}
			</Flex>
		</SectionContainer>
	);
};

export default Team;
