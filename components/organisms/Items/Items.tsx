import { useState } from 'react';

import { Button } from '../../atoms';

import { Item } from '../../molecules/';

import { ITEMS_LIST_SLICE } from '../../../shared/constants';
import { IItem } from '../../../shared/interface';

import { IItemsComponent } from './Items.interface';
import { StyledMain } from './Items.styles';

const Items: React.FC<IItemsComponent> = ({ items }) => {
  const [slicedItems, setSlicedItems] = useState<IItem[]>(
    (items || []).slice(0, ITEMS_LIST_SLICE),
  );

  const handleButtonClick = () =>
    setSlicedItems((prevState) => [
      ...prevState,
      ...items.slice(prevState.length, prevState.length + ITEMS_LIST_SLICE),
    ]);

  return (
    <StyledMain>
      {slicedItems.map((item) => (
        <Item key={item.title} item={item} />
      ))}
      {slicedItems.length < items.length && (
        <Button customType="fill" onClick={handleButtonClick}>
          Show More
        </Button>
      )}
    </StyledMain>
  );
};

export default Items;
