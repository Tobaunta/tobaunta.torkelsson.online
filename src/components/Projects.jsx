import { Box, Typography } from "@mui/material";
import Project from "./Project";

export default function Projects({ english }) {
  let technologies = "";
  return (
    <Box id="projects">
      <Typography sx={{ fontSize: { xs: 30, md: 60 } }}>
        {english ? "PROJECTS" : "PROJEKT"}
      </Typography>
      <Project
        name={english ? "Spotify-Clone" : "Spotify-Klon"}
        description={
          english
            ? "Built a web-based music streaming platform using React and Material UI. Integrating the Spotify API created a seamless user experience for listening to music. The application is optimized for both mobile devices and desktop computers."
            : "Konstruerade en webbaserad musikstreaming-plattform med React och Material UI. Genom att integrera Spotify API skapades en sömlös användarupplevelse för att lyssna på musik. Applikationen är optimerad för både mobila enheter och stationära datorer."
        }
        image="/projects/spotify-clone.png"
        technologies={
          (technologies = [
            "HTML",
            "CSS",
            "React",
            "Material UI",
            "Spotify API",
            "Spotify Playback SDK",
          ])
        }
        github="https://github.com/Tobaunta/spotify-clone"
        demo="https://spotify.tobaunta.torkelsson.online"
      />
      <Project
        name={english ? "Flag-App" : "Flagg-App"}
        description={
          english
            ? "Implemented a web application in React and CSS that visualizes data from the REST Countries API. The app enables users to explore the flags of the world and access relevant facts about each country. By combining modern frontend development with clear information architecture, I have created a resource that is both informative and engaging."
            : "Implementerade en webbapplikation i React och CSS som visualiserar data från REST Countries API. Appen möjliggör för användare att utforska världens flaggor och få tillgång till relevanta fakta om varje land. Genom att kombinera modern frontend-utveckling med tydlig informationsarkitektur har jag skapat en resurs som både är informativ och engagerande."
        }
        image="/projects/flag-app.png"
        technologies={
          (technologies = ["HTML", "CSS", "React", "REST Countries API"])
        }
        github="https://github.com/Tobaunta/flag-app"
        demo="https://flag-app.tobaunta.torkelsson.online"
        variant={"img-left"}
      />
      <Project
        name="Klarna Checkout"
        description={
          english
            ? "Developed a scalable e-commerce backend that integrates the Fake Store API and Klarna's checkout. The solution offers a seamless shopping experience and gives merchants the flexibility to manage a wide range of products."
            : "Utvecklade en skalbar e-handelsbackend som integrerar Fake Store API och Klarnas checkout. Lösningen erbjuder en sömlös köpupplevelse och ger handlare flexibiliteten att hantera ett brett sortiment av produkter."
        }
        image="/projects/klarna-checkout.png"
        technologies={
          (technologies = [
            "Node.js",
            "Express",
            "Klarna API",
            "Fake Store API",
          ])
        }
        github="https://github.com/Tobaunta/klarna-checkout"
        demo="https://klarna-checkout-wazc.onrender.com"
      />
      <Project
        name={english ? "Password Generator" : "Lösenordsgenerator"}
        description={
          english
            ? "Constructed an intuitive password generator that gives users complete control over password generation. By offering a wide range of configuration options, it is ensured that generated passwords meet high security standards."
            : "Konstruerade en intuitiv lösenordsgenerator som ger användarna fullständig kontroll över lösenordsgenereringen. Genom att erbjuda ett brett spektrum av konfigurationsalternativ säkerställs att genererade lösenord uppfyller höga säkerhetsstandarder."
        }
        image="/projects/password-generator.png"
        technologies={(technologies = ["HTML", "CSS", "JavaScript"])}
        github="https://github.com/Tobaunta/password-generator"
        demo="https://password-generator.tobaunta.torkelsson.online"
        variant={"img-left"}
      />
      <Project
        name={english ? "SL Deduction Calculator" : "SL Reklamationsberäknare"}
        description={
          english
            ? "By providing users with an easy-to-use and efficient solution to calculate the residual value of the SL ticket."
            : "Genom att ge användarna en lättanvänd och effektiv lösning för att beräkna SL-biljettens restvärde."
        }
        image="/projects/sl-deduction-calculator.png"
        technologies={(technologies = ["HTML", "JavaScript"])}
        github="https://github.com/Tobaunta/sl-deduction-calculator"
        demo="https://sl-deduction-calculator.tobaunta.torkelsson.online"
      />
    </Box>
  );
}
