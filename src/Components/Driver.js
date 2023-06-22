import React, { useState } from "react";
import { Stack, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import TableListing from "./Shared/TableListing";
import { rows } from "../Constant/config";
import AdddetailsForm from "../Controls/AdddetailsForm";

const Driver = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Stack dirction="column" spacing={4} sx={{ marginTop: "20px" }}>
      <Button
        sx={{ width: "15%", marginLeft: "30px" }}
        variant="contained"
        endIcon={<PersonIcon open={open} setOpen={setOpen} />}
        onClick={handleOpen}
      >
        Add Driver
      </Button>
      <AdddetailsForm open={open} setOpen={setOpen} type="DRIVER" />
      <TableListing rows={rows} />
    </Stack>
  );
};
export default Driver;
