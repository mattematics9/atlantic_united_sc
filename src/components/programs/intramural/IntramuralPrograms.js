import * as React from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Box,
  Typography,
  Stack,
  Paper,
  Link as MUILink,
} from "@mui/material";
import { alpha } from "@mui/material/styles";

// ⬇️ Update these asset paths if needed
import LGNLogo from "../../../images/logos/lgn-logo-no-whitespace.png";
import ThreeVillageLogo from "../../../images/logos/three-village-logo-no-white-space.png";
// Prefer PNG/WebP if available; fallback handles errors if AVIF fails
import MiddleCountryLogo from "../../../images/logos/middle-country-logo.avif";

// Use the NEW Excel-derived JSON (first-row headers as keys)
import sheetRows from "./intramural_programs.json";

// ---- THEME ----
const theme = createTheme({
  palette: {
    primary: { main: "#0D47A1" }, // Atlantic Blue
    secondary: { main: "#C62828" }, // Atlantic Red
    background: { default: "#000716ff" },
  },
  shape: { borderRadius: 16 },
  typography: {
    fontFamily:
      "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: "none" },
  },
});

// ---- CLUB META (colors + logos) ----
const CLUB_META = {
  LGN: { color: "#00054fff", logoUrl: LGNLogo },
  "Three Village": { color: "#C62828", logoUrl: ThreeVillageLogo },
  "Middle Country": { color: "#1976D2", logoUrl: MiddleCountryLogo },
};

function normalizeClub(name) {
  const n = String(name || "").toLowerCase();
  if (n.includes("three")) return "Three Village";
  if (n.includes("lgn")) return "LGN";
  if (n.includes("middle")) return "Middle Country";
  return (name || "").trim();
}

/** Build a numeric sort key so youngest/lowest grade stacks at the bottom.
 *  Supports ages like "2,3", "U6", "3-5" and grades like "Grade 1-2", "Grades K-2".
 *  Heuristic:
 *    - If contains "grade": K→0, then take the smallest number found (1..12).
 *    - Else treat as ages: U6→6, numbers list/range → smallest number.
 */
function levelSortKey(value) {
  if (!value) return 0;
  const s = String(value).trim().toLowerCase();

  // Grades
  if (s.includes("grade")) {
    // K maps to 0; pull all numbers too
    const hasK = /(?:^|[^a-z])k(?:[^a-z]|$)/i.test(s);
    const nums = (s.match(/\d+/g) || []).map((n) => parseInt(n, 10)).filter(Number.isFinite);
    let min = nums.length ? Math.min(...nums) : Infinity;
    if (hasK) min = Math.min(0, min);
    return Number.isFinite(min) ? min : 0;
  }

  // Ages
  const u = s.match(/u\s*(\d+)/i); // U6 → 6
  if (u) return parseInt(u[1], 10) || 0;
  const nums = (s.match(/\d+/g) || []).map((n) => parseInt(n, 10)).filter(Number.isFinite);
  return nums.length ? Math.min(...nums) : 0;
}

/** Group programs by their exact Ages/Grades string, preserving the order they
 *  appear in the JSON (which you’ve listed youngest → oldest).
 *  The UI uses flexDirection: "column-reverse" to put the first level at the bottom.
 */
function buildLevels(rows) {
  const map = new Map(); // insertion order is preserved
  for (const r of rows) {
    const raw = (r["Ages/Grades"] || "").toString().trim();
    if (!map.has(raw)) map.set(raw, { raw, programs: [] });
    map.get(raw).programs.push(r);
  }
  // return in insertion order (JSON order)
  return Array.from(map.values());
}

/** Label logic:
 *  - If the value contains "grade", ensure it starts with "Grade" or "Grades".
 *  - Otherwise, prefix with "Ages ".
 */
function formatLevelLabel(raw) {
  if (!raw) return "Ages Unspecified";
  const s = String(raw).trim();
  const lower = s.toLowerCase();
  if (lower.includes("grade")) {
    // Normalize capitalization to "Grade" / "Grades"
    if (/^grades?\b/i.test(s)) return s.replace(/^grades?/i, (m) => (m.toLowerCase() === "grade" ? "Grade" : "Grades"));
    return (s.startsWith("Grade") || s.startsWith("Grades")) ? s : `Grade ${s.replace(/grades?/i, "").trim()}`;
  }
  return /^ages?\s/i.test(s) ? s : `Ages ${s}`;
}

// Pull static club info for the header from the first non-empty fields in the group
function extractClubInfo(rows) {
  const info = { town: "", contact: "", email: "" };
  for (const r of rows) {
    info.town ||= (r["Town"] || "").toString().trim();
    info.contact ||= (r["Contact"] || "").toString().trim();
    info.email ||= (r["Email"] || "").toString().trim();
    if (info.town && info.contact && info.email) break;
  }
  return info;
}

function LogoBadge({ color, logoUrl, size = 96 }) {
  return (
    <Box sx={{ position: "relative", width: size, height: size }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          borderRadius: 2,
          bgcolor: color,
          border: `2px solid ${alpha("#fff", 0.3)}`,
        }}
      />
      <Box
        component="img"
        src={logoUrl}
        alt="club logo"
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: 2,
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none"; // fallback is the colored square
        }}
      />
    </Box>
  );
}

