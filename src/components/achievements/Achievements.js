import React from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import StarIcon from "@mui/icons-material/Star";

const Stat = ({ icon, label, value, chipColor = "primary" }) => (
  <Paper
    elevation={8}
    sx={{
      p: 3,
      bgcolor: "rgba(13, 71, 161, 0.08)",
      border: (t) => `1px solid ${t.palette.primary.main}22`,
      backdropFilter: "blur(6px)",
    }}
  >
    <Stack spacing={1.5} alignItems="flex-start">
      <Chip
        icon={icon}
        label={label}
        color={chipColor}
        variant="filled"
        sx={{ fontWeight: 700 }}
      />
      <Typography variant="h4" fontWeight={800} color="white">
        {value}
      </Typography>
    </Stack>
  </Paper>
);

export default function Achievements() {
  return (
      <Box id="achievements" sx={{ bgcolor: "#0a0d14", color: "#e9eef6" }}>

        {/* ACHIEVEMENTS STRIP */}
        <Box sx={{ py: 6 }}>
          <Grid container spacing={3} justifyContent='center'>
            <Grid item xs={12} md={3} sx={{maxWidth: '350px'}}>
              <Stat icon={<StarIcon />} label="National Stage" value="#1 Ranked Teams in the Nation"/>
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '350px'}}>
              <Stat icon={<EmojiEventsIcon />} label="National Stage" value="3 National Champions" chipColor="secondary"/>
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '350px'}}>
              <Stat icon={<EmojiEventsIcon />} label="National Stage" value="6 National Finalists"/>
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '350px'}}>
              <Stat icon={<EmojiEventsIcon />} label="Eastern Regionals" value="8 Regional Champions" chipColor="secondary"/>
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '350px'}}>
              <Stat icon={<EmojiEventsIcon />} label="State Dominance" value="26 NY State Champions"/>
            </Grid>
            <Grid item xs={12} md={3} sx={{maxWidth: '350px'}}>
              <Stat icon={<EmojiEventsIcon />} label="State Dominance" value="13 NY State Finalists" chipColor="secondary"/>
            </Grid>
          </Grid>
        </Box>

        <Divider sx={{ opacity: 0.1 }} />

      </Box>
  );
}