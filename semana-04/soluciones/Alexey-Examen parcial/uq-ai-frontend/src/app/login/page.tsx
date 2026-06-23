"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();

    const [form, setForm] = useState({
    email: "",
    password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [intentosFallidos, setIntentosFallidos] = useState(0);
    const [bloqueadoHasta, setBloqueadoHasta] = useState<number>(0);

    const estaBloqueado = Date.now() < bloqueadoHasta;
    const segundosRestantes = Math.ceil((bloqueadoHasta - Date.now()) / 1000);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (estaBloqueado) return;

    if (!form.email || !form.password) {
        setError("Completa todos los campos.");
        return;
    }

    setLoading(true);
    setError("");

        try {
        const response = await api.post("/api/auth/login", form);

        const { token, rol } = response.data;

        const cookieResponse = await fetch("/api/auth/set-cookie", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, rol }),
        });

        if (!cookieResponse.ok) {
            throw new Error("No se pudo crear la cookie");
        }

        router.push("/dashboard");
        router.refresh();

    } catch {
        const nuevosIntentos = intentosFallidos + 1;
        setIntentosFallidos(nuevosIntentos);

        setError("Credenciales incorrectas");

        if (nuevosIntentos >= 3) {
            setBloqueadoHasta(Date.now() + 30000);
            setIntentosFallidos(0);
            setError("Demasiados intentos fallidos. Espera 30 segundos.");
        }
    } finally {
        setLoading(false);
    }
    };
//AUTORIA DE JESUSS TOLENTINO
return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 px-6">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-2xl">
        <div className="mb-8 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-white">
              UQ AI Solution
            </h1>
            <p className="mt-2 text-gray-400">Acceso seguro al panel</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Contraseña"
              className="w-full rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {error && <p className="text-center text-sm text-red-400">{error}</p>}

            <button
            type="submit"
            disabled={loading || estaBloqueado}
            className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500 disabled:opacity-60"
            >
            {loading
                ? "Verificando..."
                : estaBloqueado
                ? `Bloqueado (${segundosRestantes}s)`
                : "Iniciar Sesión"}
            </button>
        </form>
        </div>
    </main>
    );
}