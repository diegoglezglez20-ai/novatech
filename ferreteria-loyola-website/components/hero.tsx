import { MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
        <div className="flex flex-col items-center gap-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            León · Av. San Ignacio de Loyola, 48
          </span>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
            Todo lo que necesitas para bricolaje, reformas y mantenimiento
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            En Ferretería Loyola ponemos a tu disposición una amplia selección de
            herramientas, materiales y productos para el hogar, la construcción y el
            bricolaje, con trato cercano y asesoramiento personalizado.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} render={<a href="#servicios" />}>
              Ver nuestros servicios
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#contacto" />}
            >
              <Phone className="size-4" aria-hidden="true" />
              Cómo llegar
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
