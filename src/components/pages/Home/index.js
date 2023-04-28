/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable max-len */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typewritter from "../../Typewritter";
import { Container } from "./styles";
import dinossaurImage from "../../../assets/images/google-dinossaur.png";
// import ReactIcon from "../../../assets/images/React-icon.svg.png";

export default function Home() {
  return (
    <Container>
      <div className="devHome">
        <div className="developerDetails">
          <h1>Hi There!</h1>
          <p>
            I&rsquo;M
            {" "}
            <span>GABRIEL ELIAS</span>
          </p>
          <span className="function">{Typewritter()}</span>
        </div>
        <div className="photo">
        <img src={dinossaurImage} alt="dinossaurImage" className="photo" />
        </div>
      </div>

      <div className="introduceMyself">
        <span>LET ME <span className="emphasisTitle">INTRODUCE</span> MYSELF</span>
        <div className="description">
          <p>
            Hello, my name is Gabriel Elias Machado, Im 20 years old,
            I was born and raised in Araraquara, São Paulo.
          </p>
          <p>
            I always liked the IT area so in 2017 I joined ETEC Anna de Oliveira
            Ferraz studying <span className="emphasis">IT Technician</span>. After <span className="emphasis">learning Front-End, Back-End,infrastructure and database</span>, I had the opportunity to create my TCC
            which was a game developed on the Game Maker platform using the GML
            language, in the project I was responsible for the creative and
            development part.
          </p>
          <p>
            I am currently graduated in <span className="emphasis">Systems Analysis and Development</span> at UNIP
            Araraquara, and I am also part of the development team at <span className="emphasis">Andritz Hydro
            Brasil</span>, I continue to improve my skills through courses and communities such as JStack.
          </p>
        </div>
      </div>

      <div className="socialMedias">
        <span className="findMeOn">FIND ME ON</span>
        <span className="socialMediaDescription">Fell free to connect with me</span>
        <div className="social">
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
