import logoServerlessDark from "../assets/sponsors/logo serverless dark.svg";
import { Image } from "./ui/infinite-moving-cards";
import moth_mascot from "../assets/Animals SVG/Moth_mascot.svg";
import anteater_mascot from "../assets/Animals SVG/Anteater_mascot.svg";
import { motion } from "framer-motion";
import { useRef } from "react";

const CommunitySponsors = () => {
	const containerRef = useRef(null);
	// const isInView = useInView(containerRef, { margin: "0px 0px -200px 0px" });
	// const [mothScope, animateMoth] = useAnimate();
	// const [anteaterScope, animateAnteater] = useAnimate();

	const sponsors: Image[] = [
		{
			image: logoServerlessDark,
			url: "https://www.serverless.com/",
			sponsorType: "Headline",
			type: "single",
		},
	];

	// useEffect(() => {
	// 	if (!isInView) return;
	// 	console.log(isInView);
	// 	animateMoth(mothScope.current, { right: 0 }, { delay: 1, bounce: 0.1, duration: 2, type: "spring" });
	// 	animateAnteater(anteaterScope.current, { left: "0" }, { delay: 1.6, bounce: 0.2, duration: 3, type: "spring" });
	// }, [isInView]);

	return (
		<div className="relative p-3 py-5 text-center bg-purple-200" id="#community_sponsors" ref={containerRef}>
			<h3 className="-mb-2 text-2xl font-bold text-purple-950">Thanks</h3>
			<h5 className="text-lg font-medium text-purple-900">to our community sponsors</h5>
			<div className="flex justify-center gap-5 py-5 mx-auto w-28 md:w-full">
				<div className="p-2 mx-auto rounded-md shadow-lg bg-gradient-to-tl from-fuchsia-500 to-purple-800">
					<img src={sponsors[0].image as string} alt="Sponsor Logo" className="mx-auto" />
				</div>
				{/* <div className="p-2 mx-auto rounded-md bg-gradient-to-tl from-fuchsia-600 to-purple-600">
					<img src={sponsors[0].image as string} alt="Sponsor Logo" className="" />
				</div>
				<div className="p-2 mx-auto rounded-md bg-gradient-to-tl from-fuchsia-600 to-purple-600">
					<img src={sponsors[0].image as string} alt="Sponsor Logo" className="" />
				</div> */}
			</div>
			{/* Animate Owl Mascot */}

			{/* Animate Moth Mascot */}
			<motion.img
				src={moth_mascot}
				// ref={mothScope}
				alt="Moth Mascot"
				className="absolute -left-3 w-24 -top-10 rotate-[15deg]  drop-shadow-2xl scale-x-[-1]"
				// initial={{ right: "-100%", y: "50px", rotate: "25deg" }}
			/>

			<motion.img
				src={anteater_mascot}
				// ref={anteaterScope}
				alt="Anteater Mascot"
				className="absolute right-0 -bottom-2 rotate-[15deg] w-28 scale-x-[-1]"
				// initial={{
				// 	left: "-100%",
				// 	y: "0",
				// 	rotate: "25deg",
				// }}
			/>
		</div>
	);
};
export default CommunitySponsors;
