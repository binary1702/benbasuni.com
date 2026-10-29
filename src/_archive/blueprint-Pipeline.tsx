'use client';

import { useState } from 'react';

type Stage = {
  readonly n: number;
  readonly name: string;
  readonly in: string;
  readonly out: string;
  readonly what: string;
  readonly why: string;
  readonly metric: string;
};

/* SOURCE → build → WEB ASSETS as a row of stage boxes. Click a stage; the
   drawing below shows what goes in, what comes out, and why it is built that way. */
export function Pipeline({ stages }: { stages: readonly Stage[] }) {
  const [i, setI] = useState(1);
  const s = stages[i];

  return (
    <div>
      {/* rail */}
      <div className="relative">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-rule" aria-hidden="true" />
        <ol className="relative flex items-stretch gap-2 overflow-x-auto pb-1 md:gap-3" role="tablist" aria-label="Pipeline stages">
          <li className="bp-mono flex shrink-0 items-center pr-1 text-ink">SOURCE</li>
          {stages.map((st, idx) => (
            <li key={st.n} className="shrink-0">
              <button
                type="button"
                role="tab"
                aria-selected={idx === i}
                data-active={idx === i}
                onClick={() => setI(idx)}
                className="bp-stage flex min-w-[6.5rem] cursor-pointer flex-col items-start gap-1 px-3 py-2 text-left"
              >
                <span className="bp-mono">{String(st.n).padStart(2, '0')}</span>
                <span className="font-serif text-[1rem] leading-tight text-ink">{st.name}</span>
              </button>
            </li>
          ))}
          <li className="bp-mono flex shrink-0 items-center pl-1 text-ink">WEB</li>
        </ol>
      </div>

      {/* detail */}
      <div key={s.n} className="reveal is-visible mt-6 grid gap-6 md:grid-cols-[1fr_1.4fr_1fr]">
        <div>
          <p className="bp-label">In</p>
          <p className="bp-mono mt-1 text-ink">{s.in}</p>
          <p className="bp-label mt-4">Out</p>
          <p className="bp-mono mt-1 text-ink">{s.out}</p>
          <p className="bp-label mt-4">Measure</p>
          <p className="bp-mono mt-1 text-ink">{s.metric}</p>
        </div>
        <div>
          <p className="bp-label">What it does</p>
          <p className="mt-1 font-serif text-[1.05rem] font-light leading-[1.55] text-charcoal">{s.what}</p>
        </div>
        <div>
          <p className="bp-label">Why it is shaped this way</p>
          <p className="mt-1 font-serif text-[1.05rem] font-light italic leading-[1.55] text-charcoal">{s.why}</p>
        </div>
      </div>
    </div>
  );
}
