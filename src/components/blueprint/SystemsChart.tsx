'use client';

import { useState } from 'react';

type Sys = {
  readonly key: string;
  readonly source: number;
  readonly structures: number;
  readonly triangles: number;
  readonly raw: number;
  readonly served: number;
  readonly note?: string;
};
type Metric = 'memory' | 'served' | 'structures';
type Mem = { readonly key: string; readonly gb: number; readonly note?: string };
type Memory = { readonly before: readonly Mem[]; readonly after: readonly Mem[] };

const LABEL: Record<Metric, string> = { memory: 'memory', served: 'download', structures: 'count' };
const HINT: Record<Metric, string> = {
  memory: 'How much computer memory it takes to process the body.',
  served: 'How much a visitor downloads to see each system.',
  structures: 'How many structures survive the pipeline.',
};
const UNIT: Record<Metric, string> = { memory: 'GB', served: 'MB', structures: 'structures' };
/* the "before" value for metrics that have one */
const BEFORE: Partial<Record<Metric, (s: Sys) => number>> = { structures: (s) => s.source, served: (s) => s.raw };
const ORDER: Metric[] = ['structures', 'served', 'memory'];
/* per-system value for a metric; memory has no per-system value */
const val = (m: Metric, s: Sys) => (m === 'memory' ? 0 : s[m]);
const fmt = (m: Metric, v: number) =>
  m === 'served' ? `${v.toFixed(2)} MB` : m === 'memory' ? `${v.toFixed(1)} GB` : v.toLocaleString();

/* The model by system: structures, triangles, or megabytes served. */
export function SystemsChart({ systems, memory }: { systems: readonly Sys[]; memory: Memory }) {
  const [metric, setMetric] = useState<Metric>('structures');
  const before = BEFORE[metric];
  const rows = systems;
  const max = Math.max(1, ...rows.map((s) => (before ? Math.max(before(s), val(metric, s)) : val(metric, s))));
  const totalBefore = before ? rows.reduce((a, s) => a + before(s), 0) : 0;
  const total = rows.reduce((a, s) => a + val(metric, s), 0);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-1" role="tablist" aria-label="Metric">
          {ORDER.map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={metric === m}
              onClick={() => setMetric(m)}
              title={HINT[m]}
              className={`bp-label cursor-pointer rounded-sm px-2 py-1 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-sage ${
                metric === m ? 'bg-ink text-ivory' : 'hover:bg-sage-soft hover:text-ink'
              }`}
            >
              {LABEL[m]}
            </button>
          ))}
        </div>
      </div>

      <p className="bp-mono mt-3">{HINT[metric]}</p>

      {metric === 'memory' ? (
        <div key={metric} className="mt-5 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {[
            { title: 'Before', rows: memory.before },
            { title: 'After', rows: memory.after },
          ].map((col) => {
            const mmax = Math.max(...memory.before.map((r) => r.gb), ...memory.after.map((r) => r.gb));
            return (
              <div key={col.title}>
                <p className="bp-label text-ink">{col.title}</p>
                <ol className="mt-3 space-y-4">
                  {col.rows.map((r, i) => (
                    <li key={r.key}>
                      <div className="grid grid-cols-[7.5rem_1fr_4.5rem] items-center gap-3 md:grid-cols-[8.5rem_1fr_5rem]">
                        <span className="font-serif text-[1rem] text-ink">{r.key}</span>
                        <span className="relative block">
                          <span className="bp-bar block" data-tone={col.title === 'Before' ? 'before' : 'after'} style={{ width: `${(r.gb / mmax) * 100}%`, animationDelay: `${i * 80}ms` }} />
                        </span>
                        <span className={`bp-mono text-right tabular-nums ${col.title === 'Before' ? 'text-rust' : 'text-sage-deep'}`}>{r.gb.toFixed(1)}{col.title === 'Before' ? '+' : ''} GB</span>
                      </div>
                      {r.note && <p className="bp-mono mt-1 md:ml-[8.5rem]">{r.note}</p>}
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </div>
      ) : before ? (
        <div key={metric} className="mt-5 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {[
            { title: 'Before', pick: before, tone: 'before' },
            { title: 'After', pick: (s: Sys) => val(metric, s), tone: 'after' },
          ].map((col) => (
            <div key={col.title}>
              <p className="bp-label text-ink">{col.title}</p>
              <ol className="mt-3 space-y-2">
                {rows.map((s, i) => (
                  <li key={s.key} className="grid grid-cols-[6.5rem_1fr_4.5rem] items-center gap-3 md:grid-cols-[7.5rem_1fr_5rem]">
                    <span className="font-serif text-[1rem] text-ink">{s.key}</span>
                    <span className="relative block">
                      <span className="bp-bar block" data-tone={col.tone} style={{ width: `${(col.pick(s) / max) * 100}%`, animationDelay: `${i * 50}ms` }} />
                    </span>
                    <span className={`bp-mono text-right tabular-nums ${col.tone === 'before' ? 'text-rust' : 'text-sage-deep'}`}>{fmt(metric, col.pick(s))}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      ) : (
        <ol className="mt-5 space-y-2">
          {rows.map((s) => (
            <li key={s.key} className="grid grid-cols-[7.5rem_1fr_5.5rem] items-center gap-3 md:grid-cols-[9rem_1fr_7rem]">
              <span className="font-serif text-[1rem] text-ink">{s.key}</span>
              <span className="relative block">
                <span className="bp-bar block" style={{ width: `${(val(metric, s) / max) * 100}%` }} />
              </span>
              <span className="bp-mono text-right text-ink tabular-nums">{fmt(metric, val(metric, s))}</span>
            </li>
          ))}
        </ol>
      )}

      <div className="bp-rule mt-5" />
      <div className="mt-3 flex flex-wrap items-baseline justify-between gap-2">
        <span />
        <span className="font-serif text-[1.15rem] text-ink tabular-nums">
          {metric === 'memory' ? (
            <>
              <span className="text-rust">6+ GB</span> → <span className="text-sage-deep">2.7 GB</span> <span className="bp-mono text-sage-deep">· 55% less memory</span>
            </>
          ) : before ? (
            <>
              <span className="text-rust">{fmt(metric, totalBefore)}</span> → <span className="text-sage-deep">{fmt(metric, total)}</span>{' '}
              <span className="bp-mono text-sage-deep">
                {UNIT[metric]}
                {metric === 'served'
                  ? ` · ${Math.round((1 - total / totalBefore) * 100)}% smaller`
                  : ` · ${((total / totalBefore) * 100).toFixed(1)}% kept`}
              </span>
            </>
          ) : (
            <>
              {fmt(metric, total)} <span className="bp-mono">{UNIT[metric]}</span>
            </>
          )}
        </span>
      </div>

    </div>
  );
}
