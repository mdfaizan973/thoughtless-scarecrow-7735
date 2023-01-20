import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./cards.css";
import Simpleban from "./Simpleban";
export default function fpicCards2() {
  return (
    <>
      <Heading as="h1" size="xl" mt={6} mb={2}>
        PRODUCTS ON OFFER %
      </Heading>

      <div className="prople_card">
        <div>
          <img
            src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bf0c01da46d431899acaeae01154dd8_9366/disney-kermit-stan-smith-shoes.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            NikeCourt Zoom NXT
          </Heading>
        </div>
        <div>
          <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7eeac92ebef47ff90d3ae8900174861_9366/adidas-racer-tr21-x-lego-shoes.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Addidas Ultra Lite 3
          </Heading>
        </div>
        <div>
          <img
            src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7e6f4c4d9fe04523964eae9900c65984_9366/zx-8000-parley-shoes.jpg"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Puma Xtream Pro
          </Heading>
        </div>
        <div>
          <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/5db200e6dfbc48f981c3adce00638ece_9366/glowrun-reflective-shoes.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            LeBron XX Stuffer'
          </Heading>
        </div>
        <div>
          <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/1a318b7330c540558245aebe00d4a1d0_9366/marvel-black-panther-sl20.3-shoes.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Sega Xtream Ultra
          </Heading>
        </div>
        <div>
          <img src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/d3db59b86ac34334bcdbac1300fe5c42_9366/howzat-spike-20-shoes.jpg" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Air XX Stocking
          </Heading>
        </div>
      </div>
    </>
  );
}
