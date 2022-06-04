import { useRadio, Box, Input } from '@chakra-ui/react';

const BetterOption = ({ children, isCorrect, ...props }) => {
	const { getInputProps, getCheckboxProps } = useRadio(props);

	const input = getInputProps();
	const checkbox = getCheckboxProps();

	return (
		<Box as='label'>
			<Input {...input} />
			<Box
				{...checkbox}
				w='fit-content'
				cursor='pointer'
				border='2px solid'
				borderColor='brand.dark.500'
				borderRadius='md'
				boxShadow='md'
				_checked={{
					borderColor: isCorrect ? 'brand.success' : 'brand.danger',
				}}
				_focus={{
					outline: 'none',
				}}
				px={'1rem'}
				py={'0.75rem'}
				my={'0.5rem'}>
				{children}
			</Box>
		</Box>
	);
};

export default BetterOption;
