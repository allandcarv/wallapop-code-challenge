import { useState, useEffect, BaseSyntheticEvent } from 'react';
import { BiSad } from 'react-icons/bi';

import { Button, Select } from '../../atoms';

import { Item } from '../../molecules/';

import { ITEMS_LIST_SLICE } from '../../../shared/constants';
import { IItem } from '../../../shared/interface';
import { useFavorites } from '../../../shared/hooks';
import { searchItems, sortItems } from '../../../shared/utils';
import { SortByType } from '../../../shared/types';

import { IItemsComponent } from './Items.interface';
import { StyledMain } from './Items.styles';

const Items: React.FC<IItemsComponent> = ({ items }) => {
  const searchItemsFn = searchItems(items);

  const [searchBy, setSearchBy] = useState<SortByType>('title');
  const [sortBy, setSortBy] = useState<SortByType>('title');
  const [sortedItems, setSortedItems] = useState<IItem[]>(
    sortItems(items)('title'),
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
    setSortBy(event.target.value);
    setSortedItems(sortItems(sortedItems)(event.target.value));
  };

  const handleSearchBy = (event: BaseSyntheticEvent) => {
    setSearchBy(event.target.value);
  };

  const handleSearchInput = (event: BaseSyntheticEvent) => {
    const itemsFound = searchItemsFn(searchBy)(event.target.value.trim());
    setSortedItems(sortItems(itemsFound)(sortBy));
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
              value={searchBy}
              onChange={handleSearchBy}
              id="search-by"
            />
            <input type="text" onChange={handleSearchInput} />
          </div>
        </article>
        <article className="sort__by">
          <label htmlFor="sort-by">Sort by:</label>
          <Select
            values={['title', 'description', 'email', 'price']}
            texts={['Title', 'Description', 'Email', 'Price']}
            value={sortBy}
            id="sort-by"
            onChange={handleSortBy}
            disabled={!slicedItems.length}
          />
        </article>
      </section>

      {!slicedItems.length && (
        <p className="no__results">
          <BiSad size={'1.5rem'} />
          <strong>No results found...</strong>
        </p>
      )}

      {slicedItems.map((item) => (
        <Item
          key={item.title}
          item={item}
          isFavorite={isFavorite(item.title)}
          onFavorite={() => handleFavorite(item)}
        />
      ))}
      {slicedItems.length < sortedItems.length && (
        <Button customType="fill" onClick={handleButtonClick}>
          Show More
        </Button>
      )}
    </StyledMain>
  );
};

export default Items;
