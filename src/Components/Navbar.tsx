import Logo2024 from "../assets/Logo 2024.png";
import CircularLogo from "../assets/Meetup Logo Circular.png";
import { Button } from "@/Components/ui/button";
const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-around p-4 rounded-b-md space-x-7 bg-slate-100">
			<div className="block h-10 p-0 md:hidden">
				<img src={CircularLogo} alt="logo" className="w-full h-full" />
			</div>
			<div className="hidden w-48 p-0 sm:block">
				<img src={Logo2024} alt="logo" />
			</div>
			<div className="flex items-center space-x-9">
				<div className="">Home</div>
				<div className="">Ticket</div>

				<div className="">About us</div>
				<div className="hidden md:block">
					<Button
						variant={"default"}
						className="font-semibold text-white rounded-xl bg-gradient-to-br from-pink-400 to-purple-600"
					>
						Get your ticket for 35$
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
