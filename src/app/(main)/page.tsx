import React from 'react';
import Landing from '../../../public/images/Landing.png';
import Button from '../components/button/button.component';
import Slider from './components/slider';
import FeaturesSection from './components/featuresSection';
import IphonePic from '../../../public/images/Iphone.png';
import CardSection, { BlogSection } from './components/ThreeLinkCards';
import ReviewCardsSection from './components/ReviewsCard';

const Main = () => {
  return (
    <div className="relative h-88vh bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Landing.src})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <main className="relative flex-grow p-4 text-left flex flex-col justify-center">
        <section className="flex flex-col justify-start space-y-4 py-16 mt-[7rem]">
          <h1 className="text-h1 h1 font-bold p-4">Interest Driven People&#39;s <br />Network</h1>
          <h4 className="max-w-xl h4 text-h4 !mt-[3.5rem] p-4">
            Create or explore circles - meet new people, <br /> learn new things, find support, get out of their <br /> comfort zones, and pursue their passions, <br /> together.
          </h4>
          <div className='p-4'>

          <Button className="w-[15.6rem] bg-purple-700 text-white bg-solid font-bold py-2 px-4 !mt-[3.5rem] rounded">Get Started</Button>
          </div>
        </section>

        <section className="py-8 w-full md:mt-24">
          <div className="min-h-screen text-white flex flex-col">
            <div className=" mb-8 px-4">
              <h3 className="text-h3 h3 font-bold">Whatever your interest From hiking and reading to networking and skill sharing, Circles are vibrant micro-communities - that represents your shades, colour and brand.</h3>
            </div>
            <Slider />
          </div>
        </section>

    <section className='py-4 w-full md:mt-8'>
      <FeaturesSection/>
    </section>

    <section className='py-4 w-full md:mt-8'>
      <img src={IphonePic.src} alt="" />
    </section>

    <section className='py-4 w-full md:mt-8'>
    <CardSection/>
    </section>

    <section className='py-4 w-full md:mt-8'>
    <ReviewCardsSection/>
    </section>

    <section className='py-4 w-full md:mt-8'>
    <BlogSection/>
    </section>


      </main>
    </div>
  );
}

export default Main;
