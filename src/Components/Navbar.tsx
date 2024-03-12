import Logo2024 from "../assets/Logo 2024.png";
// import CircularLogo from "../assets/Meetup Logo Circular.png";
import { Button } from "@/Components/ui/button";
const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-around p-4 rounded-b-md space-x-7 bg-slate-100">
			<div className="block h-10 p-0 md:hidden">
				<img src={Logo2024} alt="logo" className="w-full h-full" />
			</div>
			<div className="hidden w-48 p-0 md:block">
				<img src={Logo2024} alt="logo" />
			</div>
			<div className="flex items-center space-x-2 md:space-x-9">
				<div className="hidden md:block">
					<a href="/">Home</a>
				</div>
				<div className="hidden md:block">
					<a href="#agenda">Agenda</a>
				</div>

				<div className="relative hidden md:block">
					<a href="#aboutUs" className="pointer-events-none">
						About us
					</a>
					<div className="absolute -rotate-[5deg] w-28 top-3 -left-2 text-sm font-normal text-fuchsia-700">
						coming soon
					</div>
					<div className="absolute top-3 w-20 -left-2 h-[2px] opacity-70 rotate-[175deg] bg-fuchsia-700 rounded-xl"></div>
					{/* <div className="absolute wrapper">
						<div className="picture ">
							<div className="hook "></div>
							<div className="frame">
								<div className="inside">coming soon</div>
							</div>
						</div>
					</div> */}
				</div>
				<div className="">
					<a href="https://www.eventbrite.it/e/biglietti-serverlessdays-milano-2024-788514818047" target="_blank">
						<Button
							variant={"default"}
							className="font-semibold text-white rounded-xl bg-gradient-to-br from-pink-400 to-purple-600 md:w-24"
						>
							Ticket
						</Button>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
