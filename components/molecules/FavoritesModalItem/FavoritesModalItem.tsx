import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';

import { IFavoritesModalItemComponent } from './FavoritesModalItem.interface';
import { StyledLi } from './FavoritesModalItem.styles';

const FavoritesModalItem: React.FC<IFavoritesModalItemComponent> = ({
  image,
  onRemoveItem,
  title,
  ...rest
}) => {
  return (
    <StyledLi {...rest}>
      <section className="image">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </section>
      <h3>{title}</h3>
      <AiOutlineDelete
        size="1.5rem"
        onClick={onRemoveItem}
        title={`Remove ${title} from favorites`}
      />
    </StyledLi>
  );
};

export default FavoritesModalItem;
