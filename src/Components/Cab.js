import React from "react";
import { Stack, Button } from "@mui/material";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { rows } from "../Constant/config";
import TableListing from "./Shared/TableListing";
import AdddetailsForm from "../Controls/AdddetailsForm";
const Cab = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <Stack dirction="column" spacing={4} sx={{ marginTop: "20px" }}>
      <Button
        sx={{ width: "15%", marginLeft: "30px" }}
        variant="contained"
        endIcon={<TimeToLeaveIcon />}
        onClick={handleOpen}
      >
        Add Cab
      </Button>
      <AdddetailsForm open={open} setOpen={setOpen} type="CAR" />
      <TableListing rows={rows} />
    </Stack>
  );
};
export default Cab;
