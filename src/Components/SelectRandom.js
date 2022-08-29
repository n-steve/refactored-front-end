import { Add } from "@mui/icons-material";
import {
  TableRow,
  TableCell,
  TextField,
  Rating,
  IconButton,
} from "@mui/material";
import React from "react";

function SelectRandom() {
  return (
    <>
      <TableRow>
        <TableCell>
          <TextField type="text"></TextField>
        </TableCell>
        <TableCell>
          <TextField type="text"></TextField>
        </TableCell>
        <TableCell>
          <TextField type="text"></TextField>
        </TableCell>
        <TableCell>
          <Rating></Rating>
        </TableCell>
        <TableCell>
          <IconButton>
            <Add />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  );
}

export default SelectRandom;
