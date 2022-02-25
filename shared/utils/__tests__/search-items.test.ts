import { searchItems } from '..';

describe('Search Items', () => {
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

  it('should find item by title', () => {
    const result = searchItems(items)('title')('A Some Title');

    expect(result).toEqual([
      {
        title: 'A Some Title',
        description: 'A Some Description',
        price: '1',
        email: 'A Some Email',
        image: 'A Some Image',
      },
    ]);
  });

  it('should find item by description', () => {
    const result = searchItems(items)('description')('B Some Description');

    expect(result).toEqual([
      {
        title: 'B Some Title',
        description: 'B Some Description',
        price: '2',
        email: 'B Some Email',
        image: 'B Some Image',
      },
    ]);
  });

  it('should find item by price', () => {
    const result = searchItems(items)('price')('3');

    expect(result).toEqual([
      {
        title: 'C Some Title',
        description: 'C Some Description',
        price: '3',
        email: 'C Some Email',
        image: 'C Some Image',
      },
    ]);
  });

  it('should find item by email', () => {
    const result = searchItems(items)('email')('D Some Email');

    expect(result).toEqual([
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
    ]);
  });
});
