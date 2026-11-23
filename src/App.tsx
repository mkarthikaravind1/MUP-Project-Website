import { LazyMotion, MotionConfig, domAnimation } from 'framer-motion'
import { lazy, Suspense } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/sections/Hero'
import { useAnchorFix } from './hooks/useAnchorFix'

const BelowFold = lazy(() => import('./components/BelowFold'))

export default function App() {
  useAnchorFix()
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">
          <Hero />
          <Suspense fallback={<div className="min-h-screen" aria-busy="true" />}>
            <BelowFold />
          </Suspense>
        </main>
        <Footer />
      </MotionConfig>
    </LazyMotion>
  )
}
