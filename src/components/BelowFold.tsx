import { useEffect, useState } from 'react'
import type { TourId } from '../content'
import { Architecture } from './sections/Architecture'
import { Deployment } from './sections/Deployment'
import { Features } from './sections/Features'
import { HowItWorks } from './sections/HowItWorks'
import { LiveMvp } from './sections/LiveMvp'
import { Problem } from './sections/Problem'
import { Results } from './sections/Results'
import { Roadmap } from './sections/Roadmap'
import { Scope } from './sections/Scope'
import { Team } from './sections/Team'
import { Tour } from './sections/Tour'
import { Users } from './sections/Users'
import { Video } from './sections/Video'

/** Everything below the hero, loaded as a separate chunk so the first screen paints fast. */
export default function BelowFold() {
  const [tourTab, setTourTab] = useState<TourId>('live-call')

  // The page may have been opened at #section before this chunk existed: scroll there now.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView({ behavior: 'instant' })
    window.dispatchEvent(new Event('sections-ready'))
  }, [])

  return (
    <>
      <Problem />
      <Users />
      <HowItWorks />
      <Scope />
      <Features onSee={setTourTab} />
      <Tour active={tourTab} onChange={setTourTab} />
      <Video />
      <LiveMvp />
      <Architecture />
      <Results />
      <Roadmap />
      <Deployment />
      <Team />
    </>
  )
}
