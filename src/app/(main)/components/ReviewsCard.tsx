"use client";

const cards = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet consectetur. Feugiat lacinia porttitor consequat quis dolor purus commodo imperdiet pellentesque. Massa ultrices pharetra molestie non. Congue vitae viverra facilisi dui blandit quam viverra ut. Risus id convallis amet ultrices sit convallis dolor.',
    username: 'Username',
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur. Feugiat lacinia porttitor consequat quis dolor purus commodo imperdiet pellentesque. Massa ultrices pharetra molestie non. Congue vitae viverra facilisi dui blandit quam viverra ut. Risus id convallis amet ultrices sit convallis dolor.',
    username: 'Username',
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet consectetur. Feugiat lacinia porttitor consequat quis dolor purus commodo imperdiet pellentesque. Massa ultrices pharetra molestie non. Congue vitae viverra facilisi dui blandit quam viverra ut. Risus id convallis amet ultrices sit convallis dolor.',
    username: 'Username',
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet consectetur. Feugiat lacinia porttitor consequat quis dolor purus commodo imperdiet pellentesque. Massa ultrices pharetra molestie non. Congue vitae viverra facilisi dui blandit quam viverra ut. Risus id convallis amet ultrices sit convallis dolor.',
    username: 'Username',
  },
  {
    id: 5,
    text: 'Lorem ipsum dolor sit amet consectetur. Feugiat lacinia porttitor consequat quis dolor purus commodo imperdiet pellentesque. Massa ultrices pharetra molestie non. Congue vitae viverra facilisi dui blandit quam viverra ut. Risus id convallis amet ultrices sit convallis dolor.',
    username: 'Username',
  },
  {
    id: 6,
    text: 'Lorem ipsum dolor sit amet consectetur. Feugiat lacinia porttitor consequat quis dolor purus commodo imperdiet pellentesque. Massa ultrices pharetra molestie non. Congue vitae viverra facilisi dui blandit quam viverra ut. Risus id convallis amet ultrices sit convallis dolor.',
    username: 'Username',
  },
];

const ReviewCard = ({ card }: any) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col justify-between w-96 h-64 m-2">
    <p className="text-white mb-4">{card.text}</p>
    <div className="flex items-center">
      <div className="bg-gray-600 rounded-full h-10 w-10 flex items-center justify-center">
        <span className="text-purple-400">{card.username}</span>
      </div>
    </div>
  </div>
);

const ReviewCardsSection = () => (
  <div className="container mx-auto py-10 px-4">
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
        <ReviewCard key={card.id} card={card} />
      ))}
    </div>
  </div>
);

export default ReviewCardsSection;
