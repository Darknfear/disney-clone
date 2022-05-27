import {
    Container,
    Background,
    ImageTitle,
    Controls,
    PlayButton,
    TrailerButton,
    AddButton,
    GroupWatchButton,
    SubTitle,
    Description
} from './styles';
const Detail: React.FC = () => {
    return (
        <Container>
            <Background>
                <img
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg"
                    alt="background"
                />
            </Background>
            <ImageTitle>
                <img
                    src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"
                    alt=""
                />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt="icon-button" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt="icon-button" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img alt="group" src="/images/group-icon.png" />
                </GroupWatchButton>
            </Controls>
            <SubTitle>2018 . 7m . Family, Fantasy, Kids, Animation</SubTitle>
            <Description>
                A Chinese mom who's sad when her grown son leaves home gets another chance at
                motherhood when one of her dumplings springs to life. But she finds that nothing
                stays cute and small forever
            </Description>
        </Container>
    );
};

export default Detail;
