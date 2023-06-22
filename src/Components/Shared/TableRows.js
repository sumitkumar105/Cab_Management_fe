import React from "react";
import { TableCell, TableRow, Button } from "@mui/material";

const TableRows = ({ tableResult }) => {
  return (
    <>
      <TableRow key={tableResult.name}>
        <TableCell>{tableResult.name}</TableCell>
        <TableCell>{tableResult.name}</TableCell>
        <TableCell>{tableResult.calories}</TableCell>
        <TableCell>{tableResult.fat}</TableCell>
        <TableCell>
          <Button variant="contained">Update</Button>
        </TableCell>
        <TableCell>
          <Button variant="contained">Delete</Button>
        </TableCell>
      </TableRow>
    </>
  );
};
export default TableRows;
