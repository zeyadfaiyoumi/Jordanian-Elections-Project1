// src/components/CardsComponent.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import cardImage1 from '../Media/card.jpg'; // Adjust the path as needed
import cardImage2 from '../Media/card.jpg'; // Adjust the path as needed
import cardImage3 from '../Media/card.jpg'; // Adjust the path as needed
import cardImage4 from '../Media/card.jpg'; // Adjust the path as needed

const CardsComponent = () => {
  // Example card data
  const cardData = [
    {
      image: cardImage1, // Imported image
      title: 'Card 1',
      link: '/card1'
    },
    {
      image: cardImage2, // Imported image
      title: 'Card 2',
      link: '/card2'
    },
    {
      image: cardImage3, // Imported image
      title: 'Card 3',
      link: '/card3'
    },
    {
      image: cardImage4, // Imported image
      title: 'Card 4',
      link: '/card4'
    }
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 pt-28">
      {cardData.map((card, index) => (
        <div key={index} className="relative group max-w-xs mx-auto">
          <Link to={card.link} className="block relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img
              src={card.image}
              alt={card.title}
              className="w-100 h-90 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <span className="text-white text-xl font-semibold">Vote</span>
            </div>
          </Link>
          {/* Button on mobile view */}
          <div className="block md:hidden mt-2">
            <Link to={card.link}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Go to {card.title}
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsComponent;
