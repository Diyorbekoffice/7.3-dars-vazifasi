import React from 'react';

const Simple = React.memo(({ text, number }) => {
  console.log('Simple render qilindi');

  return (
    <div className="bg-gray-100 p-4 rounded shadow">
      <h2 className="text-xl font-semibold">Oddiy qiymatlar komponenti</h2>
      <p>Text: {text}</p>
      <p>Number: {number}</p>
    </div>
  );
});

export default Simple;
