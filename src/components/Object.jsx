import React from 'react';

const ObjectComponent = React.memo(({ object, array }) => {
  console.log('Object render qilindi');

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Obyekt va array qiymatlar komponenti</h2>
      <p>Ism: {object.name}</p>
      <p>Yosh: {object.age}</p>
      <p>Array: {array.join(', ')}</p>
    </div>
  );
});

export default ObjectComponent;
