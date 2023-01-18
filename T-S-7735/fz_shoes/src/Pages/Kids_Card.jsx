import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

// http://localhost:3040/products_mens

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Kids_Card({
  id,
  title,
  image1,
  image2,
  price,
  discription,
  category,
  brand,
}) {
  // Child_shoe
  return (
    <Center py={6}>
      <RouterLink to={`/Child_shoe/${id}`}>
        <Box
          maxW={"270px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"md"}
          overflow={"hidden"}
        >
          <Image h={"120px"} w={"full"} src={image1} objectFit={"cover"} />
          <Flex justify={"center"} mt={-12}>
            <Avatar
              size={"xl"}
              src={image2}
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={"center"} mb={5}>
              <Heading fontSize={"2xl"} fontWeight={400} fontFamily={"body"}>
                {title.substring(0, 15)}
              </Heading>
              <Text color={"gray.500"}>{brand}</Text>
              <Text color={"grey"}>{discription.substring(0, 45) + "..."}</Text>
              <Text color={"black"}>{category}</Text>
            </Stack>

            <Stack direction={"row"} justify={"center"} spacing={6}>
              <Stack spacing={0} align={"center"}>
                <Text fontWeight={600}> ₹ {price} </Text>
                <Text textDecoration={"line-through"}> ₹{price * 1.7}</Text>

                <Text fontSize={"sm"} color={"gray.500"}>
                  {" "}
                </Text>
              </Stack>
            </Stack>

            <Button
              w={"full"}
              mt={8}
              bg={useColorModeValue("#151f21", "gray.900")}
              color={"white"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              Add_Cart
            </Button>
          </Box>
        </Box>
      </RouterLink>
    </Center>
  );
}
