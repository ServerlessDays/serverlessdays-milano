// Removed unused accordion imports since we're using a card-based design now
import mainTrack from '../assets/mainTrack.json';
import discoveryTrack from '../assets/discoveryTrack.json';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
// import owl_mascot from "../assets/Animals SVG/owl_mascot.svg";
import dino_mascot from '../assets/Animals SVG/Dino_mascot.svg';

import { AgendaItem } from '../types/agenda';

const IS_COMING_SOON = false;
const PLACEHOLDER_NAME = 'someone to be announced';
const AgendaAccordion = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [activeTrack, setActiveTrack] = useState<'main' | 'discovery' | 'both'>(
    'both',
  );
  const containerRef = useRef(null);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1024;

  return (
    <div
      className="relative min-h-screen pt-10 pb-10 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50"
      id="agenda"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 bg-blue-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      </div>

      <motion.img
        src={dino_mascot}
        alt="Dino Mascot"
        className="absolute -top-12 xl:-top-16 lg:-top-9 md:-top-16 right-4 w-16 md:w-24 scale-x-[-1] rotate-[-14deg] z-10"
        animate={{ rotate: [-14, -10, -14] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <motion.h1
          className="mb-8 text-3xl font-extrabold tracking-widest text-center bg-gradient-to-r from-purple-800 via-pink-600 to-blue-600 bg-clip-text text-transparent uppercase lg:text-6xl md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Agenda 2025
        </motion.h1>

        {/* Keynote Speakers Section */}
        <KeynoteSpeakers />

        {IS_COMING_SOON && <ComingSoon />}
        {!IS_COMING_SOON && (
          <div className="px-4 mt-12">
            {/* Track selector for mobile */}
            {isMobile && (
              <motion.div
                className="flex justify-center mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex bg-white rounded-full p-1 shadow-lg border border-purple-100">
                  <button
                    onClick={() => setActiveTrack('main')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTrack === 'main' || activeTrack === 'both'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    🚀 Main Stage
                  </button>
                  <button
                    onClick={() => setActiveTrack('discovery')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTrack === 'discovery' || activeTrack === 'both'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                        : 'text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    💬 Discovery Track
                  </button>
                  <button
                    onClick={() => setActiveTrack('both')}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTrack === 'both'
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-md'
                        : 'text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    📅 Both
                  </button>
                </div>
              </motion.div>
            )}

            {/* Agenda tracks */}
            <div
              className={`${
                isMobile
                  ? 'space-y-6'
                  : 'grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto'
              }`}
            >
              <AnimatePresence>
                {(activeTrack === 'main' || activeTrack === 'both') && (
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isMobile ? 0 : -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl border border-purple-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 text-center">
                      <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                        🚀 <span>Main Stage</span>
                      </h2>
                    </div>
                    <Agenda
                      talks={mainTrack as AgendaItem[]}
                      trackColor="purple"
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {(activeTrack === 'discovery' || activeTrack === 'both') && (
                  <motion.div
                    initial={{ opacity: 0, x: isMobile ? 0 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: isMobile ? 0 : 50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl border border-blue-100 overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-center">
                      <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                        💬 <span>Discovery Track</span>
                      </h2>
                    </div>
                    <Agenda
                      talks={discoveryTrack as AgendaItem[]}
                      trackColor="blue"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AgendaAccordion;

const ComingSoon = () => {
  const [animationText, setAnimationText] = useState(
    '🚧 Final agenda coming soon',
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationText((prevText) => {
        if (prevText === '🚧 Final agenda coming soon...') {
          return '🚧 Final agenda coming soon';
        } else {
          return prevText + '.';
        }
      });
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-10">
      <motion.p className="text-2xl font-medium text-center text-blue-900">
        {animationText}
      </motion.p>
    </div>
  );
};

const Agenda = ({
  talks,
  trackColor,
}: {
  talks: AgendaItem[];
  trackColor: 'purple' | 'blue';
}) => {
  return (
    <div className="w-full">
      <div className="space-y-0">
        {talks.map((talk, index) => (
          <TalkCard
            key={index}
            talk={talk}
            index={index}
            trackColor={trackColor}
          />
        ))}
      </div>
    </div>
  );
};

const TalkCard = ({
  talk: agendaTalk,
  index,
  trackColor,
}: {
  talk: AgendaItem;
  index: number;
  trackColor: 'purple' | 'blue';
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  if (!agendaTalk || !agendaTalk.agenda_details.type === undefined) return null;

  const pad = (time: number, size: number) => {
    return time.toString().padStart(size, '0');
  };

  const getTimestamp = (time: string) => {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${pad(hours, 2)}:${pad(minutes, 2)}`;
  };

  const title = agendaTalk?.talk?.title || agendaTalk?.break?.title;
  const description =
    agendaTalk?.talk?.description || agendaTalk?.break?.inline_abstract;
  const name = agendaTalk?.talk?.name;
  const duration = agendaTalk?.agenda_details.minutes || 0;
  const profileImg = agendaTalk?.talk?.avatar;
  const talkType = agendaTalk.agenda_details.type;
  const isKeynote = agendaTalk.agenda_details.keynote || false;
  const jobTitle = agendaTalk?.talk?.job_title;
  const organization = agendaTalk?.talk?.organization;
  const startTime = agendaTalk.agenda_details.start_time;

  const startTimeString = getTimestamp(startTime);

  let speakerNameTitle = '';
  if (name) speakerNameTitle += name;
  if (jobTitle) speakerNameTitle += ` - ${jobTitle}`;
  if (organization) speakerNameTitle += ` @ ${organization}`;

  const colorClasses = {
    purple: {
      border: 'border-purple-200',
      bg:
        talkType === 'break'
          ? 'bg-gradient-to-r from-purple-50 to-pink-50'
          : 'bg-white hover:bg-purple-50',
      time: 'bg-gradient-to-r from-purple-500 to-pink-500',
      accent: 'text-purple-600',
      badge: isKeynote
        ? 'bg-gradient-to-r from-purple-600 to-pink-600'
        : 'bg-purple-100 text-purple-800',
    },
    blue: {
      border: 'border-blue-200',
      bg:
        talkType === 'break'
          ? 'bg-gradient-to-r from-blue-50 to-purple-50'
          : 'bg-white hover:bg-blue-50',
      time: 'bg-gradient-to-r from-blue-500 to-purple-500',
      accent: 'text-blue-600',
      badge: isKeynote
        ? 'bg-gradient-to-r from-blue-600 to-purple-600'
        : 'bg-blue-100 text-blue-800',
    },
  };

  const colors = colorClasses[trackColor];

  const getDurationBadge = (minutes: number) => {
    if (minutes <= 0) return null;
    return (
      <span
        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
          colors.badge
        } ${isKeynote ? 'text-white' : ''}`}
      >
        {minutes}min {isKeynote && '⭐'}
      </span>
    );
  };

  const getTypeIcon = (type: string, isKeynote: boolean) => {
    if (isKeynote) return '🎤';
    if (type === 'break') return '☕';
    return '💬';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className={`border-b ${colors.border} ${
        colors.bg
      } transition-all duration-300 ${
        talkType === 'talk' && name !== PLACEHOLDER_NAME ? 'cursor-pointer' : ''
      }`}
      onClick={() => {
        if (talkType === 'talk' && name !== PLACEHOLDER_NAME && description) {
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <div className="p-4">
        {/* Mobile: Time at top */}
        {isMobile && (
          <div className="mb-4">
            <div
              className={`${colors.time} text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md inline-flex items-center gap-2`}
            >
              <span className="text-xs opacity-90">🕐</span>
              <span>{startTimeString}</span>
              {duration > 0 && (
                <span className="text-xs opacity-90">• {duration}min</span>
              )}
            </div>
          </div>
        )}

        <div className="flex items-start gap-4">
          {/* Desktop: Time badge on left */}
          {!isMobile && (
            <div className="flex-shrink-0">
              <div
                className={`${colors.time} text-white px-3 py-2 rounded-xl text-sm font-bold shadow-md min-w-[80px] text-center`}
              >
                <div className="text-xs opacity-90">Start</div>
                <div>{startTimeString}</div>
              </div>
              {duration > 0 && (
                <div className="text-center mt-1">
                  <span className="text-xs text-gray-500">{duration}min</span>
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg">
                    {getTypeIcon(talkType, isKeynote)}
                  </span>
                  {getDurationBadge(duration)}
                  {talkType === 'break' && (
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Break
                    </span>
                  )}
                </div>

                <h3
                  className={`font-semibold ${
                    isMobile ? 'text-xl' : 'text-lg'
                  } leading-tight mb-1 ${
                    isKeynote
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                      : talkType === 'break'
                        ? colors.accent
                        : 'text-gray-900'
                  } ${name === PLACEHOLDER_NAME ? 'text-gray-500' : ''}`}
                >
                  {title}
                </h3>

                {talkType === 'talk' && name && (
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-gray-600">by</span>
                    <a
                      href={agendaTalk.talk?.url}
                      target="_blank"
                      className={`text-sm font-medium hover:underline ${
                        colors.accent
                      } ${
                        name === PLACEHOLDER_NAME
                          ? 'pointer-events-none text-gray-400'
                          : ''
                      }`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {speakerNameTitle}
                    </a>
                  </div>
                )}

                {/* Description preview */}
                {description && talkType === 'talk' && (
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <p className={`${isExpanded ? '' : 'line-clamp-2'}`}>
                      {description}
                    </p>
                    {description.length > 100 && (
                      <button
                        className={`text-xs ${colors.accent} hover:underline mt-1`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(!isExpanded);
                        }}
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </button>
                    )}
                  </div>
                )}

                {/* Break description */}
                {description && talkType === 'break' && (
                  <p className="text-sm text-gray-600 mt-1">{description}</p>
                )}
              </div>

              {/* Speaker avatar */}
              {talkType === 'talk' && (
                <div className="flex-shrink-0">
                  <a
                    href={agendaTalk.talk?.url || '#'}
                    className={`block ${
                      name === PLACEHOLDER_NAME ? 'pointer-events-none' : ''
                    }`}
                    target="_blank"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {profileImg ? (
                      <img
                        className={`${
                          isMobile ? 'w-14 h-14' : 'w-12 h-12'
                        } rounded-full object-cover ring-2 ring-white shadow-md`}
                        src={profileImg}
                        alt={speakerNameTitle}
                        title={speakerNameTitle}
                        loading="lazy"
                      />
                    ) : name === PLACEHOLDER_NAME ? (
                      <div
                        className={`${
                          isMobile ? 'w-14 h-14' : 'w-12 h-12'
                        } rounded-full bg-gray-200 flex items-center justify-center`}
                      >
                        <span className="text-gray-400 text-xs">TBA</span>
                      </div>
                    ) : (
                      <div
                        className={`${
                          isMobile ? 'w-14 h-14' : 'w-12 h-12'
                        } rounded-full ${
                          colors.time
                        } flex items-center justify-center text-white text-xs font-bold`}
                      >
                        {name?.charAt(0) || '?'}
                      </div>
                    )}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const KeynoteSpeakers = () => {
  return (
    <div className="px-4 py-8 lg:px-10 relative">
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="mb-4 text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent lg:text-5xl">
          🎤 Keynote Speakers
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12 max-w-4xl mx-auto">
        {/* Yan Cui */}
        <motion.div
          className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-purple-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="relative p-8 text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src="/speakers/yan_cui.jpg"
                alt="Yan Cui"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mx-auto"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                ⭐ KEYNOTE
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
              Yan Cui
            </h3>
            <p className="mb-2 text-lg font-semibold text-purple-600">Lumigo</p>
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              AWS Serverless Hero & Author of "Production-Ready Serverless"
            </p>
            <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <h4 className="font-bold text-gray-800 text-lg">
                "Serverless, the hard parts"
              </h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                🌟 AWS Hero
              </span>
              <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                📚 Author
              </span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                🎯 Consultant
              </span>
            </div>
          </div>
        </motion.div>

        {/* James Eastham */}
        <motion.div
          className="group relative overflow-hidden bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
          <div className="relative p-8 text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-lg opacity-30 scale-110"></div>
              <img
                src="/speakers/james_eastham.jpg"
                alt="James Eastham"
                className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mx-auto"
              />
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                ⭐ KEYNOTE
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
              James Eastham
            </h3>
            <p className="mb-2 text-lg font-semibold text-blue-600">Datadog</p>
            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              Serverless Developer Advocate & Microsoft MVP
            </p>
            <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
              <h4 className="font-bold text-gray-800 text-lg">
                "Why Should You Think Serverless First?"
              </h4>
            </div>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                ☁️ Advocate
              </span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                🚀 DevRel
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                💻 MVP
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// use the json schema from the file and create a type
