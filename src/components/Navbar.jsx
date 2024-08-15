import { AppBar, Box, CssBaseline, Button, Toolbar } from "@mui/material";
import { GitHub, LinkedIn, Mail, Phone, Download } from "@mui/icons-material";

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
                <Button sx={{ color: "#fff" }} onClick={linkTo("./cv.pdf")}>
                  {english ? "RESUME" : "CV"}
                </Button>
              </Box>
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
