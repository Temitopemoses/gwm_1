import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const RevivalPage = lazy(() => import('./pages/RevivalPage'))
const SchoolPage = lazy(() => import('./pages/SchoolPage'))
const TractsPage = lazy(() => import('./pages/TractsPage'))
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const PrayerPage = lazy(() => import('./pages/PrayerPage'))
function LoadingScreen() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'var(--bg-primary)',
    }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '2px solid var(--primary-800)',
        borderTopColor: 'var(--primary-400)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/revival" element={<RevivalPage />} />
          <Route path="/school" element={<SchoolPage />} />
          <Route path="/tracts" element={<TractsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/prayer" element={<PrayerPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
