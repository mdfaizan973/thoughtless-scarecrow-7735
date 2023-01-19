import React from "react";

import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  useColorModeValue,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";

export default function LastFoot() {
  return (
    <Box
      bg={useColorModeValue("gray.200", "gray.900")}
      px={4}
      color={useColorModeValue("black", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <img width="20%" src="http://localhost:3001/logo.png.png" />

        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={"row"} spacing={6}>
            <Text label={"Twitter"} href={"#"}>
              <FaTwitter />
            </Text>
            <Text label={"YouTube"} href={"#"}>
              <FaYoutube />
            </Text>
            <Text label={"Instagram"} href={"#"}>
              <FaInstagram />
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
