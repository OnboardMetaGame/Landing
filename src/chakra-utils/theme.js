// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		light: '#fff',
		dark: {
			100: '#000000',
			200: '#1e1e1e',
			300: '#2d2d2d',
			400: '#3c3c3c',
			500: '#4b4b4b',
			600: '#5a5a5a',
			700: '#696969',
			800: '#787878',
			900: '#878787',
		},
		accent: { 100: '#A7FF37', 900: '#426A00' },
		success: '#8ADD21',
		danger: '#DD2121',
	},
	paths: {
		0: '#ECB8D4',
		1: '#E8CCB2',
		2: '#CAEAAA',
		3: '#B0E8D7',
		4: '#AAC5E4',
		5: '#CCBBE7',
		6: '#E3B2DE',
		7: '#E3B0B0',
		8: '#ECE7BF',
		9: '#D8D8D8',
	},
};

const breakpoints = {
	mobile: '480px',
	tablet: '768px',
};

const styles = {
	global: () => ({
		html: {
			fontSize: { base: '14px', md: '18px' },
			scrollBehaivor: 'smooth',
		},
		body: {
			fontFamily: '"Poppins", sans-serif',
			background: 'brand.light',
			color: 'brand.dark.100',
			tansition: 'all 0.2s ease-in-out',
		},
		button: {
			cursor: 'pointer',
			transition: 'all 0.2s ease-in-out',
			'&:focus': {
				outline: 'none',
			},
		},
		a: {
			cursor: 'pointer',
			transition: 'all 0.2s ease-in-out',
			'&:focus': {
				outline: 'none',
			},
		},
		img: {
			userSelect: 'none',
		},
	}),
};

const components = {
	ModalContent: {
		bastStyle: {
			overflow: 'scroll',
			backgroundColor: 'brand.dark.300',
			border: '3px ridge',
			borderColor: 'brand.dark.200',
		},
	},
};

export const theme = extendTheme({ colors, styles, components, breakpoints });
