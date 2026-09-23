import { supabase } from '../lib/supabase'

export default async function PiantePage() {
  const { data: piante, error } = await supabase
    .from('piante')
    .select('*')
    .order('nome')

  if (error) {
    return <div>Errore nel caricamento delle piante</div>
  }

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ color: '#2d6a4f', marginBottom: '2rem' }}>
        🌿 Catalogo Piante ({piante.length})
      </h1>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.5rem'
      }}>
        {piante.map((pianta) => (
          <div key={pianta.slug} style={{
            background: '#f8fdf8',
            border: '1px solid #b7e4c7',
            borderRadius: '12px',
            padding: '1.5rem'
          }}>
            <div style={{ fontSize: '0.8rem', color: '#52b788', fontWeight: '600', marginBottom: '4px' }}>
              {pianta.categoria}
            </div>
            <h2 style={{ color: '#1b4332', margin: '0 0 8px', fontSize: '1.2rem' }}>
              {pianta.nome}
            </h2>
            <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic', margin: '0 0 12px' }}>
              {pianta.nome_latino}
            </p>
            <p style={{ fontSize: '0.9rem', color: '#555', lineHeight: '1.5', margin: 0 }}>
              {pianta.descrizione_breve || pianta.descrizione?.substring(0, 120) + '...'}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
