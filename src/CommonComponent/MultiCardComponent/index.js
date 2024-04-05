import * as React from "react";
import { Container, Grid } from "@mui/material";
import CardComponent from "../Card";

const MultiCardComponent = () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CardComponent />
        </Grid>
        <Grid item xs={6} md={6}>
          <CardComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CardComponent />
        </Grid>
        <Grid item xs={6} md={6}>
          <CardComponent />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CardComponent />
        </Grid>
        <Grid item xs={6} md={6}>
          <CardComponent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MultiCardComponent;
