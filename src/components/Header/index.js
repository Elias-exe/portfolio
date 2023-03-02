import { Link } from "react-router-dom";
import { Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Link to="/">GM</Link>
      <div className="projectsContainer">
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resume</Link>
      </div>
    </Container>
  );
}
