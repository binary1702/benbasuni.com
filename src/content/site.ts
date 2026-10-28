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
    preview: '/media/letip-preview.mp4',
    aspect: '9 / 16',
    title: 'A Life of Curiosity',
    overlay: { title: 'A Life of Curiosity', byline: 'Ben Basuni' },
  },
  /** Link groups under the bio. Empty `links` renders a muted "soon". */
  groups: [
    {
      label: 'Work',
      links: [
        { display: 'binary1702.com', url: 'https://binary1702.com' },
        { display: 'shavat.app', url: 'https://shavat.app' },
      ],
    },
    // Placeholder second column — rename the label and add links when decided.
    { label: 'Making', links: [{ display: 'soon' }] },
  ],
};
