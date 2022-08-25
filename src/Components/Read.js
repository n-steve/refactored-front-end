import React from "react";
// import  from "./Table";
import {
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
} from "@mui/material";

function Read(props) {
  return (
    <Table size="medium">
      <TableHead>
        <TableRow>
          <TableCell>Food</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Review</TableCell>
          <TableCell>Scale</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{food_name}</TableCell>
          <TableCell>{location}</TableCell>
          <TableCell>{review}</TableCell>
          <TableCell>{scale}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default Read;
