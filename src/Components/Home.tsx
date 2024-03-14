import { motion } from "framer-motion";
import UnicornMascot from "../assets/unicorn_mascot.svg";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const Home = () => {
	return (
		<div className="flex h-full p-10 text-white ">
			<div className="w-full h-full my-auto md:items-center md:flex md:justify-around">
				<div className="space-y-5 ">
					<h1 className="text-6xl font-extrabold">
						ServerlessDays <br /> Milano 🇮🇹
					</h1>
					<h3 className="text-4xl font-semibold text-secondary">
						<a href="/Serverless_Day_2024.ics">June, 13th 2024</a>
						&nbsp;@&nbsp;
						<a href="https://maps.app.goo.gl/WYFXN32VHEQrjctJ8" target="_blank">
							Milano C30
						</a>
					</h3>
					<TextGenerateEffect
						words={"Join the biggest serverless community conference in Italy."}
						className="text-2xl font-medium text-white text-secondary"
					/>

					<motion.div
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
						<a href="https://www.eventbrite.it/e/biglietti-serverlessdays-milano-2024-788514818047" target="_blank">
								🎫 Buy Ticket!
						</a>
					</motion.div>
				</div>
				<div>
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
