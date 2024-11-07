import { Box, Typography } from "@mui/material";
import cert from "../assets/techover-cert.png";

export default function About({ english }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 3,
      }}
    >
      <Box
        id="about"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          p: 3,
        }}
      >
        <Typography sx={{ fontSize: { xs: 30, md: 60 } }}>
          {english ? "ABOUT ME" : "OM MIG"}
        </Typography>
        <Typography sx={{ fontSize: { xs: 10, md: 20 } }}>
          {english
            ? "After spending over a decade passionately exploring coding as a hobby, I realized that my passion for software development was something I wanted to take to the next level. This led me to undergo intensive and focused training at Techover, where I not only deepened my technical knowledge but also had the opportunity to develop and implement a range of complex applications. This experience has not only strengthened my technical expertise but also given me a strong foundation to face the challenges ahead in web development."
            : "Efter att ha spenderat över ett decennium med att passionerat utforska kodning som hobby, insåg jag att min passion för mjukvaruutveckling var något jag ville ta till nästa nivå. Detta ledde mig till att genomgå en intensiv och fokuserad utbildning hos Techover, där jag inte bara fördjupade mina tekniska kunskaper utan också fick möjligheten att utveckla och implementera en rad komplexa applikationer. Denna erfarenhet har inte bara stärkt min tekniska expertis utan också gett mig en stark grund att stå på inför de utmaningar som väntar inom webbutveckling."}
        </Typography>
      </Box>
      <Box
        component={"img"}
        src={cert}
        sx={{ width: "70%", cursor: "pointer" }}
        onClick={() => window.open(cert, "_blank")}
      />
    </Box>
  );
}
