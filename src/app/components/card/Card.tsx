import React from 'react';

interface CardProps {
  imageUrl?: string;
  title: React.ReactNode; // Updated to React.ReactNode
  description: React.ReactNode; // Updated to React.ReactNode
  date: string;
  widthClass?: string; // Optional width class
  chart?: React.ReactNode; // Optional chart component
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, date, widthClass = 'max-w-lg', chart }) => {
  const isChartPresent = !!chart;

  return (
    <div className={`bg-[#2A2A2E] px-4 py-2 sm:px-4 ${widthClass} w-full rounded-md shadow-md`}>
      <div className={`flex items-start ${isChartPresent ? 'flex-row gap-3' : 'flex-col gap-2'}`}>
        {/* Left column with title and chart */}
        <div className="flex flex-col">
          <div className="text-sm font-semibold text-white">
            {title}
          </div>
          {/* Render the chart if it's provided */}
          {chart && <div>{chart}</div>}
        </div>
        {/* Right column with image, description, and subheading */}
        <div className="flex items-start">
          {imageUrl && (
            <img
              className={`h-10 w-10 rounded-full ${isChartPresent ? 'ml-2' : ''}`}
              src={imageUrl}
              alt=""
            />
          )}
          <div className={`ml-2 ${isChartPresent ? 'flex flex-col' : ''}`}>
            <div className="text-sm font-semibold text-white">
              {date}
            </div>
            <div className="text-sm text-white">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
