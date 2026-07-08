/** BounceTrack site key (public — safe in client bundles). */
export const BOUNCETRACK_PUBLIC_KEY = "pk_388fe3bedc7ce481562c3860";

export const BOUNCETRACK_TRACK_SCRIPT = "https://bouncetrack.co/bt-track.js?v=3";
export const BOUNCETRACK_PIXEL_SCRIPT = "https://bouncetrack.co/bt-pixel.js?v=3";

/** Production always; localhost when NEXT_PUBLIC_BOUNCETRACK_DEV=true in .env.local */
export function isBounceTrackEnabled(): boolean {
  return (
    process.env.NODE_ENV === "production" ||
    process.env.NEXT_PUBLIC_BOUNCETRACK_DEV === "true"
  );
}
