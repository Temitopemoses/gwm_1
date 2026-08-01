import { useState } from 'react'
import { motion } from 'framer-motion'
import { HandHeart, Send, Check } from 'lucide-react'

const prayerCategories = [
  'Salvation of a loved one',
  'Physical healing',
  'Spiritual breakthrough',
  'Marriage & family',
  'Career & finances',
  'Deliverance',
  'Ministry & calling',
  'Other',
]

const CONTACT_EMAIL = 'contact@globalwitnessesministry.org'

export default function PrayerSection() {
  const [category, setCategory] = useState('')
  const [request, setRequest] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [anonymous, setAnonymous] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const subject = encodeURIComponent(`Prayer Request: ${category || 'General'} — Global Witnesses Ministry`)
    const body = encodeURIComponent(
      `New Prayer Request\n\n` +
      `Category: ${category}\n` +
      `Name: ${anonymous ? 'Anonymous' : (name || 'Not provided')}\n` +
      `Email: ${anonymous ? 'Anonymous' : (email || 'Not provided')}\n\n` +
      `Prayer Request:\n${request}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 500)
  }

  return (
    <section id="prayer" className="section" style={{
      background: 'var(--bg-secondary)',
      position: 'relative',
    }}>
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 400,
        height: 400,
        background: 'radial-gradient(ellipse, rgba(29, 78, 216,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}>
          {/* Left: Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              <HandHeart size={12} />
              Prayer Request
            </span>
            <h2 style={{ marginBottom: '1.25rem' }}>
              We Believe in<br />
              <span className="gradient-text">The Power of Prayer</span>
            </h2>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              You are not alone in your need. Our intercessory team prays over every request submitted. Cast your cares — the Lord hears every word.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                { emoji: '🙏', title: 'Dedicated Intercessors', desc: 'A trained team prays over each request within 24 hours.' },
                { emoji: '🔒', title: 'Confidential & Safe', desc: 'Your prayer requests are kept completely private.' },
                { emoji: '📧', title: 'Prayer Updates', desc: 'Receive encouragement and scripture while we pray with you.' },
              ].map(({ emoji, title, desc }) => (
                <div key={title} style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'rgba(15,23,42,0.02)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                }}>
                  <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{emoji}</span>
                  <div>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text-primary)' }}>{title}</div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              background: 'var(--bg-primary)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-3xl)',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              boxShadow: 'var(--shadow-card)',
            }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem 1rem' }}
                >
                  <div style={{
                    width: 64,
                    height: 64,
                    background: 'linear-gradient(135deg, var(--primary-700), var(--primary-500))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    boxShadow: '0 8px 24px rgba(29, 78, 216,0.25)',
                  }}>
                    <Check size={28} color="white" />
                  </div>
                  <h3 style={{ marginBottom: '0.75rem' }}>Prayer Request Received</h3>
                  <p style={{ marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                    Our intercessors will be praying for you. You are covered.
                  </p>
                  <blockquote style={{
                    fontStyle: 'italic',
                    color: 'var(--primary-700)',
                    fontSize: '0.9rem',
                    borderLeft: '2px solid var(--primary-600)',
                    paddingLeft: '1rem',
                    textAlign: 'left',
                  }}>
                    "The effective, fervent prayer of a righteous man avails much." — James 5:16
                  </blockquote>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.375rem' }}>Submit a Prayer Request</h3>
                    <p style={{ fontSize: '0.875rem' }}>We'll pray over your request within 24 hours.</p>
                  </div>

                  <div className="form-group">
                    <label className="label">Prayer Category</label>
                    <select
                      className="input"
                      value={category}
                      onChange={e => setCategory(e.target.value)}
                      required
                    >
                      <option value="">Select a category</option>
                      {prayerCategories.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="label">Your Prayer Request *</label>
                    <textarea
                      className="input"
                      placeholder="Share your heart with us..."
                      value={request}
                      onChange={e => setRequest(e.target.value)}
                      required
                      style={{ minHeight: 120 }}
                    />
                  </div>

                  {!anonymous && (
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
                        <div className="form-group">
                          <label className="label">Your Name</label>
                          <input
                            className="input"
                            placeholder="First name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                          />
                        </div>
                        <div className="form-group">
                          <label className="label">Email (for prayer updates)</label>
                          <input
                            className="input"
                            type="email"
                            placeholder="your@email.com"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <label style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    color: 'var(--text-secondary)',
                  }}>
                    <input
                      type="checkbox"
                      checked={anonymous}
                      onChange={e => setAnonymous(e.target.checked)}
                      style={{ width: 16, height: 16, accentColor: 'var(--primary-600)' }}
                    />
                    Submit anonymously
                  </label>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                    disabled={loading}
                  >
                    <Send size={16} />
                    {loading ? 'Sending...' : 'Submit Prayer Request'}
                  </motion.button>

                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center' }}>
                    Sent to our team at <strong>contact@globalwitnessesministry.org</strong>
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