export default function IntramuralPyramids() {
  const rows = React.useMemo(() => (Array.isArray(sheetRows) ? sheetRows : []), []);

  // Group by Club
  const clubs = React.useMemo(() => {
    const groups = { LGN: [], "Three Village": [], "Middle Country": [] };
    for (const r of rows) {
      const c = normalizeClub(r["Club"]);
      if (groups[c]) groups[c].push(r);
    }
    return groups;
  }, [rows]);

  const clubEntries = React.useMemo(
    () =>
      ["LGN", "Three Village", "Middle Country"].map((name) => ({
        name,
        levels: buildLevels(clubs[name]),
        info: extractClubInfo(clubs[name]),
      })),
    [clubs]
  );

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box id="intramural-programs" sx={{ minHeight: "100vh", py: { xs: 10, md: 15 } }}>
        <Container maxWidth={false} sx={{ px: { xs: 2, md: 4 }, maxWidth: "100%" }}>
          {/* <Stack spacing={13}> */}
            {/* Title in BLACK */}
            <Typography variant="h3" textAlign="center" sx={{ mb: '40px', color: "#010033ff" }}>
              Intramural Programs by Community Club
            </Typography>

            <Typography variant="h6" textAlign="center" sx={{ mb: '30px', color: "#010033ff" }}>
              Atlantic United runs intramural through the member community clubs operating under it.  We encourage parents to choose programs within their town, but parents are free to choose from any one of the three member community clubs.
            </Typography>

            {/* Exact thirds on md+ */}
            <Box
              display="grid"
              gridTemplateColumns={{ xs: "1fr", md: "repeat(3, minmax(0, 1fr))" }}
              gap={3}
              alignItems="start"
            >
              {clubEntries.map(({ name, levels, info }) => {
                const meta = CLUB_META[name] || { color: theme.palette.primary.main, logoUrl: undefined };
                const total = Math.max(levels.length, 1);

                const borderCol = alpha(meta.color, 0.6);
                const fillStart = alpha(meta.color, 0.16);
                const fillMid = alpha("#ffffff", 0.06);

                return (
                  <Box key={name}>
                    <Stack spacing={2} alignItems="center" textAlign="center">
                      {/* Logo ABOVE club name, centered, bigger */}
                      <LogoBadge color={meta.color} logoUrl={meta.logoUrl} size={96} />
                      <Typography variant="h4" sx={{ color: meta.color, fontWeight: 800 }}>
                        {name}
                      </Typography>

                      {/* Town + Contact info (centered) */}
                      {(info.town || info.contact || info.email) && (
                        <Stack spacing={0.25} sx={{ color: "#000" }}>
                          {info.town && (
                            <Typography variant="body2" sx={{ color: "#000" }}>
                              Location: {info.town}
                            </Typography>
                          )}
                          {info.contact && (
                            <Typography variant="body2" sx={{ color: "#000" }}>
                              Contact: {info.contact}
                            </Typography>
                          )}
                          {info.email && (
                            <Typography variant="body2" sx={{ color: "#000" }}>
                              Email:{" "}
                              <MUILink href={`mailto:${info.email}`} underline="hover" sx={{ color: "#000" }}>
                                {info.email}
                              </MUILink>
                            </Typography>
                          )}
                        </Stack>
                      )}

                      {/* Pyramid — NO SPACES between levels */}
                      {levels.length === 0 ? (
                        <Typography variant="body2" color="text.secondary">
                          No programs listed
                        </Typography>
                      ) : (
                        <Stack
                          sx={{
                            width: "100%",
                            alignItems: "center",
                            flexDirection: "column-reverse", // youngest/lowest grade at bottom
                            gap: 0, // no gaps
                          }}
                        >
                          {levels.map((lvl, idx) => {
                            const widthPercent = 100 - idx * (100 / total) * 0.55;
                            return (
                              <Paper
                                key={`${name}-${lvl.raw}-${idx}`}
                                elevation={3}
                                sx={{
                                  width: `${widthPercent}%`,
                                  p: 1,
                                  textAlign: "center",
                                  border: `1px solid ${borderCol}`,
                                  background: `linear-gradient(180deg, ${fillStart} 0%, ${fillMid} 100%)`,
                                  m: 0,
                                  borderTopWidth: 1,
                                  borderBottomWidth: idx === levels.length - 1 ? 1 : 0,
                                  borderLeftWidth: 1,
                                  borderRightWidth: 1,
                                }}
                              >
                                {/* Age/Grade label in CLUB COLOR */}
                                <Typography variant="subtitle1" sx={{ color: meta.color, fontWeight: 800 }}>
                                  {formatLevelLabel(lvl.raw)}
                                </Typography>

                                {/* Programs: black; use Registration Link if present */}
                                <Stack spacing={0.25} sx={{ mt: 0.5 }}>
                                  {lvl.programs.map((p, i) => {
                                    const href = p["Registration Link"] || "";
                                    const label = p["Program Name"] || "(Unnamed Program)";
                                    return href ? (
                                      <MUILink
                                        key={`${name}-prog-${idx}-${i}`}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        underline="hover"
                                        variant="body2"
                                        sx={{ color: "#000" }}
                                      >
                                        {label}
                                      </MUILink>
                                    ) : (
                                      <Typography
                                        key={`${name}-prog-${idx}-${i}`}
                                        variant="body2"
                                        sx={{ color: "#000" }}
                                      >
                                        {label}
                                      </Typography>
                                    );
                                  })}
                                </Stack>
                              </Paper>
                            );
                          })}

                          {/* Footer note at the bottom of each pyramid */}
                          <Typography variant="caption" sx={{ color: "#000", mt: 1.5, textAlign: "center" }}>
                            Click the program to register
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                  </Box>
                );
              })}
            </Box>
          {/* </Stack> */}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
