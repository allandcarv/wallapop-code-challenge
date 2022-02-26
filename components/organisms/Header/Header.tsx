import { StyledHeader } from './Header.styles';

import { Button } from '../../atoms';
import { IHeaderComponent } from './Header.interface';

import { useFavorites } from '../../../shared/hooks';

const Header: React.FC<IHeaderComponent> = ({ onGenericAction }) => {
  const { getFavorites } = useFavorites();

  const favorites = getFavorites().length;

  return (
    <StyledHeader>
      <section className="container">
        <h1>ITEM MANAGER</h1>
        <Button
          customType="outline"
          onClick={onGenericAction}
          disabled={!favorites}
        >
          Favorites: {favorites}
        </Button>
      </section>
    </StyledHeader>
  );
};

export default Header;
