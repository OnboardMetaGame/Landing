import { Button } from '@chakra-ui/react';

const FooterButton = ({ children, ...rest }) => {
	return (
		<Button
			{...rest}
			role={'group'}
			w='20%'
			minW='15ch'
			bg='brand.accent.100'
			color='brand.dark.100'
			transition={'all 0.2s ease-in-out'}
			_hover={{
				filter: 'brightness(110%)',
			}}>
			{children}
		</Button>
	);
};

export default FooterButton;
