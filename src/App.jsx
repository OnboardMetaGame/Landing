import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import { theme } from './chakra-utils/theme';
import Landing from './components/Landing';

function App() {
	return (
		<ChakraProvider theme={theme}>
			<Routes>
				<Route exact path='/' element={<Landing />} />
			</Routes>
		</ChakraProvider>
	);
}

export default App;
