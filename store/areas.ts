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
  activeSection: number;
  setActiveSection: (activeSection: number) => void;
  handleNext: () => void;
  handlePrev: () => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
  socialsRef: MutableRefObject<HTMLElement | null>;
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
    activeSection: 1,
    setActiveSection: (activeSection) => set((state) => ({ ...state, activeSection })),
    handleNext: () => set((state) => ({ ...state, activeSection: state.activeSection === 3 ? 1 : state.activeSection + 1 })),
    handlePrev: () => set((state) => ({ ...state, activeSection: state.activeSection === 1 ? 3 : state.activeSection - 1 })),
    isMobileMenuOpen: false,
    setIsMobileMenuOpen: (isMobileMenuOpen) => set((state) => ({ ...state, isMobileMenuOpen })),
    socialsRef: { current: null },
  }));