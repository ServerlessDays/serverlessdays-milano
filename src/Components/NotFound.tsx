import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DinoMascot from '../assets/Animals SVG/Dino_mascot.svg';
import { TextGenerateEffect } from './ui/text-generate-effect';
import Navbar from './Navbar';

const NotFound = () => {
  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600">
      {/* Animated background elements - matching Home component */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-pink-300 bg-opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-300 bg-opacity-15 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-300 bg-opacity-25 rounded-full animate-bounce delay-500"></div>
      </div>

      {/* Additional floating elements for 404 page */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-3 h-3 bg-pink-300 rounded-full opacity-70"
          animate={{ y: [0, -15, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-40 right-32 w-2 h-2 bg-blue-300 rounded-full opacity-80"
          animate={{ y: [0, -10, 0], opacity: [0.8, 1, 0.8] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/3 w-4 h-4 bg-purple-300 rounded-full opacity-60"
          animate={{ y: [0, -25, 0], opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black bg-opacity-5"></div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-6 md:p-10 text-white">
          <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
            
            {/* Animated Dino Mascot */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.img
                src={DinoMascot}
                alt="Lost Dino"
                className="w-48 h-48 sm:w-64 sm:h-64 mx-auto drop-shadow-2xl"
                animate={floatingAnimation}
              />
            </motion.div>

            {/* 404 Number */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h1
                className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-white drop-shadow-lg"
                animate={pulseAnimation}
                style={{
                  textShadow: '0 0 30px rgba(255, 255, 255, 0.5)',
                }}
              >
                404
              </motion.h1>
            </motion.div>

            {/* Error Message with TextGenerateEffect */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TextGenerateEffect 
                words="Oops! Even our serverless dino couldn't find that page!"
                textClassName="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
              />
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                Looks like you've wandered into uncharted serverless territory. 
                Don't worry though - our Serverless Days Milan event is still happening!
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/">
                <motion.button
                  className="px-8 py-4 bg-white text-purple-600 font-bold text-lg rounded-full hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🏠 Back to Home
                </motion.button>
              </Link>
              
              <Link to="/presentation">
                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  📺 Presentation View
                </motion.button>
              </Link>
            </motion.div>

            {/* Fun fact */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-sm text-white/70 max-w-md mx-auto">
                💡 Fun fact: This 404 error is being served serverlessly, 
                just like how we'll be discussing at Serverless Days Milan!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
