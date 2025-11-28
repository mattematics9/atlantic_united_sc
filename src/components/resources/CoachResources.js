import React, { useState } from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Box,
  TextField,
  Button,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PASSWORD = "ausc2526";

/** Typography helpers */
const Heading1 = ({ children }) => (
  <Typography
    variant="h4"
    gutterBottom
    sx={{ mt: 2, fontSize: { xs: "1.5rem", sm: "1.75rem", md: "2rem" } }}
  >
    {children}
  </Typography>
);
const Heading2 = ({ children }) => (
  <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
    {children}
  </Typography>
);
const Heading3 = ({ children }) => (
  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
    {children}
  </Typography>
);
const Subhead = ({ children }) => (
  <Typography sx={{ fontSize: "13pt", fontWeight: 700, mt: 1.5, mb: 1 }}>
    {children}
  </Typography>
);
const P = ({ children }) => (
  <Typography paragraph sx={{ fontSize: "11pt", lineHeight: 1.6 }}>
    {children}
  </Typography>
);

/** Small, reusable gate with no persistence */
function PasswordGate({ children }) {
  const [unlocked, setUnlocked] = useState(false);
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ((pw || "").trim() === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!unlocked) {
    return (
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography variant="h3" align="center" sx={{ mb: 3, color: 'white' }}>
          Coach Resources
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            p: 3,
            borderRadius: 2,
            boxShadow: 3,
            display: "grid",
            gap: 2,
            bgcolor: "background.paper",
          }}
        >
          <Typography align="center">
            Enter password to view Coach Resources
          </Typography>

          {error && <Alert severity="error">{error}</Alert>}

          <TextField
            label="Password"
            type={showPw ? "text" : "password"}
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            fullWidth
            autoFocus
            required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label={showPw ? "Hide password" : "Show password"}
                    onClick={() => setShowPw((v) => !v)}
                    edge="end"
                  >
                    {showPw ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" variant="contained" size="large">
            Unlock
          </Button>
        </Box>
      </Container>
    );
  }

  return <>{children}</>;
}

