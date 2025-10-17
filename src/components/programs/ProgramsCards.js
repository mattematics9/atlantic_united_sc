import {programs} from './programsData'
import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Link as MuiLink
} from "@mui/material";
import { Link } from "react-router-dom";



const ProgramsCards = () => {
  const [open, setOpen] = useState(null);

  const handleOpen = (id) => setOpen(id);
  const handleClose = () => setOpen(null);

  return (
    <Box
      id="all-programs-cards"
      sx={{ backgroundColor: "rgba(240, 241, 246, 1)", py: 4}}
    >
      <Grid container spacing={4} justifyContent='center'>
        {programs.map((program) => (
          <Grid item xs={12} sm={6} md={3} key={program.id}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                maxWidth: 330, // keeps Typography from making the card larger.
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 8
                }
              }}
            >
            {/*--------Image--------*/}
              <CardMedia
                component="img"
                image={program.image}
                alt={program.title}
                sx={{ height: 250, objectFit: "cover" }}
              />

            {/*--------Middle Content--------*/}
              <CardContent sx={{ flexGrow: 1, textAlign: "center"}}>
                <Typography variant="h5">{program.title}</Typography>
                <Typography variant="subtitle1">{program.grade}</Typography>
                {program.modal ? (
                  <Button
                    variant="contained"
                    onClick={() => handleOpen(program.id)}
                    sx={{
                      fontSize: 18,
                      mt: 2,
                      mb: 2,
                      transition: "opacity 0.3s, transform 0.3s",
                      "&:hover": { opacity: 0.85, transform: "scale(1.05)" }
                    }}
                  >
                    REGISTER
                  </Button>
                ) : (
                  <Button
                    component={MuiLink}
                    href={program.registerUrl}
                    target="_blank"
                    variant="contained"
                    sx={{
                      fontSize: 18,
                      mt: 2,
                      mb: 2,
                      transition: "opacity 0.3s, transform 0.3s",
                      "&:hover": { opacity: 0.85, transform: "scale(1.05)" }
                    }}
                  >
                    REGISTER
                  </Button>
                )}
                <Typography variant="body2" color="text.secondary">
                  {program.description}
                </Typography>
              </CardContent>

            {/*----------Bottom of the Card---------=*/}
              <CardActions sx={{ justifyContent: "center" }}>
                <Button component={Link} to={program.learnMoreUrl}>
                  LEARN MORE
                </Button>
              </CardActions>
            </Card>



            {/* Modal (Dialog) for multi-location programs */}
            {program.modal && (
              <Dialog
                open={open === program.id}
                onClose={handleClose}
                fullWidth
                maxWidth="md"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  {program.title}
                </DialogTitle>
                <DialogContent>
                  <Typography variant="h6" textAlign="center" gutterBottom>
                    CHOOSE A LOCATION
                  </Typography>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Club</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {program.modal.map((row, i) => (
                        <TableRow key={i}>
                          <TableCell>{row.club}</TableCell>
                          <TableCell>{row.location}</TableCell>
                          <TableCell>
                            <Button
                              component={MuiLink}
                              href={row.url}
                              target="_blank"
                              variant="contained"
                              color="error"
                              size="small"
                              sx={{
                                borderRadius: "40px",
                                transition: "transform 0.3s",
                                "&:hover": { transform: "scale(1.1)" },
                                '&:focus, &:active': {
                                    backgroundColor: 'red',
                                },
                                '& .MuiTouchRipple-root': {
                                    color: 'white',    
                                }
                              }}
                            >
                              REGISTER
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  <Box textAlign="center" mt={3}>
                    <Button component={Link} to={program.learnMoreUrl}>
                      CLICK HERE TO LEARN MORE
                    </Button>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>CLOSE</Button>
                </DialogActions>
              </Dialog>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProgramsCards;



// import {programs} from './programsData'
// import React, { useState } from "react";
// import {
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Typography,
//   Button,
//   CardActions,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Link as MuiLink
// } from "@mui/material";
// import { Link as RouterLink } from "react-router-dom";



// const ProgramsCards = () => {
//   const [open, setOpen] = useState(null);

//   const handleOpen = (id) => setOpen(id);
//   const handleClose = () => setOpen(null);

//   return (
//     <Box
//       id="all-programs-cards"
//       sx={{ backgroundColor: "rgb(0,0,31)", py: 4}}
//     >
//       <Grid container spacing={4} justifyContent='center'>
//         {programs.map((program) => (
//           <Grid item xs={12} sm={6} md={3} key={program.id}>
//             <Card
//               sx={{
//                 height: "100%",
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.03)",
//                   boxShadow: 8
//                 }
//               }}
//             >
//             {/*--------Image--------*/}
//               <CardMedia
//                 component="img"
//                 image={program.image}
//                 alt={program.title}
//                 sx={{ height: 300, objectFit: "cover" }}
//               />

//             {/*--------Middle Content--------*/}
//               <CardContent sx={{ flexGrow: 1, textAlign: "center"}}>
//                 <Typography variant="h5">{program.title}</Typography>
//                 <Typography variant="subtitle1">{program.grade}</Typography>
//                 {program.modal ? (
//                   <Button
//                     variant="contained"
//                     onClick={() => handleOpen(program.id)}
//                     sx={{
//                       fontSize: 18,
//                       mt: 2,
//                       mb: 2,
//                       transition: "opacity 0.3s, transform 0.3s",
//                       "&:hover": { opacity: 0.85, transform: "scale(1.05)" },
//                       '&:focus, &:active': {
//                             backgroundColor: 'red',
//                         },
//                         '& .MuiTouchRipple-root': {
//                             color: 'white',    
//                         }
//                     }}
//                   >
//                     REGISTER
//                   </Button>
//                 ) : (
//                   <Button
//                     component={MuiLink}
//                     href={program.registerUrl}
//                     target="_blank"
//                     variant="contained"
//                     sx={{
//                       fontSize: 18,
//                       mt: 2,
//                       mb: 2,
//                       transition: "opacity 0.3s, transform 0.3s",
//                       "&:hover": { opacity: 0.85, transform: "scale(1.05)" },
//                       '&:focus, &:active': {
//                             backgroundColor: 'red',
//                         },
//                         '& .MuiTouchRipple-root': {
//                             color: 'white',    
//                         }
//                     }}
//                   >
//                     REGISTER
//                   </Button>
//                 )}
//                 {/* <Typography variant="body2" color="text.secondary">
//                   {program.description}
//                 </Typography> */}
//               </CardContent>

//             {/*----------Bottom of the Card---------=*/}
//               <CardActions sx={{ justifyContent: "center" }}>
//                 <Button component={RouterLink} to={program.learnMoreUrl}>
//                   LEARN MORE
//                 </Button>
//               </CardActions>
//             </Card>



//             {/* Modal (Dialog) for multi-location programs */}
//             {program.modal && (
//               <Dialog
//                 open={open === program.id}
//                 onClose={handleClose}
//                 fullWidth
//                 maxWidth="md"
//               >
//                 <DialogTitle sx={{ textAlign: "center" }}>
//                   {program.title}
//                 </DialogTitle>
//                 <DialogContent>
//                   <Typography variant="h6" textAlign="center" gutterBottom>
//                     CHOOSE A LOCATION
//                   </Typography>
//                   <Table>
//                     <TableHead>
//                       <TableRow>
//                         <TableCell>Club</TableCell>
//                         <TableCell>Location</TableCell>
//                         <TableCell></TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       {program.modal.map((row, i) => (
//                         <TableRow key={i}>
//                           <TableCell>{row.club}</TableCell>
//                           <TableCell>{row.location}</TableCell>
//                           <TableCell>
//                             <Button
//                               component={MuiLink}
//                               href={row.url}
//                               target="_blank"
//                               variant="contained"
//                               color="error"
//                               size="small"
//                               sx={{
//                                 borderRadius: "40px",
//                                 transition: "transform 0.3s",
//                                 "&:hover": { transform: "scale(1.1)" },
//                                 '&:focus, &:active': {
//                                     backgroundColor: 'red',
//                                 },
//                                 '& .MuiTouchRipple-root': {
//                                     color: 'white',    
//                                 }
//                               }}
//                             >
//                               REGISTER
//                             </Button>
//                           </TableCell>
//                         </TableRow>
//                       ))}
//                     </TableBody>
//                   </Table>
//                   <Box textAlign="center" mt={3}>
//                     <Button component={RouterLink} to={program.learnMoreUrl}>
//                       CLICK HERE TO LEARN MORE
//                     </Button>
//                   </Box>
//                 </DialogContent>
//                 <DialogActions>
//                   <Button onClick={handleClose}>CLOSE</Button>
//                 </DialogActions>
//               </Dialog>
//             )}
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default ProgramsCards;

