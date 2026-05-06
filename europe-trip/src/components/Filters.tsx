import { motion } from 'framer-motion'
import { PARTICIPANTS, COUNTRY_FLAGS, Participant } from '../data/itinerary'

interface FiltersProps {
  selectedPerson: Participant | 'Todos'
  setSelectedPerson: (p: Participant | 'Todos') => void
  selectedCountry: string
  setSelectedCountry: (c: string) => void
  selectedType: string
  setSelectedType: (t: string) => void
  countries: string[]
  types: string[]
}

export default function Filters({
  selectedPerson,
  setSelectedPerson,
  selectedCountry,
  setSelectedCountry,
  selectedType,
  setSelectedType,
  countries,
  types,
}: FiltersProps) {
  return (
    <motion.section
      className="filters-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="filter-group">
        <label>👤 Persona</label>
        <div className="filter-chips">
          <button
            className={`chip ${selectedPerson === 'Todos' ? 'active' : ''}`}
            onClick={() => setSelectedPerson('Todos')}
          >
            Todos
          </button>
          {PARTICIPANTS.map((p) => (
            <button
              key={p}
              className={`chip ${selectedPerson === p ? 'active' : ''}`}
              onClick={() => setSelectedPerson(p)}
            >
              {p === 'Sharon' ? 'Shasha' : p}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>🌍 País</label>
        <div className="filter-chips">
          {countries.map((c) => (
            <button
              key={c}
              className={`chip ${selectedCountry === c ? 'active' : ''}`}
              onClick={() => setSelectedCountry(c)}
            >
              {c === 'Todos' ? '🌐 Todos' : `${COUNTRY_FLAGS[c] || ''} ${c}`}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <label>🏷️ Tipo</label>
        <div className="filter-chips">
          {types.map((t) => (
            <button
              key={t}
              className={`chip ${selectedType === t ? 'active' : ''}`}
              onClick={() => setSelectedType(t)}
            >
              {t === 'Imperdible' ? '🔥' : t === 'Cultural' ? '🏛️' : t === 'Relax' ? '😎' : t === 'Logística' ? '🎯' : t === 'Compras' ? '🛍️' : '📋'} {t}
            </button>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
