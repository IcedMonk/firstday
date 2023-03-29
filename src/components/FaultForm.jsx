import React from "react";

import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import TestForm from "./TestForm";

function FaultForm(props) {
  return (
    <Modal
      closeOnOverlayClick={false}
      isCentered
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={"xl"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Faulty Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TestForm />
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose} colorScheme="blue" mr={3}>
            Save
          </Button>
          <Button onClick={props.onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FaultForm;
