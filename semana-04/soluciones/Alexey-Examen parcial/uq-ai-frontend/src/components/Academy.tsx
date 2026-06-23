import { Brain, Code, Database, Cloud, Lock, GraduationCap } from "lucide-react";

const courses = [
    "Inteligencia Artificial",
    "Machine Learning",
    "RAG y LLM",
    "Agentes Inteligentes",
    "Programación Segura",
    "Cloud Computing",
];

const icons = [Brain, Code, Database, Cloud, Lock, GraduationCap];
//AUTORIA DE JESUSS TOLENTINO
export default function Academy() {
    return (
    <section id="academy" className="bg-gray-950 px-6 py-24">
        <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
            <h2 className="text-4xl font-bold text-white">UQ AI Academy</h2>
            <p className="mt-4 text-gray-400">
            Formación tecnológica para estudiantes, profesionales y empresas.
            </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, index) => {
            const Icon = icons[index];

            return (
                <div
                key={course}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-purple-500/60"
                >
                <Icon className="mb-4 h-9 w-9 text-purple-400" />
                <h3 className="text-xl font-bold text-white">{course}</h3>
                <p className="mt-3 text-gray-400">
                    Curso práctico con enfoque aplicado a proyectos reales.
                </p>
                </div>
            );
            })}
        </div>
        </div>
    </section>
    );
}