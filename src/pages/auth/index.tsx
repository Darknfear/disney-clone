import { Container, CTA, CTALogoOne } from './styles';
const login: React.FC = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" alt="cta" />
      </CTA>
    </Container>
  );
};

export default login;
