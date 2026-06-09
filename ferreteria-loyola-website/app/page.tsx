import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Faq } from "@/components/faq"
import { Cta } from "@/components/cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Faq />
        <Cta />
      </main>
      <SiteFooter />
    </div>
  )
}
