import React, { useState } from "react";
import { Stack, Box, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { rightheader } from "../Constant/config";
import Navbar from "../Controls/Navbar";
import DrawerComponent from "../Controls/DrawerComponent";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenprofile = (item) => {
    if (item === "KeyboardArrowDownIcon") {
      setOpenProfile(true);
    }
  };
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          width: "100vw",
          height: "10vh",
          // backgroundColor: "grey",
        }}
      >
        <Box
          sx={{
            marginLeft: "20px",
            display: { xs: "block", md: "none", lg: "none" },
          }}
        >
          <MenuIcon onClick={() => setOpen(true)} />
        </Box>
        {open && <DrawerComponent open={open} setOpen={setOpen} />}

        <Navbar />
        <Box sx={{ marginRight: "20px" }}>
          <Stack direction="row" spacing={2} alignItems="center">
            {rightheader.map((item) => {
              return (
                <>
                  <Box
                    sx={{ cursor: "pointer" }}
                    onClick={() => handleOpenprofile(item.name)}
                  >
                    {item.icons}
                  </Box>
                </>
              );
            })}
          </Stack>
          {openProfile && (
            <Box>
              <Menu
                id="basic-menu"
                // anchorEl={anchorEl}
                open={openProfile}
                onClose={() => setOpenProfile(false)}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ marginLeft: "90%" }}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Stack>
    </Box>
  );
};
export default Header;
