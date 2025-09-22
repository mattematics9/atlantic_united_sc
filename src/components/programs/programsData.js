// ✅ Program Data
export const programs = [
  {
    id: "travel",
    title: "Travel Academy",
    grade: "Grades 3 - 12",
    image: require("../../images/logan-ruggiero-darren-2.png"),
    description: "Offers advanced training and competition, helping players maximize their potential on and off the field.",
    registerUrl:
      "https://system.gotsport.com/programs/D45748060?reg_role=player",
    learnMoreUrl: "/programs/travel",
    modal: null // no modal needed
  },
  {
    id: "pre-travel-academy",
    title: "Pre-Travel Academy",
    grade: "Grades 1 - 2",
    image: require("../../images/stony-brook-pre-travel.png"),
    description: "Prepares players for higher levels of play, bridging the gap between recreational and competitive soccer.",
    learnMoreUrl: "/programs/pre-travel",
    modal: [
      {
        club: "Three Village Soccer Club",
        location: "Stony Brook",
        url: "https://www.3vsoccer.com/"
      },
      {
        club: "LGN Soccer Club",
        location: "Selden",
        url: "https://lgnsoccer.com/register"
      }
    ]
  },
  {
    id: "intramural",
    title: "Intramural",
    grade: "Grades K - 2",
    image: require("../../images/sharks2.png"),
    description: "Provides a recreational environment where players can develop their skills and enjoy the game in a team setting.",
    learnMoreUrl: "/programs/intramural",
    modal: [
      {
        club: "Three Village Soccer Club",
        location: "Stony Brook",
        url: "https://www.3vsoccer.com/"
      },
      {
        club: "LGN Soccer Club",
        location: "Selden",
        url: "https://lgnsoccer.com/register"
      },
      {
        club: "Middle Country Soccer Club",
        location: "Centereach",
        url: "https://www.mccsoccer.org/soccer-programs"
      }
    ]
  },
  {
    id: "grassroots",
    title: "Grassroots",
    grade: "Ages 2 - 5",
    image: require("../../images/stony-brook-grassroots.png"),
    description: "Introduces the game through fun, engaging activities that build coordination and a love for soccer.",
    learnMoreUrl: "/programs/grassroots",
    modal: [
      {
        club: "Three Village Soccer Club",
        location: "Stony Brook",
        url: "https://www.3vsoccer.com/"
      },
      {
        club: "LGN Soccer Club",
        location: "Selden",
        url: "https://lgnsoccer.com/register"
      },
      {
        club: "Middle Country Soccer Club",
        location: "Centereach",
        url: "https://www.mccsoccer.org/soccer-programs"
      }
    ]
  }
];