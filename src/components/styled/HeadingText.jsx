import { Text } from '@chakra-ui/react';

const HeadingText = ({ ident, children }) => (
	<Text
		id={ident}
		as='span'
		fontSize={'2rem'}
		fontWeight={'800'}
		textTransform={'uppercase'}
		textAlign={'center'}
		_after={{
			content: '""',
			display: 'block',
			width: '10ch',
			height: '9px',
			border: '3px solid',
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
