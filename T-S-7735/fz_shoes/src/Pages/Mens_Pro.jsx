// import React from "react";
// import Mens_Card from ".//Mens_Card";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
// export default function Mens_Pro() {
//   const [mdata, setMdata] = useState([]);
//   const getData = () => {
//     axios
//       .get("http://localhost:3040/products_mens")
//       .then((res) => {
//         setMdata(res.data);
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   // console.log("data:", mdata);
//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "98%",
//         margin: "auto",
//         marginTop: "70px",
//       }}
//     >
//       <div
//         style={{
//           border: "2px solid yellow",
//           width: "20%",
//         }}
//       >
//         {" "}
//         <h1>sidebar</h1>
//       </div>
//       <div style={{ width: "80%" }}>
//         <h1>Menspro</h1>
//         <Grid
//           templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
//           width={"90%"}
//           margin={"auto"}
//           gap={2}
//         >
//           {mdata?.length > 0 &&
//             mdata?.map((e) => {
//               return (
//                 <GridItem id={e.id} w="100%" h="100%">
//                   <Mens_Card
//                     id={e.id}
//                     title={e.title}
//                     image1={e.image1}
//                     image2={e.image2}
//                     price={e.price}
//                     discription={e.discription}
//                     category={e.category}
//                     brand={e.brand}
//                   />
//                 </GridItem>
//               );
//             })}
//         </Grid>
//       </div>
//     </div>
//   );
// }

// new templete is going to start from heare____________________________
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import Loading from "../pro_cat_btn/Loading";
// import ProductCard from "..//Components/ProductCard";
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
  Stack,
  Button,
  BoxProps,
  FlexProps,
  border,
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
import Mens_Card from ".//Mens_Card";
import { useState } from "react";
import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
import { BiBody } from "react-icons/bi";

export default function Mens_Pro({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [page, setPage] = useState(1);

  const [mdata, setMdata] = useState([]);
  const getData = (page) => {
    axios
      .get(`http://localhost:3040/products_mens?_limit=8&_page=${page}`)
      .then((res) => {
        setMdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(mdata.length);
  useEffect(() => {
    getData(page);
  }, [page]);
  // console.log("products :", product);
  const handleChange = (val) => {
    setPage(page + val);
  };
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
        {/*  {children}  */}
        <Text margin={" 30px auto"}>MensPro</Text>
        <Grid
          templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
          width={"100%"}
          margin={"  auto"}
          marginTop={"50px"}
          gap={2}
        >
          {mdata?.length > 0 &&
            mdata?.map((e) => {
              return (
                <GridItem id={e.id} w="100%" h="100%">
                  <Mens_Card
                    id={e.id}
                    title={e.title}
                    image1={e.image1}
                    image2={e.image2}
                    price={e.price}
                    discription={e.discription}
                    category={e.category}
                    brand={e.brand}
                  />
                </GridItem>
              );
            })}
        </Grid>

        <div style={{}}>
          <div
            style={{
              width: "30%",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
            }}
          >
            <Stack direction="row" spacing={4} align="center">
              <Button
                colorScheme="teal"
                variant="solid"
                isDisabled={page == 1}
                onClick={() => handleChange(-1)}
              >
                ⬅️Prev
              </Button>

              <h3>{page}</h3>
              <Button
                colorScheme="teal"
                variant="solid"
                onClick={() => handleChange(1)}
              >
                Next➡️
              </Button>
            </Stack>
          </div>
        </div>
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
      <NavItem key="faizan" icon={FiHome}>
        {" "}
        Home
      </NavItem>

      <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
        {" "}
        Sort
      </NavItem>

      <NavItem key="faizan" icon={FiCompass}>
        {" "}
        Price Low to High
      </NavItem>
      <NavItem key="faizan" icon={FiCompass}>
        {" "}
        Price High to Low
      </NavItem>

      <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
        {" "}
        Filter
      </NavItem>
      <NavItem key="faizan" icon={FiStar}>
        {" "}
        Ratings
      </NavItem>

      <NavItem key="faizan" icon={BiBody}>
        {" "}
        Mens
      </NavItem>
      <NavItem key="faizan" icon={BiBody}>
        {" "}
        Womens
      </NavItem>
      <NavItem key="faizan" icon={BiBody}>
        {" "}
        Kids
      </NavItem>
      <NavItem key="faizan" icon={BsFillAwardFill}>
        {" "}
        Nike
      </NavItem>

      <NavItem key="faizan" icon={BsFillAwardFill}>
        {" "}
        Puma
      </NavItem>
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
      margin="50px 0"
      position="fixed"
      width="100%"
      zIndex="1"
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
