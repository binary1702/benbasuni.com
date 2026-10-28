import { SystemDiagram } from './SystemDiagram';

/* Figures referenced by name from content: { type: 'figure', name: 'system' } */
export const FIGURES = {
  system: SystemDiagram,
} as const;
export type FigureName = keyof typeof FIGURES;
