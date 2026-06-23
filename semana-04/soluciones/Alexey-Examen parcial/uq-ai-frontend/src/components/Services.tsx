import { Bot, MessageCircle, Zap, HeartPulse, BarChart3, ShieldCheck } from "lucide-react";

const services = [
    {
    icon: Bot,
    title: "Agentes de IA",
    desc: "Agentes inteligentes para automatizar procesos empresariales.",
    },
    {
    icon: MessageCircle,
    title: "Chatbots Empresariales",
    desc: "Atención automatizada 24/7 para clientes y equipos internos.",
    },
    {
    icon: Zap,
    title: "Automatización",
    desc: "Optimización de tareas repetitivas mediante IA y flujos digitales.",
    },
    {
    icon: HeartPulse,
    title: "Salud y Educación",
    desc: "Asistentes especializados para instituciones educativas y de salud.",
    },
    {
    icon: BarChart3,
    title: "Big Data",
    desc: "Análisis inteligente de datos para tomar mejores decisiones.",
    },
    {
    icon: ShieldCheck,
    title: "DevSecOps",
    desc: "Seguridad integrada en el ciclo de desarrollo de software.",
    },
];

export default function Services() {
    return (
        <section id="servicios" className="bg-gray-900 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-white">
              UQ AI Solutions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              Servicios de inteligencia artificial para empresas, MYPES y
              organizaciones.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-white/10 bg-gray-950 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-emerald-500/60 hover:bg-gray-800"
                >
                  <div className="mb-4 inline-flex h-12 w-14 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/20 transition group-hover:bg-emerald-500/15">
                    <Icon className="h-6 w-6 text-emerald-400" />
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
    </section>
    );
}
//AUTORIA DE JESUSS TOLENTINO