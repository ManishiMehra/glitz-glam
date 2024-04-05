import React from "react";
import CardComponent from "../../CommonComponent/Card";
import { Grid, Container } from "@mui/material";
import CarouselComponent from "../../CommonComponent/CarouselComponent";
import MultiCardComponent from "../../CommonComponent/MultiCardComponent";
import SingleCardComponent from "../../CommonComponent/SingleCard";

const ProductsList = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <CardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <CardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <CardComponent />
          </Grid>
        </Grid>
      </Container>
      <CarouselComponent />
      <MultiCardComponent />
      <SingleCardComponent />
    </>
    // <div>
    //   <CardComponent />
    // </div>
  );
};

export default ProductsList;
