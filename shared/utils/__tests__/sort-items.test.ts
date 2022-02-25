import { sortItems } from '..';

const items = [
  {
    title: 'D Some Title',
    description: 'D Some Description',
    price: '4',
    email: 'D Some Email',
    image: 'D Some Image',
  },
  {
    title: 'C Some Title',
    description: 'C Some Description',
    price: '3',
    email: 'C Some Email',
    image: 'C Some Image',
  },
  {
    title: 'D Some Title',
    description: 'D Some Description',
    price: '4',
    email: 'D Some Email',
    image: 'D Some Image',
  },
  {
    title: 'B Some Title',
    description: 'B Some Description',
    price: '2',
    email: 'B Some Email',
    image: 'B Some Image',
  },
  {
    title: 'A Some Title',
    description: 'A Some Description',
    price: '1',
    email: 'A Some Email',
    image: 'A Some Image',
  },
];

const expectedResult = [
  {
    title: 'A Some Title',
    description: 'A Some Description',
    price: '1',
    email: 'A Some Email',
    image: 'A Some Image',
  },
  {
    title: 'B Some Title',
    description: 'B Some Description',
    price: '2',
    email: 'B Some Email',
    image: 'B Some Image',
  },
  {
    title: 'C Some Title',
    description: 'C Some Description',
    price: '3',
    email: 'C Some Email',
    image: 'C Some Image',
  },
  {
    title: 'D Some Title',
    description: 'D Some Description',
    price: '4',
    email: 'D Some Email',
    image: 'D Some Image',
  },
  {
    title: 'D Some Title',
    description: 'D Some Description',
    price: '4',
    email: 'D Some Email',
    image: 'D Some Image',
  },
];

describe('Sort Items', () => {
  it('should sort by title', () => {
    const sortItemsFn = sortItems(items);

    expect(sortItemsFn('title')).toEqual(expectedResult);
  });

  it('should sort by description', () => {
    const sortItemsFn = sortItems(items);

    expect(sortItemsFn('description')).toEqual(expectedResult);
  });

  it('should sort by price', () => {
    const sortItemsFn = sortItems(items);

    expect(sortItemsFn('price')).toEqual(expectedResult);
  });

  it('should sort by email', () => {
    const sortItemsFn = sortItems(items);

    expect(sortItemsFn('email')).toEqual(expectedResult);
  });
});
