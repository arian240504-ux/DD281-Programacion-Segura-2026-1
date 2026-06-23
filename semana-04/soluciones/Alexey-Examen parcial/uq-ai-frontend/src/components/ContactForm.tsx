"use client";

import { useState } from "react";
import { api } from "@/lib/api"
import { LeadRequest } from "@/types/lead";

export default function ContactForm() {
    const [form, setForm] = useState<LeadRequest>({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
    });

    const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
    };

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
        await api.post("/api/leads", form);

        setStatus("ok");

        setForm({
        nombre: "",
        email: "",
        empresa: "",
        telefono: "",
        mensaje: "",
        });
    } catch {
        setStatus("error");
    }
    };

    return (
    <section id="contacto" className="bg-gray-950 px-6 py-24">
        <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
            <h2 className="text-4xl font-bold text-white">
            ¿Listo para aplicar IA en tu empresa?
            </h2>
            <p className="mt-4 text-gray-400">
            Déjanos tus datos y un especialista de UQ AI Solution te contactará.
            </p>
        </div>

        <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-gray-900 p-8 shadow-2xl"
        >
            <div className="grid gap-4 md:grid-cols-2">
            <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                required
                placeholder="Nombre completo"
                className="rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <input
                name="empresa"
                value={form.empresa}
                onChange={handleChange}
                placeholder="Empresa"
                className="rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <input
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                className="rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
            </div>

            <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Cuéntanos qué solución necesitas"
            className="mt-4 w-full resize-none rounded-xl border border-white/10 bg-gray-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />

            <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500 disabled:opacity-60"
            >
            {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {status === "ok" && (
            <p className="mt-4 text-center text-green-400">
                Lead registrado correctamente.
            </p>
            )}

            {status === "error" && (
            <p className="mt-4 text-center text-red-400">
                No se pudo enviar el formulario. Intenta nuevamente.
            </p>
            )}
        </form>
        </div>
    </section>
    );
}