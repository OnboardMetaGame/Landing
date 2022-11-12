import { Box } from '@chakra-ui/react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Moto from '../components/landing/Moto';
import Team from '../components/landing/Team';
import Advisors from '../components/landing/Advisors';
import Footer from '../components/landing/Footer';
import Trusted from './landing/Trusted';
// import { useRef } from 'react';
import Roadmap from './landing/Roadmap';

const Landing = () => {
	return (
		<Box
			w='full'
			bgImage={"url('/assets/sky2.png')"}
			bgRepeatY='repeat'
			bgSize={'contain'}>
			<Navbar />
			<Hero />
			<Trusted />
			<Moto />
			<Team />
			<Advisors />
			<Roadmap />
			<Footer />
		</Box>
	);
};

export default Landing;
