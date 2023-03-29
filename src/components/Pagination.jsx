import React from "react";
// import all the chakra components used in this page
import { chakra, Flex, Icon } from "@chakra-ui/react";
// import the icons used in this page
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PagButton = (props) => {
  const activeStyle = {
    bg: "#319795",
    color: "white",
  };
  return (
    <chakra.button
      mx={1}
      px={4}
      py={2}
      rounded="md"
      bg="white"
      color="gray.700"
      opacity={props.disabled && 0.6}
      _hover={!props.disabled && activeStyle}
      cursor={props.disabled && "not-allowed"}
      {...(props.active && activeStyle)}
    >
      {props.children}
    </chakra.button>
  );
};

const Pagination = () => {
  return (
    <Flex
      bg="#fcfcfc"
      p={5}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Flex>
        <PagButton>
          <Icon as={IoIosArrowBack} color="gray.700" boxSize={4} />
        </PagButton>
        <PagButton active>1</PagButton>
        <PagButton>2</PagButton>
        <PagButton>3</PagButton>
        <PagButton>4</PagButton>
        <PagButton>5</PagButton>
        <PagButton>
          <Icon as={IoIosArrowForward} color="gray.700" boxSize={4} />
        </PagButton>
      </Flex>
    </Flex>
  );
};

export default Pagination;
