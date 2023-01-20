import React from "react";
import styled from "styled-components";
import "./cards.css";
import FpicCards from "./FpicCards";
import { Link as RouterLink, Router } from "react-router-dom";
export default function Cards() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h1> Brands </h1>
      <Container className="cards">
        <RouterLink to="/brands">
          <Wrap>
            <img
              src="https://www.tailorbrands.com/wp-content/uploads/2021/09/Adidas-trefoil-logo.jpg"
              alt=""
            />
          </Wrap>
        </RouterLink>
        <RouterLink to="/brands">
          <Wrap>
            <img
              src="https://www.tailorbrands.com/wp-content/uploads/2021/09/Adidas-trefoil-logo.jpg"
              alt=""
            />
          </Wrap>
        </RouterLink>
        <RouterLink to="/brands">
          <Wrap>
            <img
              src="https://www.tailorbrands.com/wp-content/uploads/2021/09/Adidas-circle-logo.jpg"
              alt=""
            />
          </Wrap>
        </RouterLink>
        <RouterLink to="/brands">
          <Wrap>
            <img
              src="https://www.tailorbrands.com/wp-content/uploads/2021/09/Adidas-three-parallel-stripes-logo.jpg"
              alt=""
            />
          </Wrap>
        </RouterLink>
      </Container>
      <FpicCards />
    </div>
  );
}

const Container = styled.div`
  margin-top: 30px;
  display: flex !important;
  grid-tepmlete-cimport { Heading } from '@chakra-ui/react';
olumns: repeat(4, 1fr);
  padding: 30px 0 26px;
  grid-gap: 25px;
`;
const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid black;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    transform: scale(0.9);
    border-color: grey;
  }
`;
