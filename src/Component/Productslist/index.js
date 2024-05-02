import React from "react";
import CardComponent from "../../CommonComponent/Card";
import { Grid, Container } from "@mui/material";
import CarouselComponent from "../../CommonComponent/CarouselComponent";
import MultiCardComponent from "../../CommonComponent/MultiCardComponent";
import SingleCardComponent from "../../CommonComponent/SingleCard";
import PaperComponent from "../../CommonComponent/PaperComponent";
import VideoCardComponent from "../../CommonComponent/VideoCardComponent";
import MultipleCardsComponent from "../../CommonComponent/MultipleCardsComponent";

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
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <PaperComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
        </Grid>
      </Container>
      <MultipleCardsComponent />
      <MultipleCardsComponent />
      <Container>
        <Grid spacing={2}>
          <Grid item xs={6} md={6}>
            <VideoCardComponent />
          </Grid>
          <Grid item xs={6} md={6}>
            <PaperComponent />
          </Grid>
        </Grid>
      </Container>

      <MultipleCardsComponent />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <SingleCardComponent />
          </Grid>
          <Grid item xs={6} md={6}>
            <PaperComponent />
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
        </Grid>
      </Container>
      <CarouselComponent />

      <Container>
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
          <Grid item xs={4} md={4}>
            <SingleCardComponent />
          </Grid>
        </Grid>
      </Container>
    </>
    // <div>
    //   <CardComponent />
    // </div>
  );
};

export default ProductsList;
