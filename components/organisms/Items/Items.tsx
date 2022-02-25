import { useState, useEffect, BaseSyntheticEvent } from 'react';

import { Button, Select } from '../../atoms';

import { Item } from '../../molecules/';

import { ITEMS_LIST_SLICE } from '../../../shared/constants';
import { IItem } from '../../../shared/interface';
import { useFavorites } from '../../../shared/hooks';
import { sortItems } from '../../../shared/utils';

import { IItemsComponent } from './Items.interface';
import { StyledMain } from './Items.styles';

const Items: React.FC<IItemsComponent> = ({ items }) => {
  const sortedItemsFn = sortItems(items);

  const [sortedItems, setSortedItems] = useState<IItem[]>(
    sortedItemsFn('title'),
  );
  const [slicedItems, setSlicedItems] = useState<IItem[]>(
    sortedItems.slice(0, ITEMS_LIST_SLICE),
  );

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleButtonClick = () =>
    setSlicedItems((prevState) => [
      ...prevState,
      ...sortedItems.slice(
        prevState.length,
        prevState.length + ITEMS_LIST_SLICE,
      ),
    ]);

  const handleFavorite = (item: IItem) => {
    if (isFavorite(item.title)) {
      return removeFavorite(item.title);
    } else {
      return addFavorite(item);
    }
  };

  const handleSortBy = (event: BaseSyntheticEvent) => {
    setSortedItems(sortedItemsFn(event.target.value));
  };

  useEffect(() => {
    setSlicedItems(sortedItems.slice(0, ITEMS_LIST_SLICE));
  }, [sortedItems]);

  return (
    <StyledMain>
      <section>
        <article className="search__by">
          <label htmlFor="search-by">Search by:</label>
          <div className="search__box">
            <Select
              values={['title', 'description', 'email', 'price']}
              texts={['Title', 'Description', 'Email', 'Price']}
              id="search-by"
            />
            <input type="text" />
          </div>
        </article>
        <article className="sort__by">
          <label htmlFor="sort-by">Sort by:</label>
          <Select
            values={['title', 'description', 'email', 'price']}
            texts={['Title', 'Description', 'Email', 'Price']}
            id="sort-by"
            onChange={handleSortBy}
          />
        </article>
      </section>

      {slicedItems.map((item) => (
        <Item
          key={item.title}
          item={item}
          isFavorite={isFavorite(item.title)}
          onFavorite={() => handleFavorite(item)}
        />
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
