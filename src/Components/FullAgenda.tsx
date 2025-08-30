import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import mainTrack from '../assets/mainTrack.json';
import discoveryTrack from '../assets/discoveryTrack.json';
import { AgendaItem } from '../types/agenda';
import dino_mascot from '../assets/Animals SVG/Dino_mascot.svg';

const PLACEHOLDER_NAME = 'someone to be announced';

const FullAgenda = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [orientation, setOrientation] = useState<'16:9' | '9:16'>('16:9');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(30); // 30 seconds countdown
  const [showInstructions, setShowInstructions] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(timer);
  }, []);

  // Auto-switching timer for full agenda view
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          // Switch to next page, cycling through all available pages
          setCurrentIndex((currentIdx) => {
            const maxMainPages = Math.ceil(
              mainTrack.length / (orientation === '16:9' ? 6 : 4)
            );
            const maxDiscoveryPages = Math.ceil(
              discoveryTrack.length / (orientation === '16:9' ? 6 : 4)
            );
            const totalPages = Math.max(maxMainPages, maxDiscoveryPages);
            return (currentIdx + 1) % totalPages;
          });
          return 30; // Reset countdown
        }
        return prev - 1;
      });
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, [orientation]);

  // Hide instructions after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInstructions(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const ratio = window.innerWidth / window.innerHeight;
      setOrientation(ratio > 1 ? '16:9' : '9:16');
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const maxMainPages = Math.ceil(
        mainTrack.length / (orientation === '16:9' ? 6 : 4)
      );
      const maxDiscoveryPages = Math.ceil(
        discoveryTrack.length / (orientation === '16:9' ? 6 : 4)
      );
      const totalPages = Math.max(maxMainPages, maxDiscoveryPages);

      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
        setTimeRemaining(30); // Reset timer
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((currentIndex + 1) % totalPages);
        setTimeRemaining(30); // Reset timer
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, orientation]);

  const getItemsPerPage = () => {
    return orientation === '16:9' ? 6 : 4;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-blue-500 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full opacity-5 animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <div className="w-full bg-black bg-opacity-50 backdrop-blur-sm relative z-20">
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center gap-6">
            <motion.img
              src={dino_mascot}
              alt="Dino Mascot"
              className="w-12 h-12"
              animate={{ rotate: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                FULL AGENDA
              </h1>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-mono font-bold">
              {currentTime.toLocaleTimeString('it-IT', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
            <div className="text-sm text-gray-300">
              {currentTime.toLocaleDateString('it-IT', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-[calc(100vh-120px)]">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <FullAgendaView
            orientation={orientation}
            currentIndex={currentIndex}
            itemsPerPage={getItemsPerPage()}
            timeRemaining={timeRemaining}
          />
        </motion.div>
      </div>

      {/* Navigation hints - only show for first 10 seconds */}
      {showInstructions && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30"
        >
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-300">
            Use ← → to navigate • F11 for fullscreen
          </div>
        </motion.div>
      )}
    </div>
  );
};

interface FullAgendaViewProps {
  orientation: '16:9' | '9:16';
  currentIndex: number;
  itemsPerPage: number;
  timeRemaining: number;
}

const FullAgendaView = ({
  orientation,
  currentIndex,
  itemsPerPage,
  timeRemaining,
}: FullAgendaViewProps) => {
  const startIndex = currentIndex * itemsPerPage;
  const mainTrackItems = (mainTrack as AgendaItem[]).slice(
    startIndex,
    startIndex + itemsPerPage
  );
  const discoveryTrackItems = (discoveryTrack as AgendaItem[]).slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Calculate actual number of pages needed
  const maxMainPages = Math.ceil(mainTrack.length / itemsPerPage);
  const maxDiscoveryPages = Math.ceil(discoveryTrack.length / itemsPerPage);
  const maxPages = Math.max(maxMainPages, maxDiscoveryPages);

  return (
    <div className="h-full p-6">
      {/* Simple Progress Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-4 h-1 bg-white/10 rounded-full overflow-hidden"
      >
        <motion.div
          className="h-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"
          initial={{ width: '100%' }}
          animate={{
            width: `${(timeRemaining / 30) * 100}%`,
          }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Main Content Grid */}
      <div
        className={`${
          orientation === '16:9' ? 'grid grid-cols-2 gap-6' : 'space-y-6'
        } h-[calc(100%-40px)]`}
      >
        {/* Main Stage Full Schedule */}
        <div className="bg-gradient-to-br from-purple-800 to-purple-600 rounded-3xl p-6 shadow-2xl border border-white border-opacity-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              🚀 MAIN STAGE
            </h2>
            <div className="text-sm text-purple-200">
              Page {currentIndex + 1} of {maxPages}
            </div>
          </div>

          <div className="space-y-3">
            {mainTrackItems.map((item, index) => (
              <CompactSessionCard
                key={startIndex + index}
                session={item}
                color="purple"
                orientation={orientation}
              />
            ))}

            {mainTrackItems.length === 0 && (
              <div className="bg-black bg-opacity-30 rounded-xl p-6 text-center">
                <p className="text-xl text-gray-300">No more sessions</p>
              </div>
            )}
          </div>
        </div>

        {/* Discovery Track Full Schedule */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-3xl p-6 shadow-2xl border border-white border-opacity-20">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              💬 DISCOVERY TRACK
            </h2>
            <div className="text-sm text-blue-200">
              Page {currentIndex + 1} of {maxPages}
            </div>
          </div>

          <div className="space-y-3">
            {discoveryTrackItems.map((item, index) => (
              <CompactSessionCard
                key={startIndex + index}
                session={item}
                color="blue"
                orientation={orientation}
              />
            ))}

            {discoveryTrackItems.length === 0 && (
              <div className="bg-black bg-opacity-30 rounded-xl p-6 text-center">
                <p className="text-xl text-gray-300">No more sessions</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface CompactSessionCardProps {
  session: AgendaItem;
  color: 'purple' | 'blue';
  orientation: '16:9' | '9:16';
}

const CompactSessionCard = ({
  session,
  color,
  orientation,
}: CompactSessionCardProps) => {
  const getTimestamp = (time: string) => {
    const date = new Date(time);
    return date.toLocaleTimeString('it-IT', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const title = session?.talk?.title || session?.break?.title || 'TBD';
  const name = session?.talk?.name;
  const organization = session?.talk?.organization;
  const duration = session?.agenda_details.minutes || 0;
  const startTime = getTimestamp(session.agenda_details.start_time);
  const talkType = session.agenda_details.type;
  const isKeynote = session.agenda_details.keynote || false;
  const profileImg = session?.talk?.avatar;

  const colorClasses = {
    purple: {
      bg: 'from-purple-600 to-purple-500',
      accent: 'from-purple-400 to-pink-400',
      text: 'text-purple-100',
    },
    blue: {
      bg: 'from-blue-600 to-blue-500',
      accent: 'from-blue-400 to-cyan-400',
      text: 'text-blue-100',
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-black bg-opacity-30 backdrop-blur-sm rounded-xl p-4 border border-white border-opacity-10"
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`bg-gradient-to-r ${colors.accent} text-white px-3 py-1 rounded-lg text-sm font-bold`}
            >
              {startTime}
            </div>
            {duration > 0 && (
              <div className="bg-white bg-opacity-20 px-2 py-1 rounded text-xs">
                {duration}min
              </div>
            )}
            {isKeynote && (
              <div className="bg-yellow-500 text-black px-2 py-1 rounded text-xs font-bold">
                ⭐ KEYNOTE
              </div>
            )}
            {talkType === 'break' && (
              <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs">
                ☕ Break
              </div>
            )}
          </div>

          <h4
            className={`font-bold mb-1 ${
              orientation === '16:9' ? 'text-lg' : 'text-base'
            } ${
              isKeynote
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'
                : 'text-white'
            } ${name === PLACEHOLDER_NAME ? 'text-gray-400' : ''}`}
          >
            {title}
          </h4>

          {talkType === 'talk' && name && name !== PLACEHOLDER_NAME && (
            <div className="space-y-1">
              <p
                className={`${colors.text} ${
                  orientation === '16:9' ? 'text-sm' : 'text-xs'
                }`}
              >
                {name}
              </p>
              {organization && (
                <p
                  className={`text-gray-300 ${
                    orientation === '16:9' ? 'text-xs' : 'text-xs'
                  }`}
                >
                  {organization}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Speaker Avatar */}
        {talkType === 'talk' && name !== PLACEHOLDER_NAME && (
          <div className="flex-shrink-0">
            {profileImg ? (
              <img
                className={`${
                  orientation === '16:9' ? 'w-12 h-12' : 'w-10 h-10'
                } rounded-full object-cover ring-2 ring-white ring-opacity-30`}
                src={profileImg}
                alt={name || ''}
                loading="lazy"
              />
            ) : name ? (
              <div
                className={`${
                  orientation === '16:9' ? 'w-12 h-12' : 'w-10 h-10'
                } rounded-full bg-gradient-to-r ${
                  colors.accent
                } flex items-center justify-center text-white text-sm font-bold ring-2 ring-white ring-opacity-30`}
              >
                {name.charAt(0)}
              </div>
            ) : null}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FullAgenda;
