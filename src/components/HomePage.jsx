import * as React from "react";
import {
  Box,
  chakra,
  Flex,
  Divider,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  Avatar,
  AvatarGroup,
  Tooltip,
  ModalOverlay,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import Carasous from "./Carasous";
import { Link } from "react-router-dom";

const networks = [
  {
    IncidentId: "45703",
    ClientLongName: "ROYAL CANIN",
    ClientShortName: "ROYALCAN",
    StateName: "WA ",
    SiteLongName: "Kenwick -WA",
    SiteShortName: "WAKEN1",
    Description:
      "STOCK RECEIVED DAMAGED:    PRE-ADVICE : PO 0021542  SKU: 21222  BATCH: 23010045RCA  DESCRIPTION: ENERGY 4800 20KG  TAG:093470640164587862  QTY: 1    PRE-ADVICE : PO0021542  SKU: 31144  BATCH: 22351031RCA  DESCRIPTION: HYPOALLERGENIC DOG 14KG  TAG: 093470640164588005 - QTY:1  TAG: 093470640164587770 - QTY: 1    ",
    ContainerNo: "SriHari",
    DescriptionOfDamages:
      "STOCK RECEIVED DAMAGED:    PRE-ADVICE : PO 0021542  SKU- 21222  BATCH: 23010045RCA  DESCRIPTION: ENERGY 4800 20KG  QTY: 1      PRE-ADVICE : PO0021542  SKU: 31144  BATCH: 22351031RCA  DESCRIPTION: HYPOALLERGENIC DOG 14KG  TAG: 093470640164588005 - QTY:1  TAG: 093470640164587770 - QTY: 1  ",
    OccurredDate: "2023-03-23 16:15:49.743",
    images: [
      "./Attachment/45703/one.jpg",
      "./Attachment/45703/two.jpg",
      "./Attachment/45703/three.jpg",
      "./Attachment/45703/REPORT1.jpg",
      "./Attachment/45703/REPORT2.jpg",
      "./Attachment/45703/REPORT3.jpg",
    ],
  },
  {
    IncidentId: "45692",
    ClientLongName: "JDE Coffee",
    ClientShortName: "JDEAU",
    StateName: "NSW       ",
    SiteLongName: "Eastern Creek (EC1)",
    SiteShortName: "NULL",
    Description:
      "Container - CAIU4397109  PO - 5101168283    DAMAGED SKU - 4019299  DAMAGED QTY - 6 UNITS    While slipping the bottom pallet onto a pallet, it got caught on the timber slates.",
    ContainerNo: "CAIU4397109",
    DescriptionOfDamages:
      "Container - CAIU4397109  PO - 5101168283    DAMAGED SKU - 4019299  DAMAGED QTY - 6 UNITS    While slipping the bottom pallet onto a pallet, it got caught on the timber slates.",
    OccurredDate: "2023-03-22 18:19:22.330",
    images: ["./Attachment/45692/ONE.jpg"],
  },
  {
    IncidentId: "45693",
    ClientLongName: "JDE Coffee",
    ClientShortName: "JDEAU",
    StateName: "NSW       ",
    SiteLongName: "Eastern Creek (EC1)",
    SiteShortName: "NULL",
    Description:
      "Container TCKU681098  Pre Advice  5101179864    Damaged Sku's 4060609;  57 units BBD 14/08/24  51 units BBD 13/08/24    Damaged in container, while slipping out the stacks, shrink wrap was sticking to the stacks next to them causing the top stack to be dragged out with stack that was being slipped.    When you put your hand on the wrap, the wrap is very sticky, I believe they are using a wrap with some kind of adhesive but have wrapped the pallets incorrectly with the sticky side facing out instead of in  ",
    ContainerNo: "TCKU6810988",
    DescriptionOfDamages:
      "Container TCKU6810988    Damaged Sku's 4060609;  57 units BBD 14/08/24  51 units BBD 13/08/24    Damaged in container, while slipping out the stacks, shrink wrap was sticking to the stacks next to them causing the top stack to be dragged out withe stack that was being slipped.    When you put your hand on the wrap, the wrap is very sticky, I believe they are using a wrap with some kind of adhesive but have wrapped the pallets incorrectly with the sticky side facing out instead of in  ",
    OccurredDate: "2023-03-22 18:19:12.290",
    images: [
      "./Attachment/45693/ONE.jpg",
      "./Attachment/45693/TWO.jpg",
      "./Attachment/45693/THREE.jpg",
    ],
  },
  {
    IncidentId: "45687",
    ClientLongName: "ROYAL CANIN",
    ClientShortName: "ROYALCAN",
    StateName: "WA        ",
    SiteLongName: "Kenwick -WA",
    SiteShortName: "WAKEN1",
    Description:
      "Stock was received damaged :    Pre-Advice: PO0021849  SKU: 27240  Batch: 23007064RCA  Description: CCN MED DENTAL CARE 10KG   Qty: 1",
    ContainerNo: "TCKU6821750",
    DescriptionOfDamages:
      "Stock was received damaged,     Pre-Advice: PO0021849  SKU: 27240  Batch: 23007064RCA  Description: CCN MED DENTAL CARE 10KG   Qty: 1",
    OccurredDate: "2023-03-22 13:24:12.000",
    images: [
      "./Attachment/45687/ONE.jpg",
      "./Attachment/45687/TWO.jpg",
      "./Attachment/45687/REPORT.jpg",
    ],
  },
  {
    IncidentId: "45682",
    ClientLongName: "ROYAL CANIN",
    ClientShortName: "ROYALCAN",
    StateName: "WA",
    SiteLongName: "Kenwick-WA",
    SiteShortName: "WAKEN1",
    Description:
      "Stock Received Damaged:    Pre-Advice: PO0021867  SKU: 31144  Batch: 23003028RCA  Description: Hypoallergenic Dog 14kg  Qty: 1",
    ContainerNo: "Samsung 1",
    DescriptionOfDamages:
      "Stock Received Damaged:    Pre-Advice: PO0021867  SKU: 31144  Batch: 23003028RCA  Description: Hypoallergenic Dog 14kg  Qty: 1",
    OccurredDate: "2023-03-21 17:53:36.000",
    images: [
      "./Attachment/45682/ONE.jpg",
      "./Attachment/45682/TWO.jpg",
      "./Attachment/45682/REPORT.jpg",
    ],
  },
];

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Overlay = () => {
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter={"blur(3px)"}
      hueRotate={90}
    />;
  };
  return (
    <>
      <Box
        border="1px solid"
        borderColor="gray.400"
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
      >
        <Flex justify="space-between" align="center" p={3}>
          <chakra.h3 fontSize="xl" fontWeight="bold">
            Faulty Products
          </chakra.h3>
          <Link to="/test">
            <Button colorScheme="teal">Add Product</Button>
          </Link>
        </Flex>

        <Divider />
        <TableContainer>
          <Table size="md">
            <Thead>
              <Tr fontWeight="900">
                <Th>Receipt No.</Th>
                <Th>Client Name</Th>
                <Th>State Name</Th>
                <Th>Description</Th>
                <Th>Container No.</Th>
                <Th>Date</Th>
                <Th>Image</Th>
              </Tr>
            </Thead>
            <Tbody>
              {networks.map((network, index) => (
                <Tr key={index}>
                  <Td fontSize="sm">{network.ContainerNo}</Td>
                  <Td fontSize="sm">{network.StateName}</Td>
                  <Td fontSize="sm" maxWidth="200px">
                    {network.SiteShortName}
                  </Td>
                  <Td fontSize="sm">
                    <Tooltip label={network.Description} placement="top">
                      {`${network.Description.slice(0, 25)}...`}
                    </Tooltip>
                  </Td>
                  <Td fontSize="sm">{network.ContainerNo}</Td>
                  <Td fontSize="sm">{network.OccurredDate}</Td>
                  <Td onClick={() => onOpen()}>
                    <AvatarGroup size="md" max={2}>
                      {network.images.map((image, index) => (
                        <Avatar name="Sri hari" src={image} />
                      ))}
                    </AvatarGroup>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {Overlay}
        <ModalContent>
          <ModalHeader>Images</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Carasous />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
