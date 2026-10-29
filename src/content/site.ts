/**
 * Single place to swap media and copy.
 *
 * video.youtubeId — YouTube video id (from youtu.be/<id>). Takes priority.
 * video.src       — fallback: local file in /public or hosted MP4/WebM URL.
 * video.poster    — still shown before play (local /public path).
 * video.preview   — short silent MP4 that loops on hover, Netflix-style.
 * video.aspect    — the video's native aspect ratio as "w / h".
 * video.overlay   — title + byline drawn on the poster before play.
 */
type Link = { display: string; url?: string }; // no url → plain text, not a link
type Group = { label: string; links: Link[] };

export const site: {
  video: {
    youtubeId: string | null;
    src: string | null;
    poster: string | null;
    preview: string | null; // short muted loop shown on hover (desktop)
    aspect: string;
    title: string;
    overlay: { title: string; byline: string };
  };
  groups: Group[];
} = {
  video: {
    youtubeId: 'e9bDtO3HGcE',
    src: null,
    poster: '/media/letip-poster.jpg',
    preview: '/media/letip-preview.mp4?v=2', // bump ?v= whenever the file is re-encoded
    aspect: '9 / 16',
    title: 'A Life of Curiosity',
    overlay: { title: 'A Life of Curiosity', byline: 'Ben Basuni' },
  },
  /** Link groups under the bio. Speeches and Writings are appended from
   *  src/content/thoughts at render time (see page.tsx). */
  groups: [
    {
      label: 'Work',
      links: [
        { display: 'Skeletor', url: '/work/skeletor' }, // blueprint page; links out to the live app
        { display: 'Shavat', url: 'https://shavat.app' },
      ],
    },
  ],
};
