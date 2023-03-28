import React, { useState } from "react";
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
  Button,
  VisuallyHidden,
} from "@chakra-ui/react";
import FaultModal from "./FaultModal";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const networks = [
  {
    IncidentId: "45703",
    ClientLongName: "PPGIND",
    ClientShortName: "ROYALCAN",
    StateName: "WN",
    SiteLongName: "Kenwick -WA",
    SiteShortName: "WAKEN1",
    Description:
      "STOCK RECEIVED DAMAGED:    PRE-ADVICE : PO 0021542  SKU: 21222  BATCH: 23010045RCA  DESCRIPTION: ENERGY 4800 20KG  TAG:093470640164587862  QTY: 1    PRE-ADVICE : PO0021542  SKU: 31144  BATCH: 22351031RCA  DESCRIPTION: HYPOALLERGENIC DOG 14KG  TAG: 093470640164588005 - QTY:1  TAG: 093470640164587770 - QTY: 1    ",
    ContainerNo: "IMDU9018537",
    DescriptionOfDamages:
      "STOCK RECEIVED DAMAGED:    PRE-ADVICE : PO 0021542  SKU- 21222  BATCH: 23010045RCA  DESCRIPTION: ENERGY 4800 20KG  QTY: 1      PRE-ADVICE : PO0021542  SKU: 31144  BATCH: 22351031RCA  DESCRIPTION: HYPOALLERGENIC DOG 14KG  TAG: 093470640164588005 - QTY:1  TAG: 093470640164587770 - QTY: 1  ",
    OccurredDate: "2023-03-23 16:15:49.743",
    images: [
      "https://i.ibb.co/r05dcTD/one.jpg",
      "https://i.ibb.co/BssJg2F/two.jpg",
      "./Attachment/45703/three.jpg",
      "./Attachment/45703/REPORT1.jpg",
      "./Attachment/45703/REPORT2.jpg",
      "./Attachment/45703/REPORT3.jpg",
    ],
  },
  {
    IncidentId: "45692",
    ClientLongName: "PPGIND",
    ClientShortName: "JDEAU",
    StateName: "NSW       ",
    SiteLongName: "Eastern Creek (EC1)",
    SiteShortName: "FLORIDA",
    Description:
      "Container - CAIU4397109  PO - 5101168283    DAMAGED SKU - 4019299  DAMAGED QTY - 6 UNITS    While slipping the bottom pallet onto a pallet, it got caught on the timber slates.",
    ContainerNo: "CAIU4397109",
    DescriptionOfDamages:
      "Container - CAIU4397109  PO - 5101168283    DAMAGED SKU - 4019299  DAMAGED QTY - 6 UNITS    While slipping the bottom pallet onto a pallet, it got caught on the timber slates.",
    OccurredDate: "2023-03-22 18:19:22.330",
    images: ["https://i.ibb.co/kSrL2xP/ONE.jpg"],
  },
  {
    IncidentId: "45693",
    ClientLongName: "PPGIND",
    ClientShortName: "JDEAU",
    StateName: "NSW",
    SiteLongName: "Eastern Creek (EC1)",
    SiteShortName: "MC STAN",
    Description:
      "Container TCKU681098  Pre Advice  5101179864    Damaged Sku's 4060609;  57 units BBD 14/08/24  51 units BBD 13/08/24    Damaged in container, while slipping out the stacks, shrink wrap was sticking to the stacks next to them causing the top stack to be dragged out with stack that was being slipped.    When you put your hand on the wrap, the wrap is very sticky, I believe they are using a wrap with some kind of adhesive but have wrapped the pallets incorrectly with the sticky side facing out instead of in  ",
    ContainerNo: "TCKU6810988",
    DescriptionOfDamages:
      "Container TCKU6810988    Damaged Sku's 4060609;  57 units BBD 14/08/24  51 units BBD 13/08/24    Damaged in container, while slipping out the stacks, shrink wrap was sticking to the stacks next to them causing the top stack to be dragged out withe stack that was being slipped.    When you put your hand on the wrap, the wrap is very sticky, I believe they are using a wrap with some kind of adhesive but have wrapped the pallets incorrectly with the sticky side facing out instead of in  ",
    OccurredDate: "2023-03-22 18:19:12.290",
    images: [
      "https://i.ibb.co/Y88cBGC/ONE.jpg",
      "https://i.ibb.co/jgc1zjc/TWO.jpg",
      "./Attachment/45693/THREE.jpg",
    ],
  },
  {
    IncidentId: "45687",
    ClientLongName: "PPGIND",
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
      "https://i.ibb.co/zsCrvdM/ONE.jpg",
      "https://i.ibb.co/b3zFKnF/TWO.jpg",
      "./Attachment/45687/REPORT.jpg",
    ],
  },
  {
    IncidentId: "46789",
    ClientLongName: "PPGIND",
    ClientShortName: "PURINA",
    StateName: "CA        ",
    SiteLongName: "Sacramento -CA",
    SiteShortName: "CASAC1",
    Description:
      "Damaged stock upon arrival: Pre-Advice: PO0032598  SKU: 38740  Batch: 24008123PCA  Description: PRN CAT SENSITIVE 7KG   Qty: 2",
    ContainerNo: "GPRU5948351",
    DescriptionOfDamages:
      "Damaged stock received, Pre-Advice: PO0032598  SKU: 38740  Batch: 24008123PCA  Description: PRN CAT SENSITIVE 7KG   Qty: 2",
    OccurredDate: "2023-03-23 09:32:45.000",
    images: [
      "https://i.ibb.co/5x5BQ2H/THREE.jpg",
      "https://i.ibb.co/dWMc1yJ/FOUR.jpg",
      "./Attachment/46789/REPORT.jpg",
    ],
  },
  {
    IncidentId: "47925",
    ClientLongName: "PPGIND",
    ClientShortName: "HILLSDT",
    StateName: "NY        ",
    SiteLongName: "Buffalo -NY",
    SiteShortName: "NYBUF1",
    Description:
      "Received damaged stock :    Pre-Advice: PO0043650  SKU: 17520  Batch: 25009485HSD  Description: HSD CAT HAIRBALL 8KG   Qty: 1",
    ContainerNo: "HKHU8962134",
    DescriptionOfDamages:
      "Stock received damaged,     Pre-Advice: PO0043650  SKU: 17520  Batch: 25009485HSD  Description: HSD CAT HAIRBALL 8KG   Qty: 1",
    OccurredDate: "2023-03-24 16:12:29.000",
    images: [
      "https://i.ibb.co/G2W0nZK/FIVE.jpg",
      "https://i.ibb.co/PjyT0n9/SIX.jpg",
      "./Attachment/47925/REPORT.jpg",
    ],
  },
  {
    IncidentId: "48960",
    ClientLongName: "PPGIND",
    ClientShortName: "MARSPET",
    StateName: "TX",
    SiteLongName: "Houston -TX",
    SiteShortName: "TXHOU1",
    Description:
      "Damaged stock on delivery: Pre-Advice: PO0051874  SKU: 56230  Batch: 26010627MPC  Description: WSK DOG MATURE 12KG   Qty: 3",
    ContainerNo: "JYRU7319502",
    DescriptionOfDamages:
      "Received damaged stock, Pre-Advice: PO0051874  SKU: 56230  Batch: 26010627MPC  Description: WSK DOG MATURE 12KG   Qty: 3",
    OccurredDate: "2023-03-25 11:15:39.000",
    images: [
      "https://i.ibb.co/VmZRWqV/SEVEN.jpg",
      "https://i.ibb.co/WgHJ9J4/EIGHT.jpg",
      "./Attachment/48960/REPORT.jpg",
    ],
  },
  {
    IncidentId: "50115",
    ClientLongName: "PPGIND",
    ClientShortName: "BLUEBUF",
    StateName: "FL        ",
    SiteLongName: "Orlando -FL",
    SiteShortName: "FLORL1",
    Description:
      "Stock received damaged: Pre-Advice: PO0061236  SKU: 65480  Batch: 27011234BB  Description: BLUE CAT INDOOR 6KG   Qty: 4",
    ContainerNo: "BLPU4198670",
    DescriptionOfDamages:
      "Damaged stock received, Pre-Advice: PO0061236  SKU: 65480  Batch: 27011234BB  Description: BLUE CAT INDOOR 6KG   Qty: 4",
    OccurredDate: "2023-03-26 14:45:22.000",
    images: [
      "https://i.ibb.co/XbGvDkW/NINE.jpg",
      "https://i.ibb.co/yPzWfwF/TEN.jpg",
      "./Attachment/50115/REPORT.jpg",
    ],
  },
];

