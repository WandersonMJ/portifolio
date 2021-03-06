export type TExperiences = {
  company: string;
  role: string;
  date: string;
  duration: string;
  img?: any;
}

export type THeaders = {
  Curriculum: string;
  Experiences: string;
  About: string;
}

export interface IMessage {
  presentationTitle: string;
  presentationSubtitle: string;
  presentationText: string;
  aboutTitle: string;
  aboutText: string;
  experiencesTitle: string;
  experiences: TExperiences[];
  curriculum: string;
  headers: THeaders
}
