import { Text } from '@chakra-ui/react';

const HeadingText = ({ children }) => (
	<Text
		as='span'
		fontSize={'2.5rem'}
		fontWeight={'800'}
		textTransform={'uppercase'}
		_after={{
			content: '""',
			display: 'block',
			width: '10ch',
			height: '15px',
			border: '5px solid',
			borderColor: 'brand.dark.200',
			backgroundColor: 'brand.accent.100',
			margin: 'auto',
			marginTop: '0.75rem',
			borderRadius: '1rem',
		}}>
		{children}
	</Text>
);

export default HeadingText;
