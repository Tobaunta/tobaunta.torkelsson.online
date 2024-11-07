import { Box, Button, Divider, Typography } from "@mui/material";
import hero from "../assets/hero.png";
import cv from "../assets/cv/tobaunta-torkelsson-cv.pdf";
import resume from "../assets/cv/tobaunta-torkelsson-resume.pdf";

export default function Hero({ english }) {
  return (
    <Box
      id="hero"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
        height: "90vh",
      }}
    >
      <Box>
        <Typography sx={{ fontSize: { xs: 30, md: 60 } }}>
          Tobaunta Torkelsson
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography sx={{ fontSize: { xs: 20, md: 40 } }}>
          MERN Stack
          {english ? " Web Developer" : " Webbutvecklare"}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 2,
            mt: 3,
          }}
        >
          <Button variant="contained" href="mailto:tobaunta@torkelsson.online">
            {english ? "Contact me" : "Kontakta mig"}
          </Button>
          <Button
            variant="outlined"
            href={english ? resume : cv}
            target="_blank"
          >
            {english ? "Download Resume" : "Ladda ner CV"}
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        src={hero}
        alt="Hero Image"
        sx={{ width: "50%", height: "auto" }}
      />
    </Box>
  );
}
