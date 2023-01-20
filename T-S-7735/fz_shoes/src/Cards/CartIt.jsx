import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./cards.css";
import Simpleban from "./Simpleban";
export default function CartIt() {
  return (
    <div className="cartcat">
      <hr size="5px" />

      <Heading as="h1" size="xl" mt={6} mb={2}>
        OUR LATEST PRODUCTS
      </Heading>

      <Text width="80%" margin="auto">
        This is a celebration of everything that moves you. For the power of
        choosing and the freedom of being. Here’s to the big, beautiful mess of
        movement and mindfulness that simply makes you feel good. ShopWatch
      </Text>

      <div className="prople_card">
        <div>
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/f9522b40-4cc5-4fd2-b6fe-27f60b3ba886/air-max-97-og-shoes-pKxPsp.png"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            NikeCourt Zoom NXT
          </Heading>
        </div>
        <div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/561d8b68-bc31-498c-a360-882b4f5ab3d9/air-max-270-shoes-GMBL00.png" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Addidas Ultra Lite 3
          </Heading>
        </div>
        <div>
          <img
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/68c28c49-4c26-4f81-9b4e-0e9760edcef9/air-max-alpha-trainer-5-training-shoes-x8Jzj6.png"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Puma Xtream Pro
          </Heading>
        </div>
        <div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/e1fad52f-45c3-42db-95a2-e1937b32ea0e/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            LeBron XX Stuffer'
          </Heading>
        </div>
        <div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/b1d3cf2e-0dca-4f6d-97ff-21006c346e8e/air-jordan-1-retro-high-og-shoes-Pz6fZ9.png" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Sega Xtream Ultra
          </Heading>
        </div>
        <div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/ff4a2f6e-9f67-42ba-abbc-022fecd10db9/nikecourt-air-zoom-vapor-pro-2-hard-court-tennis-shoes-M9c7Rs.png" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Air XX Stocking
          </Heading>
        </div>
      </div>

      <Simpleban />
    </div>
  );
}
