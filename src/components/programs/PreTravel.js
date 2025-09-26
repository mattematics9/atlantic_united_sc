import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Collapse,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

const PreTravel = () => {
  const program = {
    id: "pre-travel-academy",
    title: "Pre-Travel Academy",
    grade: "Grades 1 - 2",
    image: require("../../images/stony-brook-pre-travel.png"),
    description:
      "Prepares players for higher levels of play, bridging the gap between recreational and competitive soccer.",
    learnMoreUrl: "/programs/pre-travel",
    modal: [
      {
        club: "Three Village Soccer Club",
        location: "Stony Brook",
        url: "https://www.3vsoccer.com/",
      },
      {
        club: "LGN Soccer Club",
        location: "Selden",
        url: "https://lgnsoccer.com/register",
      },
    ],
  };

  const [showClubs, setShowClubs] = useState(false);

  return (
    <Card sx={{ maxWidth: 400, borderRadius: 3, boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="200"
        image={program.image}
        alt={program.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {program.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {program.grade}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {program.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={program.learnMoreUrl}
        >
          Learn More
        </Button>
        <Button
          size="small"
          onClick={() => setShowClubs(!showClubs)}
        >
          {showClubs ? "Hide Clubs" : "View Clubs"}
        </Button>
      </CardActions>
      <Collapse in={showClubs} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle1" gutterBottom>
            Available Clubs
          </Typography>
          <List>
            {program.modal.map((club, idx) => (
              <ListItem
                key={idx}
                component="a"
                href={club.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ cursor: "pointer" }}
              >
                <ListItemText
                  primary={club.club}
                  secondary={club.location}
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PreTravel;
