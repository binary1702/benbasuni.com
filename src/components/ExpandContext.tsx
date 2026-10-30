'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

type ExpandContextType = {
  expanded: boolean;
  toggleExpand: () => void;
};

const ExpandContext = createContext<ExpandContextType | null>(null);

export function ExpandProvider({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded((e) => !e);
  return <ExpandContext.Provider value={{ expanded, toggleExpand }}>{children}</ExpandContext.Provider>;
}

export function useExpand() {
  const ctx = useContext(ExpandContext);
  if (!ctx) throw new Error('useExpand must be used within ExpandProvider');
  return ctx;
}
