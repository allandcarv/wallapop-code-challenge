import { IHeading } from './Heading.interface';
import { HeadingLevel } from './Heading.type';

const getHead = (level: HeadingLevel, children: React.ReactNode) => {
  const allLevels = {
    first: <h1>{children}</h1>,
    second: <h2>{children}</h2>,
    third: <h3>{children}</h3>,
    fourth: <h4>{children}</h4>,
    fifth: <h5>{children}</h5>,
    sixth: <h6>{children}</h6>,
  };

  return allLevels[level] || allLevels.first;
};

const Heading: React.FC<IHeading> = ({ level, children }) => {
  return getHead(level, children);
};

export default Heading;
