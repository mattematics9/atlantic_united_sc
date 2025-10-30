import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// Components to map Word styles directly to Material UI
const Heading1 = ({ children }) => (
  <Typography variant="h4" gutterBottom sx={{ mt: 2, fontSize: {xs: '1.5rem' ,sm: '1.75rem', md: '2rem',}, }}>{children}</Typography>
);
const Heading2 = ({ children }) => (
  <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>{children}</Typography>
);
const Heading3 = ({ children }) => (
  <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>{children}</Typography>
);
const Subhead = ({ children }) => (
  <Typography sx={{ fontSize: "13pt", fontWeight: 700, mt: 1.5, mb: 1 }}>{children}</Typography>
);
const P = ({ children }) => (
  <Typography paragraph sx={{ fontSize: "11pt", lineHeight: 1.6 }}>{children}</Typography>
);
// const Pre = ({ children }) => (
//   <Box component="pre" sx={{ whiteSpace: "pre-wrap", fontFamily: "inherit", fontSize: "11pt", lineHeight: 1.6 }}>{children}</Box>
// );

export default function CoachResourcesExact() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom
        sx={{
          mt: 2,
          fontSize: {
            xs: '2rem',  // phones
            sm: '2rem', // tablets
            md: '3rem',    // desktops
          },
          fontWeight: 500,
        }}>
        Coach Resources
      </Typography>

      {/* New Player Setup */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
          <Heading1> New Player Setup</Heading1>
        </AccordionSummary>
        <AccordionDetails>
          <Heading2>(1) Register in the Gotsport system:</Heading2>
          <P>
            a) Registration URL: {" "}
            <Link href="https://system.gotsport.com/programs/D45748060?reg_role=player" target="_blank" rel="noopener noreferrer">
              https://system.gotsport.com/programs/D45748060?reg_role=player
            </Link>
          </P>
          <P>
            b) Parents must upload a clear headshot (picture from the shoulders up) of the player and a birth certificate or passport of the player. {" "}
            <strong>DO NOT SKIP THIS STEP BECAUSE THE PLAYER WILL NOT BE CLEARED AND IT WILL DELAY THE REGISTRATION PROCESS.</strong>
          </P>
          <P>
            c) If the player is 18 (or will be turning 18 at any point during the season year), you also need to do the SafeSport online course.  That is a requirement on the dashboard in GotSport.  If you turn 18 during the year and don’t have this complete you could be removed from the roster.
          </P>
          <P>
            <strong>**For teams that play in MLS Next, there are more registration steps and apps to get on. Please see step 4 at the end of this document</strong>
          </P>

          <Heading2>(2) Uniforms:</Heading2>
          <P>a) Coach and parent choose uniform number for the player.</P>
          <P>b) Order the Uniform:</P>
          <P>
            <strong>-MLS Next teams and GA Aspire teams:</strong> These teams will be using Capelli Uniforms. Coaches will provide players with a link to order a unfiorm.
          </P>
          <P>
            <strong>-EDP and LIJSL teams:</strong> These teams will order adidas uniforms through soccer.com. The coaches will enter the players information into the soccer.com team roster with the players name, number, and parents email. The parent will then receive an email from soccer.com that allows them to order the uniform.
          </P>

          <Heading2>(3) Teamsnap App: the communication/scheduling app our teams use.</Heading2>
          <P>a) Download Teamsnap on your phone.</P>
          <P>b) The coach or manager will add the player to the teamsnap roster using a parent’s email.</P>
          <P>c) The parent will receive an email inviting them to join the team on teamsnap.</P>
          <P>d) Once the parent is logged in, they will add all family members that they want on teamsnap under the players account.</P>

          <Heading2>(4) MLS Next Academy Registration: these steps are only for players playing in the MLS Next league (top teams U13-19).</Heading2>

          <Heading3>LeagueApps (roster) / Ankored (compliance) / Impact (concussion)</Heading3>
          <P>
            Watch this video for step by step instructions: {" "}
            <Link href="https://support.leagueapps.com/hc/en-us/articles/33461325022615-MLS-NEXT-Players-Under-the-Age-of-18-Registration" target="_blank" rel="noopener noreferrer">
              https://support.leagueapps.com/hc/en-us/articles/33461325022615-MLS-NEXT-Players-Under-the-Age-of-18-Registration
            </Link>
          </P>

          <P>a) Need the LeagueApps registration link specific to your team.</P>
          <P>b) Use this discount code at checkout: stonybrooklakegrovelongisland-paid (this brings the cost of player pass to $0)</P>
          <P>c) Note about uploading a photo:  The correct location to upload a photo in leagueapps: Profiles - My Family Account - Actions - Edit - Choose Photo - Click Edit button on the bottom.</P>

          <P>d) Impact Concussion Baseline Test</P>
          <P>
            As part of your participation in the MLS Academy Division, you are required to complete a concussion baseline test through Impact Applications before being eligible to compete in any games.
          </P>
          <P>
            -Testing Link: {" "}
            <Link href="https://www.impacttestonline.com/htmllauncher/?code=M24T" target="_blank" rel="noopener noreferrer">
              https://www.impacttestonline.com/htmllauncher/?code=M24T
            </Link>
          <br/>
          -Customer ID Code (makes it $0): M24T<br/>
          -Device Compatibility: Desktop, Laptop, or iPad (no phones)<br/>
          -Testing Environment: Choose a quiet space free from distractions, Allow 25–45 minutes to complete, Only take the test when you can fully focus</P>
          <P>
            Once you’ve completed the test, you must download your certificate of completion and upload it to your LeagueApps/Ankored account. Please download the certificate. You must have record of this test.
          </P>
          <P>e) If you are 18 years old or turning 18 this season, you must also complete SafeSport compliance training. If you already completed SafeSport when doing the GotSport registration, then you need to just upload your certificate.</P>
          <Heading3>AI Scout: A digital platform that analyzes your training and match footage. It helps you gain insights into your strengths, weaknesses, and areas to focus on as you grow as a player.</Heading3>
          <P>a) Download the app from the app store.<br/>
          b) Fill in the personal information.<br/>
          c) Select MLS from the top menu.<br/>
          d) Select MLS NXT test by age group.<br/>
          e) Complete the five steps and submit.</P>
        </AccordionDetails>
      </Accordion>

      {/* Club Pass Players */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
          <Heading1>Club Pass Players</Heading1>
        </AccordionSummary>
        <AccordionDetails>
          <Subhead>Steps:</Subhead>
          <P>1) Login to your gotsport account<br/>
          2) Click “Team Management”<br/>
          3) Click “Matches”<br/>
          4) Scroll down to the match and click the three dots<br/>
          5) For Home games click “Home Match Day Roster”. For Away games click “Away Match Day Roster”.<br/>
          6) Click “Add Club Pass Player” and search the players name and birthdate. When you add the player they will be under the “Event Roster” list.<br/>
          7) Check the box next to the players name and click the “Add to Match Day Roster” button. This will add the player to the “Attending” List.<br/>
          8) After you add the player, when you go to print your match card, the player should now show up highlighted with a “CP” (CP = club pass) next to his or her name.</P>
          <P>**Players that are added will stay on the roster for next week as well, and you will not have to add them again to the “Event Roster” and “Attending” lists.</P>
          <P>***For LIJSL you are allowed to roster a maximum of 5 players from within the club for every league game. Those 5 players may come from any age appropriate team within the club, regardless of the league or division those players play in.</P>
        </AccordionDetails>
      </Accordion>

      {/* Field Request */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
          <Heading1>Field Request</Heading1>
        </AccordionSummary>
        <AccordionDetails>
          <P>All requests for fields for games need to be sent to sblgn.gamerequests@gmail.com in the following format:</P>
          <P>1) Team: (e.g., Wildlings Blue B2008)<br/>
          2) Opponent: (e.g., Brentwood Man City B2008)<br/>
          3) Match Id: (e.g., 45563)<br/>
          4) Original date, time, location, and field type: (e.g., 9/21 at 11:30 AM at Holbrook Road Elementary School - 11v11)<br/>
          5) New date, time, location, and field type: (e.g., 10/4 kickoff between 9:00 AM and 12:00 PM or after 4:00 PM - 11v11)</P>
        </AccordionDetails>
      </Accordion>

      {/* Game Change Requests */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}> 
          <Heading1>Game Change Requests</Heading1>
        </AccordionSummary>
        <AccordionDetails>
          <Heading1>***EDP LEAGUE***</Heading1>
          <P>
            GAME CHANGE REQUEST POLICY (GCR): A Game Change request must be submitted online through GotSport. The home team must start a GCR 10 days or more from the scheduled game date or it will automatically be denied. GCRs will not be considered through emails, texting or phone calls (Gotsport only), unless it is an emergency or time-sensitive situation beyond a club’s control (example: loss of field). If such a situation does arise, notify info@newyorkclubsoccer.com at once, so that they can assess/resolve the situation. Must Show Proof of loss of venue.
          </P>

          <Subhead>GCRs ARE LIMITED TO THE BELOW ACCEPTABLE REASONS ONLY:</Subhead>
          <P>1) EASTERN NY STATE CUP CONFLICT<br/>
          2) WEATHER RELATED<br/>
          3) RELIGIOUS HOLIDAY<br/>
          4) PERMIT/FIELD ISSUE RELATED (Must Show Proof of loss of venue- email from Facility Owner/Town/Parks Dept./School District)</P>

          <Subhead>UNACCEPTABLE REASONS:</Subhead>
          <P>1) Coaching conflicts: Teams will need to find another coach from your club to cover the game.<br/>
          2)Player availability: Teams may supplement their roster with players from other age-appropriate teams within their club, whose cards are issued from the same league (ex: CJSL, LIJSL, WYSL...).<br/>
          3) Conflicts with games from other leagues</P>

          <Subhead>Steps:</Subhead>
          <P>1) Prior to requesting any game changes, the team/club requesting the change must contact their opponent regarding the game details, preferably by the GotSport chat feature* (see below) or by email or phone call to reach agreement on any game changes.<br/><br/>
          2) After the details (new time, date, venue/field, etc…) have been agreed upon, the home team must start the GCR. Login into Gotsport.  Click "Team Management". Click the 3 dots to the right.  Enter the new details. Do NOT complete a GCR without agreement from the opposing team or it will be denied. The league can NOT monitor team chats and will ONLY consider a GCR if the appropriate information and agreement from the opponent is in the request.<br/><br/>
          If the teams are swapping home/away fields, the original home team must input the new date, time and venue/field into the notes field or it will be denied.<br/><br/>
          3) The opposing team MUST respond to the GCR by agreeing or refusing the pending request in their list of matches or it will be denied (see below for instructions). The opposing team must click “Agree” or “Reject” within 2 days of the GCR submission or the pending request will be denied. If agreed, an EDP representative will approve or deny the GCR. If approved, the schedule will be updated.<br/><br/>
          4) You will be notified by email if your game change requests have been approved or denied. The league will send both teams a message of the approved/denied change. Please allow 3 days for the league to respond to all Game Change Requests.<br/><br/>
          **Note that the assignors generally place officials on the matches 2 weeks in advance. If a team cancels the week of the game, they will be responsible for all Referee fees which must be paid within 48 hours of the cancelation in order to have referees assigned to the team’s next game.</P>

          <Heading2>***LONG ISLAND JUNIOR SOCCER LEAGUE (LIJSL)***</Heading2>
          <P>LIJSL Game Change Requests must be submitted at least 16 days prior to the match with your president’s approval, as well as approval from the Divisional Coordinator or Age Agroup Supervisor. Each Team is ONLY ALLOWED 2 changes for the entire season. Requests received less than 16 days will require the Age Group Supervisor’s approval and will be charged an expediting fee. Requests less than 10 days will be only honored for unpredictable events and need the approval of the Day Director. Final rescheduling details must be submitted within 7 days of posting the GCR. Each team is allowed 2 GCR’s for the season. After week 5 each team is limited to 1 GCR.</P>
          <P>You can find your Divisional Coordinator and Age Group Supervisor here:</P>
          <P>
            <Link href="https://lijsoccer.com/wp-content/uploads/2023/04/FALL-2025-SUPV-COORDINATORS-081725.pdf" target="_blank" rel="noopener noreferrer">
              https://lijsoccer.com/wp-content/uploads/2023/04/FALL-2025-SUPV-COORDINATORS-081725.pdf
            </Link>
          </P>

          <Subhead>Steps:</Subhead>
          <P>1)	Send an email to your club president (Kim Onek at Bav2828@yahoo.com or Jerry Ward at jerry.ward1@ey.com) to get approval.  You must write the email in the following format:</P>
          <P>
            Subject: Request to Postpone Match #<br/><br/>
            Email body: <br/><br/>
            Match Number:<br/>
            Home Team:<br/>
            Away Team:<br/>
            Game Date:<br/>
            Game Time:<br/>
            Field:<br/>
            Division:<br/>
            REASON for your request:
          </P>

          <P><strong>** You do not have to include the other team or other team's president; only the requesting team's president's approval is needed.</strong></P>
          <P>2) Forward the email with the club presidents approval to the Divisional Coordinator and cc the Age Group Supervisor to postpone the game.</P>
          <P>3) Once the game is postponed, get in touch with the opposing team via the Gotsport Chat to reschedule. All coaches must communicate directly with each other via Got Sport messaging to show the history. Home team should list 3 options for dates and times. Away team should choose 1 of the options. Games must be rescheduled within 7 days of an approved GCR or weather-related cancellation. Those new dates should be 10 or more days out from the day you are submitting to the coordinators for rescheduling.</P>
          <P>4) Once the two coaches agree, an email must be sent to your division coordinator and division supervisor that includes 1) BOTH COACHES confirming the new date, time, and location, and 2) the home field scheduler OR president approving the field space. Coordinators and supervisors DO NOT get included in the Got Sport chats. They can login and see from the back end, but they are not part of that team-to-team communication.</P>
          <P><strong>**Please send a separate email for each game.</strong></P>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
