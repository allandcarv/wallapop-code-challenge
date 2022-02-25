import { StyledHeader } from './Header.styles';

import { Button } from '../../atoms';

import { useFavorites } from '../../../shared/hooks';

const Header: React.FC = () => {
  const { getFavorites } = useFavorites();

  const favorites = getFavorites().length;

  return (
    <StyledHeader>
      <section className="container">
        <h1>ITEM MANAGER</h1>
        <Button customType="outline">Favorites: {favorites}</Button>
      </section>
    </StyledHeader>
  );
};

export default Header;
