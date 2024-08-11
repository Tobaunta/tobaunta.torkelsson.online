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
    <Box id="skills" sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, p: 3 }}>
      <Typography sx={{ fontSize: { xs: 30, md: 60 } }}>
        {english ? "SKILLS" : "KOMPETENSER"}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 2, flexWrap: "wrap" }}>
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
