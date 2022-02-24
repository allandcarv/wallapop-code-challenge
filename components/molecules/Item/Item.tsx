import Image from 'next/image';
import { AiOutlineMail, AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import { Heading } from '../../atoms';

import { IItemComponent } from './Item.interface';

import { StyledArticle } from './Item.styles';

export const Item: React.FC<IItemComponent> = ({
  item,
  isFavorite,
  onFavorite,
}) => {
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
          <AiOutlineMail size="1.5em" title="Send Email to Seller" />
        </a>
        {isFavorite ? (
          <AiFillHeart
            size="1.5em"
            title="Remove from Favorites"
            onClick={onFavorite}
          />
        ) : (
          <AiOutlineHeart
            size="1.5em"
            title="Add to Favorites"
            onClick={onFavorite}
          />
        )}
      </section>
    </StyledArticle>
  );
};

export default Item;
