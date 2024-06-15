"use client";
import Image from 'next/image';

const features = [
  {
    id: 1,
    image: '/images/FeatureImage1.png', // Replace with your image paths
    number: '01',
    title: 'Connect!',
    description: 'Connect with people around in the close proximity by just turning your socialize mode on. You can set your preferred personal space distance, ensuring you have control over how close others can be before interactions occur.',
  },
  {
    id: 2,
    image: '/images/FeatureImage2.png',
    number: '02',
    title: 'Wedrop!',
    description: 'Lets you exchange contact and personal information (decided by you) with someone by touching two phones together.',
  },
  {
    id: 3,
    image: '/images/FeatureImage3.png',
    number: '03',
    title: 'Icebreakers!',
    description: 'You can set greetings that automatically trigger when they come into proximity. This could be a simple or a customized virtual business card exchange.',
  },
  {
    id: 4,
    image: '/images/FeatureImage4.png',
    number: '04',
    title: 'Community!',
    description: `Provides a real-time feed showing nearby friends activities, updates, or check-ins, fostering a sense of community engagement.`,
  },
  {
    id: 5,
    image: '/images/FeatureImage5.png',
    number: '05',
    title: 'Match your interests!',
    description: 'Utilize your interests to match individuals who are likely to have common ground or shared hobbies when they come close to you.',
  },
  {
    id: 6,
    image: '/images/FeatureImage6.png',
    number: '06',
    title: 'Send a Hello!',
    description: 'You can send messages and chat with someone out in the world and send them an interactive hello!',
  },
];

const Features = () => {
  return (
    <div className="container mx-auto py-10 pr-4">
      <h2 className="text-h2  h2 font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="relative w-[470px] h-[570px] rounded-lg overflow-hidden"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              layout="fill"
              objectFit="cover"
            />
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
