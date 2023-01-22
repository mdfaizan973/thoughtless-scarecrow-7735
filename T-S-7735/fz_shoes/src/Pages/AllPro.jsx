// import React, { useEffect, useReducer } from "react";
// import axios from "axios";
// // import ProductCard from "..//Components/ProductCard";
// import {
//   IconButton,
//   // Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   Heading,
//   useDisclosure,
//   Stack,
//   Button,
//   BoxProps,
//   FlexProps,
// } from "@chakra-ui/react";
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from "react-icons/fi";
// import { FiToggleRight } from "react-icons/fi";
// import { BsFillAwardFill } from "react-icons/bs";
// import Mens_Card from ".//Mens_Card";
// import { useState } from "react";
// import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
// import { useSearchParams } from "react-router-dom";
// // export default function Kids_pro() {
// //   const [mdata, setMdata] = useState([]);
// //   const getData = () => {
// //     axios
// //       .get("http://localhost:3040/Child_shoe")
// //       .then((res) => {
// //         setMdata(res.data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //   };

// //   useEffect(() => {
// //     getData();
// //   }, []);

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         width: "98%",
// //         margin: "auto",
// //         marginTop: "70px",
// //       }}
// //     >
// //       <div
// //         style={{
// //           border: "2px solid yellow",
// //           width: "20%",
// //         }}
// //       >
// //         {" "}
// //         <h1>sidebar</h1>
// //       </div>
// //       <div style={{ width: "80%" }}>
// //         <h1>Kidspro</h1>
// //         <Grid
// //           templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
// //           width={"90%"}
// //           margin={"auto"}
// //           gap={2}
// //         >
// //           {mdata?.length > 0 &&
// //             mdata?.map((e) => {
// //               return (
// //                 <GridItem id={e.id} w="100%" h="100%">
// //                   <Mens_Card
// //                     id={e.id}
// //                     title={e.title}
// //                     image1={e.image1}
// //                     image2={e.image2}
// //                     price={e.price}
// //                     discription={e.discription}
// //                     category={e.category}
// //                     brand={e.brand}
// //                   />
// //                 </GridItem>
// //               );
// //             })}
// //         </Grid>
// //       </div>
// //     </div>
// //   );
// // }
// import { BiBody } from "react-icons/bi";

// export default function Kids_pro({ children }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [mdata, setMdata] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [page, setPage] = useState(1);

//   let searchResult = searchParams.get("query");
//   // console.log(searchResult);
//   useEffect(() => {
//     getData(page);
//   }, [searchParams, page]);
//   const getData = (page) => {
//     axios
//       .get(`http://localhost:3040/all_pro?_limit=8&_page=${page}`)
//       .then((res) => {
//         // setMdata(res.data);
//         let data = res.data;
//         if (searchResult) {
//           data = data.filter((el) => {
//             searchResult = searchResult.toLowerCase();

//             return (
//               el.brand.toLowerCase().includes(searchResult) ||
//               el.category.toLowerCase().includes(searchResult) ||
//               el.title.toLowerCase().includes(searchResult)
//             );
//           });
//         }
//         setMdata(data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const handleChange = (val) => {
//     setPage(page + val);
//   };
//   return (
//     <Box minH="100vh" bg={useColorModeValue("teal.100", "gray.900")}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: "none", md: "block" }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {/*  {children}  */}
//         <Text margin={" 30px auto"}>Kidspro</Text>
//         <Grid
//           templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
//           width={"100%"}
//           marginTop={"50px"}
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
//         <div style={{}}>
//           <div
//             style={{
//               width: "30%",
//               display: "flex",
//               justifyContent: "center",
//               margin: "auto",
//             }}
//           >
//             <Stack direction="row" spacing={4} align="center">
//               <Button
//                 colorScheme="teal"
//                 variant="solid"
//                 isDisabled={page == 1}
//                 onClick={() => handleChange(-1)}
//               >
//                 ⬅️Prev
//               </Button>

//               <h3>{page}</h3>
//               <Button
//                 colorScheme="teal"
//                 variant="solid"
//                 onClick={() => handleChange(1)}
//               >
//                 Next➡️
//               </Button>
//             </Stack>
//           </div>
//         </div>
//       </Box>
//     </Box>
//   );
// }

// const SidebarContent = ({ onClose, ...rest }) => {
//   // const [mdata, setMdata] = useState([]);
//   // const getData = () => {
//   //   axios
//   //     .get("http://localhost:3040/Child_shoe")
//   //     .then((res) => {
//   //       setMdata(res.data);
//   //     })
//   //     .catch((err) => {
//   //       console.log(err);
//   //     });
//   // };

//   // useEffect(() => {
//   //   getData();
//   // }, []);

//   // const handleclick = () => {
//   //   let asc = mdata.sort((a, b) => a.price - b.price);
//   //   setMdata([...asc]);
//   // };

//   return (
//     <Box
//       bg={useColorModeValue("gray.100", "gray.900")}
//       borderRight="1px"
//       borderRightColor={useColorModeValue("gray.200", "gray.700")}
//       w={{ base: "full", md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Filter
//         </Text>
//         <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
//       </Flex>
//       <NavItem key="faizan" icon={FiHome}>
//         {" "}
//         Home
//       </NavItem>

