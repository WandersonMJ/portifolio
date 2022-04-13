import { createStore } from 'effector';

import * as pt from 'messages/PT';
import * as en from 'messages/EN';

import * as actions from './actions';
import * as I from './types';

export const store = createStore<I.IStoreLanguage>(
  {
    language: 'en',
    messages: {
      ...en.en,
    },
  },
  { name: 'language' },
);

export const cheatSheetLang: I.IcheatSheetLanguage = {
  pt: 'en',
  en: 'pt',
};

store.on(actions.toggleChangeLanguage, (state: I.IStoreLanguage) => ({
  ...state,
  language: cheatSheetLang[state.language],
  messages: cheatSheetLang[state.language] === 'pt' ? { ...pt }.pt : { ...en }.en,
}));
