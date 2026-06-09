import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    q: "¿Puedo comprar directamente en la tienda?",
    a: "Sí, atendemos de forma presencial en nuestro establecimiento.",
  },
  {
    q: "¿Ofrecéis servicio de recogida?",
    a: "Sí, puedes recoger tus compras en la tienda.",
  },
  {
    q: "¿Realizáis entregas a domicilio?",
    a: "Sí, disponemos de servicio de entrega para mayor comodidad.",
  },
  {
    q: "¿Vendéis productos para bricolaje y reformas?",
    a: "Sí, contamos con una amplia variedad de herramientas y materiales para mantenimiento, reparaciones y proyectos de bricolaje.",
  },
  {
    q: "¿Dónde está la tienda?",
    a: "Nos encontramos en Avenida San Ignacio de Loyola, 48, 24010 León.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Preguntas frecuentes
          </h2>
        </div>
        <Accordion className="mt-10 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.q} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
