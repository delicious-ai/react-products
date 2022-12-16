import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#282c34",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <img src={logo} className="App-logo" alt="logo" />
        <Typography
          sx={{ marginTop: 8, color: "white", textAlign: "center" }}
          variant="h5"
        >
          Follow the instruction in the Instructions.md file
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
