import { motion } from 'framer-motion'
import { Activity } from '../data/itinerary'

interface ActivityCardProps {
  activity: Activity
  colors: { primary: string; secondary: string; bg: string; accent: string }
  isOptional?: boolean
}

export default function ActivityCard({ activity, colors, isOptional }: ActivityCardProps) {
  const typeIcon = activity.type.includes('Logística') ? '🎯' :
    activity.type.includes('Imperdible') ? '🔥' :
    activity.type.includes('Por definir') ? '❓' :
    activity.type.includes('Relax') ? '😎' :
    activity.type.includes('Tip') ? '💡' :
    activity.type.includes('Cultural') ? '🏛️' :
    activity.type.includes('Compras') ? '🛍️' :
    activity.type.includes('Fotos') ? '📸' :
    activity.type.includes('Diversión') ? '🎉' : '📌'

  return (
    <motion.div
      className={`activity-card ${isOptional ? 'optional' : ''}`}
      whileHover={{ scale: 1.01, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      whileTap={{ scale: 0.99 }}
    >
      <div className="activity-top">
        <span className="activity-time">{activity.timeOfDay}</span>
        <span className="activity-type-badge" style={{ color: colors.accent }}>
          {typeIcon} {activity.type}
        </span>
      </div>

      <h4 className="activity-name">
        {isOptional && <span className="optional-badge">opción</span>}
        {activity.name}
      </h4>

      {activity.notes && (
        <p className="activity-notes">{activity.notes}</p>
      )}

      <div className="activity-bottom">
        <div className="participants-row">
          {activity.participants.length === 8 ? (
            <span className="participant-tag all">👥 Todos</span>
          ) : (
            activity.participants.map((p) => (
              <span key={p} className="participant-tag">
                {p === 'Sharon' ? 'Shasha' : p}
              </span>
            ))
          )}
        </div>

        {activity.mapsLink && (
          <a
            href={activity.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="maps-btn"
            aria-label={`Abrir ${activity.name} en Google Maps`}
          >
            📍 Abrir en Maps
          </a>
        )}
      </div>
    </motion.div>
  )
}
