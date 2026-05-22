'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contatti() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    tipo: 'Agricoltore / Contadino',
    argomento: 'Informazioni generali',
    messaggio: ''
  });
  const [inviato, setInviato] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.messaggio) {
      alert('Compila i campi obbligatori');
      return;
    }
    setInviato(true);
    setTimeout(() => setInviato(false), 5000);
    setForm({ nome: '', email: '', tipo: 'Agricoltore / Contadino', argomento: 'Informazioni generali', messaggio: '' });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">

        <div className="bg-beige px-8 py-10 border-b border-oliva-15">
          <div className="max-w-6xl mx-auto">
            <span className="inline-block bg-terra-10 text-terra text-[10px] font-semibold tracking-[0.12em] uppercase px-3 py-1 rounded-full mb-2">Contatti</span>
            <h1 className="font-serif font-light leading-tight text-oliva" style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>
              Scrivici, siamo qui <em className="italic text-terra">per te</em>
            </h1>
          </div>
        </div>

        <section className="py-12 px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">

            <div className="bg-white border border-oliva-15 p-7 shadow-[0_2px_20px_rgba(44,42,36,0.07)]" style={{ borderRadius: '8px' }}>

              <div className="font-serif font-semibold mb-1" style={{ fontSize: '22px' }}>
                <span className="text-oliva">Viver</span><span className="text-terra">AI</span> S.r.l.
              </div>

              <span className="inline-block text-white font-semibold rounded-full mb-5" style={{ background: 'linear-gradient(90deg, #5c6b3a, #6db025)', fontSize: '10px', padding: '3px 12px' }}>
                🌱 StartUp Innovativa Green
              </span>

              <div className="flex items-start mb-3" style={{ gap: '9px' }}>
                <span style={{ fontSize: '14px', color: '#5c6b3a', minWidth: '18px', marginTop: '2px' }}>📍</span>
                <div style={{ fontSize: '13px', color: '#6b6558', lineHeight: '1.5' }}>
                  <strong style={{ display: 'block', fontSize: '10px', color: '#9a9488', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: '600' }}>Sede legale</strong>
                  Via Francesco Eusepi, 36 — 02048 Stimigliano (RI)
                </div>
              </div>

              <div className="flex items-start mb-3" style={{ gap: '9px' }}>
                <span style={{ fontSize: '14px', color: '#5c6b3a', minWidth: '18px', marginTop: '2px' }}>📧</span>
                <div style={{ fontSize: '13px', color: '#6b6558', lineHeight: '1.5' }}>
                  <strong style={{ display: 'block', fontSize: '10px', color: '#9a9488', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: '600' }}>Email</strong>
                  <a href="mailto:info@viverai.it" className="hover:text-terra transition-colors" style={{ color: '#6b6558' }}>info@viverai.it</a>
                </div>
              </div>

              <div className="flex items-start mb-3" style={{ gap: '9px' }}>
                <span style={{ fontSize: '14px', color: '#5c6b3a', minWidth: '18px', marginTop: '2px' }}>🎓</span>
                <div style={{ fontSize: '13px', color: '#6b6558', lineHeight: '1.5' }}>
                  <strong style={{ display: 'block', fontSize: '10px', color: '#9a9488', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: '600' }}>VerdeScuola e Partnership</strong>
                  <a href="mailto:scuole@viverai.it" className="hover:text-terra transition-colors" style={{ color: '#6b6558' }}>scuole@viverai.it</a>
                </div>
              </div>

              <div className="flex items-start mb-3" style={{ gap: '9px' }}>
                <span style={{ fontSize: '14px', color: '#5c6b3a', minWidth: '18px', marginTop: '2px' }}>🤝</span>
                <div style={{ fontSize: '13px', color: '#6b6558', lineHeight: '1.5' }}>
                  <strong style={{ display: 'block', fontSize: '10px', color: '#9a9488', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: '600' }}>Pubblicità e Partner</strong>
                  <a href="mailto:partner@viverai.it" className="hover:text-terra transition-colors" style={{ color: '#6b6558' }}>partner@viverai.it</a>
                </div>
              </div>

              <div className="flex items-start mb-3" style={{ gap: '9px' }}>
                <span style={{ fontSize: '14px', color: '#5c6b3a', minWidth: '18px', marginTop: '2px' }}>📞</span>
                <div style={{ fontSize: '13px', color: '#6b6558', lineHeight: '1.5' }}>
                  <strong style={{ display: 'block', fontSize: '10px', color: '#9a9488', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '2px', fontWeight: '600' }}>Telefono</strong>
                  <a href="tel:+390765000000" className="hover:text-terra transition-colors" style={{ color: '#6b6558' }}>+39 0765 000000</a>
                </div>
              </div>

              <div style={{ marginTop: '1.2rem', background: 'linear-gradient(135deg, #3d4a22, #5c6b3a)', borderRadius: '8px', padding: '1rem 1.1rem' }}>
                <div style={{ fontSize: '13px', fontWeight: '600', color: '#d4c89a', marginBottom: '3px' }}>
                  🏢 Pubblicità sulla piattaforma
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.75)', marginBottom: '0.6rem' }}>
                  Vivai, negozi, aziende agricole e giardinieri — raggiungi migliaia di appassionati del verde
                </div>
                <a href="mailto:partner@viverai.it" className="inline-block hover:bg-white/25 transition-colors" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)', padding: '6px 14px', borderRadius: '99px', fontSize: '11px', fontWeight: '500' }}>
                  Richiedi info pubblicità
                </a>
              </div>
            </div>

            <div className="bg-white border border-oliva-15 p-7 shadow-[0_2px_20px_rgba(44,42,36,0.07)]" style={{ borderRadius: '8px' }}>

              <div className="text-oliva font-semibold mb-5" style={{ fontSize: '15px' }}>📨 Inviaci un messaggio</div>

              {inviato ? (
                <div className="bg-oliva-10 border border-oliva-25 p-6 text-center" style={{ borderRadius: '8px' }}>
                  <p className="text-5xl mb-2">🌿</p>
                  <p className="font-serif text-2xl text-oliva mb-1">Messaggio inviato!</p>
                  <p className="text-ink-med text-sm">Ti risponderemo presto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#6b6558', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '4px' }}>Nome e cognome *</label>
                    <input
                      type="text"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      placeholder="Mario Rossi"
                      style={{ width: '100%', padding: '9px 11px', border: '1px solid rgba(61,74,34,0.15)', borderRadius: '5px', fontSize: '13px', color: '#2c2a24', outline: 'none', background: '#fff' }}
                      onFocus={(e) => e.target.style.borderColor = '#8a9e6e'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(61,74,34,0.15)'}
                    />
                  </div>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#6b6558', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '4px' }}>Email *</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="mario@example.com"
                      style={{ width: '100%', padding: '9px 11px', border: '1px solid rgba(61,74,34,0.15)', borderRadius: '5px', fontSize: '13px', color: '#2c2a24', outline: 'none', background: '#fff' }}
                      onFocus={(e) => e.target.style.borderColor = '#8a9e6e'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(61,74,34,0.15)'}
                    />
                  </div>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#6b6558', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '4px' }}>Sei un...</label>
                    <select
                      value={form.tipo}
                      onChange={(e) => setForm({ ...form, tipo: e.target.value })}
                      style={{ width: '100%', padding: '9px 11px', border: '1px solid rgba(61,74,34,0.15)', borderRadius: '5px', fontSize: '13px', color: '#2c2a24', outline: 'none', background: '#fff' }}
                    >
                      <option>Agricoltore / Contadino</option>
                      <option>Giardiniere professionista</option>
                      <option>Hobbista / Appassionato</option>
                      <option>Scuola / Università / Istituto</option>
                      <option>Azienda (pubblicità)</option>
                      <option>Altro</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#6b6558', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '4px' }}>Argomento</label>
                    <select
                      value={form.argomento}
                      onChange={(e) => setForm({ ...form, argomento: e.target.value })}
                      style={{ width: '100%', padding: '9px 11px', border: '1px solid rgba(61,74,34,0.15)', borderRadius: '5px', fontSize: '13px', color: '#2c2a24', outline: 'none', background: '#fff' }}
                    >
                      <option>Informazioni generali</option>
                      <option>Membership</option>
                      <option>Fidelity Card</option>
                      <option>VerdeScuola</option>
                      <option>Pubblicità sulla piattaforma</option>
                      <option>Agronomo AI</option>
                      <option>Partnership</option>
                      <option>Supporto tecnico</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '0.9rem' }}>
                    <label style={{ display: 'block', fontSize: '10px', fontWeight: '600', color: '#6b6558', letterSpacing: '0.07em', textTransform: 'uppercase', marginBottom: '4px' }}>Messaggio *</label>
                    <textarea
                      value={form.messaggio}
                      onChange={(e) => setForm({ ...form, messaggio: e.target.value })}
                      placeholder="Scrivi qui il tuo messaggio..."
                      rows="4"
                      style={{ width: '100%', padding: '9px 11px', border: '1px solid rgba(61,74,34,0.15)', borderRadius: '5px', fontSize: '13px', color: '#2c2a24', outline: 'none', background: '#fff', resize: 'vertical', minHeight: '90px' }}
                      onFocus={(e) => e.target.style.borderColor = '#8a9e6e'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(61,74,34,0.15)'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="hover:bg-oliva transition-colors"
                    style={{ background: '#5c6b3a', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '99px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', width: '100%' }}
                  >
                    🌿 Invia messaggio
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}