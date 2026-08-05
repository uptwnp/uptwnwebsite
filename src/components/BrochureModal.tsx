'use client';

import { useState, useEffect } from 'react';
import { getUserDetails, saveUserDetails } from '@/utils/userStore';

interface Props {
  projectTitle: string;
  type: 'brochure' | 'layout';
  isOpen: boolean;
  onClose: () => void;
  pdfUrl?: string;
}

export default function BrochureModal({ projectTitle, type, isOpen, onClose, pdfUrl }: Props) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const saved = getUserDetails();
      if (saved.name) setName(saved.name);
      if (saved.phone) setPhone(saved.phone);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const docName = type === 'brochure' ? 'Brochure & Price Sheet' : 'Layout Plan';

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserDetails({ name, phone });
    setSubmitted(true);
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  const msg = `Hi Uptown Property, please send me the official *${docName}* for *${projectTitle}*.\n\n👤 *Name:* ${name || 'Not provided'}\n📞 *Phone:* ${phone || 'Not provided'}`;
  const waUrl = `https://wa.me/919518091945?text=${encodeURIComponent(msg)}`;

  return (
    <div
      onClick={handleResetAndClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(10,10,10,0.65)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 16,
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--card)',
          border: '1px solid var(--border)',
          borderRadius: 24,
          padding: '28px 24px',
          width: '100%',
          maxWidth: 440,
          boxShadow: '0 20px 50px rgba(0,0,0,0.25)',
          position: 'relative',
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleResetAndClose}
          style={{
            position: 'absolute', right: 18, top: 18,
            width: 32, height: 32, borderRadius: '50%',
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
            <h3 style={{ margin: '4px 0 6px', fontFamily: 'Archivo, sans-serif', fontWeight: 800, fontSize: 22, color: 'var(--ink)' }}>
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
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 12,
                    border: '1px solid var(--border)', background: 'var(--bg)',
                    color: 'var(--ink)', fontSize: 14, outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--ink)', marginBottom: 6 }}>
                  Phone / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  style={{
                    width: '100%', padding: '12px 14px', borderRadius: 12,
                    border: '1px solid var(--border)', background: 'var(--bg)',
                    color: 'var(--ink)', fontSize: 14, outline: 'none',
                  }}
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
            <p style={{ margin: '0 0 20px', fontSize: 14, color: 'var(--muted)', lineHeight: 1.5 }}>
              Thank you <strong>{name}</strong>! If the PDF download does not start automatically, click below to receive instant <strong>{docName}</strong> on WhatsApp.
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
                Receive on WhatsApp ↗
              </a>
              <button
                type="button"
                onClick={handleResetAndClose}
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
