import { Box } from '@chakra-ui/react';
import Navbar from '../components/landing/Navbar';
import Hero from '../components/landing/Hero';
import Moto from '../components/landing/Moto';
import Team from '../components/landing/Team';
import Footer from '../components/landing/Footer';

const Landing = () => {
	return (
		<Box
			w='full'
			bgImage={"url('/assets/sky2.png')"}
			bgRepeatY='repeat'
			bgSize={'contain'}>
			<Navbar />
			<Hero />
			<Moto />
			<Team />
			<Footer />
		</Box>
	);
};

export default Landing;
