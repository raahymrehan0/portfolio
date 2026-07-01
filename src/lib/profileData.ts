export const profile = {
  name: 'Raahym Rehan',
  role: 'AI and data engineer',
  location: 'London, United Kingdom',
  email: 'raahym.rehan@gmail.com',
  github: 'https://github.com/raahymrehan0',
  linkedin: 'https://www.linkedin.com/in/raahymrehan/',
  instagram: 'https://instagram.com/raahymrehan',
  headline:
    'I build AI systems, data products, and backend tools for real decisions.',
  summary:
    'I am a third year Computer Science student at UCL. My work spans agent systems, market intelligence, crisis analysis, and IoT data.',
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
      'Working with quantitative models, streaming market data, and internal pricing flows.',
      'Building with care around visibility, reliability, and risk metrics.'
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
      'Built parts of a humanitarian intelligence platform for source grounded crisis reporting.',
    highlights: [
      'Worked on ingestion from HDX, GDELT, ReliefWeb, and Copernicus.',
      'Helped shape a LangGraph pipeline for IFRC aligned report generation.',
      'Integrated Django APIs, React views, Azure PostgreSQL, and Azure OpenAI.'
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
    status: 'Private repo',
    summary:
      'A geopolitical market intelligence platform for lithium, oil, and semiconductors.',
    description:
      'ForeSight monitors live signals, scores market risk, and links events to public companies. It combines Perplexity Sonar Pro, Finnhub data, RSS discovery, maps, timelines, and trading opportunity cards.',
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
    status: 'Public report',
    href: 'https://students.cs.ucl.ac.uk/2025/group21/',
    summary:
      'A crisis intelligence dashboard built with Microsoft and IFRC through UCL IXN.',
    description:
      'The platform turns crisis data into structured reports for analysts and operations teams. It uses LangGraph, Django, React, Azure PostgreSQL, Azure OpenAI, HDX, GDELT, ReliefWeb, and Copernicus.',
    contribution:
      'I focused on data ingestion, agent orchestration, and system integration.',
    tags: ['LangGraph', 'Django', 'React', 'Azure', 'PostgreSQL'],
    colour: '#7f1d1d'
  },
  {
    title: 'AIDR',
    kicker: 'Disaster response agents',
    image: '/images/projects/aidr-dashboard.svg',
    status: 'Private repo',
    summary:
      'A multi-agent disaster response command dashboard for the first hours after a crisis.',
    description:
      'AIDR combines FastAPI agents, PostgreSQL with PostGIS, WebSockets, OpenAI analysis, Mapbox, damage assessment, resource planning, and mission control.',
    contribution:
      'I worked on the agent backed response flow and the dashboard model for command decisions.',
    tags: ['FastAPI', 'PostGIS', 'Mapbox', 'WebSockets', 'OpenAI'],
    colour: '#0f766e'
  },
  {
    title: 'CampNav',
    kicker: 'Voice and vision navigation',
    image: '/images/projects/campnav-screenshot.jpeg',
    status: 'Private repo',
    summary:
      'A campus navigation assistant that listens, sees, and overlays direction cues.',
    description:
      'CampNav uses LiveKit voice, camera frames, multimodal LLM context, orientation data, QR detection, and AR arrow guidance. HackLondon work fed into the prototype.',
    contribution:
      'I helped connect the voice assistant, camera stream, and navigation overlay into one prototype.',
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

export const notes = [
  {
    title: 'Why ForeSight became a flagship project',
    date: '2026',
    summary:
      'It connects news discovery, market data, and risk scoring into one clear analyst workflow.',
    tags: ['AI', 'Markets', 'Product']
  },
  {
    title: 'What I learned from the IFRC project',
    date: '2026',
    summary:
      'Humanitarian software needs traceable sources and careful language. The hard part is making complex data usable under pressure.',
    tags: ['Humanitarian AI', 'Data']
  },
  {
    title: 'CampNav as a prototype',
    date: '2025',
    summary:
      'Voice, camera frames, and orientation data can make navigation feel more direct. The prototype explored that interaction loop.',
    tags: ['Voice', 'Vision', 'AR']
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
      'Modules include machine learning, quantum computation, algorithms, concurrency, and software engineering.'
    ]
  },
  {
    school: 'Nixor College',
    detail: 'Cambridge International A Levels',
    date: 'Aug 2022 to Jun 2024',
    highlights: ['Top in Pakistan with 4 A*s.']
  }
];
