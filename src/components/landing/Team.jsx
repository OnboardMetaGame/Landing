import { Flex } from '@chakra-ui/react';
import TeamMemberCard from '../cards/TeamMemberCard';
import { teamMeambers } from '../../utils/teamMembers';
import HeadingText from '../styled/HeadingText';
import SectionContainer from '../styled/SectionContainer';

const Team = () => {
	return (
		<SectionContainer>
			<HeadingText>the team</HeadingText>
			<Flex
				flexWrap='wrap'
				align={'center'}
				justify={'space-around'}
				mt='3rem'>
				{teamMeambers.map((member, index) => (
					<TeamMemberCard
						key={index}
						name={member.name}
						role={member.role}
						pfp={member.pfp}
						linkedin={member.linkedin}
						twitter={member?.twitter}
					/>
				))}
			</Flex>
		</SectionContainer>
	);
};

export default Team;
