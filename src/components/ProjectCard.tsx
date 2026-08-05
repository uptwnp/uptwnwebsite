import Link from 'next/link';
import { Project, formatPrice } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const { main, onwards } = formatPrice(project.price);
  const tagLabel = `${project.segment} · ${project.form}`;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="card-hover project-card"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--border)',
        borderRadius: 16,
        boxShadow: '0 1px 2px var(--shadow)',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        color: 'var(--ink)',
        textDecoration: 'none',
        width: '100%',
        boxSizing: 'border-box',
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      {/* Tag & Status */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
        width: '100%', minWidth: 0,
      }}>
        <span style={{ color: 'var(--acc)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0, flex: 1 }}>
          {tagLabel}
        </span>
        <span style={{ color: 'var(--muted)', letterSpacing: '0.06em', whiteSpace: 'nowrap', flexShrink: 0 }}>
          {project.status}
        </span>
      </div>

      {/* Title */}
      <h3 style={{ margin: 0, fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: 18, lineHeight: 1.25, wordBreak: 'break-word' }}>
        {project.title}
      </h3>

      {/* Location */}
      <p style={{ margin: 0, fontSize: 13, color: 'var(--muted)', lineHeight: 1.45, wordBreak: 'break-word' }}>
        {project.location}
      </p>

      {/* Price & Area */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 10, marginTop: 'auto', paddingTop: 12,
        borderTop: '1px solid var(--border)',
        width: '100%', minWidth: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 5, minWidth: 0, flex: 1, overflow: 'hidden' }}>
          <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 700, fontSize: 16, color: 'var(--ink)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {main}
          </span>
          {onwards && (
            <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--muted)', whiteSpace: 'nowrap', flexShrink: 0 }}>
              {onwards}
            </span>
          )}
          <span style={{ fontSize: 12, color: 'var(--faint)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginLeft: 2, flexShrink: 1 }}>
            {project.area}
          </span>
        </div>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--acc)', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Details →
        </span>
      </div>
    </Link>
  );
}

