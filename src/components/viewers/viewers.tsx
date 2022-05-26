import { Container, Wrap } from "./styles";
const Viewers: React.FC = () => {
  return (
    <Container>
      <Wrap>
        <img src="images/viewers-disney.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-pixar.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-marvel.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-starwars.png" alt="view" />
      </Wrap>
      <Wrap>
        <img src="images/viewers-national.png" alt="view" />
      </Wrap>
    </Container>
  );
};

export default Viewers;
