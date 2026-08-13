import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense, Component, ReactNode } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const RevivalPage = lazy(() => import('./pages/RevivalPage'))
const SchoolPage = lazy(() => import('./pages/SchoolPage'))
const TractsPage = lazy(() => import('./pages/TractsPage'))
const CommunityPage = lazy(() => import('./pages/CommunityPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const PrayerPage = lazy(() => import('./pages/PrayerPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const MandatePage = lazy(() => import('./pages/MandatePage'))
const InvitePage = lazy(() => import('./pages/InvitePage'))
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'))

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    console.error('App load error:', error)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          fontFamily: 'Inter, system-ui, sans-serif',
          textAlign: 'center',
          padding: '2rem',
          background: '#ffffff',
          color: '#0f172a'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontWeight: 600 }}>Unable to load page content</h2>
          <p style={{ color: '#64748b', marginBottom: '1.5rem', maxWidth: '400px' }}>
            A script or asset failed to load. Please refresh to fetch the latest version.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: '999px',
              border: 'none',
              background: '#be123c',
              color: '#ffffff',
              fontSize: '0.9375rem',
              fontWeight: 600,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(190, 18, 60, 0.25)'
            }}
          >
            Reload Page
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

function LoadingScreen() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'var(--bg-primary, #ffffff)',
    }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        border: '2px solid var(--primary-800, #9f1239)',
        borderTopColor: 'var(--primary-400, #60a5fa)',
        animation: 'spin 0.8s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mandate" element={<MandatePage />} />
            <Route path="/revival" element={<RevivalPage />} />
            <Route path="/school" element={<SchoolPage />} />
            <Route path="/tracts" element={<TractsPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/prayer" element={<PrayerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/invite" element={<InvitePage />} />
            <Route path="/get-involved" element={<GetInvolvedPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

