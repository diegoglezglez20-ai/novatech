"use client"

import { useState } from "react"
import { Menu, X, Wrench, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué nosotros", href: "#por-que" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Wrench className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Ferretería Loyola
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button nativeButton={false} render={<a href="#contacto" />}>
            <MapPin className="size-4" aria-hidden="true" />
            Visítanos
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Móvil">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              render={<a href="#contacto" onClick={() => setOpen(false)} />}
              className="mt-2"
            >
              <MapPin className="size-4" aria-hidden="true" />
              Visítanos
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
