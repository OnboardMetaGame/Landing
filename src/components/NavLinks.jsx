import { forwardRef, Link, useColorModeValue } from '@chakra-ui/react';
import {
	Link as RouterLink,
	useMatch,
	useResolvedPath,
} from 'react-router-dom';

const NavLink = forwardRef(({ children, to, ...rest }, ref) => {
	let resolved = useResolvedPath(to);
	let match = useMatch({ path: resolved.pathname, end: true });
	return (
		<Link
			ref={ref}
			as={RouterLink}
			p={2.5}
			to={to}
			rounded={'md'}
			bg={match ? 'accent2.200' : 'transparent'}
			_hover={{
				textDecoration: 'none',
				bg: 'accent2.100',
			}}
			_focus={{ outline: 'none' }}
			{...rest}>
			{children}
		</Link>
	);
});
const ExternalLink = forwardRef(({ children, href, ...rest }, ref) => (
	<Link
		p={2.5}
		href={href}
		ref={ref}
		rounded={'md'}
		isExternal
		_hover={{
			textDecoration: 'none',
			bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.200'),
		}}
		{...rest}>
		{children}
	</Link>
));

export { NavLink, ExternalLink };
