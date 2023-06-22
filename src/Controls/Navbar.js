import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { headerData } from "../Constant/config";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const navigateToPage = (path) => {
    navigate(path);
  };
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "block" }, marginLeft: "20px" }}>
        <Stack direction="row" spacing={2}>
          {headerData.map((item) => {
            return (
              <>
                <Stack
                  direction="row"
                  spacing={0.5}
                  onClick={() => navigateToPage(item.path)}
                >
                  <Box sx={{ cursor: "pointer" }}>{item.icons}</Box>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      width: " auto",
                      height: "20px",

                      fontFamily: "Poppins",
                      fontStyle: "normal",
                      fontWeight: 700,
                    }}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};
export default Navbar;
