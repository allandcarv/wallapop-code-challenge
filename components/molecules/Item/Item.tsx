import Image from 'next/image';
import { FiMail } from 'react-icons/fi';

import { Heading } from '../../atoms';

import { IItemComponent } from './Item.interface';

import { StyledArticle } from './Item.styles';

export const Item: React.FC<IItemComponent> = ({ item }) => {
  const { description, email, image, price, title } = item;

  return (
    <StyledArticle>
      <section className="image">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </section>
      <section className="data">
        <Heading level="second">{title}</Heading>
        <p className="description">{description}</p>
        <p className="price">{`${price},00 €`}</p>
      </section>
      <section className="actions">
        <a href={`mailto:${email}`}>
          <FiMail size="1.5em" title="Send Email to Seller" />
        </a>
      </section>
    </StyledArticle>
  );
};

export default Item;
