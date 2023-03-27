import {
  Box,
  Badge,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

export default function Details() {
  return (
    <SimpleGrid
      columns={{ base: 1, lg: 0 }}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 5, md: 5 }}
      m={{ base: 18, md: 18 }}
    >
      <Stack spacing={{ base: 6, md: 3 }}>
        <Box as={"header"}>
          <Badge>Default</Badge>
          <Heading
            lineHeight={1.1}
            fontWeight={300}
            fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
          >
            Client Name
          </Heading>
          <Text
            color={useColorModeValue("gray.900", "gray.400")}
            fontWeight={200}
            fontSize={"2xl"}
          >
            Container name
          </Text>
        </Box>

        <Stack
          spacing={{ base: 4, sm: 6 }}
          direction={"column"}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.200", "gray.600")}
            />
          }
        >
          <VStack spacing={{ base: 4, sm: 6 }}>
            <Text
              color={useColorModeValue("gray.500", "gray.400")}
              fontSize={"2xl"}
              fontWeight={"300"}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore
            </Text>
          </VStack>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent={"center"}>
          {/* <MdLocalShipping /> */}
          <Text>23rd March 2023</Text>
        </Stack>
      </Stack>
    </SimpleGrid>
  );
}
