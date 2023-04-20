/* eslint-disable react/jsx-one-expression-per-line */
import { CardContainer, Header, ProjectsContainer } from "./styles";
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
            <Image fileName={project.imageName} alt="Deu doidera" className="Imagem" />
            <h3 className="projectTitle">{project.name}</h3>
            <span className="projectDescription">
              {project.description}
            </span>
          </CardContainer>

        ))}
      </ProjectsContainer>
    </>
  );
}
