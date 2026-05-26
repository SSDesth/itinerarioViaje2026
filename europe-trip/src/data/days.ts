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

// Optional activities for each city (from word.md [opción])
const FLORENCE_OPTIONS: Activity[] = [
  act('Galería de la Academia', 'Cultural', 'Flexible', ['Sharon', 'Carlos', 'Hayley', 'Giselle', 'Jimena'], 'Florencia', '', true),
  act('Jardines de Boboli y Palazzo Pitti', 'Cultural', 'Flexible', ALL, 'Florencia', '', true),
  act('Museo Leonardo Da Vinci', 'Cultural', 'Flexible', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'Florencia', '', true),
  act('Museo casa de Nicolás Maquiavelo', 'Cultural', 'Flexible', ALL, 'Florencia', 'Próximo al Palazzo Pitti', true),
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
];

const ZURICH_OPTIONS: Activity[] = [
  act('Museo Lindt Hogar del Chocolate', 'Cultural', 'Flexible', ALL, 'Zúrich', '', true),
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
  act('Noria de Bruselas', 'Cultural', 'Flexible', ALL, 'Bruselas', '', true),
  act('Atomium', 'Cultural', 'Flexible', ALL, 'Bruselas', 'Solo ver por fuera', true),
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
  act('Musee des Arts et Métiers', 'Cultural', 'Flexible', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'París', '', true),
  act('Palacio de Versalles', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('Museum d\'histoire naturelle', 'Cultural', 'Flexible', ['Ivania', 'Jonathan', 'Jurgen', 'Carlos'], 'París', '', true),
  act('Jardines de Luxemburgo', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('Montmatre', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('Petit Palais', 'Cultural', 'Flexible', ALL, 'París', '', true),
  act('La Rue de la Universite', 'Fotos', 'Flexible', ALL, 'París', 'Fotos', true),
  act('La Rue de Buenos Aires', 'Fotos', 'Flexible', ALL, 'París', 'Fotos', true),
  act('Champ de Mars', 'Fotos', 'Flexible', ALL, 'París', 'Fotos', true),
  act('Merci Store- souvenirs', 'Compras', 'Flexible', ALL, 'París', '', true),
  act('Au Singe Qui Lit- souvenirs', 'Compras', 'Flexible', ALL, 'París', '', true),
];

const MADRID2_OPTIONS: Activity[] = [
  act('Museo del Prado', 'Cultural', 'Flexible', ['Sharon', 'Carlos'], 'Madrid', '', true),
  act('Estadio del Real Madrid', 'Cultural', 'Flexible', ['Jonathan', 'Jurgen'], 'Madrid', '', true),
  act('Plaza Mayor', 'Cultural', 'Flexible', ALL, 'Madrid', '', true),
];

const BARCELONA_OPTIONS: Activity[] = [
  act('Estadio del Barca', 'Cultural', 'Flexible', ['Jonathan', 'Jurgen'], 'Barcelona', 'De 2 a 4 personas', true),
  act('Sagrada Familia', 'Cultural', 'Flexible', ['Ivania', 'Jonathan', 'Jurgen', 'Sharon', 'Carlos'], 'Barcelona', '', true),
];

const TOLEDO_OPTIONS: Activity[] = [
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
  // ===== 02 JUNIO - SALIDA =====
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
  // ===== 03 JUNIO - ESPAÑA (Madrid) =====
  {
    date: '03 junio',
    dayOfWeek: 'Miércoles',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('✈️ Llegada 9:45 am', 'Logística', '☀️ Mañana', ALL, 'Madrid', 'Aeropuerto Madrid-Barajas'),
      act('🏨 Check-in + maletas', 'Logística', '☀️ Mañana', ALL, 'Madrid'),
      act('Recorrer Madrid', 'Imperdible', '☀️ Día', ALL, 'Madrid', 'Día completo explorando'),
      act('Tinto de verano en Gran Vía', 'Relax', '🌆 Tarde', ALL, 'Madrid'),
      act('Dormir temprano', 'Tip', '🌙 Noche', ALL, 'Madrid', 'Reset biológico'),
    ],
    hotel: HOTELS[0],
    optionalActivities: [],
  },
  // ===== 04 JUNIO - VIAJE Madrid → Florencia =====
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
  // ===== 04 JUNIO - ITALIA (Florencia llegada) =====
  {
    date: '04 junio',
    dayOfWeek: 'Jueves',
    country: 'Italia',
    city: 'Florencia',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'Florencia'),
      act('Recorrer Florencia', 'Imperdible', '🌆 Tarde', ALL, 'Florencia', 'Paseo inicial por la ciudad'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // ===== 05 JUNIO - ITALIA (Venecia) =====
  {
    date: '05 junio',
    dayOfWeek: 'Viernes',
    country: 'Italia',
    city: 'Venecia',
    activities: [
      act('Tour a Venecia', 'Imperdible', '☀️ Día', ALL, 'Venecia', 'Día completo'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // ===== 06 JUNIO - ITALIA (Cinque Terre) =====
  {
    date: '06 junio',
    dayOfWeek: 'Sábado',
    country: 'Italia',
    city: 'Cinque Terre',
    activities: [
      act('Tour a Cinque Terre', 'Imperdible', '☀️ Día', ALL, 'Florencia', 'Día completo'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // ===== 07 JUNIO - ITALIA (Toscana + Cumpleaños) =====
  {
    date: '07 junio',
    dayOfWeek: 'Domingo',
    country: 'Italia',
    city: 'Toscana',
    activities: [
      act('🎂 Cumpleaños mamá', 'Imperdible', '☀️ Día', ALL, 'Florencia', '¡Celebración!'),
      act('Tour privado por Toscana', 'Imperdible', '☀️ Día', ALL, 'Florencia', 'San Gimignano, Monteriggioni'),
      act('Cena bistecca', 'Imperdible', '🌙 Noche', ALL, 'Florencia', 'Cena especial'),
    ],
    hotel: HOTELS[1],
    optionalActivities: FLORENCE_OPTIONS,
  },
  // ===== 08 JUNIO - VIAJE Florencia → Zúrich =====
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
  // ===== 08 JUNIO - SUIZA (Zúrich llegada) =====
  {
    date: '08 junio',
    dayOfWeek: 'Lunes',
    country: 'Suiza',
    city: 'Zúrich',
    activities: [
      act('🏨 Llegada hotel', 'Logística', '🌙 Noche', ALL, 'Zúrich'),
      act('Recorrer Zúrich', 'Imperdible', '🌙 Noche', ALL, 'Zúrich', 'Paseo inicial'),
    ],
    hotel: HOTELS[2],
    optionalActivities: ZURICH_OPTIONS,
  },
  // ===== 09 JUNIO - SUIZA (Interlaken) =====
  {
    date: '09 junio',
    dayOfWeek: 'Martes',
    country: 'Suiza',
    city: 'Interlaken / Lauterbrunnen / Mürren',
    activities: [
      act('Interlaken - Lauterbrunnen - Mürren', 'Imperdible', '☀️ Día', ALL, 'Zúrich', 'Excursión montañas - día completo'),
    ],
    hotel: HOTELS[2],
    optionalActivities: ZURICH_OPTIONS,
  },
  // ===== 10 JUNIO - SUIZA (Swiss Travel Pass) =====
  {
    date: '10 junio',
    dayOfWeek: 'Miércoles',
    country: 'Suiza',
    city: 'Zúrich',
    activities: [
      act('Tour por definir - Swiss Travel Pass', 'Por definir', '☀️ Día', ALL, 'Zúrich', 'Día flexible con Swiss Travel Pass'),
    ],
    hotel: HOTELS[2],
    optionalActivities: ZURICH_OPTIONS,
  },
  // ===== 11 JUNIO - VIAJE Zúrich → Bruselas =====
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
  // ===== 11 JUNIO - BÉLGICA (Bruselas llegada) =====
  {
    date: '11 junio',
    dayOfWeek: 'Jueves',
    country: 'Bélgica',
    city: 'Bruselas',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'Bruselas'),
      act('Recorrer Bruselas', 'Imperdible', '🌆 Tarde', ALL, 'Bruselas', 'Explorar la ciudad'),
    ],
    hotel: HOTELS[3],
    optionalActivities: BRUSSELS_OPTIONS,
  },
  // ===== 12 JUNIO - BÉLGICA (Brujas) =====
  {
    date: '12 junio',
    dayOfWeek: 'Viernes',
    country: 'Bélgica',
    city: 'Brujas',
    activities: [
      act('Tour a Brujas', 'Imperdible', '☀️ Día', ALL, 'Brujas', '🍫 Día completo'),
    ],
    hotel: HOTELS[3],
    optionalActivities: BRUGES_OPTIONS,
  },
  // ===== 13 JUNIO - VIAJE Bruselas → París =====
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
  // ===== 13 JUNIO - FRANCIA (París llegada) =====
  {
    date: '13 junio',
    dayOfWeek: 'Sábado',
    country: 'Francia',
    city: 'París',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'París'),
      act('Recorrer París', 'Imperdible', '🌆 Tarde', ALL, 'París', 'Explorar la ciudad, oscurece ~21:30'),
    ],
    hotel: HOTELS[4],
    optionalActivities: PARIS_OPTIONS,
  },
  // ===== 14 JUNIO - FRANCIA (Disney + Catacumbas + Louvre) =====
  {
    date: '14 junio',
    dayOfWeek: 'Domingo',
    country: 'Francia',
    city: 'París',
    activities: [
      act('Disney', 'Imperdible', '☀️ Día completo', ['Hayley', 'Jimena'], 'París', 'Día completo en Disney'),
      act('Catacumbas de París', 'Imperdible', '☀️ Mañana', ['Carlos', 'Sharon', 'Ivania', 'Jonathan', 'Jurgen', 'Giselle'], 'París'),
      act('Louvre', 'Imperdible', '🌙 Noche', ['Carlos', 'Sharon', 'Ivania', 'Jonathan', 'Jurgen', 'Giselle'], 'París', 'Tarde-noche antes de cerrar'),
    ],
    hotel: HOTELS[4],
    optionalActivities: PARIS_OPTIONS,
  },
  // ===== 15 JUNIO - FRANCIA (Notre Dame + Sainte Chapelle + Sena + Torre Eiffel) =====
  {
    date: '15 junio',
    dayOfWeek: 'Lunes',
    country: 'Francia',
    city: 'París',
    activities: [
      act('Notre Dame', 'Imperdible', '☀️ Mañana', ALL, 'París'),
      act('Sainte Chapelle', 'Imperdible', '☀️ Mañana', ALL, 'París'),
      act('Tour por el Río Sena', 'Imperdible', '🌆 Tarde', ALL, 'París'),
      act('Torre Eiffel', 'Imperdible', '🌙 Noche 9:00 pm', ALL, 'París', 'Subida a la Torre Eiffel'),
    ],
    hotel: HOTELS[4],
    optionalActivities: PARIS_OPTIONS,
  },
  // ===== 16 JUNIO - VIAJE París → Madrid =====
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
  // ===== 16 JUNIO - ESPAÑA (Madrid segunda etapa) =====
  {
    date: '16 junio',
    dayOfWeek: 'Martes',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('🏨 Check-in', 'Logística', '🌆 Tarde', ALL, 'Madrid'),
      act('Recorrer Madrid', 'Imperdible', '🌆 Tarde', ALL, 'Madrid', 'Segunda visita a Madrid'),
    ],
    hotel: HOTELS[5],
    optionalActivities: MADRID2_OPTIONS,
  },
  // ===== 17 JUNIO - ESPAÑA (Barcelona) =====
  {
    date: '17 junio',
    dayOfWeek: 'Miércoles',
    country: 'España',
    city: 'Barcelona',
    activities: [
      act('Tour Barcelona', 'Imperdible', '☀️ Día', ALL, 'Barcelona', 'Día completo'),
    ],
    hotel: HOTELS[5],
    optionalActivities: BARCELONA_OPTIONS,
  },
  // ===== 18 JUNIO - ESPAÑA (Toledo + Último día) =====
  {
    date: '18 junio',
    dayOfWeek: 'Jueves',
    country: 'España',
    city: 'Toledo / Madrid',
    activities: [
      act('Tour Toledo', 'Imperdible', '☀️ Día', ALL, 'Toledo', 'Excursión de día'),
      act('Último día libre / Compras / Despedida', 'Relax', '🌙 Noche', ALL, 'Madrid', 'Paseos y despedida'),
    ],
    hotel: HOTELS[5],
    optionalActivities: TOLEDO_OPTIONS,
  },
  // ===== 19 JUNIO - ESPAÑA (Día flexible) =====
  {
    date: '19 junio',
    dayOfWeek: 'Viernes',
    country: 'España',
    city: 'Madrid',
    activities: [
      act('Día flexible', 'Por definir', '☀️ Día', ALL, 'Madrid', 'Por definir'),
    ],
    hotel: HOTELS[5],
    optionalActivities: MADRID2_OPTIONS,
  },
  // ===== 20 JUNIO - REGRESO =====
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
