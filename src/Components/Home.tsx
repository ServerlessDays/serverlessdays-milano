import { motion } from 'framer-motion';
import UnicornMascot from '../assets/unicorn_mascot.svg';
// import { Button } from './ui/button';
import { TextGenerateEffect } from './ui/text-generate-effect';
// import arrowHandDrawn from '../assets/handDrawnArrow.png';
import { useRef } from 'react';
// import { UntilTime } from '@/types/home';

const Home = () => {
  // const MotionButton = motion(Button);
  const constraintsRef = useRef(null);

  return (
    <div className="flex h-full p-2 text-white md:h-[65vh] lg:h-[70vh] md:p-10 ">
      <div className="w-full h-full my-auto md:items-center md:flex md:justify-around">
        <div className="space-y-5 ">
          <h1 className="text-5xl font-extrabold md:text-6xl">
            ServerlessDays <br /> Milano 🇮🇹
          </h1>
          <h3 className="text-2xl font-semibold md:text-4xl text-secondary max-w-64 sm:max-w-full">
            We are coming back! See you in 2025
          </h3>
          {/* <h3 className="text-2xl font-semibold md:text-4xl text-secondary max-w-64 sm:max-w-full">
            <a href="Serverless_Day_2024.ics">June, 13th 2024</a> <br className="block sm:hidden" />
            <span className="hidden md:inline-block">&nbsp;</span>@&nbsp;
            <a href="https://maps.app.goo.gl/WYFXN32VHEQrjctJ8" target="_blank">
              C30, Viale Cassala, Milano
            </a>
          </h3> */}
          <TextGenerateEffect
            words={'Join the biggest serverless community conference in Italy.'}
            containerClassName="  w-80   sm:w-full md:pb-5 pb-2"
            textClassName="text-lg font-normal md:text-2xl text-gray-200"
          />

          {/* <motion.div className="">
            <a
              href="https://www.eventbrite.it/e/biglietti-serverlessdays-milano-2024-788514818047"
              target="_blank"
              className="relative "
            >
              <MotionButton
                className="w-40 font-semibold text-white rounded-xl"
                animate={{
                  // jump with spring every 2 seconds
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.3,
                    repeat: Infinity,
                    repeatDelay: 2
                  }
                }}
              >
                🎫 Get your ticket! */}
          {/* <span className="absolute rotate-[20deg] translate-x-14 rounded-xl bg-inherit p-1 -translate-y-4 underline">
									35$
								</span> */}
          {/* </MotionButton>
              <div className="absolute pr-2 text-md top-8 handwriting-1">* lunch and coffee included!</div>
              <EarlyBirdText untilDate="19/04/2024" />
            </a>
          </motion.div> */}
          {/* <p className="handwriting-1">(Lunch and coffee included!)</p> */}
        </div>
        <motion.div ref={constraintsRef} className="pb-2 mt-24 md:pb-5 md:mt-16 lg:mt-0">
          <motion.img
            src={UnicornMascot}
            alt="unicorn"
            className="hidden md:block w-48 md:w-72 scale-x-[-1] cursor-grab active:cursor-grabbing"
            drag
            dragConstraints={constraintsRef}
            dragElastic={0.1}
            dragMomentum={true}
            dragSnapToOrigin={true}
            initial={{
              scaleX: -1
            }}
          />

          <motion.img
            initial={{ scaleX: -1, x: 100, y: 100 }}
            animate={{
              y: 0,
              x: 0
              // rotate: [45, 0],
            }}
            transition={{
              // duration: 2,
              type: 'spring',
              bounce: 0.5,
              delay: 3,
              damping: 10,
              mass: 1

              // velocity: 100,
            }}
            src={UnicornMascot}
            alt="unicorn"
            className="absolute top-36 -right-24 block md:hidden w-48 md:w-72 scale-x-[-1] "
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Home;
/**
 * Renders the EarlyBirdText component.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {UntilTime} props.untilDate - The date until which the early bird ticket is available.
 * @returns {JSX.Element|null} The rendered EarlyBirdText component.
 */
// const EarlyBirdText = ({ untilDate }: { untilDate: UntilTime }) => {
//   const currentDate = new Date();
//   const until = new Date(untilDate);

//   if (currentDate > until) return null;
//   return (
//     <div className="absolute -bottom-1 right-2">
//       <div className="absolute w-20 scale-50 -bottom-12 right-[-4.5rem]">
//         <img
//           src={arrowHandDrawn}
//           alt="hand drawn arrow"
//           className="invert sepia-0 saturate-[7491%] hue-rotate-[354deg] brightness-[103%] contrast-[101%]"
//         />
//       </div>

//       <div className="absolute text-sm font-bold w-36 top-7 -right-44 handwriting-1">
//         Early bird tickets starting &nbsp;
//         <span className="relative inline-block after:border-b after:rounded-[50%/100px_100px_0_0] after:border-white after:absolute after:top-4 after:-left-1 after:w-14 after:h-[1px]  after:-rotate-[3deg] after:content-['']">
//           at 35€
//         </span>
//       </div>
//     </div>
//   );
// };
