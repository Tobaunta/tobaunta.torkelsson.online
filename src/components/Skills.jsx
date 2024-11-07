import { Box, Typography } from "@mui/material";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import react from "../assets/skills/react.svg";
import nodejs from "../assets/skills/nodejs.svg";
import express from "../assets/skills/express.svg";
import mongodb from "../assets/skills/mongodb.svg";
import git from "../assets/skills/git.svg";

export default function Skills({ english }) {
  const skills = [
    { name: "HTML", src: html },
    { name: "CSS", src: css },
    { name: "JavaScript", src: javascript },
    { name: "React", src: react },
    { name: "Node.js", src: nodejs },
    { name: "Express", src: express },
    { name: "MongoDB", src: mongodb },
    { name: "Git", src: git },
  ];
  return (
    <Box
      id="skills"
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
        {english ? "SKILLS" : "KOMPETENSER"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        {skills.map((skill, i) => (
          <Box
            key={i}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
              height: 150,
            }}
          >
            <Typography sx={{ fontSize: 20 }}>{skill.name}</Typography>
            <Box
              component={"img"}
              src={skill.src}
              width={100}
              height={100}
            ></Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
