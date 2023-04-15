/* eslint-disable react/jsx-one-expression-per-line */
import { CardContainer, Header, ProjectsContainer } from "./styles";
import imgTest from "../../../assets/images/imgTest.jpg";

export default function Projects() {
  return (
    <>
      <Header>
        <h1>My recent <b>Works</b></h1>
        <span>Here are a few projects I&rsquo;ve worked on recently</span>
      </Header>
      <ProjectsContainer>
        <CardContainer>
          <img src={imgTest} alt="Test" />
          <h3 className="projectTitle">MyContacts</h3>
          <span className="projectDescription">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo animi earum eligendi fuga,
            perspiciatis architecto veniam nihil nostrum voluptates odit,
            adipisci vitae necessitatibus in quia minima? Odit odio dolores eius?
          </span>
        </CardContainer>
        <CardContainer>
          <img src={imgTest} alt="Test" />
          <h3 className="projectTitle">MyContacts</h3>
          <span className="projectDescription">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo animi earum eligendi fuga,
            perspiciatis architecto veniam nihil nostrum voluptates odit,
            adipisci vitae necessitatibus in quia minima? Odit odio dolores eius?
          </span>
        </CardContainer>
        <CardContainer>
          <img src={imgTest} alt="Test" />
          <h3 className="projectTitle">MyContacts</h3>
          <span className="projectDescription">
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Illo animi earum eligendi fuga,
            perspiciatis architecto veniam nihil nostrum voluptates odit,
            adipisci vitae necessitatibus in quia minima? Odit odio dolores eius?
          </span>
        </CardContainer>
      </ProjectsContainer>
    </>
  );
}
