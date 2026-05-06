// Parsed and combined data from all markdown files

export interface Activity {
  name: string;
  type: string;
  timeOfDay: string;
  notes: string;
  participants: string[];
  isOptional: boolean;
  mapsLink: string | null;
  icon: string;
}

export interface Hotel {
  city: string;
  address: string;
  dates: string;
  mapsLink: string;
}

export interface DayData {
  date: string;
  dayOfWeek: string;
  country: string;
  city: string;
  activities: Activity[];
  hotel: Hotel | null;
  optionalActivities: Activity[];
}

export const PARTICIPANTS = [
  'Ivania',
  'Jonathan',
  'Jurgen',
  'Sharon',
  'Hayley',
  'Jimena',
  'Giselle',
  'Carlos',
] as const;

export type Participant = (typeof PARTICIPANTS)[number];

export const COUNTRY_COLORS: Record<string, { primary: string; secondary: string; bg: string; accent: string }> = {
  'España': { primary: '#ff4757', secondary: '#ffc400', bg: 'rgba(255, 71, 87, 0.06)', accent: '#ff6b81' },
  'Italia': { primary: '#2ed573', secondary: '#ff4757', bg: 'rgba(46, 213, 115, 0.06)', accent: '#7bed9f' },
  'Suiza': { primary: '#ff4757', secondary: '#ffffff', bg: 'rgba(79, 172, 254, 0.06)', accent: '#70a1ff' },
  'Bélgica': { primary: '#ffa502', secondary: '#2d2926', bg: 'rgba(255, 165, 2, 0.06)', accent: '#ffc048' },
  'Francia': { primary: '#3742fa', secondary: '#ffffff', bg: 'rgba(55, 66, 250, 0.06)', accent: '#5352ed' },
  'Viaje': { primary: '#747d8c', secondary: '#a4b0be', bg: 'rgba(116, 125, 140, 0.06)', accent: '#a4b0be' },
  'Costa Rica': { primary: '#3742fa', secondary: '#ff4757', bg: 'rgba(55, 66, 250, 0.06)', accent: '#5352ed' },
};

export const COUNTRY_FLAGS: Record<string, string> = {
  'España': '🇪🇸',
  'Italia': '🇮🇹',
  'Suiza': '🇨🇭',
  'Bélgica': '🇧🇪',
  'Francia': '🇫🇷',
  'Costa Rica': '🇨🇷',
  'Viaje': '✈️',
};

