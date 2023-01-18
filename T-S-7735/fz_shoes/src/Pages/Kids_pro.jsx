import React from "react";
import Mens_Card from ".//Mens_Card";
import { useState, useEffect } from "react";
import axios from "axios";
import { SimpleGrid, Box, GridItem, Grid } from "@chakra-ui/react";
export default function Kids_pro() {
  const [mdata, setMdata] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:3040/Child_shoe")
      .then((res) => {
        setMdata(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log("data:", mdata);
  return (
    <div
      style={{
        display: "flex",
        width: "98%",
        margin: "auto",
      }}
    >
      <div
        style={{
          border: "2px solid yellow",
          width: "20%",
        }}
      >
        {" "}
        <h1>sidebar</h1>
      </div>
      <div style={{ width: "80%" }}>
        <h1>Kidspro</h1>
        <Grid
          templateColumns={{ sm: "1fr", sm: "repeat(4, 1fr)" }}
          width={"90%"}
          margin={"auto"}
          gap={2}
        >
          {mdata?.length > 0 &&
            mdata?.map((e) => {
              return (
                <GridItem id={e.id} w="100%" h="100%">
                  <Mens_Card
                    id={e.id}
                    title={e.title}
                    image1={e.image1}
                    image2={e.image2}
                    price={e.price}
                    discription={e.discription}
                    category={e.category}
                    brand={e.brand}
                  />
                </GridItem>
              );
            })}
        </Grid>
      </div>
    </div>
  );
}
