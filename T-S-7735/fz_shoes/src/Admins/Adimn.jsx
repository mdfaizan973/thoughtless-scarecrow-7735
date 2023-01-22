import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";

import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
import {
  IconButton,
  // Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import { Heading, Image, useBreakpointValue } from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { FiToggleRight } from "react-icons/fi";
import { BsFillAwardFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";
import { LinkasRouterLink } from "react-router-dom";
import { Input, Stack } from "@chakra-ui/react";
export default function Admin({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("teal.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        <Stack
          minH={"100vh"}
          marginTop={"50px"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                <Text
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "full",
                    height: useBreakpointValue({ base: "20%", md: "30%" }),
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.400",
                    zIndex: -1,
                  }}
                >
                  Fz Shoes
                </Text>
                <br />{" "}
                <Text color={"blue.400"} as={"span"}>
                  The Fashion Shoes
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
                The project board is an exclusive resource for contract work.
                It's perfect for freelancers, agencies, and moonlighters.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <RouterLink to="/">
                  <Button
                    rounded={"full"}
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                  >
                    Shop
                  </Button>
                </RouterLink>
                <Button rounded={"full"}>Hello India</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"cover"}
              src={
                "https://cdn3.vectorstock.com/i/1000x1000/43/92/stock-market-or-forex-trading-graph-in-graphic-vector-23614392.jpg"
              }
            />
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Filter
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <RouterLink to="/admin">
        <NavItem key="faizan" icon={FiHome}>
          {" "}
          Dashboard
        </NavItem>
      </RouterLink>
      <RouterLink to="/menadd">
        <NavItem key="faizan" icon={AddIcon}>
          {" "}
          Mens Shoes
        </NavItem>
      </RouterLink>
      <RouterLink to="/wooad">
        <NavItem key="faizan" icon={AddIcon}>
          {" "}
          Womens Shoes
        </NavItem>
      </RouterLink>

      <RouterLink to="/kidsad">
        <NavItem key="faizan" icon={AddIcon}>
          {" "}
          Kids Shoes
        </NavItem>
      </RouterLink>
      <RouterLink to="/kidsad">
        <NavItem key="faizan" icon={BsFillAwardFill}>
          {" "}
          BRAND:- Puma
        </NavItem>
      </RouterLink>
      <RouterLink to="/menadd">
        <NavItem key="faizan" icon={BsFillAwardFill}>
          {" "}
          BRAND:- Addidas
        </NavItem>
      </RouterLink>
      <RouterLink to="/kidsad">
        <NavItem key="faizan" icon={BsFillAwardFill}>
          {" "}
          BRAND:- Nike
        </NavItem>
      </RouterLink>
      <RouterLink to="/menadd">
        <NavItem key="faizan" icon={BsFillAwardFill}>
          {" "}
          BRAND:- Reebok
        </NavItem>
      </RouterLink>
      <RouterLink to="/menadd">
        <NavItem key="faizan" icon={BsFillAwardFill}>
          {" "}
          BRAND:- Sega
        </NavItem>
      </RouterLink>
      <RouterLink to="/menadd">
        <NavItem key="faizan" icon={FiSettings}>
          {" "}
          Setting
        </NavItem>
      </RouterLink>
    </Box>
  );
};

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        bg={useColorModeValue("gray.100", "gray.900")}
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("gray.100", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Filter
      </Text>
    </Flex>
  );
};
