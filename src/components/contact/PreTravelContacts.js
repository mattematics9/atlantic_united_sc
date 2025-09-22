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

const PreTravelContacts = () => {
  return (
    <Box id="pre-travel-contacts">
      <Typography
        align="center"
        sx={{
          fontSize: { xs: "20px", sm: "24px", md: "30px" },
          mt: 4,
          mb: 4,
          p: 2,
          border: "1px dotted #00001c",
        }}
      >
        PRE-TRAVEL ACADEMY CONTACTS
      </Typography>

      <Paper sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Club</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Three Village</TableCell>
              <TableCell>Stony Brook</TableCell>
              <TableCell>Leigh Pilkington</TableCell>
              <TableCell>trainasap@yahoo.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LGN</TableCell>
              <TableCell>Selden</TableCell>
              <TableCell>Dave Hickman</TableCell>
              <TableCell>davidhickman886@yahoo.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default PreTravelContacts;
