import {
  Button,
  CardActionArea,
  FormControl,
  Grid,
  InputBase,
  Box,
  Paper,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getShowsBySearch, ShowType } from "../api";
import ShowCard from "./ShowCard";

// mui card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, useSearchParams } from "react-router-dom";
import { auth } from "../firebase";
import usesFavourites from "../hooks/usesFavourites";
import Navbar from "./Navbar";

const SearchPage = () => {
  const [currentSearchUrl, setCurrentSearchUrl] = useSearchParams();
  const [shows, setShows] = useState<ShowType[]>([]);
  const [currentSearch, setCurrentSearch] = useState("");
  

  const handleOnSearch = async () => {
    if(!currentSearchUrl.get("search")){
      setShows([]);
      return;
    }

    const showsRes = await getShowsBySearch(currentSearchUrl.get("search") as string);
    setShows(showsRes);
  }

  useEffect(() => {
    handleOnSearch();
  }, [currentSearchUrl]);

  return (
    <>
    <Navbar/>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Grid item style={{ padding: "2em" }} xs={12}>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            style={{ padding: "1rem", width: "400px", margin: "auto" }}
            autoComplete="off"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <FormControl>
              <InputBase
                id="outlined-basic"
                placeholder="Search by title..."
                onChange={(e) => {
                  e.preventDefault();
                  setCurrentSearch(e.target.value);
                }}
                value={currentSearch}
                autoFocus
              />
            </FormControl>
            <FormControl>
              <Button
                onClick={()=>setCurrentSearchUrl({search:currentSearch})}
              >
                Search
              </Button>
            </FormControl>
          </Paper>
        </Grid>
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
};

export default SearchPage;
