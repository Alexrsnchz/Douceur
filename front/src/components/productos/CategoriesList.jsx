import React from 'react';
import ScrollableFeed from 'react-scrollable-feed';

const categories = [
  {
    id: 1,
    catName: 'Categoría 1',
    catColor: '#111111',
  },
  {
    id: 2,
    catName: 'Categoría 2',
    catColor: '#222222',
  },
  {
    id: 3,
    catName: 'Categoría 3',
    catColor: '#333333',
  },
  {
    id: 4,
    catName: 'Categoría 4',
    catColor: '#444444',
  },
  {
    id: 5,
    catName: 'Categoría 5',
    catColor: '#555555',
  },
  {
    id: 6,
    catName: 'Categoría 6',
    catColor: '#666666',
  },
  {
    id: 7,
    catName: 'Categoría 7',
    catColor: '#777777',
  },
  {
    id: 8,
    catName: 'Categoría 8',
    catColor: '#888888',
  },
  {
    id: 9,
    catName: 'Categoría 9',
    catColor: '#999999',
  },
  {
    id: 10,
    catName: 'Categoría 10',
    catColor: '#111000',
  },
];

function Category({ name, color }) {
  return (
    <div className="border-2 border-violet-300 px-5 py-3 my-4 flex justify-center rounded-md cursor-pointer">
      <div
        style={{ backgroundColor: color }}
        className="rounded-full h-5 w-5"
      ></div>
      <div>
        <span>{name}</span>
      </div>
    </div>
  );
}

function CategoriesList() {
  return (
    <div className="w-1/4 border-2 border-violet-300 p-5">
      {categories.map((category) => (
        <Category
          key={category.id}
          name={category.catName}
          color={category.catColor}
        />
      ))}
    </div>
  );
}

export default CategoriesList;
