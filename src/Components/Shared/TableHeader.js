import React from "react";
import { TableCell, TableRow } from "@mui/material";

const TableHeader = () => {
  return (
    <>
      <TableRow sx={{ backgroundColor: "skyblue" }}>
        <TableCell>Id</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Phone Number</TableCell>
        <TableCell>update</TableCell>
        <TableCell>delete</TableCell>
      </TableRow>
    </>
  );
};
export default TableHeader;
