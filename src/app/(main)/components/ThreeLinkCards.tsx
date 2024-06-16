"use client";

const features = [
  {
    id: 1,
    image: '/images/feature1.png', 
    title: 'App Builder',
    description: 'Whenever Passion rolls out new features, your app is updated automatically - at no extra cost.',
    linkText: 'Link to page',
    linkUrl: '#', 
  },
  {
    id: 2,
    image: '/images/feature2.png',
    title: 'App Builder',
    description: 'Whenever Passion rolls out new features, your app is updated automatically - at no extra cost.',
    linkText: 'Link to page',
    linkUrl: '#', 
  },
  {
    id: 3,
    image: '/images/feature3.png',
    title: 'App Builder',
    description: 'Whenever Passion rolls out new features, your app is updated automatically - at no extra cost.',
    linkText: 'Link to page',
    linkUrl: '#', 
  },
];

const FeatureCard = ({ feature }: any) => (
  <div className="bg-[#2C2338] rounded-lg overflow-hidden shadow-lg">
    <div className="bg-white h-40 flex items-center justify-center">
      <img src={feature.image} alt={feature.title} className="h-full w-auto" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
      <p className="text-white mt-4">{feature.description}</p>
      <a href={feature.linkUrl} className="text-purple-400 mt-8 inline-block">
        {feature.linkText} &rarr;
      </a>
    </div>
  </div>
);

const CardSection = () => (
  <div className="container py-10 px-4">
    <h3 className="text-h3 h3 font-bold mb-4">
      Tap into the features which let users come back
    </h3>
    <h5 className="text-h5 h5 text-gray-400 mb-8">
      Whenever Passion rolls out new features, your app is updated automatically - at no extra cost.
    </h5>
    <div className="flex justify-center space-x-6">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  </div>
);
export const BlogSection = () => (
  <div className="container py-10 px-4">
    <h2 className="text-h2 h2 font-bold mb-4">
      Blogs and Events
    </h2>
    <h5 className="text-h5 h5 text-gray-400 mb-8">
      Everything You Need To Launch And Grow
    </h5>
    <div className="flex justify-center space-x-6">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  </div>
);

export default CardSection;