// Location links from lugares.md
const LOCATIONS: Record<string, string> = {
  'gran vía': 'https://www.google.com/maps/search/?api=1&query=Gran+Via+Madrid',
  'galería de la academia': 'https://www.google.com/maps/search/?api=1&query=Galleria+dell+Accademia+Firenze',
  'jardines de boboli': 'https://www.google.com/maps/search/?api=1&query=Giardino+di+Boboli+Firenze',
  'palazzo pitti': 'https://www.google.com/maps/search/?api=1&query=Palazzo+Pitti+Firenze',
  'museo leonardo da vinci': 'https://www.google.com/maps/search/?api=1&query=Museo+Leonardo+Da+Vinci+Firenze',
  'casa de nicolás maquiavelo': 'https://www.google.com/maps/search/?api=1&query=Casa+di+Niccolo+Machiavelli+Florence',
  'catedral santa maría del fiore': 'https://www.google.com/maps/search/?api=1&query=Cattedrale+di+Santa+Maria+del+Fiore',
  'ponte vecchio': 'https://www.google.com/maps/search/?api=1&query=Ponte+Vecchio+Florence',
  'piazza del duomo': 'https://www.google.com/maps/search/?api=1&query=Piazza+del+Duomo+Firenze',
  'piazzale michelangelo': 'https://www.google.com/maps/search/?api=1&query=Piazzale+Michelangelo',
  'piazza del michelangelo': 'https://www.google.com/maps/search/?api=1&query=Piazzale+Michelangelo',
  'barrio oltrarno': 'https://www.google.com/maps/search/?api=1&query=Oltrarno+Florence',
  'barrio de oltrarno': 'https://www.google.com/maps/search/?api=1&query=Oltrarno+Florence',
  'capilla de los medici': 'https://www.google.com/maps/search/?api=1&query=Cappelle+Medicee+Firenze',
  'villa la pietra': 'https://www.google.com/maps/search/?api=1&query=Villa+La+Pietra+Florence',
  'villa schifanoia': 'https://www.google.com/maps/search/?api=1&query=Villa+Schifanoia+Florence',
  'signum': 'https://www.google.com/maps/search/?api=1&query=Signum+Florence+shop',
  'signum- souvenirs': 'https://www.google.com/maps/search/?api=1&query=Signum+Florence+shop',
  'museo di casa martinelli': 'https://www.google.com/maps/search/?api=1&query=Casa+Martinelli+Florence',
  'museo casa martinelli': 'https://www.google.com/maps/search/?api=1&query=Casa+Martinelli+Florence',
  'fotoautomatica': 'https://www.google.com/maps/search/?api=1&query=Fotoautomatica+Florence',
  'san gimignano': 'https://www.google.com/maps/search/?api=1&query=San+Gimignano',
  'monteriggioni': 'https://www.google.com/maps/search/?api=1&query=Monteriggioni',
  'cinque terre': 'https://www.google.com/maps/search/?api=1&query=Cinque+Terre',
  'venecia': 'https://www.google.com/maps/search/?api=1&query=Venice+Italy',
  'museo lindt': 'https://www.google.com/maps/search/?api=1&query=Lindt+Home+of+Chocolate+Zurich',
  'museo lindt hogar del chocolate': 'https://www.google.com/maps/search/?api=1&query=Lindt+Home+of+Chocolate+Zurich',
  'altstadt': 'https://www.google.com/maps/search/?api=1&query=Altstadt+Zurich',
  'lindenhof': 'https://www.google.com/maps/search/?api=1&query=Lindenhof+Zurich',
  'mirador lindenhof': 'https://www.google.com/maps/search/?api=1&query=Lindenhof+Zurich',
  'lago de zúrich': 'https://www.google.com/maps/search/?api=1&query=Lake+Zurich',
  'crucero por el lago': 'https://www.google.com/maps/search/?api=1&query=Lake+Zurich',
  'jardín botánico': 'https://www.google.com/maps/search/?api=1&query=Botanical+Garden+Zurich',
  'jardín botánico de la universidad': 'https://www.google.com/maps/search/?api=1&query=Botanical+Garden+Zurich',
  'augustinergasse': 'https://www.google.com/maps/search/?api=1&query=Augustinergasse+Zurich',
  'kilchberg': 'https://www.google.com/maps/search/?api=1&query=Kilchberg+Zurich',
  'kilchberg zh': 'https://www.google.com/maps/search/?api=1&query=Kilchberg+Zurich',
  'jardín chino': 'https://www.google.com/maps/search/?api=1&query=Chinese+Garden+Zurich',
  'villa patumbah': 'https://www.google.com/maps/search/?api=1&query=Villa+Patumbah',
  'polybahn': 'https://www.google.com/maps/search/?api=1&query=Polybahn+Zurich',
  'museo de historia natural': 'https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+Zurich',
  'interlaken': 'https://www.google.com/maps/search/?api=1&query=Interlaken',
  'lauterbrunnen': 'https://www.google.com/maps/search/?api=1&query=Lauterbrunnen',
  'mürren': 'https://www.google.com/maps/search/?api=1&query=Murren+Switzerland',
  'interlaken - lauterbrunnen - mürren': 'https://www.google.com/maps/search/?api=1&query=Interlaken',
  'noria de bruselas': 'https://www.google.com/maps/search/?api=1&query=Brussels+Ferris+Wheel',
  'atomium': 'https://www.google.com/maps/search/?api=1&query=Atomium',
  'mini europa': 'https://www.google.com/maps/search/?api=1&query=Mini+Europe+Brussels',
  'museo de los globos': 'https://www.google.com/maps/search/?api=1&query=Balloon+Museum+Brussels',
  'gran plaza': 'https://www.google.com/maps/search/?api=1&query=Grand+Place+Brussels',
  'manneken pis': 'https://www.google.com/maps/search/?api=1&query=Manneken+Pis',
  'mannekin pis': 'https://www.google.com/maps/search/?api=1&query=Manneken+Pis',
  'jardines petit sablon': 'https://www.google.com/maps/search/?api=1&query=Petit+Sablon+Brussels',
  'galería real de san hubert': 'https://www.google.com/maps/search/?api=1&query=Galeries+Royales+Saint+Hubert',
  'palacio real': 'https://www.google.com/maps/search/?api=1&query=Royal+Palace+Brussels',
  'monte de las artes': 'https://www.google.com/maps/search/?api=1&query=Mont+des+Arts',
  'grote markt': 'https://www.google.com/maps/search/?api=1&query=Grote+Markt+Bruges',
  'basílica de la santa sangre': 'https://www.google.com/maps/search/?api=1&query=Basilica+of+the+Holy+Blood+Bruges',
  'historium museo medieval': 'https://www.google.com/maps/search/?api=1&query=Historium+Bruges',
  'historium': 'https://www.google.com/maps/search/?api=1&query=Historium+Bruges',
  'canales de brujas': 'https://www.google.com/maps/search/?api=1&query=Bruges+Canals',
  'pasear en bote por los canales': 'https://www.google.com/maps/search/?api=1&query=Bruges+Canals',
  'puente san bonifacio': 'https://www.google.com/maps/search/?api=1&query=Boniface+Bridge+Bruges',
  'beguinario': 'https://www.google.com/maps/search/?api=1&query=Beguinage+Bruges',
  'beguinario jardín': 'https://www.google.com/maps/search/?api=1&query=Beguinage+Bruges',
  'torre eiffel': 'https://www.google.com/maps/search/?api=1&query=Eiffel+Tower',
  'río sena': 'https://www.google.com/maps/search/?api=1&query=Seine+River',
  'tour por el río sena': 'https://www.google.com/maps/search/?api=1&query=Seine+River',
  'crucero por el río sena': 'https://www.google.com/maps/search/?api=1&query=Seine+River',
  'crucero por el río sena de noche': 'https://www.google.com/maps/search/?api=1&query=Seine+River',
  'catacumbas': 'https://www.google.com/maps/search/?api=1&query=Catacombs+of+Paris',
  'notre dame': 'https://www.google.com/maps/search/?api=1&query=Notre+Dame+Paris',
  'louvre': 'https://www.google.com/maps/search/?api=1&query=Louvre+Museum',
  'musee des arts et métiers': 'https://www.google.com/maps/search/?api=1&query=Musee+des+Arts+et+Metiers',
  'musée des arts et métiers': 'https://www.google.com/maps/search/?api=1&query=Musee+des+Arts+et+Metiers',
  'sainte chapelle': 'https://www.google.com/maps/search/?api=1&query=Sainte+Chapelle',
  'palacio de versalles': 'https://www.google.com/maps/search/?api=1&query=Palace+of+Versailles',
  'museum d\'histoire naturelle': 'https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+Paris',
  'museo de historia natural paris': 'https://www.google.com/maps/search/?api=1&query=Natural+History+Museum+Paris',
  'disney': 'https://www.google.com/maps/search/?api=1&query=Disneyland+Paris',
  'disneyland': 'https://www.google.com/maps/search/?api=1&query=Disneyland+Paris',
  'jardines de luxemburgo': 'https://www.google.com/maps/search/?api=1&query=Luxembourg+Gardens+Paris',
  'montmartre': 'https://www.google.com/maps/search/?api=1&query=Montmartre',
  'montmatre': 'https://www.google.com/maps/search/?api=1&query=Montmartre',
  'petit palais': 'https://www.google.com/maps/search/?api=1&query=Petit+Palais',
  'rue de l\'université': 'https://www.google.com/maps/search/?api=1&query=Rue+de+l+Universite+Paris',
  'la rue de la universite': 'https://www.google.com/maps/search/?api=1&query=Rue+de+l+Universite+Paris',
  'rue de buenos aires': 'https://www.google.com/maps/search/?api=1&query=Rue+de+Buenos+Aires+Paris',
  'la rue de buenos aires': 'https://www.google.com/maps/search/?api=1&query=Rue+de+Buenos+Aires+Paris',
  'champ de mars': 'https://www.google.com/maps/search/?api=1&query=Champ+de+Mars',
  'merci store': 'https://www.google.com/maps/search/?api=1&query=Merci+Store+Paris',
  'merci store- souvenirs': 'https://www.google.com/maps/search/?api=1&query=Merci+Store+Paris',
  'au singe qui lit': 'https://www.google.com/maps/search/?api=1&query=Au+Singe+Qui+Lit+Paris',
  'au singe qui lit- souvenirs': 'https://www.google.com/maps/search/?api=1&query=Au+Singe+Qui+Lit+Paris',
  'museo del prado': 'https://www.google.com/maps/search/?api=1&query=Museo+del+Prado',
  'estadio del real madrid': 'https://www.google.com/maps/search/?api=1&query=Santiago+Bernabeu+Stadium',
  'estadio santiago bernabéu': 'https://www.google.com/maps/search/?api=1&query=Santiago+Bernabeu+Stadium',
  'plaza mayor': 'https://www.google.com/maps/search/?api=1&query=Plaza+Mayor+Madrid',
  'alcázar de toledo': 'https://www.google.com/maps/search/?api=1&query=Alcazar+of+Toledo',
  'catedral de toledo': 'https://www.google.com/maps/search/?api=1&query=Toledo+Cathedral',
  'toledo': 'https://www.google.com/maps/search/?api=1&query=Toledo+Spain',
  'estadio del barca': 'https://www.google.com/maps/search/?api=1&query=Camp+Nou',
  'camp nou': 'https://www.google.com/maps/search/?api=1&query=Camp+Nou',
  'sagrada familia': 'https://www.google.com/maps/search/?api=1&query=Sagrada+Familia',
  'barcelona': 'https://www.google.com/maps/search/?api=1&query=Barcelona+Spain',
  'toscana': 'https://www.google.com/maps/search/?api=1&query=San+Gimignano',
  'tour por la toscana': 'https://www.google.com/maps/search/?api=1&query=San+Gimignano',
  'tour de cinque terre': 'https://www.google.com/maps/search/?api=1&query=Cinque+Terre',
  'brujas': 'https://www.google.com/maps/search/?api=1&query=Bruges+Belgium',
  'excursión brujas': 'https://www.google.com/maps/search/?api=1&query=Bruges+Belgium',
};

