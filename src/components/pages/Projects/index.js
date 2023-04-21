/* eslint-disable react/jsx-one-expression-per-line */
import { AiFillGithub } from "react-icons/ai";
import { MdMonitor } from "react-icons/md";
import {
  CardContainer, Header, ProjectsContainer, ButtonContainer,
} from "./styles";
import projects from "../../../projects.json";
import Image from "../../Image";

export default function Projects() {
  return (
    <>
      <Header>
        <h1>My recent <b>Works</b></h1>
        <span>Here are a few projects I&rsquo;ve worked on recently</span>
      </Header>
      <ProjectsContainer>
        {projects.map((project) => (

          <CardContainer key={Math.random()}>
            <Image fileName={project.imageName} alt={project.name} className="Imagem" />
            <h3 className="projectTitle">{project.name}</h3>
            <span className="projectDescription">
              {project.description}
            </span>

            <ButtonContainer>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                  GitHub
                </a>
              ) : null}
              {project.demo ? (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <MdMonitor />
                  Demo
                </a>
              ) : null}
            </ButtonContainer>
          </CardContainer>

        ))}
      </ProjectsContainer>
    </>
  );
}
