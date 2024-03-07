import logoServerlessDark from "../assets/sponsors/logo serverless dark.svg";
import logoServerlessLight from "../assets/sponsors/serverless-guru-logo.svg";
import logoBeSharp from "../assets/sponsors/logo_besharp.svg";
import { cn } from "@/lib/utils";

const Sponsors = () => {
	return (
		<div className="pt-3 text-center bg-slate-800">
			<h5 className="text-sm font-semibold text-gray-300">2024 edition sponsors</h5>
			<div className="flex flex-wrap justify-center space-x-6">
				{/* <h1>Sponsors</h1> */}
				<SponsorCard logo={logoServerlessDark} />
				<SponsorCard logo={logoServerlessLight} />
				<SponsorCard logo={logoBeSharp} />

				{/* <img src={logoServerlessDark} alt="logo" />
			<img src={logoServerlessLight} alt="logo" />
			<img src={logoBeSharp} alt="logo" className="w-20" /> */}
			</div>
		</div>
	);
};

export default Sponsors;

const SponsorCard = ({
	logo,
	cardClassName,
	imgClassName,
}: {
	logo: string;
	cardClassName?: string;
	imgClassName?: string;
}) => {
	return (
		<div className={cn(" p-3 rounded-xl items-center flex", cardClassName)}>
			<img src={logo} alt="logo" className={cn("w-24 h-24 md:w-48 md:h-48", imgClassName)} />
		</div>
	);
};
