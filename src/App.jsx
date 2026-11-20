import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Booking from './components/Booking'
import BeforeAfter from './components/BeforeAfter'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Booking />
        <BeforeAfter />
        <Reviews />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
