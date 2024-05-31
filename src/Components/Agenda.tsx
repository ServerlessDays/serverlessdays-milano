import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import mainTrack from "../assets/mainTrack.json";
import discoveryTrack from "../assets/discoveryTrack.json";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
// import owl_mascot from "../assets/Animals SVG/owl_mascot.svg";
import dino_mascot from "../assets/Animals SVG/Dino_mascot.svg";

const IS_COMING_SOON = false;
const PLACEHOLDER_NAME = "someone to be announced";
const AgendaAccordion = () => {
	const [width, setWidth] = useState<number>(window.innerWidth);
	const containerRef = useRef(null);
	// const isInView = useInView(containerRef, { margin: "0px 0px -100px 0px" });

	// const [owlScope, animateOwl] = useAnimate();
	// const [dinoScope, animateDino] = useAnimate();
	const handleWindowSizeChange = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowSizeChange);

		return () => {
			window.removeEventListener("resize", handleWindowSizeChange);
		};
	}, []);

	// useEffect(() => {
	// 	if (!isInView) return;
	// 	animateOwl(owlScope.current, { left: "90%" }, { delay: 1, bounce: 0.1, duration: 2, type: "spring" });
	// 	animateDino(dinoScope.current, { left: "0" }, { delay: 1.6, bounce: 0.2, duration: 3, type: "spring" });
	// 	console.log(`Own is in view: ${isInView}`);
	// }, [isInView]);

	const isMobile = width <= 1024;
	return (
		<div className="relative h-full pt-10 pb-5 bg-white " id="agenda" ref={containerRef}>
			{/* <h1 className="mb-4 text-2xl font-bold text-center text-purple-800 uppercase">Agenda 2024</h1> */}

			{/* <motion.img
				src={owl_mascot}
				alt="Owl Mascot"
				// ref={owlScope}
				// initial={{
				// 	left: "100%",
				// }}
				className="absolute top-[800px] -left-8 w-16 md:w-24 scale-x-[-1]"
			/> */}
			<motion.img
				src={dino_mascot}
				alt="Dino Mascot"
				// ref={dinoScope}
				// initial={{
				// 	left: "-100%",
				// 	rotate: "25deg",
				// }}
				className="absolute -top-12 xl:-top-16 lg:-top-9 md:-top-16 right-0 w-16 md:w-24 scale-x-[-1] rotate-[-14deg] "
			/>
			<h1 className="mb-3 text-2xl font-extrabold tracking-widest text-center text-purple-800 uppercase lg:text-5xl md:text-4xl">
				Agenda 2024
			</h1>
			{IS_COMING_SOON && <ComingSoon />}
			{!IS_COMING_SOON && (
				<Accordion
					type="multiple"
					// defaultValue="item-1"
					defaultValue={["main_stage", "discovery_track"]}
					// collapsible
					className="w-full lg:flex lg:justify-center lg:gap-4 lg:mt-10 lg:pl-10 lg:pr-10 "
				>
					<AccordionItem value="main_stage" className="border-b-0 rounded-lg lg:w-1/2" disabled={!isMobile}>
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
	// use framer motion to animate text like "coming soon", "coming soon.", "coming soon..", "coming soon...

	const [animationText, setAnimationText] = useState("coming soon");

	useEffect(() => {
		const interval = setInterval(() => {
			setAnimationText((prevText) => {
				if (prevText === "coming soon...") {
					return "coming soon";
				} else {
					return prevText + ".";
				}
			});
		}, 500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="p-10">
			<motion.p className="text-2xl font-medium text-center text-blue-900">{animationText}</motion.p>
		</div>
	);
};

const Agenda = ({ talks }: { talks: AgendaItem[] }) => {
	const maxDuration = Math.max(
		...talks.map((item) => {
			const start = new Date(item.agenda_details.start_time).getTime();
			const end = new Date(item.agenda_details.end_time).getTime();
			return (end - start) / 60000; // Convert to minutes
		}),
	);
	return (
		<div className="w-full ">
			<Accordion type="single" collapsible className="!h-full">
				{talks.map((talk, index) => (
					<TalkCard key={index} talk={talk} index={index} maxDuration={maxDuration} />
				))}
			</Accordion>
		</div>
	);
};

const TalkCard = ({
	talk: agendaTalk,
	index,
	maxDuration,
}: {
	talk: AgendaItem;
	index: number;
	maxDuration: number;
}) => {
	if (!agendaTalk || !agendaTalk.agenda_details.type === undefined) return null;

	const pad = (time: number, size: number) => {
		return time.toString().padStart(size, "0");
	};

	const getTimestamp = (time: string) => {
		const date = new Date(time);
		const hours = date.getHours();
		const minutes = date.getMinutes();
		return `${pad(hours, 2)}:${pad(minutes, 2)}`;
	};

	const title = agendaTalk?.talk?.title || agendaTalk?.break?.title;
	const description = agendaTalk?.talk?.description || agendaTalk?.break?.inline_abstract;
	const name = agendaTalk?.talk?.name;
	const duration = agendaTalk?.agenda_details.minutes || 0;
	const profileImg = agendaTalk?.talk?.avatar;
	const talkType = agendaTalk.agenda_details.type;
	const isKeynote = agendaTalk.agenda_details.keynote || false;
	const jobTitle = agendaTalk?.talk?.job_title;
	const organization = agendaTalk?.talk?.organization;
	const startTime = agendaTalk.agenda_details.start_time;
	const endTime = agendaTalk.agenda_details.end_time;

	// console.log({ agendaTalk });

	// const calculateItemHeight = (startTime: string, endTime: string, maxDuration: number, duration: number) => {
	const calculateItemHeight = (maxDuration: number, duration: number) => {
		// const start = new Date(startTime).getTime();
		// const end = new Date(endTime).getTime();
		// const difference = end - start;
		// const minutes = difference / 60000 - 8;
		// const minutes = duration;
		const minutes = duration - 2.8;
		//  											 ^--- Subtract 3 px to account for padding,

		// Calculate ratio of duration to maximum duration
		const ratio = minutes / maxDuration;

		// const minHeight = 60;
		const maxHeight = 500; // You can adjust this value as needed

		// Calculate height based on ratio
		const height = maxHeight * ratio;
		// const height = Math.max(minHeight, Math.min(maxHeight, maxHeight * ratio));

		return height;
	};

	let speakerNameTitle = "";
	if (name) speakerNameTitle += name;

	if (jobTitle) speakerNameTitle += ` - ${jobTitle}`;

	if (organization) speakerNameTitle += ` @ ${organization}`;

	// const speakerNameTitle = [name, jobTitle, organization].filter(Boolean).join(" - ").join(" @ ");

	return (
		<div
			id="talk"
			className={`last:border-b-[1px] border-t-[1px] border-l-0 border-r-0 border-[#5d518488] flex  px-4 justify-start items-center box-border ${
				agendaTalk.agenda_details.type === "talk" ? "" : "bg-gradient-to-br from-pink-50 to-purple-100"
			}`}
			style={{
				// minHeight: `${calculateItemHeight(startTime, endTime, maxDuration)}px`,
				minHeight: `${calculateItemHeight(maxDuration, duration)}px`,
				// maxHeight: `${calculateItemHeight(startTime, endTime, maxDuration) + 300}px`,
			}}
		>
			<div id="talk-details" className="flex flex-grow w-full gap-3 p-2 my-auto">
				<div id="time-container" className="flex ">
					<p className="flex my-auto font-light">
						{getTimestamp(startTime)} <span className="hidden md:block">&nbsp;-&nbsp;</span>
						{getTimestamp(endTime)}
					</p>
					{/* <span>({agendaTalk.agenda_details.minutes} mins)</span> */}
				</div>
				<div id="talk-content" className="w-full ">
					<AccordionItem className="pb-0 border-0 " value={index + startTime + endTime}>
						<AccordionTrigger
							disabled={talkType === "break" || name === PLACEHOLDER_NAME}
							showIcon={talkType === "talk" && name !== PLACEHOLDER_NAME}
							className={`flex justify-start text-start my-auto  
							${talkType === "break" && "text-purple-900 hover:no-underline"}
							${name === PLACEHOLDER_NAME && "text-zinc-600 hover:no-underline pointer-events-none"}
							${isKeynote && "text-fuchsia-700 font-bold"}
							${talkType === "talk" && "pb-0 pt-0"}`}
						>
							{title}
						</AccordionTrigger>
						<AccordionContent className="pb-0 text-start">
							<div id="talk-description" className="py-1">
								<p>{description}</p>
							</div>
						</AccordionContent>
					</AccordionItem>{" "}
					{talkType === "talk" && (
						<p className="text-xs text-gray-600 md:text-xs">
							By&nbsp;
							<a
								href={agendaTalk.talk?.url}
								target="_blank"
								className={`underline underline-offset-2 ${
									name === PLACEHOLDER_NAME && "no-underline pointer-events-none"
								}`}
							>
								{speakerNameTitle}
							</a>
						</p>
					)}
				</div>
				<div id="participants" className="flex items-center justify-end w-20">
					<a
						href={agendaTalk.talk?.url || "#"}
						className={`${name === PLACEHOLDER_NAME && "pointer-events-none"}`}
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
							!profileImg && <p className="text-xs font-light text-center">{name}</p>
						)}
					</a>
				</div>
			</div>
		</div>
	);
};

// use the json schema from the file and create a type

interface AgendaDetails {
	start_time: string;
	end_time: string;
	minutes: number;
	keynote?: boolean;
	type: "talk" | "break";
}

interface Talk {
	title: string;
	description: string;
	name: string;
	avatar: string;
	url: string;
	organization: string;
	job_title: string;
}

interface Break {
	title: string;
	inline_abstract: string;
}

interface AgendaItem {
	agenda_details: AgendaDetails;
	talk?: Talk;
	break?: Break;
}
