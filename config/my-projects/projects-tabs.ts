import projects from "../../public/assets/projects";
import technologies from "../../public/assets/technologies/logo_full";

//statusCodes Equivilants
//1- active
//2 - on Hold
//3 - Abandoned
//4 - Completed

const myProjectsTabs = [
  {
    label: "Professional Work",
    items: [
      {
        link: "https://play.google.com/store/apps/details?id=com.paprikaapp",
        title: "Cagette & Paprika React Native App",
        status: "Updated & Maintained",
        statusCode: 1,
        subTitle:
          "Groceries Home delivery App. Available for users from Lille(France), on Android & IOS.",
        image: projects.cpMobile,
        technologies: [
          technologies.react,
          technologies.redux,
          technologies.rnNavigation,
          technologies.firebase,
        ],
      },
      {
        link: "https://www.cagette-et-paprika.com/",
        title: "Cagette & Paprika website + back-end",
        status: "Updated & Maintained",
        statusCode: 1,
        subTitle:
          "Migrated website from PHP to React TS. Backend powered by OVH server(node scripts) and wooCommerce.",
        image: projects.cpWeb,
        technologies: [
          technologies.react,
          technologies.node,
          technologies.algolia,
          technologies.wordPress,
          technologies.PHP,
          technologies.wooCommerce,
          technologies.mySQL,
        ],
      },
    ],
  },
  {
    label: "Full-Stack Projects",
    items: [
      {
        link: "https://www.greencrypto.wiki/",
        title: "Green Crypto Wiki",
        subTitle:
          "Website listing various crypto currencies and there impact on the environment",
        status: "Maintained and planned to updated soon.",
        statusCode: 1,
        image: projects.greenCrypto,
        technologies: [
          technologies.react,
          technologies.redux,
          technologies.styledComponents,
          technologies.node,
          technologies.gcPlatform,
          technologies.firebase,
        ],
      },
      {
        link: "https://play.google.com/store/apps/details?id=com.brawlMax.brawlMax",
        title: "Brawl Max",
        status:
          "Project on pause since September 2021. Click for APK or Footage.",
        statusCode: 3,
        subTitle:
          "React Native game-companion app, with multiple functionalities to help players improve. Available on Android & IOS.",
        image: projects.brawlMax,
        technologies: [
          technologies.react,
          technologies.redux,
          technologies.python,
          technologies.node,
          technologies.gcPlatform,
          technologies.firebase,
        ],
      },
    ],
  },
  {
    label: "Front-End Projects",
    items: [
      {
        link: "https://www.williamguinaudie.com/",
        title: "This Website!",
        github: "https://github.com/NeoHuncho/my-portfolio",
        subTitle: "Portfolio Website/ NextJS & Material UI",
        status: "Maintained",
        statusCode: 1,
        image: projects.portfolio,
        technologies: [
          technologies.react,
          technologies.nextJS,
          technologies.styledComponents,
          technologies.motion_framer,
        ],
      },
      {
        link: "https://awesome-bohr-10de14.netlify.app/",
        title: "To Do List",
        status: "Practice project (2020)",
        statusCode: 4,
        subTitle: "React To Do List using axios",
        image: projects.toDoList,
        github: "https://github.com/NeoHuncho/To-do-list-react",
        technologies: [technologies.react],
      },
    ],
  },
  {
    label: "Front-End React (FCC)",
    items: [
      {
        link: "https://drumpadreact.netlify.app/",
        title: "Drum Pad",
        status: "Practice project (2020)",
        statusCode: 4,
        subTitle: "Online Drum Pad w/ keyboard keys- Sound Bar - Bank Switcher",
        image: projects.drumpadReact,
        github: "https://github.com/NeoHuncho/drum-machine",
        technologies: [
          technologies.react,
          technologies.redux,
          technologies.motion_framer,
        ],
      },
      {
        link: "https://markdown-previewer-react1.netlify.app/",
        title: "Markdown Converter",
        status: "Practice project (2020)",
        statusCode: 4,
        subTitle: "HTML5 Markdown converter with Marked.js",
        image: projects.markdownConverter,
        github: "https://github.com/NeoHuncho/Markdown-Previewer",
        technologies: [technologies.react],
      },
    ],
  },
  {
    label: "Data Visualization (FCC)",
    items: [
      {
        link: "https://barchartdd3.netlify.app/",
        title: "Bar Chart",
        subTitle: "Bar Chart using D3",
        status: "Practice project (2020)",
        statusCode: 4,
        image: projects.barChart,
        github: "https://github.com/NeoHuncho/D3-Bar-Chart",
        technologies: [technologies.react, technologies.d3],
      },
      {
        link: "https://scaterplotgraphdd3.netlify.app/",
        title: "Scatter Plot",
        subTitle: "Scatter Chart using D3",
        status: "Practice project (2020)",
        statusCode: 4,
        image: projects.scatterPlot,
        github: "https://github.com/NeoHuncho/Scatterplot-Graph-FCC",
        technologies: [technologies.react, technologies.d3],
      },
    ],
  },
];
export default myProjectsTabs;
