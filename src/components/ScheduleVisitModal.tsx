'use client';

import { useEffect, useState } from 'react';
import { getUserDetails, saveUserDetails } from '@/utils/userStore';
import { useBodyScrollLock } from '@/utils/hooks';

interface Props {
  projectTitle: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ScheduleVisitModal({ projectTitle, isOpen, onClose }: Props) {
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;
  // Remounts on every open, so saved details are read during the initial render
  // instead of being pushed in from an effect.
  return <ScheduleVisitForm projectTitle={projectTitle} onClose={onClose} />;
}

function ScheduleVisitForm({ projectTitle, onClose }: { projectTitle: string; onClose: () => void }) {
  const [name, setName] = useState(() => getUserDetails().name);
  const [phone, setPhone] = useState(() => getUserDetails().phone);
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    saveUserDetails({ name, phone });
    setSubmitted(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          projectTitle,
          formType: 'schedule_visit',
          note: note || null,
        }),
      });
    } catch (err) {
      console.error('Failed to submit lead to Supabase API:', err);
    }
  };

  const msg = `Hi Uptown Property, I would like to schedule a site visit for *${projectTitle}*.\n\n👤 *Name:* ${name || 'Not provided'}\n📞 *Phone:* ${phone || 'Not provided'}\n🗓️ *Note/Preferred Time:* ${note || 'As per availability'}`;
  const waUrl = `https://wa.me/919518091945?text=${encodeURIComponent(msg)}`;

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 14px', borderRadius: 12,
    border: '1px solid var(--border)', background: 'var(--bg)',
    color: 'var(--ink)', outline: 'none', boxSizing: 'border-box',
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', right: 18, top: 18,
            width: 36, height: 36, borderRadius: '50%',
            border: '1px solid var(--border)', background: 'var(--bg)',
            color: 'var(--muted)', cursor: 'pointer', fontSize: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ✕
        </button>

        {!submitted ? (
          /* Form View */
          <>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--acc)' }}>
              Site Visit Request
            </span>
            <h3 style={{ margin: '4px 0 6px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--ink)', paddingRight: 40 }}>
              Schedule Visit
            </h3>
            <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--muted)', lineHeight: 1.4 }}>
              {projectTitle}
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
                  Note / Preferred Date &amp; Time
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Tomorrow at 11 AM, interested in 200 sq yd plot"
                  value={note}
                  onChange={e => setNote(e.target.value)}
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              <button
                type="submit"
                style={{
                  marginTop: 6,
                  background: 'var(--gold)', color: '#15130F',
                  fontWeight: 700, fontSize: 15, padding: '14px',
                  borderRadius: 999, border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                Submit Request
              </button>
            </form>
          </>
        ) : (
          /* Submitted / Success View */
          <div style={{ textAlign: 'center', padding: '12px 0 8px' }}>
            <div style={{
              width: 56, height: 56, borderRadius: '50%',
              background: 'rgba(37,211,102,0.12)', color: '#25D366',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', fontSize: 24, fontWeight: 800,
            }}>
              ✓
            </div>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--ink)' }}>
              Request Submitted!
            </h3>
            <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>
              Thank you, <strong>{name}</strong>! Our Panipat advisory team will reach out at <strong>{phone}</strong> to confirm your visit for <strong>{projectTitle}</strong>.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener"
                style={{
                  background: 'var(--gold)', color: '#15130F',
                  fontWeight: 700, fontSize: 14, padding: '13px 20px',
                  borderRadius: 999, textDecoration: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                Send Message via WhatsApp ↗
              </a>
              <button
                type="button"
                onClick={onClose}
                style={{
                  background: 'transparent', border: '1px solid var(--border)',
                  color: 'var(--ink)', fontWeight: 600, fontSize: 14,
                  padding: '12px 20px', borderRadius: 999, cursor: 'pointer',
                }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
