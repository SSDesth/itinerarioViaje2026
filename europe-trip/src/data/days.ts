import { DayData, Activity, getLocationLink, HOTELS } from './itinerary';

const ALL = ['Ivania', 'Jonathan', 'Jurgen', 'Sharon', 'Hayley', 'Jimena', 'Giselle', 'Carlos'];

function act(
  name: string,
  type: string,
  timeOfDay: string,
  participants: string[],
  city: string,
  notes = '',
  isOptional = false
): Activity {
  const icon = type.includes('Logística') ? '🎯' :
    type.includes('Imperdible') ? '🔥' :
    type.includes('Por definir') ? '❓' :
    type.includes('Relax') ? '😎' :
    type.includes('Tip') ? '💡' :
    type.includes('Comida') ? '🍴' :
    type.includes('Viaje') ? '✈️' : '📌';
  return {
    name,
    type,
    timeOfDay,
    notes,
    participants,
    isOptional,
    mapsLink: getLocationLink(name, city),
    icon,
  };
}

// Optional activities for each city
const FLORENCE_OPTIONS: Activity[] = [
  act('Catedral Santa María del Fiore', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Ponte Vecchio', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Piazza del Duomo', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Piazza del Michelangelo', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Barrio de Oltrarno', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Capilla de los Medici', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Villa La Pietra', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Villa Schifanoia', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Signum- souvenirs', 'Compras', 'Flexible', ALL, 'Florencia', '', true),
  act('Museo di Casa Martinelli', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Fotoautomatica', 'Diversión', 'Flexible', ALL, 'Florencia', '', true),
  act('Museo casa de Nicolás Maquiavelo', 'Cultural', 'Flexible', ALL, 'Florencia', 'Próximo al Palazzo Pitti', true),
];

const ZURICH_OPTIONS: Activity[] = [
  act('Altstadt', 'Cultural', 'Flexible', ALL, 'Zúrich', 'Casco antiguo', true),
  act('Mirador Lindenhof', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
  act('Crucero por el lago', 'Relax', 'Flexible', ALL, 'Zúrich', '', true),
  act('Jardín Botánico de la universidad', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
  act('Augustinergasse', 'Cultural', 'Flexible', ALL, 'Zúrich', 'Calle medieval', true),
  act('Kilchberg ZH', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
  act('Jardín Chino', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
  act('Villa Patumbah', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
  act('Polybahn', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
  act('Museo de Historia Natural', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
];

const BRUSSELS_OPTIONS: Activity[] = [
  act('Mini Europa', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Museo de los Globos', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Gran Plaza', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Mannekin Pis', 'Cultural', 'Flexible', ALL, 'Bruselas', 'El niño, la niña, el perro', true),
  act('Jardines Petit Sablon', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Galería Real de San Hubert', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Palacio Real', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Monte de las Artes', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
];

const BRUGES_OPTIONS: Activity[] = [
  act('Grote Markt', 'Cultural', 'Flexible', ALL, 'Brujas', 'No comer aquí, muy caro', true),
  act('Basílica de la Santa Sangre', 'Cultural', 'Flexible', ALL, 'Brujas', '', true),
  act('Historium Museo Medieval', 'Cultural', 'Flexible', ALL, 'Brujas', '', true),
  act('Pasear en bote por los canales', 'Relax', 'Flexible', ALL, 'Brujas', '', true),
  act('Puente San Bonifacio', 'Cultural', 'Flexible', ALL, 'Brujas', 'Puente del amor', true),
  act('Beguinario jardín', 'Cultural', 'Flexible', ALL, 'Brujas', '', true),
];

const PARIS_OPTIONS: Activity[] = [
  act('Jardines de Luxemburgo', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('Montmatre', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('Petit Palais', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('La Rue de la Universite', 'Fotos', 'Flexible', ALL, 'París', 'Fotos', true),
  act('La Rue de Buenos Aires', 'Fotos', 'Flexible', ALL, 'París', 'Fotos', true),
  act('Champ de Mars', 'Fotos', 'Flexible', ALL, 'París', 'Fotos', true),
];

const SPAIN2_OPTIONS: Activity[] = [
  act('Alcázar de Toledo', 'Cultural', 'Flexible', ALL, 'Toledo', '', true),
  act('Catedral de Toledo', 'Cultural', 'Flexible', ALL, 'Toledo', '', true),
];

// Travel day options (to be filled in over time)
const TRAVEL_OPTIONS_MADRID_FLORENCE: Activity[] = [
  act('Por definir - actividades en escala o llegada', 'Por definir', 'Flexible', ALL, 'Florencia', 'Se irá completando', true),
];

const TRAVEL_OPTIONS_FLORENCE_ZURICH: Activity[] = [
  act('Por definir - paradas en el camino', 'Por definir', 'Flexible', ALL, 'Milán', 'Tren con parada en Milán', true),
];

const TRAVEL_OPTIONS_ZURICH_BRUSSELS: Activity[] = [
  act('Por definir - actividades en escala o llegada', 'Por definir', 'Flexible', ALL, 'Bruselas', 'Se irá completando', true),
];

const TRAVEL_OPTIONS_BRUSSELS_PARIS: Activity[] = [
  act('Por definir - paradas en el camino', 'Por definir', 'Flexible', ALL, 'París', 'Tren directo ~1.5h', true),
];

const TRAVEL_OPTIONS_PARIS_SPAIN: Activity[] = [
  act('Por definir - actividades en escala o llegada', 'Por definir', 'Flexible', ALL, 'Madrid', 'Se irá completando', true),
];

export const ITINERARY: DayData[] = [
  // June 2 - Costa Rica / Departure
  {
    date: '02 junio',
    dayOfWeek: 'Martes',
    country: 'Viaje',
    city: 'San José → Madrid',
    activities: [
      act('Llegada al aeropuerto', 'Logística', '🌆 Tarde', ALL, 'San José', 'Aeropuerto Juan Santamaría'),
      act('✈️ Salida 7:40 pm', 'Logística', '🌙 Noche', ALL, 'San José', 'Vuelo internacional a Madrid'),
    ],
    hotel: null,
    optionalActivities: [],
  },
  // June 3 - Madrid arrival
  {
    date: '03 junio',
    dayOfWeek: 'Miércoles',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('✈️ Llegada 9:45 am', 'Logística', '☀️ Mañana', ALL, 'Madrid', 'Aeropuerto Madrid-Barajas'),
      act('🏨 Check-in + maletas', 'Logística', '🌆 Tarde', ALL, 'Madrid'),
      act('Tinto de verano en Gran Vía', 'Relax', '🌆 Tarde', ALL, 'Madrid'),
      act('Paseo Gran Vía', 'Relax', '🌙 Noche', ALL, 'Madrid'),
      act('Dormir temprano', 'Tip', '🌙 Noche', ALL, 'Madrid', 'Reset biológico'),
    ],
    hotel: HOTELS[0],
    optionalActivities: [],
  },
  // June 4 - Madrid → Florence
  {
    date: '04 junio',
    dayOfWeek: 'Jueves',
    country: 'Viaje',
    city: 'Madrid → Florencia',
    activities: [
      act('✈️ Vuelo Madrid → Florencia', 'Logística', '☀️ Mañana', ALL, 'Florencia', 'Salida desde Madrid-Barajas'),
    ],
    hotel: null,
    optionalActivities: TRAVEL_OPTIONS_MADRID_FLORENCE,
  },
  {
    date: '04 junio',
    dayOfWeek: 'Jueves',
    country: 'Italia',
    city: 'Florencia',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'Florencia'),
      act('Galería de la Academia', 'Cultural', '🌆 Tarde', ['Sharon', 'Carlos', 'Hayley', 'Giselle', 'Jimena'], 'Florencia'),
      act('Museo Leonardo Da Vinci', 'Cultural', '🌆 Tarde', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'Florencia'),
      act('Jardines de Boboli y Palazzo Pitti', 'Cultural', '🌆 Tarde', ALL, 'Florencia'),
      act('Paseos + museos', 'Relax', '🌙 Noche', ALL, 'Florencia'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // June 5 - Florence day 1
  {
    date: '05 junio',
    dayOfWeek: 'Viernes',
    country: 'Italia',
    city: 'Florencia',
    activities: [
      act('Tour de Cinque Terre', 'Imperdible', '☀️ Día', ALL, 'Florencia', 'Día completo'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // June 6 - Florence day 2
  {
    date: '06 junio',
    dayOfWeek: 'Sábado',
    country: 'Italia',
    city: 'Florencia',
    activities: [
      act('Venecia', 'Imperdible', '☀️ Día', ALL, 'Venecia', 'Día completo'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // June 7 - Florence day 3 (Birthday!)
  {
    date: '07 junio',
    dayOfWeek: 'Domingo',
    country: 'Italia',
    city: 'Florencia',
    activities: [
      act('🎂 Cumpleaños mamá', 'Imperdible', '☀️ Día', ALL, 'Florencia', '¡Celebración!'),
      act('Tour por la Toscana', 'Imperdible', '☀️ Día', ALL, 'Florencia', 'San Gimignano, Monteriggioni'),
      act('Cena bistecca', 'Imperdible', '🌙 Noche', ALL, 'Florencia', 'Cena especial'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // June 8 - Florence → Zurich (TRAIN via Milan)
  {
    date: '08 junio',
    dayOfWeek: 'Lunes',
    country: 'Viaje',
    city: 'Florencia → Milán → Zúrich',
    activities: [
      act('🚆 Tren Florencia → Milán 11:16 am', 'Logística', '☀️ Mañana', ALL, 'Milán', 'Estación Firenze Santa Maria Novella'),
      act('Gelato en estación de Milán', 'Relax', '☀️ Parada', ALL, 'Milán', 'Escala en Milano Centrale'),
      act('🚆 Tren Milán → Zúrich', 'Logística', '🌆 Tarde', ALL, 'Zúrich', '~3.5h de viaje'),
    ],
    hotel: null,
    optionalActivities: TRAVEL_OPTIONS_FLORENCE_ZURICH,
  },
  {
    date: '08 junio',
    dayOfWeek: 'Lunes',
    country: 'Suiza',
    city: 'Zúrich',
    activities: [
      act('Museo Lindt Hogar del Chocolate', 'Imperdible', '🌆 Tarde', ALL, 'Zúrich'),
      act('🏨 Llegada hotel', 'Logística', '🌙 Noche', ALL, 'Zúrich'),
    ],
    hotel: HOTELS[2],
    optionalActivities: ZURICH_OPTIONS,
  },
  // June 9 - Zurich day 1
  {
    date: '09 junio',
    dayOfWeek: 'Martes',
    country: 'Suiza',
    city: 'Zúrich',
    activities: [
      act('Explorar ciudad', 'Relax', '☀️ Día', ALL, 'Zúrich'),
      act('Interlaken - Lauterbrunnen - Mürren', 'Imperdible', '☀️ Día', ALL, 'Zúrich', 'Excursión montañas'),
    ],
    hotel: HOTELS[2],
    optionalActivities: ZURICH_OPTIONS,
  },
  // June 10 - Zurich day 2
  {
    date: '10 junio',
    dayOfWeek: 'Miércoles',
    country: 'Suiza',
    city: 'Zúrich',
    activities: [
      act('Lago / alrededores', 'Relax', '☀️ Día', ALL, 'Zúrich', 'Día opcional'),
    ],
    hotel: HOTELS[2],
    optionalActivities: ZURICH_OPTIONS,
  },
  // June 11 - Zurich → Brussels (flight)
  {
    date: '11 junio',
    dayOfWeek: 'Jueves',
    country: 'Viaje',
    city: 'Zúrich → Bruselas',
    activities: [
      act('✈️ Vuelo Zúrich → Bruselas 10:20 am', 'Logística', '☀️ Mañana', ALL, 'Bruselas', 'Salida desde Aeropuerto de Zúrich'),
    ],
    hotel: null,
    optionalActivities: TRAVEL_OPTIONS_ZURICH_BRUSSELS,
  },
  {
    date: '11 junio',
    dayOfWeek: 'Jueves',
    country: 'Bélgica',
    city: 'Bruselas',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'Bruselas'),
      act('Noria de Bruselas', 'Imperdible', '🌆 Tarde', ALL, 'Bruselas'),
      act('Atomium', 'Cultural', '🌆 Tarde', ALL, 'Bruselas', 'Solo ver por fuera'),
    ],
    hotel: HOTELS[3],
    optionalActivities: BRUSSELS_OPTIONS,
  },
  // June 12 - Bruges day trip
  {
    date: '12 junio',
    dayOfWeek: 'Viernes',
    country: 'Bélgica',
    city: 'Bruselas / Brujas',
    activities: [
      act('🚆 Excursión Brujas', 'Imperdible', '☀️ Día', ALL, 'Brujas', '🍫 Día completo'),
    ],
    hotel: HOTELS[3],
    optionalActivities: BRUGES_OPTIONS,
  },
  // June 13 - Brussels → Paris (TRAIN)
  {
    date: '13 junio',
    dayOfWeek: 'Sábado',
    country: 'Viaje',
    city: 'Bruselas → París',
    activities: [
      act('🚆 Tren Bruselas → París 12:58 pm', 'Logística', '🌆 Tarde', ALL, 'París', 'Salida desde Estación Central de Bruselas'),
    ],
    hotel: null,
    optionalActivities: TRAVEL_OPTIONS_BRUSSELS_PARIS,
  },
  {
    date: '13 junio',
    dayOfWeek: 'Sábado',
    country: 'Francia',
    city: 'París',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'París'),
      act('Notre Dame', 'Imperdible', '🌆 Tarde', ALL, 'París', 'Todos juntos'),
      act('Sainte Chapelle', 'Imperdible', '🌆 Tarde', ALL, 'París', 'Está al lado de Notre Dame'),
      act('Torre Eiffel al atardecer', 'Imperdible', '🌆 Tarde-Noche', ALL, 'París', 'Atardecer ~21:30 en junio'),
      act('Tour por el Río Sena', 'Relax', '🌙 Noche', ALL, 'París', 'Oscurece tarde, aprovechar'),
    ],
    hotel: HOTELS[4],
    optionalActivities: PARIS_OPTIONS,
  },
  // June 14 - Paris day 1 (Sunday) - Disney group 1
  {
    date: '14 junio',
    dayOfWeek: 'Domingo',
    country: 'Francia',
    city: 'París',
    activities: [
      act('Disney', 'Imperdible', '☀️ Día completo', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'París', 'Día completo en Disney'),
      act('Palacio de Versalles', 'Imperdible', '☀️ Día', ['Sharon', 'Hayley', 'Jimena', 'Giselle'], 'París'),
      act('Crucero por el Río Sena de noche', 'Imperdible', '🌙 Noche', ALL, 'París', 'Reunión de todos al final del día'),
    ],
    hotel: HOTELS[4],
    optionalActivities: PARIS_OPTIONS,
  },
  // June 15 - Paris day 2 (Monday) - Disney group 2
  {
    date: '15 junio',
    dayOfWeek: 'Lunes',
    country: 'Francia',
    city: 'París',
    activities: [
      act('Disney', 'Imperdible', '☀️ Día completo', ['Jimena', 'Hayley'], 'París', 'Día completo en Disney'),
      act('Catacumbas', 'Cultural', '☀️ Mañana', ['Ivania', 'Jonathan', 'Jurgen', 'Sharon', 'Carlos'], 'París'),
      act('Musee des Arts et Métiers', 'Cultural', '🌆 Tarde', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'París'),
      act('Museum d\'histoire naturelle', 'Cultural', '🌆 Tarde', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'París'),
      act('Louvre', 'Cultural', '🌙 Noche', ['Carlos'], 'París', 'Tarde-noche antes de cerrar'),
      act('Merci Store- souvenirs', 'Compras', 'Flexible', ALL, 'París'),
      act('Au Singe Qui Lit- souvenirs', 'Compras', 'Flexible', ALL, 'París'),
    ],
    hotel: HOTELS[4],
    optionalActivities: PARIS_OPTIONS,
  },
  // June 16 - Paris → Spain (flight)
  {
    date: '16 junio',
    dayOfWeek: 'Martes',
    country: 'Viaje',
    city: 'París → Madrid',
    activities: [
      act('✈️ Vuelo París → Madrid 1:36 pm', 'Logística', '🌆 Tarde', ALL, 'Madrid', 'Salida desde París-Orly'),
    ],
    hotel: null,
    optionalActivities: TRAVEL_OPTIONS_PARIS_SPAIN,
  },
  {
    date: '16 junio',
    dayOfWeek: 'Martes',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'Madrid'),
      act('Museo del Prado', 'Cultural', '🌆 Tarde', ['Sharon', 'Carlos'], 'Madrid'),
      act('Estadio del Real Madrid', 'Cultural', '🌆 Tarde', ['Jonathan', 'Jurgen'], 'Madrid'),
      act('Plaza Mayor', 'Relax', '🌙 Noche', ALL, 'Madrid'),
    ],
    hotel: HOTELS[5],
    optionalActivities: [],
  },
  // June 17 - Spain day 2
  {
    date: '17 junio',
    dayOfWeek: 'Miércoles',
    country: 'España',
    city: 'Toledo / Barcelona',
    activities: [
      act('Toledo', 'Imperdible', '☀️ Día', ALL, 'Toledo', 'Excursión de día'),
      act('Barcelona', 'Imperdible', '☀️ Día', ALL, 'Barcelona', 'Alternativa'),
      act('Sagrada Familia', 'Imperdible', '☀️ Día', ['Ivania', 'Jonathan', 'Jurgen', 'Sharon', 'Carlos'], 'Barcelona'),
      act('Estadio del Barca', 'Cultural', '☀️ Día', ['Jonathan', 'Jurgen'], 'Barcelona', 'De 2 a 4 personas'),
    ],
    hotel: HOTELS[5],
    optionalActivities: SPAIN2_OPTIONS,
  },
  // June 18 - Spain day 3
  {
    date: '18 junio',
    dayOfWeek: 'Jueves',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('Exploración libre', 'Relax', '☀️ Día', ALL, 'Madrid'),
    ],
    hotel: HOTELS[5],
    optionalActivities: SPAIN2_OPTIONS,
  },
  // June 19 - Spain day 4
  {
    date: '19 junio',
    dayOfWeek: 'Viernes',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('Último día libre', 'Relax', '☀️ Día', ALL, 'Madrid', 'Compras, paseos, despedida'),
    ],
    hotel: HOTELS[5],
    optionalActivities: [],
  },
  // June 20 - Return
  {
    date: '20 junio',
    dayOfWeek: 'Sábado',
    country: 'Viaje',
    city: 'Madrid → San José',
    activities: [
      act('✈️ Salida 3:25 pm', 'Logística', '🌆 Tarde', ALL, 'Madrid', 'Aeropuerto Madrid-Barajas'),
      act('✈️ Llegada 6:15 pm', 'Logística', '🌙 Noche', ALL, 'San José', 'Aeropuerto Juan Santamaría • Fin del viaje 🎉'),
    ],
    hotel: null,
    optionalActivities: [],
  },
];
