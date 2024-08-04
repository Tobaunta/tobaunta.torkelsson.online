import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="om-mig"
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
          OM MIG
        </Typography>
        <Typography variant="p" component="p" sx={{ margin: 5 }}>
          Med över ett decennium av erfarenhet inom mjukvaruutveckling, har jag
          kombinerat självständiga projekt med en formell utbildning hos
          Techover. Under min tid där har jag förfinat mina kunskaper genom att
          utveckla en rad komplexa applikationer. Exempel på projekt inkluderar
          en lösenordsgenerator, en integration med Klarna Checkout och en
          omfattande flagg-applikation.
        </Typography>
      </Box>
    </Box>
  );
}
