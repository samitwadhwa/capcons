"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    media: [
      { src: '/images/01.png', type: 'image', alt: 'image', text: '#run #sport', caption: 'Reach new heights', width: 500, height: 500 },
      { src: '/videos/GIF2.mp4', type: 'video', alt: 'Video', text: '#gym #motivation', caption: 'Abstract from Space', width: 500, height: 500 },
      { src: '/images/03.png', type: 'image', alt: 'image', text: '#Metropolis', caption: 'Urbanization', width: 500, height: 500 },
    ],
  },
  {
    id: 2,
    media: [
      { src: '/videos/GIF4.mp4', type: 'video', alt: 'Video', text: '#nature #space', caption: 'Abstract from Space', width: 500, height: 500 },
      { src: '/images/05.png', type: 'image', alt: 'Image', text: '#nature #greenery', caption: 'Waterfall', width: 500, height: 800 },
      { src: '/images/06.png', type: 'image', alt: 'Video', text: '#technology #3dprint', caption: 'Technology', width: 500, height: 500 },
    ],
  },
  {
    id: 3,
    media: [
      { src: '/images/07.png', type: 'image', alt: 'Image', text: '#city #night', caption: 'City Life', width: 500, height: 500 },
      { src: '/videos/GIF8.mp4', type: 'video', alt: 'Video', text: '#travel #adventure', caption: 'Adventure', width: 500, height: 500 },
      { src: '/images/09.png', type: 'image', alt: 'Image', text: '#future #innovation', caption: 'Innovation', width: 500, height: 500 },
    ],
  },
  {
    id: 4,
    media: [
      { src: '/videos/GIF10.mp4', type: 'video', alt: 'Video', text: '#city #night', caption: 'City Life', width: 500, height: 500 },
      { src: '/images/11.png', type: 'image', alt: 'Image', text: '#travel #adventure', caption: 'Adventure', width: 500, height: 500 },
      { src: '/images/12.png', type: 'image', alt: 'Image', text: '#future #innovation', caption: 'Innovation', width: 500, height: 500 },
    ],
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Updated interval to 5000ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[1200px] h-[650px] overflow-visible mx-auto mt-8">
      <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center h-full space-y-2 z-10">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`w-6 h-6 rounded-full ${
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
                animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.5, ease: "easeIn" } }}
                exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4 p-8"
              >
                {slide.media.map((item, mediaIndex) => (
                  <div
                    key={mediaIndex}
                    className="relative w-full h-full rounded-xl overflow-hidden"
                  >
                    {item.type === 'video' ? (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        width={item.width}
                        height={item.height}
                        loop
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        layout="responsive"
                        className="object-cover"
                      />
                    )}
                    <div className="absolute left-4 bottom-4 text-white">
                      <h3 className="text-2xl font-bold">{item.caption}</h3>
                      <p className="text-lg">{item.text}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )
        )}
      </AnimatePresence>
    </div>
  );
};

export default Slider;
