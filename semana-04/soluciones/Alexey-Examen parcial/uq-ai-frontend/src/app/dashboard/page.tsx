import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Lead } from "@/types/lead";
import { Usuario } from "@/types/usuario";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
async function getUsuarioActual(token: string): Promise<Usuario | null> {
    try {
    const res = await fetch(`${API_URL}/api/usuarios/me`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    if (!res.ok) return null;

    return res.json();
    } catch {
    return null;
    }
}

async function getLeads(token: string): Promise<Lead[]> {
    try {
    const res = await fetch(`${API_URL}/api/leads`, {
        headers: {
        Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    });

    if (!res.ok) return [];

    return res.json();
    } catch {
    return [];
    }
}

export default async function DashboardPage() {
    const cookieStore = await cookies();

    const token = cookieStore.get("auth_token")?.value;

    if (!token) {
    redirect("/login");
    }

    const usuario = await getUsuarioActual(token);

    if (!usuario) {
    redirect("/login");
    }

    const leads = usuario.rol === "ADMIN" ? await getLeads(token) : [];

    return (
    <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
        <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-2xl border border-white/10 bg-gray-900 p-6 md:flex-row md:items-center">
            <div>
            <h1 className="text-3xl font-bold">Panel UQ AI Solution</h1>
            <p className="mt-2 text-gray-400">
                Bienvenido, {usuario.nombre} {usuario.apellidos}
            </p>
            <p className="mt-1 text-sm text-gray-500">
                Rol: {usuario.rol} | Área: {usuario.area}
            </p>
            </div>

<div className="flex gap-3">
    {usuario.rol === "ADMIN" && (
        <a
            href="/dashboard/usuarios/nuevo"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500"
        >
            Crear Usuario
        </a>
    )}

    <form action="/api/auth/logout" method="POST">
        <button
            type="submit"
            className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500"
        >
            Cerrar Sesión
        </button>
    </form>
</div>
        </div>

        {usuario.rol === "ADMIN" ? (
            <section className="rounded-2xl border border-white/10 bg-gray-900">
            <div className="border-b border-white/10 p-6">
                <h2 className="text-2xl font-bold">Leads Registrados</h2>
                <p className="mt-2 text-gray-400">
                Total de contactos recibidos: {leads.length}
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                <thead className="bg-gray-800 text-gray-300">
                    <tr>
                    <th className="px-4 py-3">Nombre</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Empresa</th>
                    <th className="px-4 py-3">Teléfono</th>
                    <th className="px-4 py-3">Mensaje</th>
                    <th className="px-4 py-3">Fecha</th>
                    </tr>
                </thead>

                <tbody>
                    {leads.map((lead) => (
                    <tr key={lead.id} className="border-t border-white/10">
                        <td className="px-4 py-3">{lead.nombre}</td>
                        <td className="px-4 py-3">{lead.email}</td>
                        <td className="px-4 py-3">{lead.empresa || "-"}</td>
                        <td className="px-4 py-3">{lead.telefono || "-"}</td>
                        <td className="max-w-xs truncate px-4 py-3">
                        {lead.mensaje || "-"}
                        </td>
                        <td className="px-4 py-3">
                        {lead.fechaRegistro
                            ? new Date(lead.fechaRegistro).toLocaleString()
                            : "-"}
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>
        ) : (
            <section className="rounded-2xl border border-white/10 bg-gray-900 p-6">
            <h2 className="text-2xl font-bold">Perfil de Usuario</h2>
            <p className="mt-4 text-gray-400">
                Tienes acceso como usuario estándar. Solo puedes visualizar tu
                información personal.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-gray-950 p-4">
                <p className="text-sm text-gray-500">Nombre</p>
                <p className="font-semibold">
                    {usuario.nombre} {usuario.apellidos}
                </p>
                </div>

                <div className="rounded-xl bg-gray-950 p-4">
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold">{usuario.email}</p>
                </div>

                <div className="rounded-xl bg-gray-950 p-4">
                <p className="text-sm text-gray-500">Rol</p>
                <p className="font-semibold">{usuario.rol}</p>
                </div>

                <div className="rounded-xl bg-gray-950 p-4">
                <p className="text-sm text-gray-500">Área</p>
                <p className="font-semibold">{usuario.area}</p>
                </div>
            </div>
            </section>
        )}
        </div>
    </main>
    );
}