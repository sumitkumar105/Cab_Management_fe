import React from "react";
import { Grid, Box, Stack, Typography } from "@mui/material";
import SelectComponent from "../Controls/SelectComponent";
import carImage from "../Assets/pngimg 1.png";
const HomePage = () => {
  return (
    <Box
      sx={{
        marginTop: "10px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-around" }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Box
            sx={{
              height: "500px",
              width: "100%",
              //   backgroundColor: "red",
            }}
          >
            <Stack direction="column" sx={{ marginLeft: "30px" }} spacing={8}>
              <Box
                sx={{
                  height: "50px",
                  width: "180px",
                  backgroundColor: "#FFE769",
                  marginTop: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: " normal",
                    fontWeight: 300,
                    fontSize: "32px",
                    lineHeight: "20px",
                    /* or 31% */

                    color: " #000000",
                  }}
                >
                  Let’s book
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: " normal",
                  fontWeight: 700,
                  fontSize: "55px",
                  lineHeight: "20px",
                  /* or 31% */

                  color: " #000000",
                }}
              >
                YOUR DREAM CAB
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Inter",
                  fontStyle: " normal",
                  fontWeight: 700,
                  fontSize: "55px",
                  lineHeight: "20px",
                  /* or 31% */

                  color: " #FFE769",
                }}
              >
                CAB
              </Typography>
            </Stack>
            <Box
              sx={{
                height: "230px",
                width: "45%",
                backgroundColor: "#808080",
                borderRadius: " 0px 0px 20px 0px",
                marginLeft: "25px",
                position: "absolute",
                marginTop: "55px",
                padding: "10px 0px 10px 0px",
              }}
            >
              <SelectComponent />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <Box
            sx={{
              textAlign: "center",
              height: "595px",
              width: "100%",
              background: "#FFE769",
              borderRadius: " 0px 0px 0px 20px",
            }}
          >
            <Box>
              <img style={{ margin: "40px" }} src={carImage} alt="car" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default HomePage;
