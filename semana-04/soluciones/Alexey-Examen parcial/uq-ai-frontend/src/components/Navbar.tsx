"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#academy", label: "Academia" },
    { href: "#lab", label: "Lab" },
    { href: "#contacto", label: "Contacto" },
    ];

    return (
<nav className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-white"
          aria-label="Ir a la página principal"
        >
            UQ AI <span className="text-blue-400">Solution</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 transition hover:text-white"
            >
                {link.label}
            </a>
            ))}

            <Link
            href="/login"
            className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
            Iniciar Sesión
            </Link>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
            {open ? <X /> : <Menu />}
        </button>
        </div>

        {open && (
        <div className="border-t border-white/10 bg-gray-950 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4">
            {links.map((link) => (
                <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 transition hover:text-white"
                >
                {link.label}
                </a>
            ))}

            <Link
                href="/login"
                className="rounded-lg bg-blue-600 px-4 py-2 text-center font-semibold text-white transition hover:bg-blue-500"
            >
                Iniciar Sesión
            </Link>
            </div>
        </div>
        )}
    </nav>
    );
}