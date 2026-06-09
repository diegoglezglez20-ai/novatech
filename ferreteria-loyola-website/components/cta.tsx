import Image from "next/image"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Cta() {
  return (
    <section id="contacto" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl bg-secondary px-6 py-14 md:px-14">
          <div className="relative z-10 grid items-center gap-10 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl">
                Ven a Ferretería Loyola
              </h2>
              <p className="text-pretty text-lg leading-relaxed text-secondary-foreground/80">
                Si buscas una ferretería en León con atención personalizada, productos de
                calidad y soluciones para cualquier reparación o proyecto, estamos
                preparados para ayudarte.
              </p>
              <div className="flex items-center gap-3 text-secondary-foreground">
                <MapPin className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <span className="font-medium">
                  Av. San Ignacio de Loyola, 48, 24010 León
                </span>
              </div>
              <div>
                <Button
                  size="lg"
                  nativeButton={false}
                  render={
                    <a
                      href="https://maps.google.com/?q=Av.+San+Ignacio+de+Loyola+48+24010+León"
                      target="_blank"
                      rel="noreferrer"
                    />
                  }
                >
                  Ver en el mapa
                </Button>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/images/tools-flatlay.png"
                alt="Surtido de herramientas disponibles en Ferretería Loyola"
                width={560}
                height={420}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
