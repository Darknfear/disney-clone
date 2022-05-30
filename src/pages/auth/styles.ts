import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  align-items: top;
  justify-content: center;
  margin-top: 200px;

  ::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: '';
    left: 0;
    right: 0;
    background-image: url('/images/login-background.jpg');
    opacity: 0.7;
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 80%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  align-self: start;
  align-items: center;
`;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8x;
  margin-bottom: 12px;

  ::hover {
    background: #0453ee;
  }
`;

const CTALogoOne = styled.img``;

const CTALogoTwo = styled.img`
width: 90%;
`;

const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

export { Container, CTA, CTALogoOne, SignUp, Description, CTALogoTwo };
