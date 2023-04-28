import {
  DiReact, DiNodejs, DiJavascript1, DiPostgresql,
} from "react-icons/di";
import { SiCsharp } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import {
  Container, AboutMeContainer, SkillsContainer, CardSkill,
} from "./styles";
import rocket from "../../../assets/images/rocket.png";

export default function About() {
  return (
    <Container>
      <AboutMeContainer>
        <div className="aboutMe">
          <div className="title"><h1>Know Who Im</h1></div>
          <span>
            Hi Everyone, I am Gabriel Elias from Araraquara, Brazil.
            <br />
            I am an IT apprentice at Andritz Hydro.
          </span>
        </div>
        <div className="imageContainer">
          <img src={rocket} alt="Rocket" />
        </div>
      </AboutMeContainer>

      <SkillsContainer>
        <h1>Professional Skillset</h1>

        <div className="cardContainer">
          <CardSkill>
            <DiReact size={60} />
          </CardSkill>
          <CardSkill>
            <DiNodejs size={60} />
          </CardSkill>
          <CardSkill>
            <DiJavascript1 size={60} />
          </CardSkill>
          <CardSkill>
            <SiCsharp size={60} />
          </CardSkill>
          <CardSkill>
            <BsGit size={60} />
          </CardSkill>
          <CardSkill>
            <DiPostgresql size={60} />
          </CardSkill>
        </div>

      </SkillsContainer>
    </Container>

  );
}
