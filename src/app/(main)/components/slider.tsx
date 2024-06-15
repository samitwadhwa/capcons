"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    images: [
      { src: '/images/Image1.png', alt: 'Image 1', text: '#run #sport', caption: 'Reach new heights' },
      { src: '/images/Image2.png', alt: 'Image 2', text: '#gym #motivation', caption: 'Show your achievements' },
      { src: '/images/Image3.png', alt: 'Image 3', text: '#Metropolis', caption: 'Urbanization' },
    ],
  },
  {
    id: 2,
    images: [
      { src: '/images/Image4.png', alt: 'Image 4', text: '#nature #space', caption: 'Abstract from Space' },
      { src: '/images/Image5.png', alt: 'Image 5', text: '#nature #greenery', caption: 'Waterfall' },
      { src: '/images/Image6.png', alt: 'Image 6', text: '#technology #3dprint', caption: 'Technology' },
    ],
  },
  {
    id: 3,
    images: [
      { src: '/images/Image7.png', alt: 'Image 7', text: '#city #night', caption: 'City Life' },
      { src: '/images/Image8.png', alt: 'Image 8', text: '#travel #adventure', caption: 'Adventure' },
      { src: '/images/Image9.png', alt: 'Image 9', text: '#future #innovation', caption: 'Innovation' },
    ],
  },
  {
    id: 4,
    images: [
      { src: '/images/Image10.png', alt: 'Image 10', text: '#city #night', caption: 'City Life' },
      { src: '/images/Image11.png', alt: 'Image 11', text: '#travel #adventure', caption: 'Adventure' },
      { src: '/images/Image12.png', alt: 'Image 12', text: '#future #innovation', caption: 'Innovation' },
    ],
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[800px] overflow-hidden">
      <div className="absolute left-0 top-0 flex flex-col justify-center items-center h-full space-y-2 z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-purple-500' : 'bg-gray-500'
            }`}
          ></div>
        ))}
      </div>

      <AnimatePresence>
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={slide.images[0].src}
                    alt={slide.images[0].alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-2xl font-bold">{slide.images[0].caption}</h3>
                    <p className="text-lg">{slide.images[0].text}</p>
                  </div>
                </div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={slide.images[1].src}
                    alt={slide.images[1].alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-2xl font-bold">{slide.images[1].caption}</h3>
                    <p className="text-lg">{slide.images[1].text}</p>
                  </div>
                </div>
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={slide.images[2].src}
                    alt={slide.images[2].alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                  <div className="absolute left-4 bottom-4 text-white">
                    <h3 className="text-2xl font-bold">{slide.images[2].caption}</h3>
                    <p className="text-lg">{slide.images[2].text}</p>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
