import React from "react";
import Carasous from "./Carasous";
import {
  ModalOverlay,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
} from "@chakra-ui/react";

function FaultModal(props) {
  return (
    <Modal size={"xl"} isCentered isOpen={props.isOpen} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader alignSelf={"center"}>Images</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Carasous />
          <Text>
            Damaged stock received, Pre-Advice: PO0061236 SKU: 65480 Batch:
            27011234BB Description: BLUE CAT INDOOR 6KG Qty: 4
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default FaultModal;
