import React from "react";
import { Heading, Text } from "@chakra-ui/react";
import "./cards.css";
export default function fpicCards() {
  return (
    <>
      <Heading as="h1" size="xl" mt={6} mb={2}>
        OUR LATEST NEWS
      </Heading>

      <div className="prople_card">
        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/1f578f68-d09e-4b51-8daa-1c64057f22e4/nikecourt-air-zoom-gp-turbo-naomi-osaka-hard-court-tennis-shoes-flqgJG.png"
            alt=""
          />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            NikeCourt Zoom NXT
          </Heading>
        </div>
        <div>
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/e1fad52f-45c3-42db-95a2-e1937b32ea0e/nikecourt-zoom-vapor-cage-4-rafa-hard-court-tennis-shoes-cS7wct.png" />
          <Heading as="h1" size="sm" mt={6} mb={2}>
            Addidas Ultra Lite 3
          </Heading>
        </div>
        <div>
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/1f578f68-d09e-4b51-8daa-1c64057f22e4/nikecourt-air-zoom-gp-turbo-naomi-osaka-hard-court-tennis-shoes-flqgJG.png"
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
          <img src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.3/w_467,c_limit/db4ea9b3-e39f-4683-ae00-742a509a6a4b/nikecourt-zoom-pro-hard-court-tennis-shoes-gDWhmG.png" />
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
    </>
  );
}
