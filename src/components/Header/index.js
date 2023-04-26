import { Link } from "react-router-dom";
import { AiOutlineProject, AiOutlineFile } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">GM</Link>
      <div className="projectsContainer">
        <Link to="/projects">
          <span className="icon"><AiOutlineProject /></span>
          Projects
        </Link>
        <Link to="/about">
          <span className="icon"><BsFillPersonFill /></span>
          About
        </Link>
        <a href="https://raw.githubusercontent.com/Elias-exe/portfolio/1ad4b44e68817a0f5f83fae51df458e499046a18/src/assets/Curriculo.pdf">
          <span className="icon"><AiOutlineFile /></span>
          Resume
        </a>
      </div>
    </Container>
  );
}
