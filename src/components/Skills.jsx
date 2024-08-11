import { Box, Typography } from "@mui/material";

export default function Skills({ english }) {
  const skills = [
    { name: "HTML", src: "/skills/html.svg" },
    { name: "CSS", src: "/skills/css.svg" },
    { name: "JavaScript", src: "/skills/javascript.svg" },
    { name: "React", src: "/skills/react.svg" },
    { name: "Node.js", src: "/skills/nodejs.svg" },
    { name: "Express", src: "/skills/express.svg" },
    { name: "MongoDB", src: "/skills/mongodb.svg" },
    { name: "Git", src: "/skills/git.svg" },
  ];
  return (
    <Box id="skills">
      <Typography variant="h2" sx={{ margin: 5 }}>
        {english ? "SKILLS" : "KOMPETENSER"}
      </Typography>
      <Box
        display="flex"
        gap={3}
        alignContent={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
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
            <Typography variant="h5">{skill.name}</Typography>
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
