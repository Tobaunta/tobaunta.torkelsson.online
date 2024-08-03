import { Box, Typography } from "@mui/material";
import Project from "./Project";

export default function Projects() {
  let technologies = "";
  return (
    <Box>
      <Typography id="projekt" variant="h3" component="h3" sx={{ margin: 5 }}>
        Projekt
      </Typography>
      <Project
        name="Flag-App"
        description="Implementerade en webbapplikation i React och CSS som visualiserar data från REST Countries API. Appen möjliggör för användare att utforska världens flaggor och få tillgång till relevanta fakta om varje land. Genom att kombinera modern frontend-utveckling med tydlig informationsarkitektur har jag skapat en resurs som både är informativ och engagerande."
        image="/projects/flag-app.png"
        technologies={
          (technologies = ["HTML", "CSS", "React", "REST Countries API"])
        }
        github="https://github.com/Tobaunta/flag-app"
        demo="https://flag-app.tobaunta.torkelsson.online"
      />
      <Project
        name="Klarna Checkout"
        description="Utvecklade en skalbar e-handelsbackend som integrerar Fake Store API och Klarnas checkout. Lösningen erbjuder en sömlös köpupplevelse och ger handlare flexibiliteten att hantera ett brett sortiment av produkter."
        image="/projects/klarna-checkout.png"
        technologies={
          (technologies = ["Node.js", "Express", "Klarna API", "Fake Store API"])
        }
        github="https://github.com/Tobaunta/klarna-checkout"
        demo="https://klarna-checkout-wazc.onrender.com"
      />
      <Project
        name="Lösenordsgenerator"
        description="Konstruerade en intuitiv lösenordsgenerator som ger användarna fullständig kontroll över lösenordsgenereringen. Genom att erbjuda ett brett spektrum av konfigurationsalternativ säkerställs att genererade lösenord uppfyller höga säkerhetsstandarder."
        image="/projects/password-generator.png"
        technologies={
          (technologies = ["HTML", "CSS", "JavaScript"])
        }
        github="https://github.com/Tobaunta/password-generator"
        demo="https://password-generator.tobaunta.torkelsson.online"
      />
      <Project
        name="SL Reklamationsberäknare"
        description="Genom att ge användarna en lättanvänd och effektiv lösning för att beräkna SL-biljettens restvärde."
        image="/projects/sl-deduction-calculator.png"
        technologies={
          (technologies = ["HTML", "JavaScript"])
        }
        github="https://github.com/Tobaunta/sl-deduction-calculator"
        demo="https://sl-deduction-calculator.tobaunta.torkelsson.online"
      />
    </Box>
  );
}
