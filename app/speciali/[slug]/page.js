cat > ~/Progetti/viverai/app/speciali/\[slug\]/page.js << 'EOF'
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function SpecialeSlugPage({ params }) {
  const { slug } = await params;

  const { data: speciale } = await supabase
    .from("speciali")
    .select("*")
    .eq("slug", slug)
    .eq("pubblicato", true)
    .single();

  if (!speciale) {
    notFound();
  }

  const { data: blocchiData } = await supabase
    .from("speciali_blocchi")
    .select("*")
    .eq("speciale_id", speciale.id)
    .order("ordine", { ascending: true });

  const listaBlocchi = blocchiData || [];

  return (
    <>
      <div className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          {speciale.immagine_copertina && (
            <img
              src={speciale.immagine_copertina}
              alt={speciale.titolo}
              className="absolute inset-0 w-full h-full object-cover -z-10"
            />
          )}
        </div>
        <div className="relative z-10 px-8 pb-12 max-w-4xl h-full flex flex-col justify-end mx-auto">
          {speciale.categoria && (
            <span className="inline-block bg-white/20 text-white text-xs font-light uppercase tracking-wide px-3 py-1 rounded mb-4 w-fit">
              {speciale.categoria}
            </span>
          )}
          <h1 className="font-serif text-3xl md:text-5xl text-white font-light leading-tight">
            {speciale.titolo}
          </h1>
          {speciale.estratto && (
            <p className="text-sm text-white/70 font-light mt-2">
              {speciale.estratto}
            </p>
          )}
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {listaBlocchi.map((b) => (
            <section key={b.id}>
              {b.immagine && (
                <img
                  src={b.immagine}
                  alt={b.titolo_blocco}
                  className="w-full rounded-lg mb-5 object-cover max-h-[400px]"
                />
              )}
              {b.titolo_blocco && (
                <h2 className="font-serif text-2xl text-oliva font-light mb-3">
                  {b.titolo_blocco}
                </h2>
              )}
              {b.testo && (
                <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                  {b.testo}
                </p>
              )}
            </section>
          ))}

          {listaBlocchi.length === 0 && (
            <p className="text-center text-gray-400 py-10 text-sm">
              Contenuto in arrivo.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
EOF