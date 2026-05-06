import { motion } from 'framer-motion'
import { Hotel } from '../data/itinerary'

interface HotelCardProps {
  hotel: Hotel
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <motion.div
      className="hotel-card"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="hotel-header">
        <span className="hotel-icon">🏨</span>
        <div className="hotel-info">
          <h4>Hotel en {hotel.city}</h4>
          <p className="hotel-dates">📅 {hotel.dates}</p>
          <p className="hotel-address">📮 {hotel.address}</p>
        </div>
      </div>
      <a
        href={hotel.mapsLink}
        target="_blank"
        rel="noopener noreferrer"
        className="maps-btn hotel-maps-btn"
        aria-label={`Abrir hotel en ${hotel.city} en Google Maps`}
      >
        📍 Abrir en Google Maps
      </a>
    </motion.div>
  )
}
