import React, { useState } from "react";
import { ShowType } from "../api";
import {
  Button,
  CardActionArea,
  FormControl,
  Grid,
  InputBase,
  Box,
  Paper,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ShowCard from "./ShowCard";
import useFavouritesId from "../hooks/useFavouritesId";
import useFavouritesFromApi from "../hooks/useFavouritesFromApi";
import Navbar from "./Navbar";

function FavouritesPage() {
  const favouriteIds = useFavouritesId();
  const shows = useFavouritesFromApi(favouriteIds);
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        {shows.map((element, i) => {
          return (
            <Grid item key={i}>
              <ShowCard show={element} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default FavouritesPage;
