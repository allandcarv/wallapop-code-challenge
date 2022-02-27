import { ButtonHTMLAttributes, useState, useEffect, useCallback } from 'react';
import { AiOutlineUp } from 'react-icons/ai';

import { StyledButton } from './ScrollToTop.styles';

const ScrollToTop: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...rest
}) => {
  const [showButton, setShowButton] = useState(false);
  const rootElement = document.documentElement;

  const handleScroll = useCallback(() => {
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;

    // Used a total of 9% of page scrolled, pretty much the header height
    const limitScrolledToShowButton = 0.09;

    if (rootElement.scrollTop / scrollTotal > limitScrolledToShowButton) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [rootElement]);

  const handleButtonClick = () =>
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return showButton ? (
    <StyledButton onClick={handleButtonClick} {...rest}>
      {children ? (
        children
      ) : (
        <AiOutlineUp size={'1.5rem'} title="Scroll page to top" />
      )}
    </StyledButton>
  ) : null;
};

export default ScrollToTop;
