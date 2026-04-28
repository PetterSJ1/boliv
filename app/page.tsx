export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-zinc-100 dark:border-zinc-800">
        <span className="text-xl font-bold text-zinc-900 dark:text-white tracking-tight">boliv</span>
        <a
          href="#waitlist"
          className="text-sm font-medium bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-4 py-2 rounded-full hover:opacity-80 transition-opacity"
        >
          Bli med
        </a>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-16 flex-1">
        <span className="inline-block mb-6 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950 px-3 py-1 rounded-full">
          For studenter
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold text-zinc-900 dark:text-white leading-tight max-w-2xl">
          Finn din neste<br />
          <span className="text-indigo-600 dark:text-indigo-400">bopartner</span>
        </h1>
        <p className="mt-6 text-lg text-zinc-500 dark:text-zinc-400 max-w-md">
          Har du et ledig rom i kollektivet ditt, eller leter du etter et sted å bo?
          Boliv kobler studenter med de rette naboene.
        </p>

        {/* Waitlist form */}
        <form
          id="waitlist"
          action="#"
          className="mt-10 flex flex-col sm:flex-row gap-3 w-full max-w-sm"
        >
          <input
            type="email"
            placeholder="din@epost.no"
            required
            className="flex-1 px-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-white placeholder-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition-colors"
          >
            Meld meg på
          </button>
        </form>
        <p className="mt-3 text-xs text-zinc-400">Gratis – ingen spam</p>
      </section>

      {/* How it works */}
      <section className="bg-zinc-50 dark:bg-zinc-900 py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white text-center mb-12">
            Slik fungerer det
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Legg ut profil", desc: "Fortell hvem du er, hva du studerer og hva slags bopartner du ser etter." },
              { step: "2", title: "Bla gjennom", desc: "Se gjennom studenter og kollektiv i ditt område." },
              { step: "3", title: "Ta kontakt", desc: "Send en melding og finn din perfekte match." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-zinc-400 border-t border-zinc-100 dark:border-zinc-800">
        © {new Date().getFullYear()} Boliv. Laget for studenter i Norge.
      </footer>
    </main>
  );
}
