import * as React from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Container from "@mui/material/Container";

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
    <Chip key={i} label={technology} sx={{ cursor: "default", backgroundColor: "#8697c4", color: "#fff" }} />
  ));
  return (
    <Container>
      <Box
        my={2}
        display="flex"
        alignItems="center"
        flexDirection="row"
        gap={1}
        p={3}
        sx={{
          border: "1px solid lightgray",
          borderRadius: "10px",
          flexDirection: { md: "row", sm: "column", xs: "column" },
        }}
      >
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Box fontWeight={"bold"} fontSize={"24px"}>
            {name}
          </Box>
          <Box>{description}</Box>
          <Box>
            <GitHubIcon
              sx={{ cursor: "pointer", mr: 1, color: "#8697c4" }}
              onClick={linkTo(github)}
            />
            <OpenInNewIcon sx={{ cursor: "pointer", color: "#8697c4" }} onClick={linkTo(demo)} />
          </Box>
        </Box>
        <Box display={"flex"} flexDirection={"column"} gap={3}>
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{ width: {md: "350px", sm: "350px", xs: "280px"} }}
          />
          <Box
            display={"flex"}
            gap={1}
            flexWrap={"wrap"}
            justifyContent={"center"}
            alignContent={"center"}
          >
            {technologiesChips}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
