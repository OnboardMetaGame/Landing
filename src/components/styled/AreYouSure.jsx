import {
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
} from '@chakra-ui/react';

const AreYouSure = ({ cancelRef, onClose, quitQuiz }) => {
	return (
		<AlertDialogOverlay>
			<AlertDialogContent
				bg='brand.dark.300'
				border='3px ridge'
				borderColor='brand.dark.200'
				color='brand.light'>
				<AlertDialogHeader fontSize='lg' fontWeight='bold'>
					Quit Quiz
				</AlertDialogHeader>

				<AlertDialogBody>
					Are you sure? You want to quit this lesson.
				</AlertDialogBody>

				<AlertDialogFooter>
					<Button ref={cancelRef} onClick={onClose}>
						Cancel
					</Button>
					<Button
						bg='brand.danger'
						_hover={{
							filter: 'brightness(105%)',
						}}
						onClick={() => {
							onClose();
							quitQuiz();
						}}
						ml={3}>
						Quit
					</Button>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialogOverlay>
	);
};

export default AreYouSure;
