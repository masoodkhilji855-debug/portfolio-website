import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'project-alpha',
    codeName: 'PROJECT ALPHA',
    title: 'High-Frequency Crypto Trading Interface',
    shortDescription: 'Sub-millisecond cryptocurrency trading terminal featuring live depth charts, orderbook feeds, and execution triggers.',
    fullDescription: 'Architected and engineered a low-latency digital asset trading dashboard designed for high-frequency crypto arbitrageurs. Engineered with customized WebSockets feeds handling over 18,000 tick updates per second with zero frame drops.',
    category: 'fintech',
    categoryLabel: 'FinTech & Web3',
    techStack: ['React.js', 'WebSockets', 'Node.js', 'Tailwind CSS', 'Canvas API'],
    clientSector: 'Algorithmic Hedge Funds & Prop Desks',
    deliveryTimeline: '6 Weeks',
    accentColor: 'cyan',
    badge: 'ULTRA LOW LATENCY',
    simulatedPreviewType: 'crypto-ticker',
    keyFeatures: [
      'Sub-15ms WebSocket data streams with auto-reconnecting fallback tunnels',
      'Interactive WebGL & 2D Canvas Candlestick Engine with custom indicators',
      'One-click flash order execution with client-side cryptographic transaction signing',
      'Real-time aggregated cross-exchange order book depth matrix'
    ],
    metrics: [
      { label: 'Throughput', value: '18K+', sub: 'events/sec' },
      { label: 'Feed Latency', value: '< 14ms', sub: 'WebSocket tick' },
      { label: 'Daily Volume', value: '$42M+', sub: 'processed' }
    ]
  },
  {
    id: 'project-beta',
    codeName: 'PROJECT BETA',
    title: 'Multi-Party Escrow Web Application',
    shortDescription: 'Bank-grade multi-signature escrow protocol web app safeguarding high-value digital asset acquisitions and merchant agreements.',
    fullDescription: 'Constructed an enterprise-level financial escrow portal with multi-party authorization gates, biometric session attestation, automated dispute arbitration workflows, and cryptographic audit logs.',
    category: 'security',
    categoryLabel: 'Security & Escrow',
    techStack: ['Next.js', 'PostgreSQL', 'AWS', 'TypeScript', 'Prisma ORM'],
    clientSector: 'Institutional M&A & Luxury Asset Platforms',
    deliveryTimeline: '8 Weeks',
    accentColor: 'purple',
    badge: 'BANK GRADE ENCRYPTION',
    simulatedPreviewType: 'escrow-flow',
    keyFeatures: [
      'Multi-sig 3-of-5 milestone release approval with immutable transaction ledger',
      'Automated smart condition triggers for milestone deliverables and inspections',
      'End-to-end encrypted document vault with watermarking and tamper detection',
      'SOC-2 compliant role-based identity verification pipelines'
    ],
    metrics: [
      { label: 'Protected Value', value: '$85M+', sub: 'in transit' },
      { label: 'Dispute Rate', value: '< 0.02%', sub: 'resolution' },
      { label: 'Release SLA', value: 'Instant', sub: 'on multi-sig' }
    ]
  },
  {
    id: 'project-gamma',
    codeName: 'PROJECT GAMMA',
    title: 'Local Business Data Extraction & Map Visualizer',
    shortDescription: 'High-throughput geographical intelligence tool scraping, indexing, and plotting regional business densities and competitive heatmaps.',
    fullDescription: 'Built an analytical extraction engine and interactive geographical visualizer that ingests geospatial data across thousands of postal codes, generating actionable demographic intelligence and lead scoring.',
    category: 'data-ai',
    categoryLabel: 'Data & Analytics',
    techStack: ['React', 'Google Places API', 'Python', 'FastAPI', 'Leaflet / GeoJSON'],
    clientSector: 'Commercial Real Estate & Regional Franchises',
    deliveryTimeline: '5 Weeks',
    accentColor: 'pink',
    badge: 'GEO-INTELLIGENCE',
    simulatedPreviewType: 'data-scraper',
    keyFeatures: [
      'Distributed Python workers fetching and sanitizing 500K+ geo-data points',
      'Interactive polygon density overlays and radius-based competitive heatmaps',
      'Automated foot-traffic estimation algorithms using public sentiment feeds',
      'One-click structured export in CSV, GeoJSON, and interactive client report decks'
    ],
    metrics: [
      { label: 'Entities Scraped', value: '1.4M+', sub: 'verified records' },
      { label: 'Query Speed', value: '0.12s', sub: 'spatial lookup' },
      { label: 'Lead Accuracy', value: '99.4%', sub: 'validated' }
    ]
  },
  {
    id: 'project-delta',
    codeName: 'PROJECT DELTA',
    title: 'Headless E-Commerce & Print-on-Demand Store',
    shortDescription: 'Lightning-fast headless commerce platform with real-time 3D merchandise preview and direct supplier fulfillment API synchronization.',
    fullDescription: 'Engineered a conversion-optimized headless e-commerce store backed by Shopify GraphQL API. Features instant live product customizers, localized currency pricing, and zero-inventory automatic fulfillment routing.',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce',
    techStack: ['Shopify Headless', 'Next.js', 'Tailwind CSS', 'Stripe', 'GraphQL'],
    clientSector: 'Global Apparel & Creator Brands',
    deliveryTimeline: '4 Weeks',
    accentColor: 'emerald',
    badge: '0.4S PAGE LOAD',
    simulatedPreviewType: 'ecommerce-checkout',
    keyFeatures: [
      'Headless architecture scoring 98+ Google Lighthouse Performance score',
      'Real-time apparel texture generator allowing custom design placements',
      'Automated print-on-demand supplier webhook dispatch across 4 continents',
      'One-tap checkout with Apple Pay, Google Pay, and localized regional payment gateways'
    ],
    metrics: [
      { label: 'Conversion Lift', value: '+34.8%', sub: 'post-launch' },
      { label: 'Avg Load Time', value: '410ms', sub: 'global CDN' },
      { label: 'Monthly GMV', value: '$1.2M', sub: 'transacted' }
    ]
  },
  {
    id: 'project-epsilon',
    codeName: 'PROJECT EPSILON',
    title: 'Dynamic District Academic Competition Visualizer',
    shortDescription: 'Real-time multi-school leaderboard and analytics command center tracking student scoring, school rankings, and historical trends.',
    fullDescription: 'Designed a high-capacity educational tournament scoring interface that coordinates live judges, district telemetry, real-time stage rankings, and dynamic data visualizers projected on stadium screens.',
    category: 'data-ai',
    categoryLabel: 'Data & Analytics',
    techStack: ['React.js', 'Chart.js', 'Node.js', 'Tailwind CSS', 'Socket.io'],
    clientSector: 'District Education Boards & STEM Olympiads',
    deliveryTimeline: '4 Weeks',
    accentColor: 'cyan',
    badge: 'LIVE LEADERBOARDS',
    simulatedPreviewType: 'academic-chart',
    keyFeatures: [
      'Multi-judge live evaluation pads streaming instantly to main auditorium screens',
      'Dynamic distribution curves, subject percentiles, and district heatmaps',
      'Interactive parent & student portal handling 50K concurrent spectators',
      'Automated certificate generation engine with cryptographic verification'
    ],
    metrics: [
      { label: 'Competitors', value: '45,000+', sub: 'students tracked' },
      { label: 'Live Judges', value: '320', sub: 'concurrent' },
      { label: 'Uptime', value: '100%', sub: 'during event' }
    ]
  },
  {
    id: 'project-zeta',
    codeName: 'PROJECT ZETA',
    title: 'B2B Supply Chain Logistics Tracker',
    shortDescription: 'End-to-end freight and consignment tracker providing live GPS telemetry, temperature logging, and customs checkpoint predictions.',
    fullDescription: 'Constructed an enterprise logistics cockpit unifying container ship positions, temperature-sensitive cold storage monitors, transit milestone triggers, and automated customs release paperwork.',
    category: 'cloud-enterprise',
    categoryLabel: 'Enterprise Logistics',
    techStack: ['Vue.js', 'Firebase', 'Google Maps API', 'Tailwind CSS', 'Cloud Functions'],
    clientSector: 'International Freight Forwarders & Pharmaceutical Cold-Chains',
    deliveryTimeline: '7 Weeks',
    accentColor: 'purple',
    badge: 'IOT & RADAR SYNC',
    simulatedPreviewType: 'logistics-radar',
    keyFeatures: [
      'Real-time IoT device sync monitoring cargo humidity, shock, and temperature',
      'Geofencing tripwires generating automated alerts on unexpected route deviations',
      'Predictive ETA calculation engine incorporating port congestion indices',
      'Automated bill of lading and customs clearance PDF document compiler'
    ],
    metrics: [
      { label: 'Shipments', value: '120K+', sub: 'tracked to date' },
      { label: 'Delay Reduction', value: '-28%', sub: 'avg transit time' },
      { label: 'Fleet Sync', value: 'Realtime', sub: 'sub-second IoT' }
    ]
  },
  {
    id: 'project-eta',
    codeName: 'PROJECT ETA',
    title: 'AI Voice-Generation & TTS SaaS Platform',
    shortDescription: 'High-converting interactive SaaS landing page and web workspace for synthetic voice synthesis, pitch controls, and multilingual dubbing.',
    fullDescription: 'Built a sleek, conversion-engineered SaaS web experience featuring an interactive browser waveform player, real-time voice timbre previewer, seamless billing tiers, and studio sound engine.',
    category: 'data-ai',
    categoryLabel: 'AI & SaaS',
    techStack: ['Next.js', 'Tailwind CSS', 'Web Audio API', 'Stripe', 'Framer Motion'],
    clientSector: 'Generative AI Startups & Media Production Studios',
    deliveryTimeline: '3 Weeks',
    accentColor: 'pink',
    badge: 'INTERACTIVE AUDIO UI',
    simulatedPreviewType: 'ai-audio-wave',
    keyFeatures: [
      'Interactive in-browser audio waveform player and pitch equalizer simulator',
      'Ultra-responsive landing page with interactive voice model selector',
      'Dynamic pricing tier calculator with Stripe customer portal integration',
      'Full dark-mode cyberpunk design with glassmorphic audio studio controls'
    ],
    metrics: [
      { label: 'Signup Rate', value: '18.4%', sub: 'visitor-to-trial' },
      { label: 'Audio Latency', value: '45ms', sub: 'in-browser preview' },
      { label: 'User Rating', value: '4.95 / 5', sub: 'across 12k reviews' }
    ]
  },
  {
    id: 'project-theta',
    codeName: 'PROJECT THETA',
    title: 'Optimized Corporate Portal on AWS Serverless',
    shortDescription: 'High-security multinational enterprise workspace operating on zero-idle serverless infrastructure with auto-scaling capabilities.',
    fullDescription: 'Engineered a fault-tolerant corporate dashboard consolidating internal employee directories, role-based asset managers, single sign-on (SSO), and document workflows on scalable AWS serverless primitives.',
    category: 'cloud-enterprise',
    categoryLabel: 'Cloud & Infrastructure',
    techStack: ['React', 'AWS Lambda', 'DynamoDB', 'AWS Cognito', 'API Gateway'],
    clientSector: 'Multinational Financial Holdings & Corporate Consultancies',
    deliveryTimeline: '6 Weeks',
    accentColor: 'cyan',
    badge: 'ZERO-IDLE SERVERLESS',
    simulatedPreviewType: 'aws-serverless',
    keyFeatures: [
      'Zero-maintenance serverless architecture cutting cloud infrastructure costs by 68%',
      'SAML 2.0 / Okta enterprise Single Sign-On (SSO) integration with biometric MFA',
      'DynamoDB single-table design with sub-10ms query execution across 2M records',
      'Automated CI/CD pipeline deploying immutable staging and production environments'
    ],
    metrics: [
      { label: 'Cloud Savings', value: '68%', sub: 'cost reduction' },
      { label: 'Availability', value: '99.99%', sub: 'AWS SLA' },
      { label: 'Active Seats', value: '14,000+', sub: 'employees daily' }
    ]
  },
  {
    id: 'project-iota',
    codeName: 'PROJECT IOTA',
    title: 'Modern Luxury Property Platform with Interactive Maps',
    shortDescription: 'High-end real estate marketplace featuring 3D building exploration, vector boundary searches, neighborhood scoring, and mortgage tools.',
    fullDescription: 'Designed and deployed a luxury property platform with custom Mapbox GL styling, commute-time radius filters, 3D aerial building viewports, and automated schedule-a-tour booking workflows.',
    category: 'ecommerce',
    categoryLabel: 'Real Estate & Maps',
    techStack: ['Next.js', 'Mapbox GL', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    clientSector: 'Luxury Real Estate Agencies & Private Property Developers',
    deliveryTimeline: '5 Weeks',
    accentColor: 'emerald',
    badge: 'VECTOR MAP INTERACTION',
    simulatedPreviewType: 'property-map',
    keyFeatures: [
      'Custom vector map layers styled with dark cyberpunk tones and neon pin clusters',
      'Polygon lasso search allowing buyers to draw custom neighborhood boundaries',
      'Dynamic amortization and investment yield forecasting calculator',
      'Instant SMS/WhatsApp agent dispatch directly integrated into listing cards'
    ],
    metrics: [
      { label: 'Listing Views', value: '3.8M+', sub: 'monthly hits' },
      { label: 'Map FPS', value: '60 FPS', sub: 'smooth panning' },
      { label: 'Inquiry Rate', value: '+42%', sub: 'vs legacy portal' }
    ]
  },
  {
    id: 'project-kappa',
    codeName: 'PROJECT KAPPA',
    title: 'Marketplace Keyword & Product Research Tool',
    shortDescription: 'High-speed algorithmic data tool reverse-engineering search algorithms, keyword velocity, competition indices, and revenue estimates.',
    fullDescription: 'Created a competitive intelligence platform for high-volume Amazon and e-commerce sellers, processing millions of daily product ASINs and search ranking fluctuations in real-time.',
    category: 'data-ai',
    categoryLabel: 'Data & Analytics',
    techStack: ['React.js', 'Express', 'MongoDB', 'Redis', 'Python'],
    clientSector: 'E-Commerce Aggregators & Marketplace Power Sellers',
    deliveryTimeline: '6 Weeks',
    accentColor: 'purple',
    badge: 'DATA CLUSTERING',
    simulatedPreviewType: 'keyword-analyzer',
    keyFeatures: [
      'Reverse ASIN search revealing top converting organic and sponsored keywords',
      'Redis cache layer serving 10M+ indexed search queries in under 50 milliseconds',
      'Historical price-elasticity curve models predicting optimal product profit margins',
      'Automated daily alert system monitoring competitor stockouts and rank drops'
    ],
    metrics: [
      { label: 'Keywords Indexed', value: '85M+', sub: 'daily tracked' },
      { label: 'Cache Hit Rate', value: '94.2%', sub: 'Redis cluster' },
      { label: 'Seller Revenue', value: '$160M+', sub: 'managed' }
    ]
  }
];
