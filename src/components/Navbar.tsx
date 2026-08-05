'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from './ThemeProvider';

const NAV_LINKS = [
  { href: '/projects', label: 'Projects' },
  { href: 'https://mylistings.in/', label: 'Resale Properties', external: true },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'var(--hdr)', backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div className="container" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--ink)', flex: 1, minWidth: 0 }}>
          <span style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 22, flexShrink: 0 }}>
            <span style={{ width: 11, height: 22, background: 'var(--ink)', clipPath: 'polygon(0 26%, 100% 0, 100% 100%, 0 100%)' }} />
            <span style={{ width: 11, height: 17, background: 'var(--gold)', clipPath: 'polygon(0 26%, 100% 0, 100% 100%, 0 100%)' }} />
          </span>
          <span className="logo-text" style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
            UPTOWN<span style={{ color: 'var(--acc)' }}> PROPERTY</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 22 }} className="hidden-mobile">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener' : undefined}
              style={{ fontSize: 14, fontWeight: 600, color: 'var(--muted)', transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {link.label}
            </Link>
          ))}
          <Link href="https://mylistings.in/sell" target="_blank" rel="noopener"
            style={{
              fontSize: 13, fontWeight: 700, letterSpacing: '0.02em',
              color: '#15130F', background: 'var(--gold)',
              padding: '8px 16px', borderRadius: 999,
            }}>
            Sell
          </Link>
        </nav>

        {/* Right side: theme toggle + hamburger (mobile only) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          {/* Theme toggle — always visible */}
          <button
            onClick={toggle}
            aria-label="Toggle dark mode"
            style={{
              width: 34, height: 34, borderRadius: '50%',
              border: '1px solid var(--border)',
              background: 'transparent',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--muted)',
            }}
          >
            {theme === 'dark' ? (
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="5"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="5" y2="12"/>
                <line x1="19" y1="12" x2="22" y2="12"/>
                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/>
                <line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/>
                <line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/>
                <line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/>
              </svg>
            )}
          </button>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            className="show-mobile"
            style={{
              width: 34, height: 34, background: 'none', border: 'none',
              cursor: 'pointer', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 5, padding: 0,
            }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: 'block', width: 20, height: 1.5,
                background: 'var(--ink)', borderRadius: 2,
                transformOrigin: 'center',
                transition: 'transform 0.2s, opacity 0.2s',
                transform: open
                  ? i === 0 ? 'translateY(6.5px) rotate(45deg)'
                  : i === 2 ? 'translateY(-6.5px) rotate(-45deg)'
                  : 'none'
                  : 'none',
                opacity: open && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          background: 'var(--bg)',
          boxShadow: '0 14px 28px rgba(0,0,0,0.12)',
        }}>
          <div className="container" style={{ padding: '8px 16px 16px', display: 'flex', flexDirection: 'column' }}>
            {NAV_LINKS.map(link => (
              <Link key={link.href} href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener' : undefined}
                onClick={() => setOpen(false)}
                style={{ color: 'var(--ink)', fontSize: 15, fontWeight: 600, padding: '14px 2px', borderBottom: '1px solid var(--divider)' }}>
                {link.label}
              </Link>
            ))}
            <Link href="https://mylistings.in/sell" target="_blank" rel="noopener" onClick={() => setOpen(false)}
              style={{ marginTop: 14, textAlign: 'center', background: 'var(--gold)', color: '#15130F', fontWeight: 700, fontSize: 15, padding: '13px 20px', borderRadius: 999 }}>
              Sell
            </Link>
          </div>
        </div>
      )}

      <style>{`
        .logo-text { font-size: 16px; }
        @media (max-width: 380px) {
          .logo-text { font-size: 13px; }
        }
        @media (max-width: 820px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 821px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
