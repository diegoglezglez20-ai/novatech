import { Wrench, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Wrench className="size-4" aria-hidden="true" />
          </span>
          <span className="font-bold text-foreground">Ferretería Loyola</span>
        </div>
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" aria-hidden="true" />
          Av. San Ignacio de Loyola, 48, 24010 León
        </p>
        <p className="text-sm text-muted-foreground">
          {"© "}
          {new Date().getFullYear()} Ferretería Loyola. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
