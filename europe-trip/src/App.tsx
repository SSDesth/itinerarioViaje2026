import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ITINERARY } from './data/days'
import { PARTICIPANTS, COUNTRY_COLORS, COUNTRY_FLAGS, Participant } from './data/itinerary'
import DayCard from './components/DayCard'
import Filters from './components/Filters'

function App() {
  const [selectedPerson, setSelectedPerson] = useState<Participant | 'Todos'>('Todos')
  const [selectedCountry, setSelectedCountry] = useState<string>('Todos')
  const [selectedType, setSelectedType] = useState<string>('Todos')

  const countries = useMemo(() => {
    const set = new Set(ITINERARY.map((d) => d.country))
    return ['Todos', ...Array.from(set)]
  }, [])

  const types = ['Todos', 'Imperdible', 'Cultural', 'Relax', 'Logística', 'Compras']

  const filteredDays = useMemo(() => {
    return ITINERARY.filter((day) => {
      if (selectedCountry !== 'Todos' && day.country !== selectedCountry) return false
      if (selectedPerson !== 'Todos') {
        const hasActivity = day.activities.some((a) =>
          a.participants.includes(selectedPerson)
        )
        const hasOptional = day.optionalActivities.some((a) =>
          a.participants.includes(selectedPerson)
        )
        if (!hasActivity && !hasOptional) return false
      }
      if (selectedType !== 'Todos') {
        const hasType = day.activities.some((a) =>
          a.type.toLowerCase().includes(selectedType.toLowerCase())
        )
        if (!hasType) return false
      }
      return true
    })
  }, [selectedCountry, selectedPerson, selectedType])

  return (
    <div className="app">
      <header className="app-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>🌍 Europa 2025</h1>
          <p className="subtitle">Itinerario de viaje • 2 - 20 junio</p>
          <div className="route-badges">
            {['España', 'Italia', 'Suiza', 'Bélgica', 'Francia'].map((c) => (
              <span
                key={c}
                className="route-badge"
                style={{
                  background: COUNTRY_COLORS[c].primary,
                  color: '#fff',
                }}
              >
                {COUNTRY_FLAGS[c]} {c}
              </span>
            ))}
          </div>
        </motion.div>
      </header>

      <Filters
        selectedPerson={selectedPerson}
        setSelectedPerson={setSelectedPerson}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        countries={countries}
        types={types}
      />

      <main className="days-container">
        <AnimatePresence>
          {filteredDays.map((day, index) => (
            <motion.div
              key={day.date + day.city}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <DayCard day={day} selectedPerson={selectedPerson} />
            </motion.div>
          ))}
        </AnimatePresence>
      </main>

      <footer className="app-footer">
        <p>✈️ ¡Buen viaje, familia! 🎉</p>
        <p className="footer-small">8 viajeros • 5 países • 19 días</p>
      </footer>
    </div>
  )
}

export default App
