import React from "react";
import "./cards.css";
import { Link as RouterLink } from "react-router-dom";
export default function Simpleban() {
  return (
    <>
      <div className="smpban">
        <RouterLink to="/mens_pro">
          <div className="div1">
            <img src="./md faizan.png" />
          </div>
        </RouterLink>
        <RouterLink to="/mens_pro">
          <div className="div2">
            <img src="./www.fz_shop.com.png" />
          </div>
        </RouterLink>
      </div>
    </>
  );
}
