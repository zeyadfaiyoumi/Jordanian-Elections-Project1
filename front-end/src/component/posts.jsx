// src/components/Posts.jsx
import React from 'react';
import img1 from '../Media/مرشح1.png'; // Adjust the paths to your actual image files
import img2 from '../Media/مرشح2.png';
import img3 from '../Media/مرشح3.jpg';
import img4 from '../Media/مرشح4.png';
import img5 from '../Media/مرشح5.png';

const Posts = () => {
  // Array of local images
  const images = [img1, img2, img3, img4, img5, img5];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4 pt-28">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-60 h-60 rounded-full overflow-hidden cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg"
        >
          <img
            src={src}
            alt={`Post ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
