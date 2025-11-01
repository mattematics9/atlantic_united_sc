import React from "react";
import {programs} from './Data'
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  ThemeProvider,
  createTheme,
  Link,
  Button
} from "@mui/material";


const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "#000716ff" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: "none" },
  },
});



export default function Cards() {
  return (
    <ThemeProvider theme={theme}>
      <Box id="programs-cards" sx={{ py: '50px', bgcolor: "background.default", color: "#e9eef6" }}>

        {/* <Container sx={{ py: 8 }}> */}
          <Grid container spacing={2} justifyContent={'center'}>
            {programs.map((cardData) => (
              <Grid item xs={12} md={4} key={cardData.title}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "rgba(255,255,255,0.04)",
                    border: (t) => `1px solid ${t.palette.primary.main}22`,
                    color: 'white',
                  }}
                >
                  <CardMedia component="img" height="200" image={cardData.image} alt={cardData.description} />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h5" gutterBottom sx={{textAlign: 'center'}}>
                      {cardData.title}
                    </Typography>
                    <Typography variant="h6" gutterBottom sx={{textAlign: 'center'}}>
                      {`(${cardData.grade})`}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: {xs: '300px', sm: '270px'}, opacity: 0.9 }}>{cardData.description}</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: '20px'}}>
                        <Button
                            component={Link}
                            href='/'
                            target="_blank"
                            variant="contained"
                            sx={{
                                fontSize: 15,
                                transition: "opacity 0.3s, transform 0.3s",
                                "&:hover": { opacity: 0.85, transform: "scale(1.05)" },
                            }}
                        >
                            REGISTER
                        </Button>
                        <Button
                            component={Link}
                            href='/'
                            target="_blank"
                            variant="contained"
                            sx={{
                                fontSize: 15,
                                backgroundColor: 'transparent',
                                border: '1px solid white',
                                ml: '10px',
                                transition: "opacity 0.3s, transform 0.3s",
                                "&:hover": { opacity: 0.85, transform: "scale(1.05)" },
                            }}
                        >
                            LEARN MORE
                        </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        {/* </Container> */}

      </Box>
    </ThemeProvider>
  );
}
