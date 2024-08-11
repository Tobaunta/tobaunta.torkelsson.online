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
        fontSize: { xs: 10, md: 15 },
      }}
    />
  ));

  const txtGrid = (
    <Grid item xs={8} sx={{ display: "flex", flexDirection: "column", px: { xs: 0, md: 3 } }}>
      <Typography sx={{ fontSize: { xs: 15, md: 30 } }} >{name}</Typography>
      <Divider sx={{ width: "50%", my: 2, mx: "auto" }} />
      <Typography sx={{ fontSize: { xs: 10, md: 15 } }}>{description}</Typography>
      <Box m={1}>
        <Button color="primary" onClick={linkTo(github)}>
          <GitHub />
          <Typography sx={{ fontSize: { xs: 10, md: 15 } }}>GITHUB</Typography>
        </Button>
        <Button color="primary" onClick={linkTo(demo)}>
          <OpenInNew />
          <Typography sx={{ fontSize: { xs: 10, md: 15 } }}>DEMO</Typography>
        </Button>
      </Box>
      <Box>{technologiesChips}</Box>
    </Grid>
  );

  const imgGrid = (
    <Grid item xs={10} md={4} sx={{ alignContent: "center" }}>
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
