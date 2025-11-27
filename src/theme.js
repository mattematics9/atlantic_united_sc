import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
  fontFamily: "'Inter', sans-serif",

  h1: { fontFamily: "'Playfair Display', serif", fontWeight: 800 },
  h2: { fontFamily: "'Playfair Display', serif", fontWeight: 700 },
  h3: { fontFamily: "'Playfair Display', serif", fontWeight: 600 },
}
});

export default theme;
