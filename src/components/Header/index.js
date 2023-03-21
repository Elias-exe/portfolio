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
        <Link to="/resume">
          <span className="icon"><AiOutlineFile /></span>
          Resume
        </Link>
      </div>
    </Container>
  );
}
