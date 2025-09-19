// import logoServerlessDark from '../assets/sponsors/logo serverless dark.svg';
// import logoServerlessGuru from '../assets/sponsors/serverless-guru-logo.svg';
import logoBeSharp from '../assets/sponsors/logo_besharp.svg';
import logoAWS from '../assets/sponsors/aws-white.svg';
// import logoNTTData from '../assets/sponsors/NTT-Data-Logo.svg';
// import logoCodecrafters from '../assets/sponsors/codecrafters-logo.png';
// import logoTAG from '../assets/sponsors/TAG-logo.svg';
// import logoAmpt from '../assets/sponsors/ampt-logo.svg';
import logoOBN from '../assets/sponsors/off-by-none-logo.svg';
import logoImproove from '../assets/sponsors/logo_improove.png';
import logoEleva from '../assets/sponsors/eleva-logo.svg';
import logoOvernet from '../assets/sponsors/OverNet_payoff_white.svg';
import { cn } from '@/lib/utils';
import { Image } from '@/types/sponsors';

const Sponsors = () => {
  const sponsors: Image[] = [
    {
      image: logoEleva,
      url: 'https://eleva.it/',
      sponsorType: 'Headline',
      imageClassName: 'h-24 md:h-32',
      type: 'single',
    },
    {
      image: logoBeSharp,
      url: 'https://www.besharp.it/',
      sponsorType: 'Headline',
      imageClassName: 'h-24 md:h-32',
      type: 'single',
    },
    // {
    //   image: logoNTTData,
    //   url: 'https://www.nttdata.com/global/en/',
    //   sponsorType: 'Headline',
    //   imageClassName: 'h-24 md:h-32',
    //   type: 'single',
    // },
    {
      image: logoAWS,
      url: 'https://aws.amazon.com/',
      sponsorType: 'Headline',
      imageClassName: 'h-24 md:h-32',
      type: 'single',
    },
    // {
    //   image: logoServerlessGuru,
    //   url: 'https://www.serverlessguru.com/',
    //   sponsorType: 'Gold',
    //   imageClassName: 'h-16 md:h-20',
    //   type: 'single',
    // },
    // {
    //   image: logoTAG,
    //   url: 'https://talentgarden.org/en/',
    //   sponsorType: 'Gold',
    //   imageClassName: 'h-16 md:h-20',
    //   type: 'single',
    // },
    {
      image: logoOvernet,
      url: 'https://overnet.education/',
      sponsorType: 'Organization Partner',
      imageClassName: 'h-12 md:h-16',
      type: 'single',
    },
    {
      image: logoOBN,
      url: 'https://offbynone.io/',
      sponsorType: 'Community',
      imageClassName: 'h-24 md:h-32',
      type: 'single',
    },
    {
      image: logoImproove,
      url: 'https://www.improove.tech/',
      sponsorType: 'Community',
      imageClassName: 'h-24 md:h-32',
      type: 'single',
    },
    // {
    //   image: logoServerlessDark,
    //   url: 'https://www.serverless.com/',
    //   sponsorType: 'Community',
    //   imageClassName: 'h-12 md:h-16',
    //   type: 'single',
    // },
    // {
    //   image: logoCodecrafters,
    //   url: 'https://codecrafters.io/',
    //   sponsorType: 'Community',
    //   imageClassName: 'h-12 md:h-16',
    //   type: 'single',
    // },
    // {
    //   image: logoAmpt,
    //   url: 'https://www.getampt.com/',
    //   sponsorType: 'Community',
    //   imageClassName: 'h-12 md:h-16',
    //   type: 'single',
    // },
  ];
  // Group sponsors by type
  const sponsorsByType = {
    Headline: sponsors.filter((sponsor) => sponsor.sponsorType === 'Headline'),
    Gold: sponsors.filter((sponsor) => sponsor.sponsorType === 'Gold'),
    Partner: sponsors.filter((sponsor) => sponsor.sponsorType === 'Partner'),
    OrganizationPartner: sponsors.filter((sponsor) => sponsor.sponsorType === 'Organization Partner'),
    Community: sponsors.filter(
      (sponsor) => sponsor.sponsorType === 'Community'
    ),
  };

  const SponsorCard = ({
    sponsor,
    containerClass,
  }: {
    sponsor: Image;
    containerClass: string;
  }) => (
    <a
      href={typeof sponsor.url === 'string' ? sponsor.url : sponsor.url[0]}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full transition-transform duration-300 hover:scale-105 hover:drop-shadow-2xl"
    >
      <div
        className={cn(
          'bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/10 flex items-center justify-center p-4 md:p-6',
          containerClass
        )}
      >
        <img
          src={
            typeof sponsor.image === 'string' ? sponsor.image : sponsor.image[0]
          }
          alt="Sponsor logo"
          className={cn(
            'object-contain w-full h-full transition-all duration-300 group-hover:brightness-110',
            typeof sponsor.imageClassName === 'string'
              ? sponsor.imageClassName
              : sponsor.imageClassName?.[0]
          )}
        />
      </div>
    </a>
  );

  const SponsorSection = ({
    title,
    sponsors,
    gridCols,
    containerClass,
  }: {
    title: string;
    sponsors: Image[];
    gridCols: string;
    containerClass: string;
  }) =>
    sponsors.length > 0 && (
      <div className="mb-12">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <div
          className={cn('grid gap-6 md:gap-8 justify-items-stretch', gridCols)}
        >
          {sponsors.map((sponsor, index) => (
            <SponsorCard
              key={index}
              sponsor={sponsor}
              containerClass={containerClass}
            />
          ))}
        </div>
      </div>
    );

  return (
    <div className="py-16 px-4 md:px-8 max-w-7xl mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4 bg-gradient-to-r from-white via-pink-200 to-white bg-clip-text text-transparent">
          Our Amazing Sponsors
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Thank you to our incredible sponsors who make ServerlessDays Milano
          possible! 🙏
        </p>
      </div>

      <SponsorSection
        title="Headline Sponsors"
        sponsors={sponsorsByType.Headline}
        gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        containerClass="h-32 md:h-40 w-full"
      />

      <SponsorSection
        title="Gold Sponsors"
        sponsors={sponsorsByType.Gold}
        gridCols="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        containerClass="h-24 md:h-32 w-full"
      />

      <SponsorSection
        title="Partners"
        sponsors={sponsorsByType.Partner}
        gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        containerClass="h-20 md:h-24 w-full"
      />

      <SponsorSection
        title="Organization Partners"
        sponsors={sponsorsByType.OrganizationPartner}
        gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        containerClass="h-20 md:h-24 w-full"
      />

      <SponsorSection
        title="Community Sponsors"
        sponsors={sponsorsByType.Community}
        gridCols="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        containerClass="h-16 md:h-20 w-full"
      />
    </div>
  );
};

export default Sponsors;
