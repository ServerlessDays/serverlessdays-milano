import { motion } from "framer-motion";
import UnicornMascot from "../assets/unicorn_mascot.svg";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import arrowHandDrawn from "../assets/handDrawnArrow.png";

type UntilTime = `${number}/${number}/${number}`;
const Home = () => {
	const MotionButton = motion(Button);

	return (
		<div className="flex h-full p-2 text-white md:p-10 ">
			<div className="w-full h-full my-auto md:items-center md:flex md:justify-around">
				<div className="space-y-5 ">
					<h1 className="text-5xl font-extrabold md:text-6xl">
						ServerlessDays <br /> Milano 🇮🇹
					</h1>
					<h3 className="text-3xl font-semibold md:text-4xl text-secondary">
						<a href="../../Serverless_Day_2024.ics">June, 13th 2024</a> <br className="block sm:hidden" />
						&nbsp;@&nbsp;
						<a href="https://maps.app.goo.gl/WYFXN32VHEQrjctJ8" target="_blank">
							Milano C30
						</a>
					</h3>
					<TextGenerateEffect
						words={"Join the biggest serverless community conference in Italy."}
						containerClassName="font-medium  w-72  text-secondary sm:w-full"
						textClassName="text-lg md:text-2xl text-secondary"
					/>

					<motion.div>
						<a
							href="https://www.eventbrite.it/e/biglietti-serverlessdays-milano-2024-788514818047"
							target="_blank"
							className="relative"
						>
							<MotionButton
								className="font-semibold text-white rounded-xl"
								animate={{
									//jump with spring every 2 seconds
									y: [0, -5, 0],
									transition: {
										duration: 0.3,
										repeat: Infinity,
										repeatDelay: 2,
									},
								}}
							>
								🎫 Buy Ticket!
								{/* <span className="absolute rotate-[20deg] translate-x-14 rounded-xl bg-inherit p-1 -translate-y-4 underline">
									35$
								</span> */}
							</MotionButton>
							<EarlyBirdText untilDate="19/04/2024" />
						</a>
					</motion.div>
				</div>
				<div className="mt-24 md:mt-16 lg:mt-0">
					<img src={UnicornMascot} alt="unicorn" className="hidden md:block w-48 md:w-72 scale-x-[-1] " />

					<img
						src={UnicornMascot}
						alt="unicorn"
						className="absolute top-36 -right-24 block md:hidden w-48 md:w-72 scale-x-[-1] "
					/>
				</div>
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
const EarlyBirdText = ({ untilDate }: { untilDate: UntilTime }) => {
	const currentDate = new Date();
	const until = new Date(untilDate);

	if (currentDate > until) return null;
	return (
		<div>
			<div className="absolute w-20 scale-50 -bottom-12 -right-16">
				<img
					src={arrowHandDrawn}
					alt="hand drawn arrow"
					className="invert sepia-0 saturate-[7491%] hue-rotate-[354deg] brightness-[103%] contrast-[101%]"
				/>
			</div>

			<p className="absolute w-20 text-sm font-bold top-12 -right-24 handwriting-1">
				Early Bird Ticket Now!{" "}
				<span className="relative after:border-b after:rounded-[50%/100px_100px_0_0] after:border-white after:absolute after:top-4 after:-left-1 after:w-14 after:h-[1px]  after:-rotate-[3deg] after:content-['']">
					at 35€
				</span>
			</p>
		</div>
	);
};
