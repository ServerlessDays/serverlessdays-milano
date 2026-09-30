import { Speaker, Talk } from '../types/agenda';

/**
 * Normalizes a talk's speakers into a list, whether it declares one speaker or many.
 *
 * @param talk - The talk to read speakers from.
 * @returns The talk's speakers, or an empty list when no speaker is announced yet.
 */
export const getTalkSpeakers = (talk?: Talk): Speaker[] => {
  if (!talk) return [];
  if (talk.speakers && talk.speakers.length > 0) return talk.speakers;
  if (!talk.name) return [];
  return [
    {
      name: talk.name,
      avatar: talk.avatar,
      url: talk.url,
      organization: talk.organization,
      job_title: talk.job_title
    }
  ];
};
