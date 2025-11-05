import React from "react";
import {
  Box,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";

const TravelContacts = () => {
  return (
    <Box id="travel-contacts">
      <Typography
        align="center"
        sx={{
          fontSize: { xs: "20px", sm: "24px", md: "30px" },
          mt: 4,
          mb: 4,
          p: 2,
          border: "1px dotted #00001c",
          color: 'rgba(0, 6, 58, 1)'
        }}
      >
        TRAVEL ACADEMY CONTACTS
      </Typography>

      <Paper sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Age Group</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Girls U9-U19</TableCell>
              <TableCell>Mark Nash, Brian Ellsayed</TableCell>
              <TableCell>mlnash73@aol.com, brianellsayed@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boys U9,U10,U12</TableCell>
              <TableCell>Matthew Mannina</TableCell>
              <TableCell>mmlgn9@gmail.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boys U11,U13</TableCell>
              <TableCell>Dave Hickman</TableCell>
              <TableCell>davidhickman886@yahoo.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Boys U14-U19</TableCell>
              <TableCell>Frank Stagnitta</TableCell>
              <TableCell>fstagnittasoccer@gmail.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default TravelContacts;
