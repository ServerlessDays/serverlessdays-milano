import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import slsTalk from "../assets/slsdaytalk.json";
const IS_COMING_SOON = false;
const AgendaAccordion = () => {
	return (
		<div className="h-full p-10 bg-white">
			<h1 className="text-4xl font-extrabold text-center text-blue-900 uppercase">2024 Agenda </h1>
			{IS_COMING_SOON && <p className="pt-10 my-auto font-medium text-center text-blue-900">coming soon...</p>}
			{!IS_COMING_SOON && (
				<Accordion type="single" defaultValue="item-1" collapsible className="w-full">
					<AccordionItem value="item-1">
						<AccordionTrigger>Main stage</AccordionTrigger>
						<AccordionContent>
							<Agenda talks={slsTalk} />
						</AccordionContent>
					</AccordionItem>
					<AccordionItem value="item-2">
						<AccordionTrigger>Community Track</AccordionTrigger>
						<AccordionContent>
							<Agenda talks={slsTalk} />
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			)}
		</div>
	);
};
export default AgendaAccordion;

const Agenda = ({ talks }: { talks: AgendaItem[] }) => {
	return (
		<div className="w-full">
			<Accordion>
				{talks.map((talk, index) => (
					<TalkCard key={index} talk={talk} index={index} />
				))}
			</Accordion>
		</div>
	);
};

const TalkCard = ({ talk, index }: { talk: AgendaItem; index: number }) => {
	if (!talk.agenda_details.type) return null;
	if (!talk) return null;
	const getTimestamp = (time: string) => {
		const hours = new Date(time).getHours();
		const minutes = new Date(time).getMinutes();
		return `${hours}:${minutes}0`;
	};
	return (
		<div id="talk" className=" border-1 border-zinc-600">
			<div id="talk-details" className="flex w-full gap-2 p-1">
				<div id="time-container" className="flex items-center justify-center">
					<p>
						{getTimestamp(talk.agenda_details.start_time)} - {getTimestamp(talk.agenda_details.end_time)}
					</p>
				</div>
				<div id="talk-content">
					<AccordionItem value={index + talk.agenda_details.start_time}>
						<AccordionTrigger>{talk[talk.agenda_details.type]?.title}</AccordionTrigger>
						<AccordionContent>
							<div id="talk-description">{talk[talk.agenda_details.type]?.description}</div>
						</AccordionContent>
					</AccordionItem>
				</div>
				<div id="participants"></div>
			</div>
		</div>
	);
};

// use the json schema from the file and create a type

// type Talk = {
// 	agenda_details: {
// 		start_time: string;
// 		end_time: string;
// 		minutes: number;
// 		type: "talk"
// 	}
type AgendaItem = {
	agenda_details: {
		start_time: string;
		end_time: string;
		minutes: number;
		type: "talk";
	};
	talk?: {
		title: string;
		description: string;
	};
	break?: {
		title: string;
		description: string;
	};
};
