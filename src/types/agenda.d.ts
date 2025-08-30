export interface AgendaDetails {
  start_time: string;
  end_time: string;
  minutes: number;
  keynote?: boolean;
  type: 'talk' | 'break';
}

export interface Talk {
  title: string;
  description: string;
  abstract?: string;
  name: string;
  avatar: string;
  url: string;
  organization: string;
  job_title: string;
}

export interface Break {
  title: string;
  inline_abstract: string;
}

export interface AgendaItem {
  agenda_details: AgendaDetails;
  talk?: Talk;
  break?: Break;
}
