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

  // const total_price = 0;
  // cdata.forEach((elems) => {

  //       // console.log("data: ", cdata[i].price);
  //   settotal_price((total_price += elems.price));
  // })

  // }
  // console.log("total_price: ", total_price);
  // let totalCount = cdata.length;
  // console.log("cdata:: ", cdata.data.price);
  // let ffgg = localStorage.setItem("totalcart", totalCount);
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

        <div
          style={{ width: "30%", marginTop: "130px", border: "2px solid red" }}
        >
          <Container maxW="2xl" centerContent>
            <Box padding="4" maxW="md">
              <Heading> Order Summary </Heading>
            </Box>{" "}
            <Stat>
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>£0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <Button colorScheme="blue">Proceed to Cheackout</Button>
          </Container>
        </div>
      </div>
      <FpicCards2 />
      <FpicCards />
    </div>
  );
}
