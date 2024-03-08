import UnicornMascot from "../assets/unicorn_mascot.svg";
import { Button } from "./ui/button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const Home = () => {
	return (
		<div className="flex h-full p-10 text-white ">
			<div className="w-full h-full my-auto md:items-center md:flex md:justify-around">
				<div className="space-y-5 ">
					<h1 className="text-6xl font-extrabold">
						Serverless Days <br /> Milan 🇮🇹
					</h1>
					<h3 className="text-4xl font-semibold text-secondary">10 May 2024</h3>
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
