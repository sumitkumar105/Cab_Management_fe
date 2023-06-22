import React from "react";
import { Stack, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const ErrorMessage = ({ name }) => {
  return (
    <>
      <Stack
        direction="row"
        // justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <ErrorOutlineIcon sx={{ fontSize: "25px", color: "red" }} />
        <Typography variant="h6" sx={{ color: "red" }}>
          {name} is required.
        </Typography>
      </Stack>
    </>
  );
};
export default ErrorMessage;
