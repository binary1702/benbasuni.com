'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type ExpandContextType = {
  /** Desktop sidebar visibility; the header's expand button toggles it. */
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  /** Reading text size as a multiplier (exposed to CSS as --reader-scale). */
  fontScale: number;
  canShrink: boolean;
  canGrow: boolean;
  shrinkFont: () => void;
  growFont: () => void;
};

/** Text size steps for the − / + buttons. The default (1) sits in the middle: three steps down, three up. */
const FONT_STEPS = [0.8, 0.87, 0.93, 1, 1.07, 1.14, 1.2];
const DEFAULT_STEP = 3;

const ExpandContext = createContext<ExpandContextType | null>(null);

export function ExpandProvider({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen((o) => !o);
  const [step, setStep] = useState(DEFAULT_STEP);
  const shrinkFont = () => setStep((s) => Math.max(0, s - 1));
  const growFont = () => setStep((s) => Math.min(FONT_STEPS.length - 1, s + 1));
  return (
    <ExpandContext.Provider
      value={{
        sidebarOpen,
        toggleSidebar,
        fontScale: FONT_STEPS[step],
        canShrink: step > 0,
        canGrow: step < FONT_STEPS.length - 1,
        shrinkFont,
        growFont,
      }}
    >
      {children}
    </ExpandContext.Provider>
  );
}

export function useExpand() {
  const ctx = useContext(ExpandContext);
  if (!ctx) throw new Error('useExpand must be used within ExpandProvider');
  return ctx;
}
