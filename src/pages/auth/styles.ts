import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);

    ::before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        right: 0;
        background-image: url("/images/login-background.jpg");
        z-index: -1;

    }
`;

const CTA = styled.div``;

const CTALogoOne = styled.img``;

export { Container, CTA, CTALogoOne };
