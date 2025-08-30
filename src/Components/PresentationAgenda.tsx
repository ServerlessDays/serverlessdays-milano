import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mainTrack from '../assets/mainTrack.json';
import discoveryTrack from '../assets/discoveryTrack.json';
import { AgendaItem } from '../types/agenda';
import dino_mascot from '../assets/Animals SVG/Dino_mascot.svg';

const PLACEHOLDER_NAME = 'someone to be announced';

type ViewMode = 'current' | 'full' | 'timeline';

const PresentationAgenda = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [orientation, setOrientation] = useState<'16:9' | '9:16'>('16:9');
  const [viewMode, setViewMode] = useState<ViewMode>('full');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000); // Update every 30 seconds

    return () => clearInterval(timer);
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
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        const maxIndex =
          viewMode === 'full'
            ? Math.max(
                Math.ceil(mainTrack.length / getItemsPerPage()),
                Math.ceil(discoveryTrack.length / getItemsPerPage()),
              ) - 1
            : 0;
        if (currentIndex < maxIndex) {
          setCurrentIndex(currentIndex + 1);
        }
      } else if (e.key === 'f' || e.key === 'F') {
        setViewMode(viewMode === 'full' ? 'current' : 'full');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, viewMode]);

  const getItemsPerPage = () => {
    return orientation === '16:9' ? 6 : 4;
  };

  const getCurrentAndNextSessions = (tracks: AgendaItem[]) => {
    const now = currentTime;
    const currentSessions: AgendaItem[] = [];
    const nextSessions: AgendaItem[] = [];

    tracks.forEach((session) => {
      const startTime = new Date(session.agenda_details.start_time);
      const endTime = new Date(
        startTime.getTime() + session.agenda_details.minutes * 60000,
      );

      if (now >= startTime && now < endTime) {
        currentSessions.push(session);
      } else if (startTime > now) {
        nextSessions.push(session);
      }
    });

    return {
      current: currentSessions[0] || null,
      next: nextSessions[0] || null,
    };
  };

  const mainTrackSessions = getCurrentAndNextSessions(
    mainTrack as AgendaItem[],
  );
  const discoveryTrackSessions = getCurrentAndNextSessions(
    discoveryTrack as AgendaItem[],
  );

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
                SERVERLESS DAY MILAN 2025
              </h1>
              <p className="text-lg text-gray-300">October 21, 2025</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('current')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'current'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white bg-opacity-20 text-gray-300 hover:bg-opacity-30'
                }`}
              >
                Current
              </button>
              <button
                onClick={() => setViewMode('full')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  viewMode === 'full'
                    ? 'bg-purple-600 text-white'
                    : 'bg-white bg-opacity-20 text-gray-300 hover:bg-opacity-30'
                }`}
              >
                Full Agenda
              </button>
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
      </div>

      {/* Content */}
      <div className="relative z-10 h-[calc(100vh-120px)]">
        <AnimatePresence mode="wait">
          {viewMode === 'current' ? (
            <motion.div
              key="current"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className={`${
                orientation === '16:9'
                  ? 'grid grid-cols-2 gap-8 p-8 h-full'
                  : 'space-y-6 p-6 h-full'
              }`}
            >
              {/* Main Stage */}
              <TrackDisplay
                title="🚀 MAIN STAGE"
                current={mainTrackSessions.current}
                next={mainTrackSessions.next}
                color="purple"
                orientation={orientation}
              />

              {/* Discovery Track */}
              <TrackDisplay
                title="💬 DISCOVERY TRACK"
                current={discoveryTrackSessions.current}
                next={discoveryTrackSessions.next}
                color="blue"
                orientation={orientation}
              />
            </motion.div>
          ) : (
            <motion.div
              key="full"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="h-full"
            >
              <FullAgendaView
                orientation={orientation}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                itemsPerPage={getItemsPerPage()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation hints */}
      {viewMode === 'full' && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-black bg-opacity-50 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-300">
            Use ← → to navigate • Press F to toggle views
          </div>
        </div>
      )}
    </div>
  );
};

