import { Box, Typography } from "@mui/material";

export default function About({ english }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 3,
      }}
    >
      <Box
        id="about"
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
          {english ? "ABOUT ME" : "OM MIG"}
        </Typography>
        <Typography sx={{ fontSize: { xs: 10, md: 20 } }}>
          {english
            ? "After spending over a decade passionately exploring coding as a hobby, I realized that my passion for software development was something I wanted to take to the next level. This led me to undergo intensive and focused training at Techover, where I not only deepened my technical knowledge but also had the opportunity to develop and implement a range of complex applications. This experience has not only strengthened my technical expertise but also given me a strong foundation to face the challenges ahead in web development. My career journey has been both diverse and educational. I have worked in various industries, from starting and managing my own business to offering customer support and working as a professional school photographer. Each role has brought something unique to my portfolio of skills. As CEO of my own company, I developed in-depth knowledge in finance and business development, while learning the importance of building and nurturing customer relationships. In my role as a customer service representative, I have refined my communication skills and learned to handle complex customer issues and conflicts in a professional manner. My experiences as a school photographer have also strengthened my creativity and my ability to work effectively under time pressure, especially in situations that require quick adaptation and problem solving. As a self-taught developer, I have always had a burning desire to constantly learn new things, which has enabled me to quickly adapt to new technologies and work environments. I am an initiative-taking and goal-oriented person who not only sees what needs to be done but also tackles it with passion and determination. My creative side shows in my love for photography and music production, where I constantly challenge myself to create something new and meaningful. I look forward to combining my technical expertise, my creative ability and my broad professional experience to create innovative, user-friendly solutions and contribute to a dynamic development team."
            : "Efter att ha spenderat över ett decennium med att passionerat utforska kodning som hobby, insåg jag att min passion för mjukvaruutveckling var något jag ville ta till nästa nivå. Detta ledde mig till att genomgå en intensiv och fokuserad utbildning hos Techover, där jag inte bara fördjupade mina tekniska kunskaper utan också fick möjligheten att utveckla och implementera en rad komplexa applikationer. Denna erfarenhet har inte bara stärkt min tekniska expertis utan också gett mig en stark grund att stå på inför de utmaningar som väntar inom webbutveckling. Min karriärresa har varit både mångsidig och lärorik. Jag har arbetat inom olika branscher, från att starta och leda mitt eget företag till att erbjuda kundsupport och arbeta som professionell skolfotograf. Varje roll har tillfört något unikt till min kompetensportfölj. Som VD för mitt eget företag utvecklade jag djupgående kunskaper inom ekonomi och affärsutveckling, samtidigt som jag lärde mig vikten av att bygga och vårda kundrelationer. I min roll som kundtjänstmedarbetare har jag förfinat mina kommunikationsförmågor och lärt mig att hantera komplexa kundfrågor och konflikter på ett professionellt sätt. Mina erfarenheter som skolfotograf har dessutom stärkt min kreativitet och min förmåga att arbeta effektivt under tidspress, särskilt i situationer som kräver snabb anpassning och problemlösning. Som självlärd utvecklare har jag alltid haft en brinnande lust att ständigt lära mig nya saker, vilket har gjort det möjligt för mig att snabbt anpassa mig till nya teknologier och arbetsmiljöer. Jag är en initiativtagande och målinriktad person som inte bara ser vad som behöver göras utan också tar tag i det med passion och beslutsamhet. Min kreativa sida visar sig i min kärlek till fotografering och musikproduktion, där jag ständigt utmanar mig själv att skapa något nytt och meningsfullt. Jag ser fram emot att kombinera min tekniska expertis, min kreativa förmåga och min breda yrkeserfarenhet för att skapa innovativa, användarvänliga lösningar och bidra till ett dynamiskt utvecklingsteam."}
        </Typography>
      </Box>
      <Box
        component={"img"}
        src="./techover-cert.png"
        sx={{ width: "70%", cursor: "pointer" }}
        onClick={() => window.open("./techover-cert.png", "_blank")}
      />
    </Box>
  );
}
