import * as React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../Card";

const MultipleCardsComponent = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
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
      <Grid container spacing={3}>
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
  );
};

export default MultipleCardsComponent;
