import { Item } from '../../molecules/';

import { IItemsComponent } from './Items.interface';

import { StyledMain } from './Items.styles';

const Items: React.FC<IItemsComponent> = ({ items }) => {
  return (
    <StyledMain>
      {(items || []).map((item) => (
        <Item key={item.title} item={item} />
      ))}
    </StyledMain>
  );
};

export default Items;
