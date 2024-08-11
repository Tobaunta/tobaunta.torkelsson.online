import { Box, Divider, Typography } from "@mui/material";

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
        height: "100vh",
      }}
    >
      <Box
        component="img"
        src="./hero-img.png"
        alt="Hero Image"
        sx={{ width: "70%", height: "auto" }}
      />
      <Box>
        <Typography sx={{ fontSize: { xs: 30, md: 60 } }}>
          Tobaunta Torkelsson
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography sx={{ fontSize: { xs: 20, md: 40 } }}>
          MERN Stack
          {english ? " Web Developer" : " Webbutvecklare"}
        </Typography>
      </Box>
    </Box>
  );
}
