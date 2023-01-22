import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleCart from "./SingleCart";
import FpicCards2 from "..//Cards/FpicCards2";
import FpicCards from "..//Cards/FpicCards";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
import {
  Flex,
  Spacer,
  ButtonGroup,
  Button,
  Box,
  Container,
} from "@chakra-ui/react";
import { Input, Text, InputGroup, InputLeftAddon } from "@chakra-ui/react";
// import TransitionExample from "./SingleCart";
import { Heading } from "@chakra-ui/react";
export default function Cartpage() {
  const [cdata, setData] = useState([]);
  const [total_price, settotal_price] = useState(0);

  const getdataCart = () => {
    axios
      .get(`http://localhost:3040/cartitems`)
      .then((res) => {
        // console.log("mydata", res.data.title);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdataCart();
  }, []);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "90px" }}>
          <Heading>Cart</Heading>
          {cdata.map((el) => (
            <SingleCart key={el.id} element={el} arr={cdata} />
          ))}
        </div>

        <div style={{ width: "30%", marginTop: "130px" }}>
          <Container
            maxW="2xl"
            // centerContent
            border="1px solid grey"
            padding="10px"
          >
            <Box padding="4" maxW="md">
              <Heading> Order Summary </Heading>
              <hr />
            </Box>{" "}
            <Stat>
              <InputGroup>
                <InputLeftAddon children="Apply Code" />
                <Input type="tel" placeholder="Enter Code" />
              </InputGroup>
              <br />
              <StatNumber> Order Total : ₹ 22220.00</StatNumber>
              <StatHelpText> Discount : ₹ 19939</StatHelpText>
              <StatHelpText>Total Cart : 4</StatHelpText>
              <StatHelpText> Delivery : Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <br />
            <Button colorScheme="blue">Proceed to Cheackout</Button>
            <br /> <br />
          </Container>
        </div>
      </div>
      <FpicCards2 />
      <FpicCards />
    </div>
  );
}
