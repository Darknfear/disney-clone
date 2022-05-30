import { Container, CTA, CTALogoOne, SignUp, Description, CTALogoTwo } from './styles';
const login: React.FC = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="cta" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+
          subscription. As of 03/26/21, the price of Disney+ and the Disney Bundle will increase by
          $1.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" alt="cta-two" />
      </CTA>
    </Container>
  );
};

export default login;
