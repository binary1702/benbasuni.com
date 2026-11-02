/* Tight viewBoxes for each figure, keyed by Frame title: the drawn content plus
   10 units of breathing room, trimmed equally left and right so centered titles
   stay centered. Measured by rendering each figure; re-measure if a figure's
   layout changes (a missing entry falls back to the full 0 0 560 h frame). */
export const CROPS: Record<string, string> = {};
