import { useState } from 'react'
import { Hero } from './components/Hero'
import { Capabilities } from './components/Capabilities'
import { Meeting } from './components/Meeting'
import { Process } from './components/Process'
import { WhyRoyah } from './components/WhyRoyah'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { BookingModal } from './components/BookingModal'

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const openBooking = () => setBookingOpen(true)
  const closeBooking = () => setBookingOpen(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Hero onBookClick={openBooking} />
        <Capabilities />
        <Meeting onBookClick={openBooking} />
        <Process />
        <WhyRoyah />
        <FinalCTA onBookClick={openBooking} />
      </main>
      <Footer />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </div>
  )
}
