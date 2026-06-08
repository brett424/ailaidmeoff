import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Reality from '@/components/Reality'
import NextSteps from '@/components/NextSteps'
import Resources from '@/components/Resources'
import Programs from '@/components/Programs'
import Assessment from '@/components/Assessment'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Reality />
        <NextSteps />
        <Resources />
        <Programs />
        <Assessment />
        <About />
      </main>
      <Footer />
    </>
  )
}
