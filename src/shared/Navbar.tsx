import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { UserAuth } from "../context/AuthContext";
import FavouritesPage from "./FavouritesPage";
import { Link } from "react-router-dom";

function Navbar() {
  const { user } = UserAuth();

  return (
    // <>Balls</>
    <AppBar
      sx={{
        position: "sticky",
        top: 0,
        margin: 0,
        mb: 5,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <Link style={{textDecoration: "none"}} to="/home">
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                color: "white",
                mr: 2,
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
              }}
            >
              TvMaze
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Go to favourites">
              <IconButton sx={{ p: 0 }}>
                <Link to={"/favourites"}>
                  <Avatar
                    sx={{ background: "white" }}
                    src={`https://api.dicebear.com/5.x/identicon/svg?seed=${user?.uid}`}
                  />
                </Link>
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
