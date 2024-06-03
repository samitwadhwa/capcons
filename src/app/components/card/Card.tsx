import React from 'react';

interface CardProps {
  imageUrl?: string;
  title: string;
  description: string;
  date: string;
  widthClass?: string; // Optional width class
  chart?: React.ReactNode; // Optional chart component
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, date, widthClass = 'max-w-lg', chart }) => {
  const isChartPresent = !!chart;

  return (
    <div className={`bg-[#2A2A2E] px-4 py-5 sm:px-6 ${widthClass} w-full`}>
      <div className={`flex items-start ${isChartPresent ? 'flex-row gap-5' : 'flex-col gap-5'}`}>
        {/* Left column with title and chart */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold text-white">
            <a href="#" className="hover:underline">
              {title}
            </a>
          </p>
          {/* Render the chart if it's provided */}
          {chart && <div>{chart}</div>}
        </div>
        {/* Right column with image, description, and subheading */}
        <div className="flex items-start">
          {imageUrl && (
            <img
              className={`h-20 w-20 rounded-full ${isChartPresent ? 'ml-3' : ''}`}
              src={imageUrl}
              alt=""
            />
          )}
          <div className={`ml-3 ${isChartPresent ? 'flex flex-col' : ''}`}>
            <p className="text-sm font-semibold text-white">
              <a href="#" className="hover:underline">
                {date}
              </a>
            </p>
            <p className="text-sm text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
