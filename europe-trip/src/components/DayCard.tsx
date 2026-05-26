import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DayData, COUNTRY_COLORS, COUNTRY_FLAGS, Participant } from '../data/itinerary'
import ActivityCard from './ActivityCard'
import HotelCard from './HotelCard'
import TransportCard from './TransportCard'

interface DayCardProps {
  day: DayData
  selectedPerson: Participant | 'Todos'
}

export default function DayCard({ day, selectedPerson }: DayCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [showOptional, setShowOptional] = useState(false)
  const colors = COUNTRY_COLORS[day.country] || COUNTRY_COLORS['Viaje']
  const flag = COUNTRY_FLAGS[day.country] || '✈️'

  const filteredActivities = day.activities.filter((a) => {
    if (selectedPerson === 'Todos') return true
    return a.participants.includes(selectedPerson)
  })

  const filteredOptional = day.optionalActivities.filter((a) => {
    if (selectedPerson === 'Todos') return true
    return a.participants.includes(selectedPerson)
  })

  return (
    <div
      className="day-card"
      style={{
        borderLeft: `4px solid ${colors.primary}`,
        background: colors.bg,
        borderTop: `1px solid ${colors.bg}`,
      }}
    >
      <button
        className="day-header"
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={`${day.dayOfWeek} ${day.date} - ${day.city}`}
      >
        <div className="day-header-left">
          <span className="day-flag">{flag}</span>
          <div className="day-info">
            <span className="day-date">{day.dayOfWeek} {day.date}</span>
            <span className="day-city">{day.city}</span>
          </div>
        </div>
        <div className="day-header-right">
          <span className="activity-count">{filteredActivities.length} actividades</span>
          <motion.span
            className="chevron"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            ▼
          </motion.span>
        </div>
      </button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="day-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {day.hotel && <HotelCard hotel={day.hotel} />}

            <div className="activities-list">
              {filteredActivities.map((activity, i) => (
                day.country === 'Viaje' ? (
                  <TransportCard key={`${activity.name}-${i}`} activity={activity} />
                ) : (
                  <ActivityCard key={`${activity.name}-${i}`} activity={activity} colors={colors} />
                )
              ))}
            </div>

            {filteredOptional.length > 0 && (
              <div className="optional-section">
                <button
                  className="optional-toggle"
                  onClick={() => setShowOptional(!showOptional)}
                >
                  <span>✨ Opciones disponibles ({filteredOptional.length})</span>
                  <motion.span
                    animate={{ rotate: showOptional ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </button>

                <AnimatePresence>
                  {showOptional && (
                    <motion.div
                      className="optional-list"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {filteredOptional.map((activity, i) => (
                        <ActivityCard
                          key={`opt-${activity.name}-${i}`}
                          activity={activity}
                          colors={colors}
                          isOptional
                        />
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
