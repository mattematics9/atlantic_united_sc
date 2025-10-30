import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
  Button,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import DirectionsIcon from "@mui/icons-material/Directions";
import MapIcon from "@mui/icons-material/Map";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import GrassIcon from "@mui/icons-material/Grass";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightIcon from "@mui/icons-material/Nightlight";

import FieldsData from "./FieldsData";

/**
 * FieldsPage — Material UI component for listing club fields with addresses and quick actions.
 */

// ---- Helpers ----
const toMapsUrl = (address) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const toDirectionsUrl = (address) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (e) {
    console.warn("Clipboard not available", e);
    return false;
  }
};

// ---- Field Card ----
function FieldCard({ field }) {
  const { name, address, imageUrl, surface, lights, parking, notes } = field;
  const mapLink = field.mapUrl || toMapsUrl(address);
  const directionsLink = toDirectionsUrl(address);

  return (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        maxWidth: 330,
      }}
    >
      {imageUrl ? (
        <CardMedia
          component="img"
          height="160"
          image={imageUrl}
          alt={`${name} photo`}
        />
      ) : (
        <Box sx={{ height: 8 }} />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1.2}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <SportsSoccerIcon fontSize="small" />
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
              {name}
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <RoomIcon fontSize="small" />
            <Typography variant="body2" color="text.secondary">
              {address}
            </Typography>
          </Stack>

          <Stack
            direction="row"
            spacing={1}
            rowGap={1}
            alignItems="center"
            flexWrap="wrap"
          >
            {surface && (
              <Chip size="small" icon={<GrassIcon />} label={surface} />
            )}
            {lights !== undefined && (
              <Chip
                size="small"
                icon={lights ? <LightModeIcon /> : <NightlightIcon />}
                label={lights ? "Lights" : "No Lights"}
                variant={lights ? "filled" : "outlined"}
              />
            )}
            {parking && (
              <Chip
                size="small"
                icon={<LocalParkingIcon />}
                label={`${parking} Parking`}
              />
            )}
          </Stack>

          {notes && (
            <Typography variant="body2" color="text.secondary">
              {notes}
            </Typography>
          )}
        </Stack>
      </CardContent>

      <Divider />
      <Stack
        direction="row"
        spacing={1}
        sx={{ p: 1.25 }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="contained"
            startIcon={<DirectionsIcon />}
            href={directionsLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Directions
          </Button>
          <Button
            size="small"
            variant="text"
            startIcon={<MapIcon />}
            href={mapLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open Map
          </Button>
        </Stack>
        <Tooltip title="Copy address">
          <IconButton
            onClick={() => copyToClipboard(address)}
            aria-label={`Copy address for ${name}`}
          >
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </Card>
  );
}

// ---- Filters Toolbar (search only) ----
function FiltersBar({ query, setQuery }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      alignItems={{ xs: "stretch", sm: "center" }}
    >
      <TextField
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search fields or addresses"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FilterAltIcon />
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}

// ---- Main Page ----
export default function FieldsPage({ fields = FieldsData }) {
  const [query, setQuery] = React.useState("");

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return fields.filter((f) => {
      const matchesQuery =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.address.toLowerCase().includes(q) ||
        (f.notes || "").toLowerCase().includes(q);
      return matchesQuery;
    });
  }, [fields, query]);

  return (
    <Container maxWidth="lg" sx={{ py: {xs: '140px', sm: '180px'} }}>
      <Stack spacing={4}>
        {/* Centered Heading */}
        <Stack alignItems="center" textAlign="center" spacing={0.5}>
          <Typography variant="h4" sx={{ fontWeight: 800 }}>
            Club Fields
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Find addresses and field details.
          </Typography>
        </Stack>

        <FiltersBar query={query} setQuery={setQuery} />

        <Grid container spacing={2.5} justifyContent="center">
          {filtered.map((field) => (
            <Grid item key={field.id} xs={12} sm={6} md={4}>
              <FieldCard field={field} />
            </Grid>
          ))}

          {filtered.length === 0 && (
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", py: 8 }}>
                <Typography variant="h6" gutterBottom>
                  No fields match your search.
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Try clearing or changing your search text.
                </Typography>
                <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
                  <Button variant="outlined" onClick={() => setQuery("")}>
                    Clear Search
                  </Button>
                </Stack>
              </Box>
            </Grid>
          )}
        </Grid>

        <Divider sx={{ my: 1 }} />
        <Typography variant="caption" color="text.secondary" textAlign="center">
          Tip: Click “Directions” to get driving routes, or “Open Map” to just
          view the field location.
        </Typography>
      </Stack>
    </Container>
  );
}

