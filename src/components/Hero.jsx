import { Box, Typography } from "@mui/material";

export default function Hero({ english }) {
  return (
    <Box
      id="hero"
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component="img"
        src="./hero-img.png"
        alt="Hero Image"
        sx={{ width: { md: "600px", sm: "350px", xs: "280px" } }}
      />
      <Box>
        <Typography variant="h3" component="h3" sx={{ margin: 5 }}>
          Tobaunta Torkelsson
        </Typography>
        <Typography variant="h5" component="h5" sx={{ margin: 5 }}>MERN Stack 
          {english
            ? " Web Developer"
            : " Webbutvecklare"}
        </Typography>
      </Box>
    </Box>
  );
}
