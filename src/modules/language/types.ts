import { IMessage } from 'messages/types';

export interface IStoreLanguage {
  language: 'pt' | 'en';
  messages: IMessage;
}

export interface IcheatSheetLanguage {
  pt: 'en';
  en: 'pt';
}
