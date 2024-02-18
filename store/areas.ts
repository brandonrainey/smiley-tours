import { create } from 'zustand';
import { MutableRefObject } from 'react';

type State = {
  area: string;
  prevArea: string;
  tourRef: MutableRefObject<HTMLElement | null>;
  eventsRef: MutableRefObject<HTMLElement | null>;
  setArea: (area: string) => void;
  setPrevArea: (prevArea: string) => void;
  setTourRef: (tourRef: MutableRefObject<HTMLElement | null>) => void;
  setEventsRef: (eventsRef: MutableRefObject<HTMLElement | null>) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const useAreaStore = create<State>((set) => ({
    area: 'asakusa',
    prevArea: 'asakusa',
    tourRef: { current: null },
    eventsRef: { current: null },
    setArea: (area) => set((state) => ({ ...state, area })),
    setPrevArea: (prevArea) => set((state) => ({ ...state, prevArea })),
    setTourRef: (tourRef) => set((state) => ({ ...state, tourRef })),
    setEventsRef: (eventsRef) => set((state) => ({ ...state, eventsRef })),
    isOpen: false,
    setIsOpen: (isOpen) => set((state) => ({ ...state, isOpen })),
  }));