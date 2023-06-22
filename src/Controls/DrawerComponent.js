import React from "react";
import {
  Stack,
  Box,
  Typography,
  Drawer,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { headerData } from "../Constant/config";
const DrawerComponent = ({ open, setOpen }) => {
  return (
    <>
      <Box>
        <Drawer
          sx={{
            width: 240,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 240,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "8px",
              // necessary for content to be below app bar

              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" spacing={0.5}>
              <Box sx={{ cursor: "pointer" }}>{headerData[0].icons}</Box>
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
                {headerData[0].title}
              </Typography>
            </Stack>
            <IconButton onClick={() => setOpen(false)}>
              {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </Box>
          <Divider />
          <List>
            {headerData.map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{text.icons}</ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </>
  );
};
export default DrawerComponent;