//       <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
//         {" "}
//         Sort
//       </NavItem>

//       <NavItem key="faizan" icon={FiCompass}>
//         {" "}
//         Price Low to High
//       </NavItem>
//       <NavItem key="faizan" icon={FiCompass}>
//         {" "}
//         Price High to Low
//       </NavItem>

//       <NavItem fontSize={"20px"} key="faizan" icon={FiTrendingUp}>
//         {" "}
//         Filter
//       </NavItem>
//       <NavItem key="faizan" icon={FiStar}>
//         {" "}
//         Ratings
//       </NavItem>

//       <NavItem key="faizan" icon={BiBody}>
//         {" "}
//         Mens
//       </NavItem>
//       <NavItem key="faizan" icon={BiBody}>
//         {" "}
//         Womens
//       </NavItem>
//       <NavItem key="faizan" icon={BiBody}>
//         {" "}
//         Kids
//       </NavItem>
//       <NavItem key="faizan" icon={BsFillAwardFill}>
//         {" "}
//         Nike
//       </NavItem>

//       <NavItem key="faizan" icon={BsFillAwardFill}>
//         {" "}
//         Puma
//       </NavItem>
//     </Box>
//   );
// };

// const NavItem = ({ icon, children, ...rest }) => {
//   return (
//     <Link
//       href="#"
//       style={{ textDecoration: "none" }}
//       _focus={{ boxShadow: "none" }}
//     >
//       <Flex
//         align="center"
//         p="4"
//         bg={useColorModeValue("gray.100", "gray.900")}
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: "cyan.400",
//           color: "white",
//         }}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: "white",
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// const MobileNav = ({ onOpen, ...rest }) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       margin="50px 0"
//       position="fixed"
//       width="100%"
//       zIndex="1"
//       alignItems="center"
//       bg={useColorModeValue("gray.100", "gray.900")}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue("gray.200", "gray.700")}
//       justifyContent="flex-start"
//       {...rest}
//     >
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Filter
//       </Text>
//     </Flex>
//   );
// };
// // http://localhost:3040/products_women

import React, { useEffect, useReducer } from "react";
import axios from "axios";
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
  Heading,
  useDisclosure,
  Stack,
  Button,
  BoxProps,
  FlexProps,
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
import { useSearchParams } from "react-router-dom";
// export default function Kids_pro() {
//   const [mdata, setMdata] = useState([]);
//   const getData = () => {
//     axios
//       .get("http://localhost:3040/Child_shoe")
//       .then((res) => {
//         setMdata(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   useEffect(() => {
//     getData();
//   }, []);

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
//         <h1>Kidspro</h1>
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
import { BiBody } from "react-icons/bi";

export default function Kids_pro({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mdata, setMdata] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  let searchResult = searchParams.get("query");
  // console.log(searchResult);
  useEffect(() => {
    getData(page);
  }, [searchParams, page]);
  const getData = (page) => {
    axios
      .get(`http://localhost:3040/all_pro?_limit=8&_page=${page}`)
      .then((res) => {
        // setMdata(res.data);
        let data = res.data;
        if (searchResult) {
          data = data.filter((el) => {
            searchResult = searchResult.toLowerCase();

            return (
              el.brand.toLowerCase().includes(searchResult) ||
              el.category.toLowerCase().includes(searchResult) ||
              el.title.toLowerCase().includes(searchResult)
            );
          });
        }
        setMdata(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (val) => {
    setPage(page + val);
  };

  const handleltoh = () => {
    let asc = mdata.sort((a, b) => a.price - b.price);
    setMdata([...asc]);
    // alert("hello");
  };
  const handlehtol = () => {
    let desc = mdata.sort((a, b) => a.price - b.price);
    setMdata([...desc]);
    // alert("hello");
  };
  return (
    <Box minH="100vh" bg={useColorModeValue("teal.100", "gray.900")}>
      <SidebarContent
        onClick={handleltoh}
        // onClick={handlehtol}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />

      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        onClick={handleltoh}
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
      <MobileNav
        display={{ base: "flex", md: "none" }}
        onOpen={onOpen}
        onClick={handleltoh}
      />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {/*  {children}  */}
        <Text margin={" 30px auto"}>Kidspro</Text>
        <Grid
          templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
          width={"100%"}
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

const SidebarContent = ({ handleltoh, onClose, ...rest }) => {
  // const [mdata, setMdata] = useState([]);
  // const getData = () => {
  //   axios
  //     .get("http://localhost:3040/Child_shoe")
  //     .then((res) => {
  //       setMdata(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

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

      <NavItem onClick={handleltoh} key="faizan" icon={FiCompass}>
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

const NavItem = ({ handleltoh, icon, children, ...rest }) => {
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
        onClick={handleltoh}
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

const MobileNav = ({ handleltoh, onOpen, ...rest }) => {
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
      onClick={handleltoh}
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
