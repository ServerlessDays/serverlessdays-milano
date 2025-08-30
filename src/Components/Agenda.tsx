import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import mainTrack from '../assets/mainTrack.json';
import discoveryTrack from '../assets/discoveryTrack.json';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
// import owl_mascot from "../assets/Animals SVG/owl_mascot.svg";
import dino_mascot from '../assets/Animals SVG/Dino_mascot.svg';

import { AgendaItem } from '../types/agenda';

const IS_COMING_SOON = false;
const PLACEHOLDER_NAME = 'someone to be announced';
const AgendaAccordion = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
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
      className="relative h-full pt-10 pb-5 bg-white "
      id="agenda"
      ref={containerRef}
    >
      <motion.img
        src={dino_mascot}
        alt="Dino Mascot"
        className="absolute -top-12 xl:-top-16 lg:-top-9 md:-top-16 right-0 w-16 md:w-24 scale-x-[-1] rotate-[-14deg] "
      />
      <h1 className="mb-3 text-2xl font-extrabold tracking-widest text-center text-purple-800 uppercase lg:text-5xl md:text-4xl">
        Agenda 2025
      </h1>

      {/* Keynote Speakers Section */}
      <KeynoteSpeakers />

      {IS_COMING_SOON && <ComingSoon />}
      {!IS_COMING_SOON && (
        <Accordion
          type="multiple"
          // defaultValue="item-1"
          defaultValue={!isMobile ? ['main_stage', 'discovery_track'] : []}
          // collapsible
          className="w-full lg:flex lg:justify-center lg:gap-4 lg:mt-10 lg:pl-10 lg:pr-10 "
        >
          <AccordionItem
            value="main_stage"
            className="border-b-0 rounded-lg lg:w-1/2"
            disabled={!isMobile}
          >
            <AccordionTrigger
              className="p-2 text-2xl font-bold text-purple-900 no-underline min-h-16 hover:no-underline"
              showIcon={isMobile}
            >
              🚀 Main stage
            </AccordionTrigger>
            <AccordionContent>
              <Agenda talks={mainTrack as AgendaItem[]} />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="discovery_track"
            className="mt-4 border-b-0 rounded-lg lg:mt-0 lg:w-1/2"
            disabled={!isMobile}
          >
            <AccordionTrigger
              className="p-2 text-2xl font-bold text-purple-900 no-underline hover:no-underline min-h-16"
              showIcon={isMobile}
            >
              💬 Discovery track
            </AccordionTrigger>
            <AccordionContent className="">
              <Agenda talks={discoveryTrack as AgendaItem[]} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};
export default AgendaAccordion;

const ComingSoon = () => {
  const [animationText, setAnimationText] = useState(
    '🚧 Final agenda coming soon'
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

const Agenda = ({ talks }: { talks: AgendaItem[] }) => {
  return (
    <div className="w-full ">
      <Accordion type="single" collapsible className="!h-full">
        {talks.map((talk, index) => (
          <TalkCard key={index} talk={talk} index={index} />
        ))}
      </Accordion>
    </div>
  );
};

const TalkCard = ({
  talk: agendaTalk,
  index,
}: {
  talk: AgendaItem;
  index: number;
}) => {
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
  const endTime = agendaTalk.agenda_details.end_time;

  const timeStampString = `${getTimestamp(startTime)}  ${getTimestamp(
    endTime
  )}`;

  const calculateItemHeight = (duration: number) => {
    const base = 10;
    const height = (Math.floor(duration) * base) / 1.5;
    return height;
  };

  let speakerNameTitle = '';
  if (name) speakerNameTitle += name;
  if (jobTitle) speakerNameTitle += ` - ${jobTitle}`;
  if (organization) speakerNameTitle += ` @ ${organization}`;

  return (
    <div
      id="talk"
      className={`last:border-b-[1px] border-t-[1px] border-l-0 border-r-0 relative border-[#5d518488] flex  px-4 justify-start items-center box-border ${
        agendaTalk.agenda_details.type === 'talk'
          ? ''
          : 'bg-gradient-to-br from-pink-50 to-purple-100'
      }`}
      style={{
        minHeight: `${calculateItemHeight(duration)}px`,
      }}
    >
      <div
        id="talk-details"
        className="flex items-center w-full gap-3 p-2 min-h-5"
      >
        <div id="time-container" className="">
          <p className="flex text-gray-600 ">{timeStampString}</p>
        </div>
        <div id="talk-content" className="w-full ">
          <AccordionItem
            className="pb-1 border-0 "
            value={index + startTime + endTime}
          >
            <AccordionTrigger
              disabled={talkType === 'break' || name === PLACEHOLDER_NAME}
              showIcon={talkType === 'talk' && name !== PLACEHOLDER_NAME}
              className={`flex justify-start text-start my-auto
							${talkType === 'break' && 'text-purple-900 hover:no-underline py-0'}
							${
                name === PLACEHOLDER_NAME &&
                'text-zinc-600 hover:no-underline pointer-events-none'
              }
							${isKeynote && 'text-fuchsia-700 font-bold'}
							${talkType === 'talk' && 'pb-0 pt-0'}`}
            >
              {title}
            </AccordionTrigger>
            <AccordionContent className="pb-0 text-start">
              <div id="talk-description" className="py-1">
                <p>{description}</p>
              </div>
            </AccordionContent>
          </AccordionItem>{' '}
          {talkType === 'talk' && (
            <p className="text-xs text-gray-600 md:text-xs">
              By&nbsp;
              <a
                href={agendaTalk.talk?.url}
                target="_blank"
                className={`underline underline-offset-2 ${
                  name === PLACEHOLDER_NAME &&
                  'no-underline pointer-events-none'
                }`}
              >
                {speakerNameTitle}
              </a>
            </p>
          )}
        </div>
        <div id="participants" className="flex items-center justify-end w-20">
          <a
            href={agendaTalk.talk?.url || '#'}
            className={`${name === PLACEHOLDER_NAME && 'pointer-events-none'}`}
            target="_blank"
          >
            {/* <AnimatedTooltip items={talkers} /> */}
            {profileImg && (
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={profileImg}
                height={100}
                width={100}
                alt={speakerNameTitle}
                title={speakerNameTitle}
                loading="lazy"
              />
            )}

            {!profileImg && name === PLACEHOLDER_NAME ? (
              <img
                className="object-cover w-10 h-10 scale-125 rounded-full"
                src="https://as2.ftcdn.net/v2/jpg/01/99/45/45/1000_F_199454533_GIBKQvbUBlu0hl5xhn64pJOHp1nn5W2C.jpg"
                height={100}
                width={100}
                alt={speakerNameTitle}
                title={speakerNameTitle}
                loading="lazy"
              />
            ) : (
              !profileImg && (
                <p className="text-xs font-light text-center">{name}</p>
              )
            )}
          </a>
        </div>
      </div>
    </div>
  );
};

const KeynoteSpeakers = () => {
  return (
    <div className="px-4 py-8 lg:px-10">
      <div className="mb-6 text-center">
        <h2 className="mb-2 text-3xl font-bold text-purple-800 lg:text-4xl">
          🎤 Keynote Speakers
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
        {/* Yan Cui */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <img
              src="/speakers/yan_cui.jpg"
              alt="Yan Cui"
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-md"
            />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-purple-800">Yan Cui</h3>
          <p className="mb-2 text-center font-medium text-purple-700">Lumigo</p>
          <p className="mb-3 text-center text-gray-600 text-sm">
            AWS Serverless Hero & Author of "Production-Ready Serverless"
          </p>
          <div className="mb-3 text-center">
            <h4 className="font-semibold text-gray-800 mb-1">
              Serverless, the hard parts
            </h4>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>🌟 AWS Serverless Hero</span>
            <span>📚 Author</span>
            <span>🎯 Consultant</span>
          </div>
        </div>

        {/* James Eastham */}
        <div className="flex flex-col items-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="mb-4">
            <img
              src="/speakers/james_eastham.jpg"
              alt="James Eastham"
              className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-md"
            />
          </div>
          <h3 className="mb-2 text-2xl font-bold text-purple-800">
            James Eastham
          </h3>
          <p className="mb-2 text-center font-medium text-purple-700">
            Datadog
          </p>
          <p className="mb-3 text-center text-gray-600 text-sm">
            Serverless Developer Advocate & Microsoft MVP
          </p>
          <div className="mb-3 text-center">
            <h4 className="font-semibold text-gray-800 mb-1">
              Why Should You Think Serverless First?
            </h4>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <span>☁️ Serverless Advocate</span>
            <span>🚀 Developer Relations</span>
            <span>💻 Microsoft MVP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// use the json schema from the file and create a type
