"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
export type Image = {
	image: string | string[];
	imageClassName?: string | string[];
	url: string | string[];
	sponsorType: "Gold" | "Headline" | "Community";
	type: "single" | "multiple";
};

export const InfiniteMovingImage = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: Image[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null);
	const scrollerRef = React.useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);
	const [start, setStart] = useState(false);
	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}
	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty("--animation-direction", "forwards");
			} else {
				containerRef.current.style.setProperty("--animation-direction", "reverse");
			}
		}
	};
	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};
	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className,
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					" flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]",
				)}
			>
				{items.map((item, idx) => {
					return item.type === "single" ? (
						<li
							className={
								" justify-center  max-w-full relative rounded-2xl  flex-shrink-0 bg-fuchsia-600 shadow-lg  " +
								(item.sponsorType != "Gold" && item.sponsorType != "Headline"
									? "px-6 py-6 !w-[125px]"
									: "px-8 py-6 !w-[250px] md:w-[250px]")
							}
							// style={{
							// 	background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
							// }}
							key={(item.image as string) + idx}
						>
							<div className="h-full ">
								<div
									aria-hidden="true"
									className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
								></div>
								<a href={(item.url as string) === undefined ? "#" : (item.url as string)} target="_blank">
									<span className="flex relative z-20 text-sm leading-[1.6] text-gray-100 font-normal text-center h-full justify-center items-center">
										<img src={item.image as string} alt="quote" className={cn("w-full h-full", item.imageClassName)} />
									</span>
									<div className="relative z-20 flex items-center justify-center">
										<span className="">
											{/* <span className=" text-sm leading-[1.6] text-gray-400 font-normal">{item.name}</span> */}
											<span className="text-sm font-bold text-gray-300 ">{item.sponsorType}</span>
										</span>
									</div>
								</a>
							</div>
						</li>
					) : (
						<>
							{" "}
							<li
								className="w-[250px] justify-center max-w-full relative rounded-2xl flex-shrink-0 bg-fuchsia-600 shadow-lg px-8 py-6 md:w-[250px]"
								key={item.url[0] + idx}
							>
								<div className="h-full scale-70">
									<div
										aria-hidden="true"
										className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
									></div>
									{(item.image as string[]).map((img: string, idImage) => (
										<a
											href={(item.url[idImage] as string) === undefined ? "#" : (item.url[idImage] as string)}
											target="_blank"
										>
											<span className="relative z-20 flex justify-center flex-grow gap-4 text-sm font-normal text-gray-100 content-stretch">
												<img
													src={img as string}
													alt="quote"
													className={cn("p-2", item.imageClassName?.[idImage] as string)}
												/>
											</span>
											<div className="relative z-20 flex items-center justify-center">
												<span className="">
													{/* <span className=" text-sm leading-[1.6] text-gray-400 font-normal">{item.name}</span> */}
													<span className="text-sm font-bold text-gray-300 ">{item.sponsorType}</span>
												</span>
											</div>
										</a>
									))}{" "}
								</div>
							</li>
						</>
					);
				})}
			</ul>
		</div>
	);
};
