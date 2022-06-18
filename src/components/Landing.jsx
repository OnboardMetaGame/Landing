import { Box } from '@chakra-ui/react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Moto from '../components/landing/Moto';
import Team from '../components/landing/Team';
import Footer from '../components/landing/Footer';
import Trusted from './landing/Trusted';
import { useRef } from 'react';
import Roadmap from './landing/Roadmap';

const Landing = () => {
	const mainRef = useRef(null);
	const motoRef = useRef(null);
	const teamRef = useRef(null);
	const roadmapRef = useRef(null);

	return (
		<Box
			w='full'
			bgImage={"url('/assets/sky2.png')"}
			bgRepeatY='repeat'
			bgSize={'contain'}>
			<Navbar
				mainRef={mainRef}
				motoRef={motoRef}
				teamRef={teamRef}
				roadmapRef={roadmapRef}
			/>
			<Hero mainRef={mainRef} />
			<Trusted />
			<Moto motoRef={motoRef} />
			<Team teamRef={teamRef} />
			<Roadmap roadmapRef={roadmapRef} />
			<Footer />
		</Box>
	);
};

export default Landing;
