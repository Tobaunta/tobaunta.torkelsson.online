import { Box, Typography } from "@mui/material";

export default function Hero({ english }) {
  return (
    <Box
      id="about"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ flexDirection: { md: "row", sm: "column", xs: "column" } }}
    >
      <Box
        component="img"
        src="/hero-img.png"
        alt="Hero Image"
        sx={{ width: { md: "600px", sm: "350px", xs: "280px" } }}
      />
      <Box>
        <Typography variant="h2" component="h2" sx={{ margin: 5 }}>
          {english ? "ABOUT ME" : "OM MIG"}
        </Typography>
        <Typography variant="p" component="p" sx={{ margin: 5 }}>
          {english ? "With over a decade of experience in software development, I have combined independent projects with formal training at Techover. During my time there, I refined my skills by developing a range of complex applications. Examples of projects include a password generator, an integration with Klarna Checkout and a comprehensive flag application." : "Med över ett decennium av erfarenhet inom mjukvaruutveckling, har jag kombinerat självständiga projekt med en formell utbildning hos Techover. Under min tid där har jag förfinat mina kunskaper genom att utveckla en rad komplexa applikationer. Exempel på projekt inkluderar en lösenordsgenerator, en integration med Klarna Checkout och en omfattande flagg-applikation."}
        </Typography>
      </Box>
    </Box>
  );
}
