export default function Hero() {
    return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-950 px-6 pt-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb55,transparent_35%),radial-gradient(circle_at_bottom_right,#7c3aed55,transparent_35%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
            <p className="mb-4 inline-block rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Inteligencia Artificial aplicada a empresas reales
            </p>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-6xl">
            Inteligencia Artificial para el Perú y el Mundo
            </h1>

            <p className="mb-8 max-w-xl text-lg text-gray-300">
            Diseñamos agentes IA, chatbots empresariales, automatización y soluciones
            seguras para transformar organizaciones con tecnología moderna.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
            <a
                href="#servicios"
                className="rounded-full bg-blue-600 px-7 py-3 text-center font-semibold text-white hover:bg-blue-500"
            >
                Explorar Servicios
            </a>

            <a
                href="#contacto"
                className="rounded-full border border-white/20 px-7 py-3 text-center font-semibold text-white hover:bg-white/10"
            >
                Contactar
            </a>
            </div>
        </div>

        <div className="relative hidden md:block">
            <div className="h-96 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="mb-4 h-4 w-32 rounded bg-blue-400/70" />
            <div className="space-y-4">
                <div className="h-20 rounded-xl bg-gray-800" />
                <div className="h-20 rounded-xl bg-gray-800" />
                <div className="h-20 rounded-xl bg-gray-800" />
            </div>
            <div className="mt-6 rounded-xl bg-blue-600/30 p-4 text-sm text-blue-100">
                AI Agent running secure automation...
            </div>
            </div>
        </div>
        </div>
    </section>
    );
}
//AUTORIA DE JESUSS TOLENTINO