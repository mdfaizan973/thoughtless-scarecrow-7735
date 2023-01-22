import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SingleCart from "./SingleCart";
import FpicCards2 from "..//Cards/FpicCards2";
import FpicCards from "..//Cards/FpicCards";
import { Link as RouterLink } from "react-router-dom";
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
  const [qty, setQty] = useState([]);
  const getdataCart = () => {
    axios
      .get(`http://localhost:3040/cartitems`)
      .then((res) => {
        // console.log("mydata", res.data.title);
        setData(res.data);
        let arr = new Array(res.data.length).fill(1);
        setQty(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getdataCart();
  }, []);

  let sum = 0;
  for (let i = 0; i < cdata.length; i++) {
    sum += +cdata[i].price * qty[i];
  }
  let totalcart = cdata.length;
  console.log("cdata", totalcart);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ marginTop: "90px" }}>
          <Heading>Cart</Heading>
          {cdata.map((el, i) => (
            <SingleCart
              key={el.id}
              element={el}
              qty={qty}
              setQty={setQty}
              i={i}
            />
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
              <StatNumber> Order Total : ₹ {sum} </StatNumber>
              <StatHelpText>
                {" "}
                Discount : ₹ {(sum * 1.7).toFixed(2)}{" "}
              </StatHelpText>
              <StatHelpText>Total Cart : {totalcart} </StatHelpText>
              <StatHelpText> Delivery : Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <br />
            <RouterLink to="/payment">
              <Button colorScheme="blue">Proceed to Cheackout</Button>
            </RouterLink>
            <br /> <br />
          </Container>
        </div>
      </div>
      <FpicCards2 />
      <FpicCards />
    </div>
  );
}
