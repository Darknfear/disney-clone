import { Container } from './styles';
import { ImgSlider, Movies, Viewers } from '../../components';
const Home: React.FC = () => {
    return (
        <Container>
            <ImgSlider />
            <Viewers />
            <Movies />
        </Container>
    );
};

export default Home;
