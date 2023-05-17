import imgHTML from "../public/static/img/stack/html.svg";
import imgCSS from "../public/static/img/stack/css.svg";
import imgJS from "../public/static/img/stack/js.svg";
import imgNode from "../public/static/img/stack/node.svg";
import imgStyled from "../public/static/img/stack/styled.svg";
import imgReact from "../public/static/img/stack/react.svg";
import {BsFiletypeScss, BsGit, BsGithub, BsTrello}  from "react-icons/bs";
import { SiDjango, SiExpress, SiJest, SiJira, SiMongodb, SiNextdotjs, SiPostgresql, SiPython, SiRedux, SiScrumalliance, SiSpectrum, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaAws, FaDocker } from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: imgHTML,
  },
  {
    title: "CSS",
    img: imgCSS,
  },
  {
    title: "JS",
    img: imgJS,
  },
  {
    title: "Node JS",
    img: imgNode,
  },
  {
    title: "React",
    img: imgReact,
  },
  {
    title: "Redux",
    img: SiRedux,
  },
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Tailwind CSS",
    img: SiTailwindcss,
  },
  {
    title: "Styled Components",
    img: imgStyled,
  },
  { title: "SCSS", img: BsFiletypeScss },
  { title: "Next.js", img: SiNextdotjs },
  { title: "Express", img: SiExpress },
  { title: "Python", img: SiPython },
  { title: "Django", img: SiDjango },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "AWS", img: FaAws },
  { title: "Git", img: BsGit },
  { title: "GitHub", img: BsGithub },
  { title: "MongoDB", img: SiMongodb },
  { title: "Docker", img: FaDocker },
  { title: "Jira", img: SiJira },
  { title: "Trello", img: BsTrello },
  { title: "Jest", img: SiJest },
];
