"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function NuevoUsuarioPage() {
    const router = useRouter();

    const [form, setForm] = useState({
        nombre: "",
        apellidos: "",
        email: "",
        password: "",
        rol: "USUARIO",
        area: "",
    });
//AUTORIA DE JESUSS TOLENTINO
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError("");

        try {
            await api.post("/api/auth/register", form);

            router.push("/dashboard");
            router.refresh();
        } catch {
            setError("No se pudo crear el usuario.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gray-950 px-6 py-10 text-white">
            <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-gray-900 p-8">
                <h1 className="text-3xl font-bold">Crear Usuario</h1>
                <p className="mt-2 text-gray-400">
                    Registro de nuevo usuario del sistema
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <input
                        name="nombre"
                        value={form.nombre}
                        onChange={handleChange}
                        placeholder="Nombre"
                        className="w-full rounded-xl bg-gray-950 px-4 py-3 text-white"
                    />

                    <input
                        name="apellidos"
                        value={form.apellidos}
                        onChange={handleChange}
                        placeholder="Apellidos"
                        className="w-full rounded-xl bg-gray-950 px-4 py-3 text-white"
                    />

                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full rounded-xl bg-gray-950 px-4 py-3 text-white"
                    />

                    <input
                        name="password"
                        type="password"
                        value={form.password}
                        onChange={handleChange}
                        placeholder="Contraseña"
                        className="w-full rounded-xl bg-gray-950 px-4 py-3 text-white"
                    />

                    <select
                        name="rol"
                        value={form.rol}
                        onChange={handleChange}
                        className="w-full rounded-xl bg-gray-950 px-4 py-3 text-white"
                    >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>

                    <input
                        name="area"
                        value={form.area}
                        onChange={handleChange}
                        placeholder="Área"
                        className="w-full rounded-xl bg-gray-950 px-4 py-3 text-white"
                    />

                    {error && (
                        <p className="text-sm text-red-400">{error}</p>
                    )}

                    <div className="flex gap-3">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-500 disabled:opacity-60"
                        >
                            {loading ? "Creando..." : "Crear Usuario"}
                        </button>

                        <button
                            type="button"
                            onClick={() => router.push("/dashboard")}
                            className="rounded-xl bg-gray-700 px-5 py-3 font-semibold text-white hover:bg-gray-600"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}