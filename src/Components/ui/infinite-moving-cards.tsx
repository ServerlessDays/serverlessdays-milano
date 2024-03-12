"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
export type Image = {
	image: string;
	imageClassName?: string;
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
		if (items.length < 8) items = [...items, ...items];

		// console.log({ items });
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
				{items.map((item, idx) => (
					<li
						className="w-[250px] justify-center  max-w-full relative rounded-2xl  flex-shrink-0 bg-fuchsia-600 shadow-lg  px-8 py-6 md:w-[250px]"
						// style={{
						// 	background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
						// }}
						key={item.image + idx}
					>
						<div className="h-full ">
							<div
								aria-hidden="true"
								className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
							></div>
							<span className="flex relative z-20 text-sm leading-[1.6] text-gray-100 font-normal text-center h-full justify-center items-center">
								<img src={item.image} alt="quote" className={cn("w-full h-full", item.imageClassName)} />
							</span>
							{/* <div className="relative z-20 flex flex-row items-center mt-6">
								<span className="flex flex-col gap-1">
									<span className=" text-sm leading-[1.6] text-gray-400 font-normal">{item.name}</span>
									<span className=" text-sm leading-[1.6] text-gray-400 font-normal">{item.title}</span>
								</span>
							</div> */}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
