import React from "react";
import { Box, Heading, Text, Image, Card } from "@chakra-ui/react";
// import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";

import Pro_btn from "../pro_cat_btn/Pro_btn";
import Cards from "..//Cards/Cards";
export default function Home() {
  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
        <Image width="100%" src="./md faizanpgo.png" alt="" />
      </Box>

      <Pro_btn />

      <Cards />
    </div>
  );
}
