import { motion } from 'framer-motion'
import { Activity } from '../data/itinerary'

interface TransportCardProps {
  activity: Activity
}

function getTransportType(name: string): { icon: string; badge: string; badgeClass: string } {
  if (name.includes('🚆') || name.toLowerCase().includes('tren')) {
    return { icon: '🚆', badge: 'Tren', badgeClass: 'badge-train' }
  }
  return { icon: '✈️', badge: 'Internacional', badgeClass: 'badge-flight' }
}

function getStationInfo(notes: string): string | null {
  if (notes.includes('Aeropuerto') || notes.includes('Estación') || notes.includes('Salida desde')) {
    return notes
  }
  return null
}

function hasEscala(notes: string): boolean {
  return notes.toLowerCase().includes('escala')
}

export default function TransportCard({ activity }: TransportCardProps) {
  const transport = getTransportType(activity.name)
  const station = getStationInfo(activity.notes)
  const escala = hasEscala(activity.notes)

  return (
    <motion.div
      className="transport-card"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.01 }}
    >
      <div className="transport-header">
        <span className="transport-icon">{transport.icon}</span>
        <div className="transport-info">
          <div className="transport-badges">
            <span className={`transport-badge ${transport.badgeClass}`}>
              {transport.badge}
            </span>
            {escala && (
              <span className="transport-badge badge-escala">Escala</span>
            )}
          </div>
          <h4 className="transport-name">{activity.name}</h4>
          {station && (
            <p className="transport-station">📍 {station}</p>
          )}
          <p className="transport-time">🕐 {activity.timeOfDay}</p>
        </div>
      </div>
      {activity.mapsLink && (
        <a
          href={activity.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="maps-btn transport-maps-btn"
          aria-label={`Abrir ubicación de ${activity.name} en Google Maps`}
        >
          📍 Abrir en Google Maps
        </a>
      )}
    </motion.div>
  )
}
