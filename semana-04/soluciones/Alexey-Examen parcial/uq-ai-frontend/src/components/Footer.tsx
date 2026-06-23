import { Globe, Mail, Building2 } from "lucide-react";

export default function Footer() {
    return (
    <footer className="border-t border-white/10 bg-gray-950 px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
            <h3 className="text-xl font-bold text-white">
            UQ AI <span className="text-blue-400">Solution</span>
            </h3>

            <p className="mt-2 text-sm text-gray-400">
            Inteligencia Artificial para el Perú y el Mundo.
            </p>

            <p className="mt-2 text-xs text-gray-500">
            © 2026 UQ AI Solution Company. Todos los derechos reservados.
            </p>
        </div>

        <div className="flex gap-4 text-gray-400">
            <Globe className="h-5 w-5 hover:text-white" />
            <Mail className="h-5 w-5 hover:text-white" />
            <Building2 className="h-5 w-5 hover:text-white" />
        </div>
        </div>
    </footer>
    );
}