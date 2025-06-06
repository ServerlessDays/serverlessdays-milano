import logoServerlessDark from '../assets/sponsors/logo serverless dark.svg';
import logoServerlessGuru from '../assets/sponsors/serverless-guru-logo.svg';
import logoBeSharp from '../assets/sponsors/logo_besharp.svg';
import logoAWS from '../assets/sponsors/Amazon_Web_Services_Logo.svg';
import logoNTTData from '../assets/sponsors/NTT-Data-Logo.svg';
import logoCodecrafters from '../assets/sponsors/codecrafters-logo.png';
import logoTAG from '../assets/sponsors/TAG-logo.svg';
import logoAmpt from '../assets/sponsors/ampt-logo.svg';
import logoOBN from '../assets/sponsors/off-by-none-logo.svg';
import logoEleva from '../assets/sponsors/eleva-logo.svg';
// import { cn } from "@/lib/utils";
import { InfiniteMovingImage } from './ui/infinite-moving-cards';
import { Image } from '@/types/sponsors';

const Sponsors = () => {
  const sponsors: Image[] = [
    {
      image: logoBeSharp,
      url: 'https://www.besharp.it/',
      sponsorType: 'Headline',
      type: 'single'
    },
    {
      image: logoNTTData,
      url: 'https://www.nttdata.com/global/en/',
      sponsorType: 'Headline',
      imageClassName: 'h-10',
      type: 'single'
    },
    {
      image: logoAWS,
      url: 'https://aws.amazon.com/',
      sponsorType: 'Headline',
      imageClassName: 'w-24',
      type: 'single'
    },
    {
      image: logoServerlessGuru,
      url: 'https://www.serverlessguru.com/',
      sponsorType: 'Gold',
      imageClassName: '!h-20',
      type: 'single'
    },
    {
      image: logoTAG,
      url: 'https://talentgarden.org/en/',
      sponsorType: 'Gold',
      imageClassName: '!h-12',
      type: 'single'
    },
    {
      image: logoServerlessDark,
      url: 'https://www.serverless.com/',
      sponsorType: 'Community',
      type: 'single'
    },
    {
      image: logoCodecrafters,
      url: 'https://codecrafters.io//',
      sponsorType: 'Community',
      imageClassName: '!h-20',
      type: 'single'
    },
    {
      image: logoAmpt,
      url: 'https://www.getampt.com/',
      sponsorType: 'Community',
      imageClassName: '!h-20',
      type: 'single'
    },
    {
      image: logoOBN,
      url: 'https://offbynone.io/',
      sponsorType: 'Community',
      imageClassName: '!h-20',
      type: 'single'
    },
    {
      image: logoEleva,
      url: 'https://eleva.it/',
      sponsorType: 'Community',
      imageClassName: '!h-20',
      type: 'single'
    }
  ];
  return (
    <div className="pt-3 mb-10 text-center bg-transparent lg:mb-0 ">
      <h5 className="mb-2 text-sm font-semibold text-gray-300">Sponsors</h5>
      {/* <h2 className="text-2xl font-semibold text-white ">Headline</h2> *2024 edition sponsors/}
			{/* <div className="flex flex-wrap justify-center ">
				<SponsorCard logo={logoServerlessDark} />
				<SponsorCard logo={logoServerlessLight} />
				<SponsorCard logo={logoBeSharp} imgClassName="w-60" />
			</div> */}
      {/* <hr className="my-5 border-t-2 border-gray-300" /> */}
      {/* <h2 className="text-xl font-semibold text-white">Gold</h2> */}
      <div className=" rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingImage items={sponsors} direction="right" speed="normal" />
      </div>
      {/* <hr className="my-5 border-t-2 border-gray-300" />
			<h2 className="text-lg font-semibold text-white">Partner</h2>
			<h2 className="text-base font-semibold text-white">Community</h2> */}
    </div>
  );
};

export default Sponsors;

// const SponsorCard = ({
// 	logo,
// 	cardClassName,
// 	imgClassName,
// }: {
// 	logo: string;
// 	cardClassName?: string;
// 	imgClassName?: string;
// }) => {
// 	return (
// 		<div className={cn(" p-3 rounded-xl items-center flex", cardClassName)}>
// 			<img src={logo} alt="logo" className={cn("w-80", imgClassName)} />
// 		</div>
// 	);
// };
