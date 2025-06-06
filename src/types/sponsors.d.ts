export type Image = {
  image: string | string[];
  imageClassName?: string | string[];
  url: string | string[];
  sponsorType: 'Gold' | 'Headline' | 'Community';
  type: 'single' | 'multiple';
};
