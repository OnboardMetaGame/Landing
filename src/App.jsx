import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Landing from './components/Landing';
import { theme } from './chakra-utils/theme';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Landing />
		</ChakraProvider>
	);
}

export default App;
