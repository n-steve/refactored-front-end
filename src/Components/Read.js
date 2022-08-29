import React, { useState } from "react";
import TableData from "./TableData";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import SelectRandom from "./SelectRandom";

function Read({ data, deleteData, setData }) {
  const [select, isSelect] = useState(false);

  const updateData = (updatedData) => {
    const update = data.map((i) => (i.id === updatedData ? select : i));
    isSelect(update);
  };

  return (
    <>
      <form>
        <Table>
          <TableHead>
            <TableRow className="read" hover>
              <TableCell>Food</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Review</TableCell>
              <TableCell>Scale</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((i) => (
              <>
                {select === i.id ? (
                  <SelectRandom />
                ) : (
                  <TableData
                    key={i.id}
                    apiData={i}
                    id={i.id}
                    deleteData={deleteData}
                    updateData={updateData}
                  />
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </form>
    </>
  );
}

export default Read;
// key={`${index}-${i.id}`}
// getId={i.id}
// food_name={i.food_name}
// location={i.location}
// r_name={i.r_name}
// review={i.review}
// scale={i.scale}
// deleteData={deleteData}
// updateData={updateData}
// key={`${i}-${apiData.id}`}

// updateData={updateData}
