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
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Heading,
} from "@chakra-ui/react";
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
import { DeleteIcon } from "@chakra-ui/icons";
const getwoData = () => {
  return axios.get("http://localhost:3040/child_shoe");
};
export default function KidsAd({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [adata, setAdata] = useState([]);

  const [formstate, setFormState] = useState({
    title: "",
    image1: "",
    image2: "",
    category: "",
    discription: "",
    price: "",
    brands: "",
  });
  useEffect(() => {
    getwoData()
      .then((res) => {
        setAdata(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [adata]);
  const addpro = () => {
    axios
      .post("http://localhost:3040/child_shoe", formstate)
      .then((res) => {
        console.log(res.data);
        setFormState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(formstate);
  };
  const deleteHandle = (id) => {
    axios
      .delete(`http://localhost:3040/child_shoe/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    deleteHandle();
  }, [adata]);
  return (
    <Box minH="100vh" bg={useColorModeValue("green.100", "gray.900")}>
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
        <Heading
          style={{
            margin: "60px 0",
            fontSize: "40px",
            color: "teal",
          }}
        >
          {" "}
          Add Products
        </Heading>

        <Stack
          spacing={3}
          padding="10px"
          width="50%"
          margin="auto"
          border="2px solid grey"
          borderRadius="10px"
        >
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                title: e.target.value,
              });
            }}
            placeholder="Title"
            variant="Filled"
          />
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                image1: e.target.value,
              });
            }}
            placeholder="Image-1"
            variant="Filled"
          />
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                image2: e.target.value,
              });
            }}
            placeholder="Image-2"
            variant="Filled"
          />{" "}
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                category: e.target.value,
              });
            }}
            placeholder="Category"
            variant="Filled"
          />
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                brand: e.target.value,
              });
            }}
            placeholder="Brand"
            variant="Filled"
          />
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                price: e.target.value,
              });
            }}
            placeholder="Price"
            variant="Filled"
          />
          <Input
            onChange={(e) => {
              setFormState({
                ...formstate,
                discription: e.target.value,
              });
            }}
            placeholder="Discription"
            variant="Filled"
          />
          <Button onClick={addpro} size="md" colorScheme="blue">
            Button
          </Button>
        </Stack>
      </Box>
      <TableContainer>
        <Table
          marginLeft="330px"
          width="70%"
          variant="striped"
          colorScheme="teal"
        >
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Image-1</Th>
              <Th>Category</Th>
              <Th>Brand</Th>
              <Th isNumeric>Price</Th>

              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {adata.map((el) => (
              <Tr key={el.id}>
                <Td> {el.title} </Td>
                <Td>
                  <img width={"105"} src={el.image1} alt={el.title} />
                </Td>
                <Td> {el.category} </Td>
                <Td>{el.brand}</Td>

                <Td isNumeric>₹ {el.price} </Td>
                <Td>
                  <button onClick={() => deleteHandle(el.id)}>
                    {" "}
                    <DeleteIcon boxSize={6} />
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
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