interface FullAgendaViewProps {
  orientation: '16:9' | '9:16';
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  itemsPerPage: number;
}

const FullAgendaView = ({
  orientation,
  currentIndex,
  setCurrentIndex,
  itemsPerPage,
}: FullAgendaViewProps) => {
  const startIndex = currentIndex * itemsPerPage;
  const mainTrackItems = (mainTrack as AgendaItem[]).slice(
    startIndex,
    startIndex + itemsPerPage,
  );
  const discoveryTrackItems = (discoveryTrack as AgendaItem[]).slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const maxMainPages = Math.ceil(mainTrack.length / itemsPerPage);
  const maxDiscoveryPages = Math.ceil(discoveryTrack.length / itemsPerPage);
  const maxPages = Math.max(maxMainPages, maxDiscoveryPages);

  return (
    <div
      className={`h-full ${orientation === '16:9' ? 'grid grid-cols-2 gap-6' : 'space-y-6'} p-6`}
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

      {/* Navigation controls */}
      {maxPages > 1 && (
        <div
          className={`${orientation === '16:9' ? 'col-span-2' : ''} flex justify-center items-center gap-4 mt-4`}
        >
          <button
            onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
            disabled={currentIndex === 0}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 disabled:bg-opacity-10 disabled:text-gray-500 text-white px-4 py-2 rounded-lg transition-all"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() =>
              setCurrentIndex(Math.min(maxPages - 1, currentIndex + 1))
            }
            disabled={currentIndex === maxPages - 1}
            className="bg-white bg-opacity-20 hover:bg-opacity-30 disabled:bg-opacity-10 disabled:text-gray-500 text-white px-4 py-2 rounded-lg transition-all"
          >
            Next →
          </button>
        </div>
      )}
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
            } ${isKeynote ? 'bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent' : 'text-white'} ${
              name === PLACEHOLDER_NAME ? 'text-gray-400' : ''
            }`}
          >
            {title}
          </h4>

          {talkType === 'talk' && name && name !== PLACEHOLDER_NAME && (
            <div className="space-y-1">
              <p
                className={`${colors.text} ${orientation === '16:9' ? 'text-sm' : 'text-xs'}`}
              >
                {name}
              </p>
              {organization && (
                <p
                  className={`text-gray-300 ${orientation === '16:9' ? 'text-xs' : 'text-xs'}`}
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
                className={`${orientation === '16:9' ? 'w-12 h-12' : 'w-10 h-10'} rounded-full object-cover ring-2 ring-white ring-opacity-30`}
                src={profileImg}
                alt={name || ''}
                loading="lazy"
              />
            ) : name ? (
              <div
                className={`${orientation === '16:9' ? 'w-12 h-12' : 'w-10 h-10'} rounded-full bg-gradient-to-r ${colors.accent} flex items-center justify-center text-white text-sm font-bold ring-2 ring-white ring-opacity-30`}
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

interface TrackDisplayProps {
  title: string;
  current: AgendaItem | null;
  next: AgendaItem | null;
  color: 'purple' | 'blue';
  orientation: '16:9' | '9:16';
}

const TrackDisplay = ({
  title,
  current,
  next,
  color,
  orientation,
}: TrackDisplayProps) => {
  const colorClasses = {
    purple: {
      bg: 'from-purple-800 to-purple-600',
      accent: 'from-purple-500 to-pink-500',
      text: 'text-purple-200',
    },
    blue: {
      bg: 'from-blue-800 to-blue-600',
      accent: 'from-blue-500 to-cyan-500',
      text: 'text-blue-200',
    },
  };

  const colors = colorClasses[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`bg-gradient-to-br ${colors.bg} rounded-3xl p-8 shadow-2xl border border-white border-opacity-20 ${
        orientation === '9:16' ? 'min-h-[45vh]' : 'h-full'
      }`}
    >
      {/* Track Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        <div
          className={`h-2 bg-gradient-to-r ${colors.accent} rounded-full mx-auto w-32`}
        ></div>
      </div>

      {/* Current Session */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
          <h3 className="text-2xl font-semibold text-green-400">NOW LIVE</h3>
        </div>

        {current ? (
          <SessionCard session={current} colors={colors} isLive />
        ) : (
          <div className="bg-black bg-opacity-30 rounded-2xl p-6 text-center">
            <p className="text-2xl text-gray-300">No active session</p>
          </div>
        )}
      </div>

      {/* Next Session */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
          <h3 className="text-2xl font-semibold text-orange-400">UP NEXT</h3>
        </div>

        {next ? (
          <SessionCard session={next} colors={colors} />
        ) : (
          <div className="bg-black bg-opacity-30 rounded-2xl p-6 text-center">
            <p className="text-2xl text-gray-300">No upcoming sessions</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface SessionCardProps {
  session: AgendaItem;
  colors: {
    bg: string;
    accent: string;
    text: string;
  };
  isLive?: boolean;
}

const SessionCard = ({ session, colors, isLive = false }: SessionCardProps) => {
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
  const description =
    session?.talk?.abstract ||
    session?.talk?.description ||
    session?.break?.inline_abstract;

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`bg-black bg-opacity-40 backdrop-blur-sm rounded-2xl p-6 border-2 ${
        isLive
          ? 'border-green-500 shadow-green-500/20'
          : 'border-white border-opacity-20'
      } shadow-2xl`}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          {/* Time and Duration */}
          <div className="flex items-center gap-4 mb-4">
            <div
              className={`bg-gradient-to-r ${colors.accent} text-white px-4 py-2 rounded-xl font-bold text-lg`}
            >
              {startTime}
            </div>
            {duration > 0 && (
              <div className="bg-white bg-opacity-20 px-3 py-1 rounded-lg text-sm">
                {duration}min
              </div>
            )}
            {isKeynote && (
              <div className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-sm font-bold">
                ⭐ KEYNOTE
              </div>
            )}
          </div>

          {/* Title */}
          <h4
            className={`text-2xl font-bold mb-3 ${
              isKeynote
                ? 'bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent'
                : 'text-white'
            } ${name === PLACEHOLDER_NAME ? 'text-gray-400' : ''}`}
          >
            {title}
          </h4>

          {/* Speaker Info */}
          {talkType === 'talk' && name && name !== PLACEHOLDER_NAME && (
            <div className="space-y-2">
              <p className="text-xl text-gray-200 font-medium">{name}</p>
              {organization && (
                <p className={`text-lg ${colors.text}`}>{organization}</p>
              )}
            </div>
          )}

          {/* Description */}
          {description && description.length > 0 && talkType === 'talk' && (
            <div className="mt-3">
              <p className="text-base text-gray-300 leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>
          )}

          {/* Break info */}
          {talkType === 'break' && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">☕</span>
                <p className="text-lg text-gray-300">Break Time</p>
              </div>
              {description && (
                <p className="text-sm text-gray-400">{description}</p>
              )}
            </div>
          )}
        </div>

        {/* Speaker Avatar */}
        {talkType === 'talk' && name !== PLACEHOLDER_NAME && (
          <div className="flex-shrink-0">
            {profileImg ? (
              <img
                className="w-20 h-20 rounded-full object-cover ring-4 ring-white ring-opacity-50 shadow-xl"
                src={profileImg}
                alt={name || ''}
                loading="lazy"
              />
            ) : name ? (
              <div
                className={`w-20 h-20 rounded-full bg-gradient-to-r ${colors.accent} flex items-center justify-center text-white text-2xl font-bold ring-4 ring-white ring-opacity-50`}
              >
                {name.charAt(0)}
              </div>
            ) : (
              <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center text-gray-300 text-sm ring-4 ring-white ring-opacity-50">
                TBA
              </div>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default PresentationAgenda;
