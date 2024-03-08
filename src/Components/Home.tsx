import UnicornMascot from "../assets/unicorn_mascot.svg";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const Home = () => {
	return (
		<div className="flex h-screen pt-20 pl-10 pr-10 text-white ">
			<div className="w-full h-full md:flex md:justify-around ">
				<div className="space-y-5">
					<h1 className="text-6xl font-extrabold">
						Serverless Days <br /> Milan 🇮🇹
					</h1>
					<h3 className="text-4xl font-semibold text-secondary">7 June 2024</h3>
					<TextGenerateEffect
						words={"Join the biggest Serverless community conference in Italy."}
						className="text-2xl font-medium text-white text-secondary"
					/>
					{/* <p className="text-2xl font-medium text-secondary">

						Join the biggest Serverless community conference in Italy.
					</p> */}
					<Button className="font-semibold text-white rounded-xl">🎫 Buy your ticket!</Button>
				</div>
				<div>
					<img src={UnicornMascot} alt="unicorn" className="w-48 md:w-72 scale-x-[-1] " />
				</div>
			</div>
		</div>
	);
};
export default Home;
