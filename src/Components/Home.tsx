import { motion } from 'framer-motion';
import UnicornMascot from '../assets/unicorn_mascot.svg';
// import { Button } from './ui/button';
import { TextGenerateEffect } from './ui/text-generate-effect';
// import arrowHandDrawn from '../assets/handDrawnArrow.png';
import { useRef } from 'react';
// import { UntilTime } from '@/types/home';
// import { buttonVariants } from './ui/button';

const Home = () => {
  // const MotionButton = motion(Button);
  const constraintsRef = useRef(null);
  const IS_COMING_SOON = true; // Set to false when the agenda is ready

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 text-white overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-pink-300 rounded-full opacity-70"
          animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-32 right-20 w-1 h-1 bg-blue-300 rounded-full opacity-80"
          animate={{ y: [0, -15, 0], opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-60"
          animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Content Section */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent drop-shadow-lg">
                  ServerlessDays
                </span>
                <br />
                <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                  Milano
                </span>
                &nbsp;🇮🇹
              </h1>
            </motion.div>

            {/* Date and Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="space-y-2"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 shadow-xl">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent flex items-center gap-2">
                    📅{' '}
                    <a
                      href="Serverless_Day_2025.ics"
                      className="hover:underline"
                    >
                      October 21th, 2025
                    </a>
                  </span>
                  <span className="hidden sm:inline text-white/60">•</span>
                  <span className="bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-transparent flex items-center gap-2">
                    📍{' '}
                    <a
                      href="https://maps.app.goo.gl/WYFXN32VHEQrjctJ8"
                      target="_blank"
                      className="hover:underline"
                    >
                      C30, Milano
                    </a>
                  </span>
                </h3>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <TextGenerateEffect
                words={
                  '🚀 Join the biggest serverless community conference in Italy! Connect with industry experts, learn cutting-edge technologies, and network with fellow developers. 💻✨'
                }
                containerClassName="w-full"
                textClassName="text-lg sm:text-xl md:text-2xl font-medium text-white/90 leading-relaxed"
                duration={0.5}
                staggerDelay={0.13}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {IS_COMING_SOON && <EnhancedCTAButtons />}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm font-semibold"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>☕</span>
                <span className="text-white/90">Coffee & Lunch Included</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>🎯</span>
                <span className="text-white/90">Networking Opportunities</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span>🌟</span>
                <span className="text-white/90">Industry Experts</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Mascot Section */}
          <motion.div
            ref={constraintsRef}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Desktop Mascot */}
            <motion.div
              className="hidden lg:block relative"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.img
                src={UnicornMascot}
                alt="unicorn"
                className="w-64 xl:w-80 2xl:w-96 scale-x-[-1] cursor-grab active:cursor-grabbing drop-shadow-2xl"
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                dragMomentum={true}
                dragSnapToOrigin={true}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 2, 0, -2, 0],
                }}
                transition={{
                  y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
                  rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
                }}
                initial={{ scaleX: -1 }}
              />

              {/* Magical particles around mascot */}
              <motion.div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Mobile Mascot */}
            <motion.div className="block lg:hidden relative">
              <motion.img
                initial={{ scaleX: -1, x: 50, y: 50, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{
                  type: 'spring',
                  bounce: 0.4,
                  delay: 0.4,
                  duration: 0.8,
                }}
                src={UnicornMascot}
                alt="unicorn"
                className="w-48 sm:w-56 md:w-64 scale-x-[-1] drop-shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Home;

const EnhancedCTAButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
      {/* Main CTA - Get Ticket */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <a
          href="https://www.eventbrite.it/e/serverlessdays-milano-2025-tickets-1460042399119"
          target="_blank"
          className="group block w-full"
        >
          <button className="relative overflow-hidden w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-white via-pink-50 to-white text-purple-900 font-black text-lg sm:text-xl rounded-2xl border-4 border-purple-200 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 ease-in-out group-hover:border-purple-300">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🎫
              </motion.span>
              <span>Get Your Ticket!</span>
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              >
                ✨
              </motion.span>
            </span>
          </button>
        </a>
      </motion.div>

      {/* Secondary CTA - Become Sponsor */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full sm:w-auto"
      >
        <a
          href="https://drive.google.com/uc?export=download&id=1p7ZAFM7yXGp7qwGvOPjR_HuaMenHS_7W"
          target="_blank"
          className="group block w-full"
        >
          <button className="relative overflow-hidden w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-xl hover:shadow-blue-500/50 transition-all duration-300 ease-in-out border-2 border-purple-400 group-hover:border-blue-400">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-3">
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                🤝
              </motion.span>
              <span>Become a Sponsor</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              >
                🚀
              </motion.span>
            </span>
          </button>
        </a>
      </motion.div>
    </div>
  );
};

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
