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
  return (
    <Container>
      <Grid
        container
        p={2}
        spacing={2}
        m={3}
        sx={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          flexDirection: { md: "row", sm: "column", xs: "column" },
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={8}
          sx={{ display: "flex", flexDirection: "column", p: 3 }}
        >
          <Typography variant="h4">
            {name}
          </Typography>
          <Divider sx={{ width: "50%", my: 2, mx: "auto" }} />
          <Typography variant="string">
            {description}
          </Typography>
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
        <Grid item xs={4}>
          <Box component="img" src={image} alt={name} width={"100%"} />
        </Grid>
      </Grid>
    </Container>
  );
}
