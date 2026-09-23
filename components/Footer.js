import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#3d4a22', color: '#fff', padding: '3rem 2rem 1.5rem' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: '2rem',
        }}
      >
        {/* BRAND */}
        <div>
          <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 600 }}>
            <span style={{ color: '#8a9e6e' }}>Viver</span>
            <span style={{ color: '#b85c38' }}>AI</span>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.75)', lineHeight: 1.7, marginTop: 10, maxWidth: 320 }}>
            La piattaforma educativa italiana del verde — blog, community, AI agronoma,
            membership e molto altro per chi ama la natura a 360°.
          </p>
          <div style={{ fontSize: 12, color: '#aaa', lineHeight: 1.75, marginTop: 14 }}>
            Con amore per <strong style={{ color: '#d4845e' }}>Gianluca — BLOB</strong>
            <br />
            fratello e programmatore straordinario · 11/05/2024 ❤️
          </div>
        </div>

        {/* PIATTAFORMA */}
        <div>
          <h4 style={{ fontSize: 13, marginBottom: 12, color: '#d4c48a' }}>Piattaforma</h4>
          <FooterLink href="/blog">Blog & Rivista</FooterLink>
          <FooterLink href="/community">Community</FooterLink>
          <FooterLink href="/calendario">Calendario</FooterLink>
          <FooterLink href="/verdescuola">VerdeScuola</FooterLink>
        </div>

        {/* ESPLORA */}
        <div>
          <h4 style={{ fontSize: 13, marginBottom: 12, color: '#d4c48a' }}>Esplora</h4>
          <FooterLink href="/chi-siamo">Chi siamo</FooterLink>
          <FooterLink href="#" disabled>Mappa Verde (in arrivo)</FooterLink>
          <FooterLink href="#" disabled>Shop Green (in arrivo)</FooterLink>
        </div>

        {/* INFO */}
        <div>
          <h4 style={{ fontSize: 13, marginBottom: 12, color: '#d4c48a' }}>Info</h4>
          <FooterLink href="/contatti">Contatti</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/cookie">Cookie Policy</FooterLink>
          <FooterLink href="/termini">Termini di servizio</FooterLink>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div
        style={{
          maxWidth: 1200,
          margin: '2rem auto 0',
          paddingTop: '1.2rem',
          borderTop: '1px solid rgba(255,255,255,.12)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
          fontSize: 12,
          color: 'rgba(255,255,255,.55)',
        }}
      >
        <div>© {new Date().getFullYear()} ViverAI S.r.l. · StartUp Innovativa Green</div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span>🇮🇹 IT</span>
          <span>🇬🇧 EN</span>
          <span>🇫🇷 FR</span>
          <span>🇩🇪 DE</span>
          <span>🇪🇸 ES</span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children, disabled }) {
  const style = {
    display: 'block',
    fontSize: 13,
    color: disabled ? 'rgba(255,255,255,.4)' : 'rgba(255,255,255,.78)',
    marginBottom: 8,
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
  };
  if (disabled) return <span style={style}>{children}</span>;
  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}