const DamageProduct = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const openModal1 = () => setIsOpen1(true);
  const closeModal1 = () => setIsOpen1(false);
  return (
    <>
      <Box
        border="1px solid"
        borderColor="gray.400"
        rounded="md"
        boxShadow="lg"
        overflow="hidden"
        m={4}
      >
        <Flex justify="space-between" align="center" p={3}>
          <chakra.h3 fontSize="xl" fontWeight="bold" ml={5}>
            Damaged Products
          </chakra.h3>

          <Link to="/login">
            <Button colorScheme="teal">Logout</Button>
          </Link>
        </Flex>

        <Divider />
        <TableContainer>
          <Table size="lg">
            <Thead bgColor="#8c8987">
              <Tr fontWeight="900">
                <Th color="white">Receipt No.</Th>
                <Th color="white">Client Name</Th>
                <Th color="white">State Name</Th>
                <Th color="white">Description</Th>
                <Th color="white">Container No.</Th>
                <Th color="white">Date</Th>
                <Th color="white">Image</Th>
              </Tr>
            </Thead>
            <Tbody bgColor="#d4d2cf">
              {networks.map((network, index) => (
                <Tr key={index}>
                  <Td fontSize="sm">{network.ContainerNo}</Td>
                  <Td fontSize="sm">{network.ClientLongName}</Td>
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
                  <Td onClick={openModal1}>
                    <AvatarGroup size="md" max={2} cursor={"pointer"}>
                      {network.images.map((image, index) => (
                        <Avatar key={index} name="Sri hari" src={image} />
                      ))}
                    </AvatarGroup>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Pagination />
      <FaultModal isOpen={isOpen1} onClose={closeModal1} />
    </>
  );
};

export default DamageProduct;
