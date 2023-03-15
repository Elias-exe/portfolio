import { Container } from "./styles";
import developer from "../../../assets/images/developer.png";

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
          <span className="function">Fullstack Developer</span>
        </div>
        <div className="photo">
          <img src={developer} alt="developerPhoto" />
        </div>
      </div>
      <div className="introduceMyself">
        <span>LET ME INTRODUCE MYSELF</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Tenetur aut perspiciatis cupiditate, quas voluptatem eum dicta quia
          iure placeat vel. Omnis commodi blanditiis nam nisi delectus aspernatur
          ad suscipit tempore?

        </p>
      </div>
    </Container>
  );
}
