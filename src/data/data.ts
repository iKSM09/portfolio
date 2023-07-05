import lib from "./lib.json";

// Dev Project Images
import ImgNotesApp from "../assets/projects/notes-app.png";
import ImgShoppingApp from "../assets/projects/shopping-app.png";
import ImgYourStyle from "../assets/projects/yourStyle-app.png";

// Dgn Project Images
import Buzz09Img from "../assets/projects/buzz09_preview-01.png";
import JetsaveImg from "../assets/projects/jetsave_preview-01.png";
import BrandnamaImg from "../assets/projects/brandnama_preview-01.png";
import HarleyImg from "../assets/projects/harley_preview-01.png";
import HaxarImg from "../assets/projects/haxar_preview-01.png";

export type devProject = {
  name: string;
  description: string;
  image: string;
  url: string;
  githubLink: string;
  techStack: string;
  madeWith: {
    [key: string]: string;
  }[];
};

export type dgnProject = {
  name: string;
  path: string;
  image: string;
  url: string;
};

export const devProjectList: devProject[] = [
  {
    name: "Notes App",
    description: "A simple note taking app with to-do list made with react.",
    image: ImgNotesApp,
    url: "https://iksm09-react-notes.netlify.app/",
    githubLink: "react-notes",
    techStack: "React",
    madeWith: [
      lib.react,
      lib.reactRouter,
      lib.reactIcons,
      lib.styledComponents,
    ],
  },
  {
    name: "Shopping Website",
    description: "A simple shopping cart webpage made with react.",
    image: ImgShoppingApp,
    url: "https://luxury-clafoutis-302815.netlify.app/",
    githubLink: "crwn-clothing",
    techStack: "React",
    madeWith: [
      lib.react,
      lib.reactRouter,
      lib.reactIcons,
      lib.styledComponents,
    ],
  },
  {
    name: "Your Style App (WIP)",
    description:
      "An experiment to combine an e-commerce website with social media features.",
    image: ImgYourStyle,
    url: "https://your-style.netlify.app/",
    githubLink: "your-style-react",
    techStack: "React",
    madeWith: [
      lib.react,
      lib.typescript,
      lib.reactIcons,
      lib.styledComponents,
      lib.tanStackQuery,
      lib.tanStackRouter,
      lib.firebase,
    ],
  },
];

export const dgnProjectList: dgnProject[] = [
  {
    name: "Buzz09",
    path: "buzz09",
    image: Buzz09Img,
    url: "https://www.buzz09.com/",
  },
  {
    name: "Jetsave",
    path: "jetsave",
    image: JetsaveImg,
    url: "http://journeys.jetsavetours.in/",
  },
  {
    name: "Brandnama",
    path: "brandnama",
    image: BrandnamaImg,
    url: "https://www.brandnama.in/",
  },
  {
    name: "Harley Pathlabs",
    path: "harley-pathlabs",
    image: HarleyImg,
    url: "http://www.harleypathlabs.com/",
  },
  {
    name: "Haxar Insurance",
    path: "haxar-insurance",
    image: HaxarImg,
    url: "https://www.haxarinsurance.com/",
  },
];
