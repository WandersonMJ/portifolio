import { useStore } from 'effector-react';
import { store } from './store';

import * as actions from './actions';

export function useLanguage() {
  const { language, messages } = useStore(store);

  return {
    language,
    messages,
    ...actions,
  };
}
