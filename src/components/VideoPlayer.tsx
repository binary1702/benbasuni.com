'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  youtubeId?: string | null;
  src?: string | null;
  poster?: string | null;
  preview?: string | null;
  aspect: string;
  title: string;
  overlay?: { title: string; byline: string };
  caption?: { title: string; date: string };
};

export function VideoPlayer({ youtubeId, src, poster, preview, aspect, title, overlay, caption }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);
  const hasSource = Boolean(youtubeId || src);

  // Ambient preview: the muted loop plays from page load, over the poster.
  // React sets `muted` as a property, not an attribute, and browser autoplay
  // policy checks the attribute — so mute imperatively, then play.
  useEffect(() => {
    const v = previewRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute('muted', '');
    const tryPlay = () => void v.play().catch(() => {});
    tryPlay();
    // If the browser still refuses (no interaction yet), retry on first interaction.
    const onFirst = () => {
      tryPlay();
      window.removeEventListener('pointerdown', onFirst);
      window.removeEventListener('keydown', onFirst);
    };
    window.addEventListener('pointerdown', onFirst, { once: true });
    window.addEventListener('keydown', onFirst, { once: true });
    return () => {
      window.removeEventListener('pointerdown', onFirst);
      window.removeEventListener('keydown', onFirst);
    };
  }, [preview]);

  const play = () => {
    setStarted(true);
    if (!youtubeId) void videoRef.current?.play();
  };

  return (
    <figure className="w-full">
      <div
        className="video-frame relative w-full overflow-hidden rounded-2xl bg-ink"
        style={{ aspectRatio: aspect }}
      >
        {/* Playback surface */}
        {started && youtubeId ? (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : !youtubeId && src ? (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full"
            src={src}
            poster={poster ?? undefined}
            preload="metadata"
            playsInline
            controls={started}
            onEnded={() => setStarted(false)}
            aria-label={title}
          />
        ) : null}

        {/* Poster + overlay, shown until play */}
        {!started && (
          <>
            {poster ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={poster}
                alt=""
                width={1006}
                height={1770}
                decoding="async"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover brightness-[1.08]"
              />
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#3a3733_0%,_#141311_70%)]"
              />
            )}
            {/* Ambient preview: muted loop playing from load, fades in over the poster once it can play */}
            {preview && (
              <video
                ref={previewRef}
                className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 [&.is-ready]:opacity-100"
                src={preview}
                onPlaying={(e) => e.currentTarget.classList.add('is-ready')}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden="true"
                tabIndex={-1}
              />
            )}
            {/* Faint darkening only behind the lower half so the type still reads */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/5 to-ink/20" />

            <button
              type="button"
              onClick={hasSource ? play : undefined}
              disabled={!hasSource}
              aria-label={hasSource ? `Play: ${title}` : 'Video coming soon'}
              className="group absolute inset-0 flex flex-col items-center justify-center text-ivory enabled:cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ivory/70"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-ivory/60 transition-colors duration-500 group-hover:border-sage group-hover:bg-sage/25 md:h-20 md:w-20">
                <svg viewBox="0 0 24 24" className="ml-1 h-5 w-5 fill-current md:h-6 md:w-6" aria-hidden="true">
                  <path d="M8 5.5v13l11-6.5z" />
                </svg>
              </span>

              {overlay && (
                <span className="mt-8 px-6 text-center [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]">
                  <span className="block font-serif text-3xl font-light leading-tight tracking-[-0.02em] md:text-4xl">
                    {overlay.title}
                  </span>
                  <span className="mt-2 block font-serif text-lg font-light italic md:text-xl">
                    {overlay.byline}
                  </span>
                </span>
              )}
            </button>
          </>
        )}
      </div>

      {caption && (
        <figcaption className="mt-4 text-center font-serif text-[1rem] font-light leading-[1.5] text-charcoal">
          <span className="italic">{caption.title}</span>
          <span className="mx-2 text-rule">·</span>
          <span className="text-muted">{caption.date}</span>
        </figcaption>
      )}
    </figure>
  );
}
