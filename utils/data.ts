import { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    company: "Vendible",
    startYear: "2020",
    endYear: "Present",
    duties:
      "In charge of going through all the steps of the life cycle of several web applications and services. From requirement gathering to development of both frontend and backend services.\n \n \n Worked on several crypto projects involving the integration of zero knowledge proofs and blockchain libraries. Mostly worked on Algorand, Ethereum and Polygon. In charge of applying SCRUM to be able to keep track of tasks and keep the development team in sync",
  },
  {
    company: "Telefonica Venezolana, C.A.",
    startYear: "2020",
    endYear: "2021",
    duties:
      "In charge of creating and managing ETL processes using Python, Django REST Framework and pandas in order to get relevant and organized data. Developed a frontend application using Angular, Material and Highcharts that consumed this data and presented it in a dashboard that was later used by executives in the company for decision making.",
  },
  {
    company: "Asociacion GUAO",
    startYear: "2019",
    endYear: "2020",
    duties:
      "Redesigned a Drupal website to be responside using CSS and JavaScript on top of the existing project.",
  },
];

export const skills = [
  { name: "typescript" },
  { name: "python" },
  { name: "django" },
  { name: "nodejs" },
  { name: "git" },
  { name: "postgresql" },
  { name: "reactjs" },
  { name: "angular" },
  { name: "nextjs" },
  { name: "docker" },
  { name: "graphql" },
];

export const projects = [
  {
    title: "Admetricks landing page",
    description:
      "Landing page for Admetricks company that also contains a dynamic chart built with D3.js to represent the CLP/USD variation yearly.",
    stack: ["Vue.js", "Tailwind", "TypeScript", "D3.js"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "To Do List",
    description: "Simple To Do List. Deployed on firebase and cloud functions.",
    stack: ["Angular", "Express.js", "Firestore", "Firebase"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "Rick and Morty app",
    description:
      "Web app that consumes data from the Rick and Morty API and allows to edit it and store changes locally.",
    stack: ["Next.js", "Tailwind", "TypeScript", "Zustand", "GraphQL"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "Trustible",
    description:
      "Web application built on the Algorand network that would help users restore and recover their lost seedphrases in multiple blockchain networks, including Ethereum, Polygon, Vechain, Solana and Algorand.",
    stack: ["Next.js", "Material UI", "TypeScript", "Redux Toolkit", "GraphQL"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "Algorand web wallet",
    description:
      "Web blockchain wallet for the Algorand network with additional privacy and identity features using Onfido.",
    stack: ["Next.js", "Material UI", "TypeScript", "Redux Sagas", "GraphQL"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "Portfolio V1",
    description: "Previous iteration of my personal portfolio using React.js",
    stack: ["React.js", "Material UI", "TypeScript", "Redux Sagas"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "Guao.org",
    description:
      "Responsive redesign of a Drupal website using plain CSS and Javascript on top of the existing page using a Drupal plugin.",
    stack: ["Ruby on Rails", "Bootstrap"],
    source: "https://github.com/devendr4/rickandmorty-coding-test",
  },
  {
    title: "LAPROMO",
    description: "TheFork clone using Ruby on Rails",
    stack: ["Ruby on Rails", "Bootstrap"],
  },
];
