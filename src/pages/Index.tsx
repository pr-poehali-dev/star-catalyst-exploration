import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Philosophy } from "@/components/Philosophy"
import { Services } from "@/components/Services"
import { Quiz } from "@/components/Quiz"
import { Coloring } from "@/components/Coloring"
import { Process } from "@/components/Process"
import { Testimonial } from "@/components/Testimonial"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <Services />
      <Quiz />
      <Coloring />
      <Process />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  )
}