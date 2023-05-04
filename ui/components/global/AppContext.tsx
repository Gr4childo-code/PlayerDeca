import { createContext } from 'react';

type IAudioContext = {
  value: Array<IAudios>;
};

export const AppContext = createContext<any>(null);
