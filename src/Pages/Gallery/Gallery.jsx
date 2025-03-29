import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/src/assets/images1.jpg",
  "/src/assets/images2.jpg",
  "/src/assets/images3.jpg",
  "/src/assets/images4.jpg",
  "/src/assets/images5.jpg",
  "/src/assets/images6.jpg",
  "/src/assets/images7.jpeg",
  "/src/assets/images8.jpeg",
  "/src/assets/images9.jpeg",
  "/src/assets/images10.jpeg",
  
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 text-center">
      {/* Page Title */}
      <div className="bg-green-500 text-white py-10 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Gallery</h1>
      </div>
      
      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Food ${index + 1}`}
            className="w-full h-40 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      
      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
        index={currentIndex}
      />
    </div>
  );
};

export default Gallery;
