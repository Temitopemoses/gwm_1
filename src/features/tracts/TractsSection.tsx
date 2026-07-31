import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Package, BookOpen, Send, HandHeart, ChevronRight, ChevronLeft, Check } from 'lucide-react'

const materials = [
  { icon: BookOpen, name: 'Gospel Tracts', description: 'Pocket-sized gospel presentations', color: '#a855f7' },
  { icon: BookOpen, name: 'Evangelism Handbooks', description: 'Comprehensive witnessing guides', color: '#3b82f6' },
  { icon: BookOpen, name: 'Discipleship Guides', description: 'For new believer follow-up', color: '#10b981' },
  { icon: Send, name: 'Revival Flyers', description: 'Event promotion materials', color: '#ec4899' },
  { icon: Package, name: 'Outreach Kits', description: 'Complete evangelism bundles', color: '#f59e0b' },
  { icon: HandHeart, name: 'Prayer Cards', description: 'Scripture and intercession cards', color: '#f97316' },
  { icon: BookOpen, name: 'Bible Study Materials', description: 'Small group starter kits', color: '#06b6d4' },
]

const steps = ['Personal Info', 'Request Details', 'Delivery', 'Review']

export default function TractsSection() {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', church: '',
    location: '', quantity: '', purpose: '',
    address: '', delivery: 'standard',
  })

  const toggleMaterial = (name: string) => {
    setSelected(prev => prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="tracts" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 60% 70% at 50% 50%, rgba(29, 78, 216,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge">
            <Package size={12} />
            Apply for Tracts
          </span>
          <h2>
            Become a Messenger.<br />
            <span className="gradient-text">Share the Gospel.</span>
          </h2>
          <p>
            Request free printed gospel tracts and evangelism materials for your church, campus fellowship, or personal outreach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 860,
            margin: '0 auto',
          }}
        >
          {/* Materials Grid */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.125rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Select materials you need:
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.875rem',
            }}>
              {materials.map(({ icon: Icon, name, description, color }) => {
                const isSelected = selected.includes(name)
                return (
                  <motion.button
                    key={name}
                    onClick={() => toggleMaterial(name)}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      background: isSelected ? `${color}12` : 'rgba(15,23,42,0.02)',
                      border: `1px solid ${isSelected ? color + '50' : 'var(--border-default)'}`,
                      borderRadius: 'var(--radius-xl)',
                      padding: '1.25rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s',
                      position: 'relative',
                    }}
                  >
                    {isSelected && (
                      <div style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        width: 18,
                        height: 18,
                        background: color,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Check size={10} color="white" />
                      </div>
                    )}
                    <Icon size={20} color={color} style={{ marginBottom: '0.75rem' }} />
                    <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{description}</div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Application Form */}
          <div style={{
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-3xl)',
            padding: '2.5rem',
            boxShadow: 'var(--shadow-card)',
          }}>
            {/* Step indicator */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0',
              marginBottom: '2.5rem',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '10%',
                right: '10%',
                height: 1,
                background: 'var(--border-subtle)',
                transform: 'translateY(-50%)',
              }} />
              {steps.map((s, i) => (
                <div key={s} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.375rem',
                  flex: 1,
                  position: 'relative',
                }}>
                  <div style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    background: i <= step ? 'var(--primary-700)' : 'var(--gray-850)',
                    border: `2px solid ${i <= step ? 'var(--primary-600)' : 'var(--border-default)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: i <= step ? 'white' : 'var(--text-muted)',
                    transition: 'all 0.3s',
                    zIndex: 1,
                  }}>
                    {i < step ? <Check size={14} /> : i + 1}
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    color: i <= step ? 'var(--primary-700)' : 'var(--text-muted)',
                    fontWeight: i === step ? 600 : 400,
                    whiteSpace: 'nowrap',
                  }}>{s}</span>
                </div>
              ))}
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2rem' }}
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
                <h3 style={{ marginBottom: '0.75rem' }}>Application Submitted!</h3>
                <p style={{ marginBottom: '1.5rem' }}>
                  We've received your request for gospel materials. Our team will review and reach out within 2–3 business days.
                </p>
                <span className="badge">📧 Confirmation sent to {form.email || 'your email'}</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="step0"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}
                      className="form-grid"
                    >
                      <div className="form-group">
                        <label className="label">Full Name *</label>
                        <input className="input" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                      </div>
                      <div className="form-group">
                        <label className="label">Email Address *</label>
                        <input className="input" type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} required />
                      </div>
                      <div className="form-group">
                        <label className="label">Phone Number</label>
                        <input className="input" type="tel" placeholder="+234 000 000 0000" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                      </div>
                      <div className="form-group">
                        <label className="label">Church / Organization (Optional)</label>
                        <input className="input" placeholder="Your church name" value={form.church} onChange={e => setForm(f => ({ ...f, church: e.target.value }))} />
                      </div>
                    </motion.div>
                  )}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                      <div className="form-group">
                        <label className="label">Quantity Needed *</label>
                        <select className="input" value={form.quantity} onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))} required>
                          <option value="">Select quantity</option>
                          <option value="1-50">1–50 pieces</option>
                          <option value="51-200">51–200 pieces</option>
                          <option value="201-500">201–500 pieces</option>
                          <option value="500+">500+ pieces</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="label">Purpose of Request *</label>
                        <textarea className="input" placeholder="Describe how you plan to use the materials..." value={form.purpose} onChange={e => setForm(f => ({ ...f, purpose: e.target.value }))} required style={{ minHeight: 120 }} />
                      </div>
                    </motion.div>
                  )}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                    >
                      <div className="form-group">
                        <label className="label">Delivery Address *</label>
                        <textarea className="input" placeholder="Full delivery address..." value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} required />
                      </div>
                      <div className="form-group">
                        <label className="label">Preferred Delivery Method</label>
                        <select className="input" value={form.delivery} onChange={e => setForm(f => ({ ...f, delivery: e.target.value }))}>
                          <option value="standard">Standard Courier (7–14 days)</option>
                          <option value="express">Express Courier (3–5 days)</option>
                          <option value="pickup">Pickup from Office</option>
                        </select>
                      </div>
                    </motion.div>
                  )}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div style={{
                        background: 'rgba(29, 78, 216,0.05)',
                        border: '1px solid rgba(29, 78, 216,0.15)',
                        borderRadius: 'var(--radius-xl)',
                        padding: '1.5rem',
                        marginBottom: '1.5rem',
                      }}>
                        <h4 style={{ marginBottom: '1rem', fontSize: '1rem' }}>Review Your Application</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                          {[
                            { label: 'Name', value: form.name || '—' },
                            { label: 'Email', value: form.email || '—' },
                            { label: 'Quantity', value: form.quantity || '—' },
                            { label: 'Delivery', value: form.delivery },
                            { label: 'Materials Selected', value: selected.length ? selected.join(', ') : 'None selected' },
                          ].map(({ label, value }) => (
                            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', fontSize: '0.9rem' }}>
                              <span style={{ color: 'var(--text-muted)' }}>{label}</span>
                              <span style={{ color: 'var(--text-primary)', textAlign: 'right', fontWeight: 500 }}>{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '2rem',
                  gap: '1rem',
                }}>
                  {step > 0 && (
                    <motion.button
                      type="button"
                      onClick={() => setStep(s => s - 1)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn btn-secondary"
                    >
                      <ChevronLeft size={16} />
                      Back
                    </motion.button>
                  )}
                  <motion.button
                    type={step === steps.length - 1 ? 'submit' : 'button'}
                    onClick={step < steps.length - 1 ? () => setStep(s => s + 1) : undefined}
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="btn btn-primary"
                    style={{ marginLeft: 'auto' }}
                  >
                    {step === steps.length - 1 ? (
                      <><Send size={16} />Submit Application</>
                    ) : (
                      <>Continue<ChevronRight size={16} /></>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: 'center',
              marginTop: '2rem',
              color: 'var(--text-muted)',
              fontSize: '0.9rem',
            }}
          >
            Want to distribute at scale?{' '}
            <span style={{
              color: 'var(--primary-700)',
              fontWeight: 600,
              cursor: 'pointer',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}>
              Become an Outreach Partner →
            </span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
