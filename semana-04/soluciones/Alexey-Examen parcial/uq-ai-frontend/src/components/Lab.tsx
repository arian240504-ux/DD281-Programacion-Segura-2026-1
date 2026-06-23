import { FlaskConical, Cpu, Users } from "lucide-react";

const projects = [
    {
    icon: FlaskConical,
    title: "Prototipos de IA",
    desc: "Desarrollo de demos y pruebas de concepto para validar soluciones innovadoras.",
    },
    {
    icon: Cpu,
    title: "Investigación Aplicada",
    desc: "Exploración de modelos LLM, RAG y agentes inteligentes para casos reales.",
    },
    {
    icon: Users,
    title: "Comunidad Estudiantil",
    desc: "Proyectos colaborativos con estudiantes y profesionales de tecnología.",
    },
];
//AUTORIA DE JESUSS TOLENTINO
export default function Lab() {
    return (
    <section id="lab" className="bg-gray-900 px-6 py-24">
        <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-white">UQ AI Lab</h2>
            <p className="mt-4 text-gray-400">
            Laboratorio de innovación, prototipos y experimentación con IA.
            </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => {
            const Icon = project.icon;

            return (
                <div
                key={project.title}
                className="rounded-2xl border border-white/10 bg-gray-950 p-6"
                >
                <Icon className="mb-4 h-10 w-10 text-blue-400" />
                <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
                </div>
            );
            })}
        </div>
        </div>
    </section>
    );
}