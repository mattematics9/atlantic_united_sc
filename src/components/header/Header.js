import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Stack,
  Button,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";

//Images
import wildlingsCelebration from '../../images/wildlings_celebration_nationals.png'
import LeagueLogos from "./LeagueLogos";

const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "#0a0d14" },
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



export default function Header() {
  return (
    <ThemeProvider theme={theme}>
        <Box
            sx={{
                pt: {xs: '190px', sm: '170px'},
                pb: {xs: '100px'},
                color: "#e9eef6",
                backgroundImage: {
                    xs: `linear-gradient(-120deg, rgba(0, 0, 49, 0.95) 0%, rgba(255, 0, 0, 0.5) 100%), url(${wildlingsCelebration})`,
                },
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                // filter: "grayscale(20%) contrast(115%)",
                // transform: "translateY(70px) scale(1.05)", // 👈 shifts image down
            }}
        >
            <Grid container spacing={2} sx={{display: 'flex', alignItems: 'center'}}>
                <Grid size={{xs: 12, md: 7}} sx={{pl:{sm: '0px', md:'100px', lg: '150px'}}}>
                    <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>
                        Atlantic United
                    </Typography>
                    <Typography variant="h2" sx={{fontSize: {xs: '40px', md: '50px', lg: '60px'}, display: 'flex', justifyContent: 'center', fontStyle: 'italic'}}>
                        Soccer Club
                    </Typography>
                </Grid>
                {/* <Grid size={{xs: 12, md: 5}} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'inherit'}}}>
                    <Box
                        component="img"
                        src={atlanticUnitedLogo}
                        alt="Atlantic United Logo"
                        sx={{
                            width: {xs: "130px", md: "160px", lg: "170px"},
                            maxWidth: "100%",
                            height: "auto",
                        }}
                    />
                </Grid> */}
                <Grid size={{xs: 12, md: 5}} sx={{display: 'flex', justifyContent: {xs: 'center', md: 'inherit'}}}>
                    <LeagueLogos/>
                </Grid>
            </Grid>

            <Box sx={{display: {xs: 'none', sm: 'block'}, mt: '20px', fontStyle: 'italic'}}>
                <Typography variant="h6" sx={{pl: {xs: '20px', sm: '40px', md: '100px', lg: '140px'}, pr: {xs: '20px', sm: '70px', md: '100px', lg: '140px'}}}>
                    From aspiring young players to elite athletes, Atlantic United provides a home for every soccer enthusiast. We offer a comprehensive range of programs designed for all ages and skill levels, ensuring every player has the opportunity to grow, develop, and pursue their passion for the game. 
                </Typography>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{mt: '35px', pl: {xs: '20px'}, pr: {xs: '20px'}, display: 'flex', justifyContent: 'center'}}>
                <Button size="large" variant="contained" color="secondary" component={Link} to="/programs">
                    See Our Programs
                </Button>
                <Button size="large" variant="outlined" color="inherit" component={Link} to="/contact">
                    Contact Us
                </Button>
            </Stack>

        </Box>
    </ThemeProvider>
  );
}


// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Box,
//   Container,
//   Typography,
//   Stack,
//   Button,
//   ThemeProvider,
//   createTheme,
// } from "@mui/material";

// //Images
// import wildlingsCelebration from '../../images/wildlings_celebration_nationals.png'

// const theme = createTheme({
//   palette: {
//     primary: { main: "#0D47A1" }, // Atlantic Blue
//     secondary: { main: "#C62828" }, // Atlantic Red
//     background: { default: "#0a0d14" },
//   },
//   shape: { borderRadius: 16 },
//   typography: {
//     fontFamily: `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
//     h1: { fontWeight: 800 },
//     h2: { fontWeight: 800 },
//     h3: { fontWeight: 700 },
//     button: { fontWeight: 700, textTransform: "none" },
//   },
// });



// export default function Header() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box sx={{ bgcolor: "background.default", color: "#e9eef6" }}>
//         {/* HERO */}
//         <Box
//           sx={{
//             position: "relative",
//             // minHeight: { xs: 420, md: 560 },
//             height: '100vh',
//             display: "grid",
//             alignItems: "center",
//             overflow: "hidden",
//           }}
//           role="banner"
//           aria-label="Atlantic United Travel Academy hero section"
//         >
//           <Box
//             component="img"
//             src={wildlingsCelebration}
//             alt="Atlantic United players in action"
//             sx={{
//                 position: "absolute",
//                 inset: 0,
//                 // height: "100%",
//                 width: "100%",
//                 filter: "grayscale(20%) contrast(115%)",
//                 transform: "translateY(0px) scale(1.05)", // 👈 shifts image down
//                 // transform: { xs: "translateY(70) scale(1.05)", md: "translateY(70px) scale(1.05)" },

//                 objectFit: "cover",
//             }}
//           />
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               background:
//                 "linear-gradient(120deg, rgba(0,0,31,.9) 0%, rgba(198,40,40,0.75) 100%)",
//             }}
//           />

//           <Container sx={{ position: "relative", zIndex: 1, py: {xs: 7, sm: 10} }}>
//             <Stack spacing={3} maxWidth={880} sx={{mt: 8}}>
//             {/* <Typography
//                 variant="h2"
//                 component="h1"
//                 gutterBottom
//                 sx={{
//                     fontSize: { xs: "33px", sm: "40px", lg: "60px" },
//                     fontStyle: "italic",
//                     textAlign: { xs: "center", md: "left" }, // 👈 center on small & medium, left on large
//                     mx: { xs: "auto", md: 0 }, // 👈 horizontally center the block itself
//                 }}
//                 >
//                 ATLANTIC UNITED<br />SOCCER CLUB
//             </Typography> */}
//               <Typography variant="h2" component="h1" gutterBottom sx={{fontSize: {xs: "33px", sm: "40px", lg: "60px"}, fontStyle: 'italic'}}>
//                 ATLANTIC UNITED<br/>SOCCER CLUB
//               </Typography>
//               <Typography variant="h6" sx={{ display: {xs: 'none', sm: 'block'}, fontSize: {xs: '15px', sm: '20px'}, opacity: 0.95 }}>
//                 From aspiring young players to elite athletes, Atlantic United provides a home for every soccer enthusiast. We offer a comprehensive range of programs designed for all ages and skill levels, ensuring every player has the opportunity to grow, develop, and pursue their passion for the game. 
//                 {/* Atlantic United travel teams compete at the highest levels of youth soccer nationwide, while we also provide a full range of programs designed to support players of all ages, skill levels, and interests. */}
//               </Typography>
//               <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
//                 <Button size="large" variant="contained" color="secondary" component={Link} to="/programs">
//                   See Our Programs
//                 </Button>
//                 <Button size="large" variant="outlined" color="inherit" component={Link} to="/contact">
//                   Contact Us
//                 </Button>
//               </Stack>
//             </Stack>
//           </Container>
//         </Box>

//       </Box>
//     </ThemeProvider>
//   );
// }