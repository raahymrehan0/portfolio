'use client';

import Link from 'next/link';
import CompactGitHubWidget from '@/components/about/Widgets/CompactGitHubWidget';
import SpotifyPlaylists from './spotifyPlaylists';
import { useSpotify } from '@/hooks/useSpotify';

export default function AboutLiveWidgets() {
  const { playlists, isLoading, error } = useSpotify();

  return (
    <section className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/50">
          Live bits
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-foreground">
          Code and music without making it the whole personality.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-foreground/60">
          GitHub can show recent activity. Spotify can show playlists when the API keys are set.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <CompactGitHubWidget />
        {playlists.length > 0 ? (
          <SpotifyPlaylists playlists={playlists} />
        ) : (
          <Link
            href="https://open.spotify.com/"
            target="_blank"
            rel="noreferrer"
            className="flex min-h-[220px] flex-col justify-between rounded-lg border border-foreground/10 bg-white p-5 shadow-sm"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground">Spotify</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                {isLoading && 'Loading playlists.'}
                {!isLoading && error && 'Spotify needs deployment keys before this can go live.'}
                {!isLoading && !error && 'Spotify is ready to show playlists once tokens are configured.'}
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground underline underline-offset-4">
              Spotify profile
            </p>
          </Link>
        )}
      </div>
    </section>
  );
}
