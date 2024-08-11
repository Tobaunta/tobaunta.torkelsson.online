import {
  AppBar,
  Box,
  CssBaseline,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn, Mail, Phone, Download } from "@mui/icons-material";

export default function Navbar({ english, setEnglish }) {
  function linkTo(url) {
    return () => window.open(url, "_blank");
  }
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: 1140,
              margin: "0 auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h6" display="block">
                Tobaunta Torkelsson
              </Typography>
              <GitHub
                cursor="pointer"
                onClick={linkTo("https://github.com/tobaunta")}
              />
              <LinkedIn
                cursor="pointer"
                onClick={linkTo(
                  "https://www.linkedin.com/in/tobaunta-torkelsson"
                )}
              />
              <Mail
                cursor="pointer"
                onClick={linkTo("mailto:tobauntat@gmail.com")}
              />
              <Phone cursor="pointer" onClick={linkTo("tel:+46709594341")} />
              <Download cursor="pointer" onClick={linkTo("./cv.pdf")} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button href="#hero" sx={{ color: "#fff" }}>
                {english ? "HOME" : "HEM"}
              </Button>
              <Button href="#about" sx={{ color: "#fff" }}>
                {english ? "ABOUT ME" : "OM MIG"}
              </Button>
              <Button href="#skills" sx={{ color: "#fff" }}>
                {english ? "SKILLS" : "KOMPETENSER"}
              </Button>
              <Button href="#projects" sx={{ color: "#fff" }}>
                {english ? "PROJECTS" : "PROJEKT"}
              </Button>
              <Box
                component="img"
                src={
                  english
                    ? "./flags/swedish-flag.png"
                    : "./flags/english-flag.png"
                }
                sx={{ width: 20, cursor: "pointer" }}
                onClick={() => setEnglish(!english)}
              />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
