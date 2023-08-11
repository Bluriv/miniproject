import React from 'react';

const Card = ({ title, content, imageUrl }) => {
  return (
    <div className="bg-slate-800 shadow-md rounded-lg p-6">
      {imageUrl && <img src={imageUrl} alt={title} className="mb-4 rounded-lg" />}
      <h2 className="text-xl font-semibold mb-2">{title}Pertunjukan wayang</h2>
      <p className="text-gray-600">{content} Event</p>
    </div>
  );
};

export default Card;