import { Box, Typography } from "@mui/material";

export default function About({ english }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 2, p: 3 }}>
      <Box component={"img"} src="./techover-cert.png" sx={{ width: "40%", cursor: "pointer" }} onClick={() => window.open("./techover-cert.png", "_blank")} />
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
      <Typography sx={{ fontSize: { xs: 20, md: 40 } }}>
        {english ? "ABOUT ME" : "OM MIG"}
      </Typography>
      <Typography sx={{ fontSize: { xs: 9, md: 18 } }}>
        {english
          ? "After over a decade of passionate hobby coding, I decided to take my software development to the next level. Through intensive training at Techover, I was able to deepen my knowledge and develop a range of complex applications. Among other things, I created an extensive Spotify clone using the Spotify API, which required in-depth knowledge of API integrations, database management and user interfaces. In addition to this, I developed a password generator, an integration with Klarna Checkout and a comprehensive flag application."
          : "Efter över ett decennium av passionerat hobby-kodande, bestämde jag mig för att ta min mjukvaruutveckling till nästa nivå. Genom en intensiv utbildning hos Techover kunde jag fördjupa mina kunskaper och utveckla en rad komplexa applikationer. Bland annat skapade jag en omfattande Spotify-klon med hjälp av Spotify API, vilket krävde djupgående kunskaper inom API-integrationer, databashantering och användargränssnitt. Utöver detta utvecklade jag en lösenordsgenerator, en integration med Klarna Checkout och en omfattande flagg-applikation."}
      </Typography>
    </Box>
    </Box>
  );
}
