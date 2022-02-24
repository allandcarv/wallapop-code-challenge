import { StyledFooter } from './Footer.styles';

import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineMail,
} from 'react-icons/ai';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>
        Developed by <strong>Allan Carvalho</strong>
      </p>
      <section>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/allandc/"
          rel="noreferrer"
        >
          <AiOutlineMail size="1.5em" title="Send Email to Allan Carvalho" />
        </a>

        <a
          target="_blank"
          href="https://github.com/allandcarv/"
          rel="noreferrer"
        >
          <AiOutlineGithub size="1.5em" title="Allan Carvalho's GitHub" />
        </a>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/allandc/"
          rel="noreferrer"
        >
          <AiOutlineLinkedin size="1.5em" title="Allan Carvalho's LinkedIn" />
        </a>
      </section>
    </StyledFooter>
  );
};

export default Footer;
