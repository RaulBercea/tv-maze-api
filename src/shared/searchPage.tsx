import {
  Button,
  CardActionArea,
  FormControl,
  Grid,
  InputBase,
  Paper,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { getShowsBySearch, ShowType } from "../api";

// mui card
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [currentSearch, setCurrentSearch] = useSearchParams();
  const [shows, setShows] = useState<ShowType[]>([]);

  const handleOnSearchChange = useCallback(
    (query: string) => {
      setCurrentSearch({ search: query });
    },
    [setCurrentSearch]
  );

  /**
   * Disables the search button if the search query is empty
   * @returns weather the button is disabled or not
   */
  const isSearchButtonDisabled = () =>
    currentSearch.get("search")?.trim().length === 0;

  const handleOnSearch = useCallback(() => {
    getShowsBySearch(currentSearch?.get("search") || "").then((res) =>
      setShows(res)
    );
  }, [currentSearch]);

  useEffect(() => {
    const currentSearchStr = currentSearch?.get("search")?.trim();
    if (
      !!currentSearchStr &&
      currentSearchStr.length > 0 &&
      shows.length === 0
    ) {
      handleOnSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleOnSearch]);

  return (
    <>
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
                  handleOnSearchChange(e.target.value);
                }}
                value={currentSearch.get("search") || ""}
                autoFocus
              />
            </FormControl>
            <FormControl>
              <Button
                onClick={handleOnSearch}
                disabled={isSearchButtonDisabled()}
              >
                Search
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        {shows.map((element, i) => {
          return (
            <Grid item key={i}>
              <Link
                style={{ textDecoration: "none" }}
                to={`/shows/${element.id}`}
              >
                <Card style={{ height: "25rem", width: "15rem" }}>
                  <CardActionArea
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={element.image}
                      style={{
                        maxWidth: "100%",
                        height: "80%",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      variant="h5"
                      component="div"
                      style={{
                        height: "20%",
                        textAlign: "center",
                        margin: 5,
                      }}
                    >
                      {element.title}
                    </Typography>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default SearchPage;
