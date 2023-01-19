import React from "react";
import {
  Button,
  CardActionArea,
  FormControl,
  Grid,
  InputBase,
  Box,
  Paper,
  CardMedia,
  Card,
  Typography,
} from "@mui/material";
import { ShowType } from "../api";
import usesFavourites from "../hooks/usesFavourites";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { addFavourite, removeFavourite } from "./firebaseRealtimeDB";

interface PropTypes {
  show: ShowType;
}

function ShowCard({ show }: PropTypes) {
  const isFavourite = usesFavourites(show.id);
  const { user } = UserAuth();

  return (
    <Card style={{ height: "25rem", width: "15rem" }}>
      <CardMedia
        component="img"
        image={show.image}
        style={{
          maxWidth: "100%",
          height: "80%",
          objectFit: "cover",
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {isFavourite ? (
          <Icon.HeartFill
            style={{
              fontSize: "1.4rem",
            }}
            onClick={() => removeFavourite(user?.uid, show.id)}
          ></Icon.HeartFill>
        ) : (
          <Icon.Heart
            style={{
              fontSize: "1.4rem",
            }}
            onClick={() => addFavourite(user?.uid, show.id)}
          ></Icon.Heart>
        )}
        <Link style={{ textDecoration: "none" }} to={`/shows/${show.id}`}>
          <Typography
            variant="subtitle1"
            component="div"
            style={{
              height: "20%",
              textAlign: "center",
              fontSize: "1.2rem",
              margin: 5,
            }}
          >
            {show.title}
          </Typography>
        </Link>
      </Box>
    </Card>
  );
}

export default ShowCard;
