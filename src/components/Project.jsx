import {
  Container,
  Grid,
  Box,
  Chip,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { GitHub, OpenInNew } from "@mui/icons-material";

export default function Project({
  name,
  description,
  image,
  technologies,
  github,
  demo,
  variant,
}) {
  function linkTo(url) {
    return () => window.open(url, "_blank");
  }
  const technologiesChips = technologies.map((technology, i) => (
    <Chip
      key={i}
      label={technology}
      sx={{
        cursor: "default",
        backgroundColor: "primary.main",
        color: "#fff",
        m: 1,
      }}
    />
  ));

  const txtGrid = (
    <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", px: 3 }}>
      <Typography sx={{ fontSize: 30 }}>{name}</Typography>
      <Divider sx={{ width: "50%", my: 2, mx: "auto" }} />
      <Typography sx={{ fontSize: 15 }}>{description}</Typography>
      <Box m={1}>
        <Button color="primary" onClick={linkTo(github)}>
          <GitHub />
          <Typography variant="button">GITHUB</Typography>
        </Button>
        <Button color="primary" onClick={linkTo(demo)}>
          <OpenInNew />
          <Typography variant="button">DEMO</Typography>
        </Button>
      </Box>
      <Box>{technologiesChips}</Box>
    </Grid>
  );

  const imgGrid = (
    <Grid item xs={4} sx={{ alignContent: "center" }}>
      <Box
        component="img"
        src={image}
        alt={name}
        width={"100%"}
        alignSelf={"center"}
      />
    </Grid>
  );

  return (
    <Container
      sx={{
        border: "1px solid lightgray",
        borderRadius: "10px",
        my: 3,
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          my: 3,
        }}
      >
        {variant === "img-left" || window.innerWidth < 900
          ? [imgGrid, txtGrid]
          : [txtGrid, imgGrid]}
      </Grid>
    </Container>
  );
}
