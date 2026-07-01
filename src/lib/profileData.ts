export const profile = {
  name: 'Raahym Rehan',
  role: 'AI and data engineer',
  location: 'London, United Kingdom',
  email: 'raahym.rehan@gmail.com',
  github: 'https://github.com/raahymrehan0',
  linkedin: 'https://www.linkedin.com/in/raahymrehan/',
  instagram: 'https://instagram.com/raahymrehan',
  headline: 'I build software, AI systems and data products for real use.',
  summary:
    'I am a third year Computer Science student at UCL. My work spans full stack software, agent systems and data engineering.',
  focus: [
    'Agentic AI systems',
    'Data engineering',
    'Backend services',
    'Human centered dashboards',
    'Robotics and IoT'
  ],
  stack: [
    'Python',
    'TypeScript',
    'Java',
    'React',
    'Django',
    'FastAPI',
    'PostgreSQL',
    'Azure',
    'Docker',
    'LangGraph'
  ]
};

export const experience = [
  {
    company: 'Wise',
    role: 'Software Engineering Intern',
    team: 'FX Risk and Market Data',
    location: 'London',
    date: 'Jun 2026 to present',
    summary:
      'Working on quantitative FX risk infrastructure and market data systems used in pricing and exposure workflows.',
    highlights: [
      'Contributing to backend services in Java and Python.',
      'Working with quantitative models and streaming market data for pricing flows.',
      'Building with care around visibility and reliability in risk metrics.'
    ],
    tags: ['Java', 'Python', 'Kafka', 'Market data']
  },
  {
    company: 'Microsoft and IFRC',
    role: 'AI and Data Engineer',
    team: 'UCL IXN, Virtual Situation Room',
    location: 'London',
    date: 'Sep 2025 to Apr 2026',
    summary:
      'Built a humanitarian intelligence platform for source grounded crisis reporting.',
    highlights: [
      'Built ingestion flows across HDX, GDELT and ReliefWeb.',
      'Added Copernicus data for geospatial crisis context.',
      'Designed a LangGraph pipeline for IFRC aligned report generation.',
      'Integrated Django APIs and React views with Azure PostgreSQL.',
      'Connected generation flows to Azure OpenAI.'
    ],
    tags: ['LangGraph', 'Django', 'React', 'Azure', 'PostgreSQL'],
    href: 'https://students.cs.ucl.ac.uk/2025/group21/'
  },
  {
    company: 'Computime',
    role: 'AI Research and Engineering Intern',
    team: 'Smart energy and IoT',
    location: 'Hong Kong',
    date: 'Jun 2025 to Aug 2025',
    summary:
      'Worked on smart home energy forecasting and IoT data workflows.',
    highlights: [
      'Integrated solar systems with Home Assistant over Modbus TCP and SunSpec.',
      'Built a load forecasting model with scikit-learn.',
      'Processed IoT telemetry for dashboards and energy saving decisions.'
    ],
    tags: ['Python', 'scikit-learn', 'IoT', 'Home Assistant']
  },
  {
    company: 'UCL Entrepreneurs',
    role: 'Web Developer',
    team: 'Society website',
    location: 'London',
    date: 'May 2025 to Mar 2026',
    summary:
      'Redesigned and maintained the society website for members and prospective founders.',
    highlights: [
      'Built responsive layouts for a clearer public site.',
      'Improved SEO and social content integration.',
      'Supported a site used by prospective members each month.'
    ],
    tags: ['Web', 'SEO', 'React', 'Design']
  }
];

