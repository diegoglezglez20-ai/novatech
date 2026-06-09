import { Wrench, Home, Hammer, Truck, ShoppingBag } from "lucide-react"

const services = [
  {
    icon: Wrench,
    title: "Herramientas y ferretería",
    description:
      "Una gran variedad de herramientas manuales, eléctricas y accesorios para todo tipo de trabajos.",
  },
  {
    icon: Home,
    title: "Productos para el hogar",
    description:
      "Artículos para mantenimiento, reparación, fontanería, electricidad, pintura y mucho más.",
  },
  {
    icon: Hammer,
    title: "Material para bricolaje",
    description:
      "Todo lo necesario para realizar proyectos de mejora y reparación en casa o en el trabajo.",
  },
  {
    icon: Truck,
    title: "Entrega a domicilio",
    description: "Recibe tus compras cómodamente sin necesidad de desplazarte.",
  },
  {
    icon: ShoppingBag,
    title: "Compra y recogida en tienda",
    description:
      "Compra directamente en nuestro establecimiento o recoge tu pedido cuando mejor te venga.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Soluciones prácticas para profesionales y particulares.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold text-card-foreground">
                {service.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
