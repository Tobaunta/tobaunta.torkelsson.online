import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GitHub, LinkedIn, Mail, Phone, Download } from "@mui/icons-material";

export default function Navbar({ english, setEnglish }) {
  function linkTo(url) {
    return () => window.open(url, "_blank");
  }
  return (
    <Box sx={{ display: { xs: "none", sm: "flex" } }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              maxWidth: 1140,
              margin: "0 auto",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                variant="h6"
                component="div"
                sx={{ display: "block" }}
              >
                Tobaunta Torkelsson
              </Typography>
              <GitHub
                sx={{ cursor: "pointer" }}
                onClick={linkTo("https://github.com/tobaunta")}
              />
              <LinkedIn
                sx={{ cursor: "pointer" }}
                onClick={linkTo(
                  "https://www.linkedin.com/in/tobaunta-torkelsson"
                )}
              />
              <Mail
                sx={{ cursor: "pointer" }}
                onClick={linkTo("mailto:tobauntat@gmail.com")}
              />
              <Phone
                sx={{ cursor: "pointer" }}
                onClick={linkTo("tel:+46709594341")}
              />
              <Download
                sx={{ cursor: "pointer" }}
                onClick={linkTo("/cv.pdf")}
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
                    ? "/flags/swedish-flag.png"
                    : "/flags/english-flag.png"
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
