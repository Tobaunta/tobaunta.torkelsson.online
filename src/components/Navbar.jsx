import {
  AppBar,
  Box,
  CssBaseline,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import { GitHub, LinkedIn, Mail, Phone, Download } from "@mui/icons-material";
import sweFlag from "../assets/flags/swe.png";
import engFlag from "../assets/flags/eng.png";

export default function Navbar({ english, setEnglish }) {
  function linkTo(url) {
    return () => window.open(url, "_blank");
  }
  function scrollTo(id) {
    return () => window.scrollTo(0, document.getElementById(id).offsetTop - 64);
  }
  return (
    <Box sx={{ display: "flex" }}>
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
              <Typography>Tobaunta Torkelsson</Typography>
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
                onClick={linkTo("mailto:tobaunta@torkelsson.online")}
              />
              <Phone cursor="pointer" onClick={linkTo("tel:+46709594341")} />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <Button sx={{ color: "#fff" }} onClick={scrollTo("hero")}>
                  {english ? "HOME" : "HEM"}
                </Button>
                <Button sx={{ color: "#fff" }} onClick={scrollTo("about")}>
                  {english ? "ABOUT ME" : "OM MIG"}
                </Button>
                <Button sx={{ color: "#fff" }} onClick={scrollTo("skills")}>
                  {english ? "SKILLS" : "KOMPETENSER"}
                </Button>
                <Button sx={{ color: "#fff" }} onClick={scrollTo("projects")}>
                  {english ? "PROJECTS" : "PROJEKT"}
                </Button>
              </Box>
              <Box
                component="img"
                src={english ? engFlag : sweFlag}
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
