import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Container } from "./styles";

export default function Footer() {
  return (
    <Container>
      <div className="details">
        <span>Created by Gabriel Elias Machado</span>

        <span className="copyrightText">Copyright &#169; 2023 SB</span>

        <div className="socialMedias">
          <a
            href="https://github.com/Elias-exe?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/machado-elias/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>
    </Container>

  );
}
