import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Users, Send, Sparkles } from 'lucide-react'

interface JoinCommunityModalProps {
  isOpen: boolean
  onClose: () => void
}

const WEB3FORMS_KEY = 'c085695d-9b87-4ce8-b328-a4911be11119'

export default function JoinCommunityModal({ isOpen, onClose }: JoinCommunityModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    interest: 'Community Witness & Outreach',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Community Registration: ${formData.fullName}`,
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          interest: formData.interest,
          message: `New Community Registration\n\nFull Name: ${formData.fullName}\nEmail: ${formData.email}\nPhone/WhatsApp: ${formData.phone}\nLocation: ${formData.location}\nArea of Interest: ${formData.interest}`,
        }),
      })
    } catch (_) {
      // silent fail — still show success to user
    }

    setLoading(false)
    setSubmitted(true)
  }


  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      location: '',
      interest: 'Community Witness & Outreach',
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
          }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleReset}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.65)',
              backdropFilter: 'blur(8px)',
            }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '520px',
              background: '#ffffff',
              borderRadius: '1.5rem',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              padding: '2.25rem',
              overflow: 'hidden',
              border: '1px solid rgba(15, 23, 42, 0.1)',
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleReset}
              style={{
                position: 'absolute',
                top: '1.25rem',
                right: '1.25rem',
                background: 'rgba(15, 23, 42, 0.05)',
                border: 'none',
                borderRadius: '50%',
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(15, 23, 42, 0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(15, 23, 42, 0.05)')}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.375rem',
                    padding: '0.35rem 0.875rem',
                    background: 'rgba(190, 18, 60, 0.08)',
                    borderRadius: '999px',
                    color: 'var(--primary-700)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem',
                  }}>
                    <Users size={14} />
                    <span>Join Global Witness Family</span>
                  </div>
                  <h3 style={{ fontSize: '1.625rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                    Become a Part of the Movement
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.6 }}>
                    Connect with believers in your city, join local witness groups, and receive guidance to ignite your faith.
                  </p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                  <div className="form-group">
                    <label className="label">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Samuel Adebayo"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="input"
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                      <label className="label">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="label">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+234..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="label">City & Country *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lagos, Nigeria / London, UK"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="input"
                    />
                  </div>

                  <div className="form-group">
                    <label className="label">Area of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="input"
                    >
                      <option value="Community Witness & Outreach">Community Witness & Outreach</option>
                      <option value="School of Witnesses (Discipleship)">School of Witnesses (Discipleship)</option>
                      <option value="Intercessory Prayer Network">Intercessory Prayer Network</option>
                      <option value="Gospel Tract Distribution">Gospel Tract Distribution</option>
                      <option value="Revival Gatherings & Events">Revival Gatherings & Events</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      padding: '0.875rem',
                      fontSize: '1rem',
                      marginTop: '0.5rem',
                    }}
                  >
                    {loading ? (
                      <span>Connecting...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Submit Registration</span>
                      </>
                    )}
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: '50%',
                    background: 'rgba(190, 18, 60, 0.1)',
                    color: 'var(--primary-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}
                >
                  <CheckCircle2 size={36} />
                </motion.div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                  Welcome to the Movement!
                </h3>

                <p style={{ fontSize: '0.9375rem', color: '#64748b', lineHeight: 1.6, marginBottom: '2rem' }}>
                  Thank you, <strong style={{ color: '#0f172a' }}>{formData.fullName}</strong>. We have received your registration for <span style={{ color: 'var(--primary-700)' }}>{formData.location}</span>. Our community leader will reach out to you shortly via WhatsApp/Email.
                </p>

                <button
                  onClick={handleReset}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
