import React from 'react'
import { Box, Card, CardContent, Typography, Stack, Chip } from '@mui/material'
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const RecentAccomplishments = () => {

    // ---- FEATURE CHIP ----
function Feature({ label }) {
  return (
    <Chip
      icon={<EmojiEventsIcon />}
      label={label}
      color="primary"
      variant="outlined"
      sx={{ fontWeight: 600 }}
    />
  );
}

  return (
        <Box id='about-travel'>
            <Card sx={{ borderRadius: '0px', p: { xs: 1, md: 2 } }}>
                <CardContent>
                    <Typography variant="h4" color="primary" gutterBottom 
                      sx={{
                        textAlign: 'center', 
                        my: '20px',
                        "&::after": {
                            display: "block",
                            height: "2px",
                            backgroundColor: "red",
                            content: '" "',
                            width: "80px",
                            margin: "10px auto"
                        },
                      }}>
                    Recent Accomplishments
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 2 }}>
                      During the 2024-2025 seasonal year Atlantic United produced 4 New York State Champions and 2 New York State Finalists, qualified 4 teams to USYS Regionals, topping the year off with 1 Regional Finalist and 1 team appearance at USYS Nationals.  In the 2023-2024 seasonal year Atlantic United produced 5 New York State Champions and 1 Finalist, had 8 teams qualify for USYS Regionals (most in the Eastern Region), topping the year off with 2 Regional Finalists and 2 team appearances at USYS Nationals, where the club had a team make it the final 4 and earn 1 USYS National Semi-Finalist Title.  In the preceding years, we have captured numerous State, Regional, and National Titles, while consistently producing #1 ranked teams in the Nation, solidifying ourselves as one of the most successful USYS clubs in the country.
                    </Typography>

                    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap justifyContent={"center"}>
                        <Feature label="National" />
                        <Feature label="Regional" />
                        <Feature label="State" />
                    </Stack>
                </CardContent>
            </Card>
        </Box>
  )
}

export default RecentAccomplishments