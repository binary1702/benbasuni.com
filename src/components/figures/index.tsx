import { SystemDiagram } from './SystemDiagram';
import {
  BeforeTheBeginning,
  AndGodSaid,
  AndItWasGood,
  InHisImage,
  ThePurposeOfMan,
  TheSeventhDay,
  TheGardenOfEden,
  NotGoodToBeAlone,
  BeginningOfOurStory,
} from './Genesis';

/* Figures referenced by name from content: { type: 'figure', name: 'system' } */
export const FIGURES = {
  system: SystemDiagram,
  'gen-before': BeforeTheBeginning,
  'gen-said': AndGodSaid,
  'gen-good': AndItWasGood,
  'gen-image': InHisImage,
  'gen-purpose': ThePurposeOfMan,
  'gen-seventh': TheSeventhDay,
  'gen-garden': TheGardenOfEden,
  'gen-alone': NotGoodToBeAlone,
  'gen-story': BeginningOfOurStory,
} as const;
export type FigureName = keyof typeof FIGURES;