export const featuredProjects = [
  {
    title: 'ForeSight',
    kicker: 'AI market intelligence',
    image: '/images/projects/foresight-logo.png',
    summary:
      'A geopolitical market intelligence platform for lithium and semiconductor supply chains.',
    description:
      'ForeSight monitors live signals and scores market risk. It links geopolitical events to public companies. It uses Perplexity Sonar Pro and Finnhub. It also uses RSS discovery, maps and opportunity cards.',
    contribution:
      'I worked across the product flow from event discovery to risk analysis and dashboard presentation.',
    tags: [
      'Next.js',
      'TypeScript',
      'Perplexity',
      'Finnhub',
      'Recharts',
      'React Leaflet'
    ],
    colour: '#07111f'
  },
  {
    title: 'IFRC Virtual Situation Room',
    kicker: 'Humanitarian intelligence',
    image: '/images/projects/ifrc-vsr.png',
    label: 'Public report',
    href: 'https://students.cs.ucl.ac.uk/2025/group21/',
    summary:
      'A crisis intelligence dashboard built with Microsoft and IFRC through UCL IXN.',
    description:
      'The platform turns crisis data into structured reports for analysts and operations teams. It uses LangGraph, Django and React. It also uses Azure PostgreSQL and Azure OpenAI. Source data comes from HDX, GDELT, ReliefWeb and Copernicus.',
    contribution:
      'I built the data ingestion flow, agent orchestration and system integration.',
    tags: ['LangGraph', 'Django', 'React', 'Azure', 'PostgreSQL'],
    colour: '#7f1d1d'
  },
  {
    title: 'AIDR',
    kicker: 'Disaster response agents',
    image: '/images/projects/aidr-dashboard.svg',
    summary:
      'A multi-agent disaster response command dashboard for the first hours after a crisis.',
    description:
      'AIDR combines FastAPI agents, PostgreSQL with PostGIS and WebSockets. It uses OpenAI analysis, Mapbox and mission control workflows.',
    contribution:
      'I built the agent backed response flow and dashboard model for command decisions.',
    tags: ['FastAPI', 'PostGIS', 'Mapbox', 'WebSockets', 'OpenAI'],
    colour: '#0f766e'
  },
  {
    title: 'CampNav',
    kicker: 'Voice and vision navigation',
    image: '/images/projects/campnav-screenshot.jpeg',
    summary:
      'A campus navigation assistant that listens and overlays direction cues.',
    description:
      'CampNav uses LiveKit voice and camera frames. It adds multimodal LLM context, orientation data and QR detection. HackLondon work fed into the AR guidance prototype.',
    contribution:
      'I connected the voice assistant, camera stream and navigation overlay into one prototype.',
    tags: ['LiveKit', 'Next.js', 'OpenAI', 'Computer vision', 'AR'],
    colour: '#4338ca'
  }
];

export const smallerProjects = [
  {
    title: 'Digital ESP32 Clock',
    href: 'https://github.com/raahymrehan0/Digital-ESP32-Clock',
    description:
      'A C++ ESP32 clock that retrieves live time and renders it on a LilyGO TTGO display.',
    tags: ['C++', 'ESP32', 'Embedded']
  },
  {
    title: 'Tetris Autoplayer',
    href: 'https://github.com/raahymrehan0/Tetris-Autoplayer',
    description:
      'A Python autoplayer for Tetris with move selection logic.',
    tags: ['Python', 'Algorithms']
  },
  {
    title: 'Hypercomplex Numbers',
    href: 'https://github.com/raahymrehan0/Hypercomplex-Numbers-Implementation',
    description:
      'Dual numbers for automatic differentiation and numerical experiments.',
    tags: ['Python', 'Math']
  },
  {
    title: 'Robot Pathfinder Simulation',
    href: 'https://github.com/raahymrehan0/Robot-Pathfinder-Simulation',
    description:
      'A C simulation for robot pathfinding and motion planning ideas.',
    tags: ['C', 'Robotics']
  },
  {
    title: 'IOT Integrated Bioreactor',
    href: 'https://github.com/raahymrehan0/IOT-Integrated-Bioreactor-',
    description:
      'An embedded IoT project around sensing and device integration.',
    tags: ['C++', 'IoT']
  }
];

export const education = [
  {
    school: 'University College London',
    detail: 'BSc Computer Science with a minor in Robotics',
    date: 'Sep 2024 to Jun 2027',
    highlights: [
      'First Class Honours.',
      'Undergraduate Teaching Assistant for Engineering Challenges.',
      'Modules include machine learning, quantum computation and algorithms.'
    ]
  },
  {
    school: 'Nixor College',
    detail: 'Cambridge International A Levels',
    date: 'Aug 2022 to Jun 2024',
    highlights: ['Top in Pakistan with 4 A*s.']
  }
];
