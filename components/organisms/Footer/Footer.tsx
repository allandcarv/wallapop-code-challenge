import { StyledFooter } from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Developed by{' '}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/allandc/"
          rel="noreferrer"
        >
          Allan Carvalho
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
