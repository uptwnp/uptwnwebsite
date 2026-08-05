'use client';

import { useEffect, useState } from 'react';
import { getUserDetails, saveUserDetails } from '@/utils/userStore';
import { useBodyScrollLock } from '@/utils/hooks';

interface Props {
  projectTitle: string;
  type: 'brochure' | 'layout';
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export default function BrochureModal({ projectTitle, type, isOpen, onClose, pdfUrl }: Props) {
  useBodyScrollLock(isOpen);

  if (!isOpen) return null;
  // Remounts on every open, so saved details are read during the initial render
  // instead of being pushed in from an effect.
  return <BrochureForm projectTitle={projectTitle} type={type} onClose={onClose} pdfUrl={pdfUrl} />;
}

function BrochureForm({
  projectTitle,
  type,
  onClose,
  pdfUrl,
}: {
  projectTitle: string;
  type: 'brochure' | 'layout';
  onClose: () => void;
  pdfUrl?: string;
}) {
  const [name, setName] = useState(() => getUserDetails().name);
  const [phone, setPhone] = useState(() => getUserDetails().phone);
  const [submitted, setSubmitted] = useState(false);

  const docName = type === 'brochure' ? 'Brochure & Price Sheet' : 'Layout Plan';

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

    // Opened synchronously inside the submit gesture — after an await the popup
    // blocker (especially on iOS) would swallow it.
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    }

    setSubmitted(true);

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          projectTitle,
          formType: type,
        }),
      });
    } catch (err) {
      console.error('Failed to submit lead to Supabase API:', err);
    }
  };

  const msg = `Hi Uptown Property, please send me the official *${docName}* for *${projectTitle}*.\n\n👤 *Name:* ${name || 'Not provided'}\n📞 *Phone:* ${phone || 'Not provided'}`;
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
              Download PDF
            </span>
            <h3 style={{ margin: '4px 0 6px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--ink)', paddingRight: 40 }}>
              Get {docName}
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

              <button
                type="submit"
                style={{
                  marginTop: 6,
                  background: 'var(--gold)', color: '#15130F',
                  fontWeight: 700, fontSize: 15, padding: '14px',
                  borderRadius: 999, border: 'none', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}
              >
                Download {docName}
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
              📄
            </div>
            <h3 style={{ margin: '0 0 8px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--ink)' }}>
              Download Request Received!
            </h3>
            <p style={{ margin: '0 0 16px', fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>
              Thank you <strong>{name}</strong>! If the PDF did not open automatically, use the links below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {pdfUrl && (
                <a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: '1px solid var(--outline)', background: 'var(--bg)',
                    color: 'var(--ink)', fontWeight: 700, fontSize: 14,
                    padding: '13px 20px', borderRadius: 999, textDecoration: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                  }}
                >
                  Open {docName} ↗
                </a>
              )}
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
                Receive on WhatsApp ↗
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
