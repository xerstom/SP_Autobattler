import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

const ModalComponent = props => {
	const { isOpen, onClose, gameState }  = props;
	const close = () => {
		onClose();
		// eslint-disable-next-line no-undef
		window.location.reload(false);
	};
	return (
		<Modal isOpen={isOpen} onClose={close}>
			<ModalOverlay />
			<ModalContent>
				{gameState === "win"
					? <ModalHeader textAlign="center" color="green.400">Bravo vous avez gagné !</ModalHeader>
					: <ModalHeader textAlign="center" color="red.400"> Dommage vous avez perdu !</ModalHeader>
				}
				<ModalBody>
				</ModalBody>
				<ModalFooter>
					<Button variantColor="blue" mr={3} onClick={close}>Rejouer</Button>
	
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
ModalComponent.propTypes = {
	isOpen: PropTypes.func,
	onClose: PropTypes.func,
	gameState: PropTypes.string,

};



export default ModalComponent;
