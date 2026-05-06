import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
  const [isOpen, setIsOpen] = useState(false)

  const hasActiveFilter = selectedPerson !== 'Todos' || selectedCountry !== 'Todos' || selectedType !== 'Todos'

  return (
    <div className="filters-wrapper">
      <button
        className={`hamburger-btn ${isOpen ? 'open' : ''} ${hasActiveFilter ? 'has-filter' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir filtros"
        aria-expanded={isOpen}
      >
        <div className="hamburger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="hamburger-label">
          {hasActiveFilter ? '🎯 Filtros activos' : '⚙️ Filtros'}
        </span>
        {hasActiveFilter && (
          <span className="filter-indicator"></span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.section
            className="filters-section"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
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

            {hasActiveFilter && (
              <button
                className="clear-filters-btn"
                onClick={() => {
                  setSelectedPerson('Todos')
                  setSelectedCountry('Todos')
                  setSelectedType('Todos')
                }}
              >
                ✕ Limpiar filtros
              </button>
            )}
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}