export function getLocationLink(activityName: string, _city: string): string | null {
  const normalized = activityName
    .toLowerCase()
    .replace(/\[opción\]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/[📸🚶🍹😴🏨✈️🚆🍦🌄🌊🚤🎂🥩🏔️🗼☕🏙️🌊🏰]/g, '')
    .trim();

  // Try exact match first
  if (LOCATIONS[normalized]) return LOCATIONS[normalized];

  // Try partial matches
  for (const [key, url] of Object.entries(LOCATIONS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return url;
    }
  }

  // No match found in lugares.md — don't show location button
  return null;
}

// Hotels data from hospedajes.md
export const HOTELS: Hotel[] = [
  {
    city: 'Madrid',
    address: 'Calle Fuencarral 18',
    dates: '03 al 04 de junio',
    mapsLink: 'https://maps.app.goo.gl/z2ZAMDNB1t2puKrs6',
  },
  {
    city: 'Florencia',
    address: 'Via Pier Capponi, 89, Campo di Marte, 50132 Florencia, Italia',
    dates: '04 al 08 de junio',
    mapsLink: 'https://maps.app.goo.gl/ZFzTuqJoeKkQYfy66?g_st=aw',
  },
  {
    city: 'Zúrich',
    address: 'Technoparkstrasse 2, Gewerbeschule, 8005 Zúrich, Suiza (450m de la estación)',
    dates: '08 al 11 de junio',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=Technoparkstrasse+2+Zurich',
  },
  {
    city: 'Bruselas',
    address: 'Place Jourdan, Etterbeek, Bruxelles',
    dates: '11 al 13 de junio',
    mapsLink: 'https://goo.gl/maps/8e8FSzY68TD36FAj6?g_st=aw',
  },
  {
    city: 'París',
    address: '160, Rue Julian-Grimau, 94400 Vitry-sur-Seine, Francia',
    dates: '13 al 16 de junio',
    mapsLink: 'https://www.google.com/maps/search/?api=1&query=160+Rue+Julian+Grimau+Vitry+sur+Seine',
  },
  {
    city: 'Madrid',
    address: 'Calle Fuencarral 18',
    dates: '16 al 20 de junio',
    mapsLink: 'https://maps.app.goo.gl/z2ZAMDNB1t2puKrs6',
  },
];

