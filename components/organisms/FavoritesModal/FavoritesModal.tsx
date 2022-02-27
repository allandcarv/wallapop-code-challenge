import { BiSad } from 'react-icons/bi';

import { FavoritesModalItem } from '../../molecules';
import { Modal } from '../';

import { useFavorites } from '../../../shared/hooks';
import { sortItems } from '../../../shared/utils';

import { IFavoritesModalComponent } from './FavoritesModal.interface';
import { FavoritesModalContainer } from './FavoritesModal.styles';

const FavoritesModal: React.FC<IFavoritesModalComponent> = ({
  isOpen,
  closeModal,
}) => {
  const { getFavorites, removeFavorite } = useFavorites();

  const favorites = sortItems(getFavorites())('title');

  return isOpen ? (
    <Modal title="Favorite Items" closeModal={closeModal}>
      <FavoritesModalContainer>
        {!favorites.length && (
          <p>
            <BiSad size={'1.5rem'} />
            <strong>{`You haven't added any favorite yet...`}</strong>
          </p>
        )}
        {!!favorites.length && (
          <ul>
            {favorites.map((favorite) => (
              <FavoritesModalItem
                key={favorite.title}
                image={favorite.image}
                title={favorite.title}
                onRemoveItem={() => removeFavorite(favorite.title)}
              />
            ))}
          </ul>
        )}
      </FavoritesModalContainer>
    </Modal>
  ) : null;
};

export default FavoritesModal;
