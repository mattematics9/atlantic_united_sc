import * as React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
  Button
} from "@mui/material";

// ---- CLUB TABS ----
function ClubTabs() {
  const [tab, setTab] = React.useState(0);
  const clubs = [
    { name: "Three Village", location: "Stony Brook, NY", contact: "Leigh Pilkington", email: "trainasap@yahoo.com" },
    { name: "LGN", location: "Selden, NY", contact: "Dave Hickman", email: "davidhickman886@yahoo.com" },
    // { name: "Middle Country", location: "Centereach, NY", contact: "Middle Country players looking to join the Pre-Travel Academy will register through LGN or Three Village", email: "See LGN or Three Village Contacts" },
  ];

  return (
    <Box>
      <Tabs
        value={tab}
        onChange={(e, v) => setTab(v)}
        textColor="primary"
        indicatorColor="secondary"
        variant="scrollable"
        scrollButtons="auto"
        sx={{ borderRadius: 1, boxShadow: 1, bgcolor: "background.paper" }}
      >
        {clubs.map((c) => (
          <Tab key={c.name} label={`${c.name}`} />
        ))}
      </Tabs>
      <Card sx={{ mt: 2, mb: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ mt: '30px', textAlign: 'center', color: "#002c7dff"}}>
            Atlantic United at {clubs[tab].name}
          </Typography>
          <Typography variant="body1">
            Location: {clubs[tab].location}<br/>
            Contact: {clubs[tab].contact}<br/>
            Email: {clubs[tab].email}
          </Typography>
          <Box sx={{display: 'flex', justifyContent: 'center', my: '20px'}}>
            <Button sx={{transition: "opacity 0.3s, transform 0.3s", "&:hover": { opacity: 0.85, transform: "scale(1.05)" }}} component={Link} to={clubs[tab].name == "Three Village"? "https://system.gotsport.com/programs/366339K13?reg_role=player": "https://system.gotsport.com/programs/8546A5778?reg_role=player"} target="_blank" size="large" variant="contained" color="secondary">
              REGISTER
            </Button>
          </Box>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" color="text.secondary">
            Each family is enouraged to participate within their town while following the unified curriculum that spans across all community clubs operating under the Atlantic United umbrella.          
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

// ---- MAIN COMPONENT ----
export default function Contacts({ images }) {
  return (
      <Box id="pre-travel-contacts" sx={{
        background: (t) => `linear-gradient(90deg, rgba(0,0,31,1) 0%, ${t.palette.secondary.main} 100%)`, color: "common.white",
        py: { xs: 5, sm: 10 },
      }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom sx={{ mt: '40px', mb: '20px', textAlign: 'center', color: "white", fontSize: {xs: "32px", sm: "40px", lg: "55px"}}}>
            Pre-Travel Academy Contacts and Registration
          </Typography>
          <Typography variant="body1" sx={{ my: '30px', color: "white"}}>
            Choose a club/location that is convenient for you geographically.  Atlantic United Pre-Travel Academy operates out of LGN (Selden) and Three Village (Stony Brook).  Middle Country families will choose either LGN or Three Village.
          </Typography>
          {/* Register Tabs */}
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={5}>
              <ClubTabs />
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}
