/* Before / after, side by side: raw export on the left, what ships on the
   right, same scale, same order — so the shrink is read directly. */
type Sys = { readonly key: string; readonly raw: number; readonly served: number };

function Column({ title, systems, pick, max, total }: { title: string; systems: readonly Sys[]; pick: (s: Sys) => number; max: number; total: number }) {
  return (
    <div>
      <p className="bp-label text-ink">{title}</p>
      <ol className="mt-4 space-y-2.5">
        {systems.map((s) => (
          <li key={s.key} className="grid grid-cols-[6.5rem_1fr_4rem] items-center gap-3 md:grid-cols-[7.5rem_1fr_4.5rem]">
            <span className="font-serif text-[1rem] text-ink">{s.key}</span>
            <span className="block">
              <span className="bp-bar block" style={{ width: `${(pick(s) / max) * 100}%` }} />
            </span>
            <span className="bp-mono text-right text-ink tabular-nums">{pick(s).toFixed(1)}</span>
          </li>
        ))}
      </ol>
      <div className="bp-rule mt-4" />
      <p className="mt-2 text-right font-serif text-[1.15rem] text-ink tabular-nums">
        {total.toFixed(1)} <span className="bp-mono">MB</span>
      </p>
    </div>
  );
}

export function BeforeAfter({ systems }: { systems: readonly Sys[] }) {
  const max = Math.max(...systems.map((s) => s.raw)); // one scale for both sides
  const totalRaw = systems.reduce((a, s) => a + s.raw, 0);
  const totalServed = systems.reduce((a, s) => a + s.served, 0);
  return (
    <div>
      <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
        <Column title="Before · raw export, MB" systems={systems} pick={(s) => s.raw} max={max} total={totalRaw} />
        <Column title="After · served, MB" systems={systems} pick={(s) => s.served} max={max} total={totalServed} />
      </div>
      <p className="bp-mono mt-6 text-center">
        same scale on both sides · {(totalRaw / totalServed).toFixed(1)}× smaller · no structure dropped
      </p>
    </div>
  );
}