export default function CoachResources() {
  return (
    <PasswordGate>
      {/* ===== Protected Content ===== */}
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            mt: 2,
            fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
            fontWeight: 500,
            color: 'white'
          }}
        >
          Coach Resources
        </Typography>

        {/* New Player Setup */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Heading1>New Player Setup</Heading1>
          </AccordionSummary>
          <AccordionDetails>
            <Heading2>(1) Register in the Gotsport system:</Heading2>
            <P>
              a) Registration URL:{" "}
              <Link
                href="https://system.gotsport.com/programs/D45748060?reg_role=player"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://system.gotsport.com/programs/D45748060?reg_role=player
              </Link>
            </P>
            <P>
              b) Parents must upload a clear headshot (picture from the
              shoulders up) of the player and a birth certificate or passport of
              the player.{" "}
              <strong>
                DO NOT SKIP THIS STEP BECAUSE THE PLAYER WILL NOT BE CLEARED AND
                IT WILL DELAY THE REGISTRATION PROCESS.
              </strong>
            </P>
            <P>
              c) If the player is 18 (or will be turning 18 at any point during
              the season year), you also need to do the SafeSport online course.
              That is a requirement on the dashboard in GotSport. If you turn 18
              during the year and don’t have this complete you could be removed
              from the roster.
            </P>
            <P>
              <strong>
                **For teams that play in MLS Next, there are more registration
                steps and apps to get on. Please see step 4 at the end of this
                document
              </strong>
            </P>

            <Heading2>(2) Uniforms:</Heading2>
            <P>a) Coach and parent choose uniform number for the player.</P>
            <P>b) Order the Uniform:</P>
            <P>
              <strong>-MLS Next teams and GA Aspire teams:</strong> These teams
              will be using Capelli Uniforms. Coaches will provide players with
              a link to order a uniform.
            </P>
            <P>
              <strong>-EDP and LIJSL teams:</strong> These teams will order
              adidas uniforms through soccer.com. The coaches will enter the
              players information into the soccer.com team roster with the
              players name, number, and parents email. The parent will then
              receive an email from soccer.com that allows them to order the
              uniform.
            </P>

            <Heading2>
              (3) Teamsnap App: the communication/scheduling app our teams use.
            </Heading2>
            <P>a) Download Teamsnap on your phone.</P>
            <P>
              b) The coach or manager will add the player to the teamsnap roster
              using a parent’s email.
            </P>
            <P>
              c) The parent will receive an email inviting them to join the team
              on teamsnap.
            </P>
            <P>
              d) Once the parent is logged in, they will add all family members
              that they want on teamsnap under the players account.
            </P>

            <Heading2>
              (4) MLS Next Academy Registration: these steps are only for
              players playing in the MLS Next league (top teams U13-19).
            </Heading2>

            <Heading3>
              LeagueApps (roster) / Ankored (compliance) / Impact (concussion)
            </Heading3>
            <P>
              Watch this video for step by step instructions:{" "}
              <Link
                href="https://support.leagueapps.com/hc/en-us/articles/33461325022615-MLS-NEXT-Players-Under-the-Age-of-18-Registration"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://support.leagueapps.com/hc/en-us/articles/33461325022615-MLS-NEXT-Players-Under-the-Age-of-18-Registration
              </Link>
            </P>

            <P>a) Need the LeagueApps registration link specific to your team.</P>
            <P>
              b) Use this discount code at checkout:
              <br />
              <code>stonybrooklakegrovelongisland-paid</code> (brings cost to $0)
            </P>
            <P>
              c) Note about uploading a photo: The correct location to upload a
              photo in LeagueApps: Profiles → My Family Account → Actions →
              Edit → Choose Photo → click Edit at the bottom.
            </P>

            <P>d) Impact Concussion Baseline Test</P>
            <P>
              - Testing Link:{" "}
              <Link
                href="https://www.impacttestonline.com/htmllauncher/?code=M24T"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://www.impacttestonline.com/htmllauncher/?code=M24T
              </Link>
              <br />- Customer ID Code: <code>M24T</code>
              <br />- Device Compatibility: Desktop, Laptop, or iPad (no phones)
              <br />- Testing Environment: Quiet space; allow 25–45 minutes
            </P>
            <P>
              Once you’ve completed the test, download your certificate of
              completion and upload it to your LeagueApps/Ankored account.
            </P>
            <P>
              e) If you are 18 or turning 18 this season, complete SafeSport
              training (or upload prior certificate if already completed).
            </P>

            <Heading3>AI Scout</Heading3>
            <P>
              a) Download the app from the app store.
              <br />
              b) Fill in personal information.
              <br />
              c) Select MLS from the top menu.
              <br />
              d) Select MLS NXT test by age group.
              <br />
              e) Complete the five steps and submit.
            </P>
          </AccordionDetails>
        </Accordion>

        {/* Club Pass Players */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Heading1>Club Pass Players</Heading1>
          </AccordionSummary>
          <AccordionDetails>
            <Subhead>Steps:</Subhead>
            <P>
              1) Login to your GotSport account
              <br />
              2) Click “Team Management”
              <br />
              3) Click “Matches”
              <br />
              4) Scroll to the match and click the three dots
              <br />
              5) Home: “Home Match Day Roster”; Away: “Away Match Day Roster”
              <br />
              6) “Add Club Pass Player” → search by name & birthdate (added to
              “Event Roster”)
              <br />
              7) Check player → “Add to Match Day Roster” (moves to “Attending”)
              <br />
              8) Print card; player shows with “CP”
            </P>
            <P>
              ** Added players remain on next week’s Event/Attending lists.
              <br />
              *** LIJSL allows max 5 club pass players per league game.
            </P>
          </AccordionDetails>
        </Accordion>

        {/* Field Request */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Heading1>Field Request</Heading1>
          </AccordionSummary>
          <AccordionDetails>
            <P>
              Send field requests to <strong>sblgn.gamerequests@gmail.com</strong>:
            </P>
            <P>
              1) Team<br />
              2) Opponent<br />
              3) Match Id<br />
              4) Original date/time/location/field type<br />
              5) New date/time/location/field type
            </P>
          </AccordionDetails>
        </Accordion>

        {/* Game Change Requests */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Heading1>Game Change Requests</Heading1>
          </AccordionSummary>
          <AccordionDetails>
            <Heading1>*** EDP LEAGUE ***</Heading1>
            <P>
              GCR must be submitted in GotSport ≥10 days before game (emails/texts
              not accepted), except emergencies (loss of field) — contact{" "}
              <Link href="mailto:info@newyorkclubsoccer.com">
                info@newyorkclubsoccer.com
              </Link>
              .
            </P>
            <Subhead>Acceptable reasons:</Subhead>
            <P>ENY State Cup conflict, Weather, Religious holiday, Permit/Field issues.</P>
            <Subhead>Unacceptable reasons:</Subhead>
            <P>
              Coaching conflicts, Player availability (use club pass), Conflicts
              with other leagues.
            </P>
            <Subhead>Steps (summary):</Subhead>
            <P>
              1) Align with opponent (GotSport chat/email/phone).<br />
              2) Home team starts GCR in GotSport after agreement; include details.<br />
              3) Opponent must Agree/Reject within 2 days; EDP then approves/denies.<br />
              4) You’ll receive an email with the decision (allow ~3 days).
            </P>

            <Heading2>*** LONG ISLAND JUNIOR SOCCER LEAGUE (LIJSL) ***</Heading2>
            <P>
              Submit ≥16 days prior with president + coordinator approval. Each team
              gets 2 changes/season (post–week 5: 1). Expediting fees apply when late.
            </P>
            <P>
              Divisional contacts:{" "}
              <Link
                href="https://lijsoccer.com/wp-content/uploads/2023/04/FALL-2025-SUPV-COORDINATORS-081725.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                LIJSL Supervisors & Coordinators (PDF)
              </Link>
            </P>
            <Subhead>Email format to president:</Subhead>
            <P>
              Subject: Request to Postpone Match #<br />
              Match Number, Home Team, Away Team, Game Date/Time, Field, Division, Reason
            </P>
            <P>
              After president approval, email your Divisional Coordinator (cc Age Group
              Supervisor). Use GotSport chat to agree new date/time; then email both
              coordinators with BOTH coaches confirming and field scheduler/president
              approving space.
            </P>
          </AccordionDetails>
        </Accordion>
      </Container>
      {/* ===== End Protected Content ===== */}
    </PasswordGate>
  );
}
