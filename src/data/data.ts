import lib from "./lib.json";

// Dev Project Images
import ImgYourStyle from "../assets/projects/yourStyle-app.png";
import ImgNotesApp from "../assets/projects/notes-app.png";
import ImgSketchApp from "../assets/projects/mini-sketch-app.png";
import ImgShoppingApp from "../assets/projects/shopping-app.png";

// Dgn Project Images
import Buzz09Img01 from "../assets/projects/buzz09_preview-01.png";
import Buzz09Img02 from "../assets/projects/buzz09_preview-02.png";
import Buzz09Img03 from "../assets/projects/buzz09_preview-03.png";
import Buzz09Img04 from "../assets/projects/buzz09_preview-04.png";
import JetsaveImg01 from "../assets/projects/jetsave_preview-01.png";
import JetsaveImg02 from "../assets/projects/jetsave_preview-02.png";
import JetsaveImg03 from "../assets/projects/jetsave_preview-03.png";
import JetsaveImg04 from "../assets/projects/jetsave_preview-04.png";
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
  images: string[];
  url: string;
  problem?: string;
  solution?: string;
  results?: string;
  keyTakeaways?: {
    summary: string;
    points: string[];
  };
};

export const devProjectList: devProject[] = [
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
    name: "Mini Sketch App",
    description: "A simple sketch app made with react and canvas API.",
    image: ImgSketchApp,
    url: "https://iksm09.github.io/canvas-react/",
    githubLink: "canvas-react",
    techStack: "React",
    madeWith: [lib.react, lib.typescript, lib.tailwind, lib.lucideIcons],
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
];

export const dgnProjectList: dgnProject[] = [
  {
    name: "Buzz09",
    path: "buzz09",
    images: [Buzz09Img01, Buzz09Img02, Buzz09Img03, Buzz09Img04],
    url: "https://www.buzz09.com/",
    problem:
      "The client, a digital marketing agency, was looking to redesign their website to improve the user experience and increase conversions. The existing website was outdated and cluttered, making it difficult for users to find the information they were looking for. The call to action buttons were also not clear, and users were often confused about what they were supposed to do next.",
    solution:
      "The new website design was created with a focus on simplicity and clarity. The homepage was redesigned to feature a clear and concise message about the agency's services. The call to action buttons were also redesigned to be more prominent and inviting. The overall website design was made more user-friendly by using larger fonts, whitespace, and a consistent color scheme.",
    results:
      "The new website design was a success. The number of website visitors increased by 19%, and the conversion rate increased by 15%. Users reported that they found the new website easier to use and navigate. They also said that they were more likely to contact the agency after visiting the website.",
    keyTakeaways: {
      summary:
        "This case study demonstrates the importance of UI/UX design in digital marketing. A well-designed website can help to improve the user experience, increase conversions, and boost brand reputation.",
      points: [
        "Here are some key takeaways from this case study:",
        "A well-designed website can help to improve the user experience.",
        "A clear and concise message on the homepage is essential.",
        "Prominent and inviting call to action buttons are important.",
        "A simple and clutter-free design is key.",
        "Larger fonts, whitespace, and a consistent color scheme can improve the overall user experience.",
      ],
    },
  },
  {
    name: "Jetsave",
    path: "jetsave",
    images: [JetsaveImg01, JetsaveImg02, JetsaveImg03, JetsaveImg04],
    url: "http://journeys.jetsavetours.in/",
  },
  {
    name: "Brandnama",
    path: "brandnama",
    images: [BrandnamaImg],
    url: "https://www.brandnama.in/",
  },
  {
    name: "Harley Pathlabs",
    path: "harley-pathlabs",
    images: [HarleyImg],
    url: "http://www.harleypathlabs.com/",
  },
  {
    name: "Haxar Insurance",
    path: "haxar-insurance",
    images: [HaxarImg],
    url: "https://www.haxarinsurance.com/",
  },
];
