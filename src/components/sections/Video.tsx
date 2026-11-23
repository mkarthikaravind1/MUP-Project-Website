import { ExternalLink, Play } from 'lucide-react'
import { useState } from 'react'
import { video } from '../../content'
import { Reveal } from '../ui/Reveal'
import { Section } from '../ui/Section'

/** Click-to-load video: the Drive player is only loaded when the visitor presses play (keeps the page fast). */
function VideoCard({ title, driveId, index }: { title: string; driveId: string; index: number }) {
  const [playing, setPlaying] = useState(false)
  const view = `https://drive.google.com/file/d/${driveId}/view`
  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface shadow-card">
      <div className="relative aspect-video bg-[#0a2236]">
        {driveId && playing ? (
          <iframe
            src={`https://drive.google.com/file/d/${driveId}/preview`}
            title={title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            disabled={!driveId}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3 overflow-hidden text-white"
            aria-label={driveId ? `Play ${title}` : `${title}: coming soon`}
          >
            {/* Poster */}
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#1f6fd6_0,transparent_55%),radial-gradient(circle_at_80%_90%,#b45309_0,transparent_45%)] opacity-70" />
            <span className="bg-grid absolute inset-0 opacity-20" />
            <span className="relative flex size-16 items-center justify-center rounded-full bg-white/95 text-[#0f3b5c] shadow-xl transition group-hover:scale-110">
              <Play className="ml-1 size-7" fill="currentColor" aria-hidden="true" />
            </span>
            <span className="relative text-sm font-semibold">{driveId ? `Part ${index + 1}` : 'Video coming soon'}</span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-4 py-3">
        <span className="text-sm font-semibold text-ink">{title}</span>
        {driveId && (
          <a
            href={view}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-brand hover:underline"
          >
            Open in Drive <ExternalLink className="size-3.5" aria-hidden="true" />
          </a>
        )}
      </figcaption>
    </figure>
  )
}

export function Video() {
  return (
    <Section id="video" eyebrow={video.eyebrow} title={video.title} intro={video.intro}>
      <div className="grid gap-6 md:grid-cols-2">
        {video.items.map((v, i) => (
          <Reveal key={v.driveId || i} delay={i * 0.08}>
            <VideoCard title={v.title} driveId={v.driveId} index={i} />
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-muted">{video.note}</p>
    </Section>
  )
}
