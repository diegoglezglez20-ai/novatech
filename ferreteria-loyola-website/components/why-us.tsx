import { Check } from "lucide-react"

const reasons = [
  "Amplio catálogo de productos.",
  "Atención cercana y asesoramiento profesional.",
  "Soluciones para particulares y profesionales.",
  "Compra en tienda, recogida y servicio a domicilio.",
  "Productos de calidad para todo tipo de proyectos.",
  "Excelente atención al cliente.",
]

export function WhyUs() {
  return (
    <section id="por-que" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col gap-6">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            ¿Por qué elegir Ferretería Loyola?
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            Nuestra experiencia y atención al cliente nos convierten en una referencia
            para quienes buscan calidad y buen servicio.
          </p>
          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-foreground">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
