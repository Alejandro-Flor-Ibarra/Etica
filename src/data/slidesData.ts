export interface Slide {
  id: number
  title: string
  subtitle?: string
  content: string[]
  image: string
  bgColor: 'dark' | 'light'
  highlightColor?: 'orange' | 'blue'
}

export const slidesData: Slide[] = [
  {
    id: 1,
    title: 'Proyecto de Vida',
    subtitle: 'Alejandro Flor - ADSO SENA 2026',
    content: ['Ética ADSO SENA 2026', 'Construyendo mi futuro con disciplina, responsabilidad y visión'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 2,
    title: 'Introducción',
    content: [
      'Este proyecto de vida tiene como propósito fortalecer mi visión sobre el futuro y definir con mayor claridad las metas personales, profesionales y económicas que deseo alcanzar.',
      'A través de este ejercicio busco establecer objetivos concretos que me permitan avanzar de manera organizada hacia una vida más estable y con mayores oportunidades.'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 3,
    title: 'Objetivo General',
    content: [
      'Culminar mi proceso de formación profesional y continuar con estudios de especialización en el área de informática y tecnologías afines.',
      'Con el fin de alcanzar estabilidad económica y mejorar mi calidad de vida, así como la de mi futura familia.'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 4,
    title: 'Objetivos Específicos (Parte 1)',
    content: [
      'Obtener conocimientos sólidos en desarrollo de software, ingeniería de datos y seguridad informática.',
      'Alcanzar un nivel avanzado de inglés que me permita acceder a mejores oportunidades laborales.'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 5,
    title: 'Objetivos Específicos (Parte 2)',
    content: [
      'Construir estabilidad financiera mediante inversiones en agricultura, ganadería y logística de carga pesada.',
      'Desarrollar proyectos personales que generen crecimiento económico a largo plazo.'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 6,
    title: '¿Hacia dónde voy?',
    content: [
      'Me dirijo hacia un futuro basado en el crecimiento personal, profesional y emocional.',
      'Mi meta es construir una vida con estabilidad económica, independencia y bienestar familiar, manteniendo siempre una mentalidad de aprendizaje constante y superación.'
    ],
    image: 'https://images.unsplash.com/photo-1506702646918-8ede94c34b47?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 7,
    title: '¿Cómo me veo en el futuro?',
    content: [
      'Me veo como una persona más madura, preparada y estable, con la capacidad de enfrentar responsabilidades importantes tanto en lo profesional como en lo personal.',
      'Aspiro a tener equilibrio entre el trabajo, la familia y mis proyectos personales.'
    ],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 8,
    title: 'Aspecto Profesional',
    content: [
      'Actualmente estudio ADSO en el SENA, donde he encontrado una vocación en el desarrollo de software y en el área tecnológica.',
      'Mi objetivo es adquirir experiencia laboral, continuar mis estudios universitarios y, posteriormente, especializarme en seguridad informática e ingeniería de datos.',
      'También deseo fortalecer mis habilidades en inglés y programación para tener acceso a oportunidades laborales internacionales y participar en proyectos de alto nivel.'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 9,
    title: 'Aspecto Emocional',
    content: [
      'En el ámbito emocional, me proyecto formando una familia estable y unida.',
      'Deseo construir un hogar basado en el respeto, la responsabilidad y el apoyo mutuo.',
      'También espero convertirme en un ejemplo positivo para mis futuros hijos y brindarles oportunidades que les permitan crecer de manera integral.'
    ],
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 10,
    title: 'Aspecto Económico',
    content: [
      'Me veo alcanzando estabilidad económica mediante un empleo formal y proyectos de inversión paralelos.',
      'Uno de mis objetivos es generar ingresos suficientes para invertir en agricultura, especialmente en cultivos de café, y en el sector de logística y transporte de carga pesada.',
      'Considero importante construir fuentes de ingreso sostenibles que permitan tranquilidad financiera y crecimiento a largo plazo.'
    ],
    image: 'https://images.unsplash.com/photo-1554224314-5a5ae34b7ae9?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 11,
    title: 'Aspecto Social',
    content: [
      'En el aspecto social, espero mantener relaciones sanas y duraderas con las personas que han sido importantes en mi vida.',
      'Aunque con el tiempo las reuniones puedan ser menos frecuentes, considero valioso conservar amistades sinceras y compartir momentos significativos.'
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 12,
    title: '¿Cómo quiero que me vean en el futuro?',
    content: [
      'Quiero ser reconocido como una persona profesional, responsable y perseverante.',
      'También deseo que me identifiquen como alguien que logró construir una familia unida, mantener estabilidad emocional y avanzar con esfuerzo en cada una de sus metas.'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 13,
    title: 'Visión',
    content: [
      'Mi visión a mediano plazo es trabajar para una empresa internacional de software, fortaleciendo mi experiencia profesional y mejorando mis ingresos.',
      'A partir de ello, deseo invertir en el sector de transporte de carga pesada, comenzando con la adquisición de un camión y proyectándome hacia la creación de una empresa de logística.'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 14,
    title: 'Misión',
    content: [
      'Mi misión es construir una vida estable en lo emocional, económico e intelectual, brindando bienestar a mi familia y alcanzando tranquilidad financiera.',
      'Busco mantener un crecimiento constante como persona, profesional y futuro padre de familia, conservando siempre valores como la disciplina, el respeto y la responsabilidad.'
    ],
    image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 15,
    title: 'Mis Fortalezas',
    content: [
      'Una de mis principales fortalezas es la facilidad que he desarrollado para comprender la lógica de programación.',
      'Durante mi proceso en ADSO descubrí capacidades que antes no había explorado completamente, lo que me motivó a seguir aprendiendo cada día más.',
      'También considero una fortaleza mi interés por mejorar constantemente mi nivel de inglés y adaptarme a nuevas tecnologías.'
    ],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 16,
    title: 'Oportunidades',
    content: [
      'El desarrollo de software representa una gran oportunidad para mi crecimiento profesional.',
      'Encontrar una vocación en esta área a mis 33 años ha significado el inicio de una meta que había postergado durante mucho tiempo.',
      'Actualmente veo el estudio como una oportunidad real para transformar mi futuro.'
    ],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 17,
    title: 'Debilidades',
    content: [
      'Una de las dificultades que puedo enfrentar es la percepción de algunas empresas respecto a la edad, ya que en ocasiones priorizan perfiles más jóvenes dentro del sector tecnológico.',
      'Sin embargo, considero que la disciplina, la experiencia de vida y la capacidad de aprendizaje también son factores valiosos.'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 18,
    title: 'Amenazas',
    content: [
      'El avance acelerado de la inteligencia artificial representa un desafío importante dentro del desarrollo de software.',
      'La constante evolución tecnológica obliga a mantenerse actualizado y en aprendizaje permanente para continuar siendo competitivo en el mercado laboral.'
    ],
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  },
  {
    id: 19,
    title: 'Estrategias de Cambio y Compromisos',
    content: [
      'Mi principal compromiso es continuar fortaleciendo mis conocimientos en programación y alcanzar fluidez en inglés.',
      'También me comprometo a mejorar progresivamente en los aspectos sociales, emocionales y económicos mientras avanzo en mi formación académica.',
      'Además, buscaré mantener disciplina, constancia y organización en cada etapa de mi proceso personal y profesional.'
    ],
    image: 'https://images.unsplash.com/photo-1506702646918-8ede94c34b47?w=1200&h=600&fit=crop',
    bgColor: 'dark',
    highlightColor: 'orange'
  },
  {
    id: 20,
    title: 'Conclusiones',
    content: [
      'Este proyecto de vida me permite tener una visión más clara de mis metas y del camino que debo seguir para alcanzarlas.',
      'Aunque existen retos importantes, también considero que las oportunidades en el área tecnológica continúan creciendo para quienes están dispuestos a prepararse y adaptarse a los cambios.',
      'Finalmente, entiendo que el éxito no depende únicamente del conocimiento técnico, sino también de la disciplina, la perseverancia y la capacidad de mantener un propósito claro a lo largo del tiempo.'
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop',
    bgColor: 'dark'
  }
]
