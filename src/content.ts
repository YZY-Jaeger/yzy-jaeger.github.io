export type Project = {
  title: string
  year: string
  area: string
  summary: string
  contribution: string
  technologies: string[]
  image: string
  imageAlt: string
  links: Array<{ label: string; href: string; external?: boolean }>
}

export const projects: Project[] = [
  {
    title: '3D Object Pose Detection in Exercise Videos',
    year: '2025–2026',
    area: 'Master’s thesis · Computer Vision',
    summary:
      'Compared and adapted two RGB-only 6D pose estimation pipelines for tracking a dumbbell in real exercise video.',
    contribution:
      'Integrated SAM 2 segmentation, crop-aware camera calibration, temporal smoothing and tracking recovery, then evaluated the pipelines against Qualisys motion-capture data.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'SAM 2', '6D pose', 'Qualisys'],
    image: 'images/thesis-visual.svg',
    imageAlt: 'Abstract illustration of 3D object pose tracking and motion trajectories',
    links: [
      { label: 'Read thesis', href: 'files/Zeyuan_Yu_Master_Thesis.pdf' },
    ],
  },
  {
    title: 'Sailor Shift and the Spread of Oceanus Folk',
    year: '2025',
    area: 'IEEE VAST Challenge · Visual Analytics',
    summary:
      'A collaborative visual analytics system for exploring artists, collaborations and temporal patterns in a large music knowledge graph.',
    contribution:
      'Worked on Neo4j queries, FastAPI backend integration, the timeline visualization and network graph layout.',
    technologies: ['React', 'FastAPI', 'Neo4j', 'D3', 'sigma.js'],
    image: 'images/vast-visual.svg',
    imageAlt: 'Abstract network graph and timeline illustration',
    links: [
      { label: 'Live demo', href: 'http://217.160.195.146:3000/', external: true },
      {
        label: 'IEEE report',
        href: 'https://ieeexplore.ieee.org/document/11298668',
        external: true,
      },
    ],
  },
  {
    title: 'VR / MR Interaction Prototype',
    year: '2024',
    area: 'Interactive Systems · XR',
    summary:
      'Unity prototypes for Meta Quest focused on direct object manipulation in immersive and mixed-reality environments.',
    contribution:
      'Implemented and tested physics-based interactions, including pinch and grab techniques, with attention to immediate feedback and usability.',
    technologies: ['Unity', 'C#', 'Meta Quest', 'VR / MR', 'Physics'],
    image: 'images/xr-visual.svg',
    imageAlt: 'Abstract mixed-reality headset and hand interaction illustration',
    links: [],
  },
]

export const experience = [
  {
    period: 'Sep–Dec 2025',
    role: 'Working Student — E-Commerce / Data Analytics',
    organization: 'dreifive AG, Konstanz',
    details:
      'Supported customer-data analysis and reporting, updated Shopify pages and prepared documentation for AI-based product tagging.',
  },
  {
    period: 'May–Sep 2024',
    role: 'Research Assistant',
    organization: 'University of Konstanz',
    details:
      'Worked on camera calibration, ROS 2 tools, experimental setup and data processing for research on collective fish behaviour.',
  },
  {
    period: 'May–Aug 2022',
    role: 'IT / Research Assistant Intern',
    organization: 'China United Network Communications Corporation',
    details:
      'Contributed to a WeChat platform application, software requirements documentation and data-visualization work.',
  },
]

export const skillGroups = [
  {
    title: 'AI & Computer Vision',
    skills: ['Python', 'PyTorch', 'OpenCV', 'Detection', 'Segmentation', 'Tracking', 'Camera calibration'],
  },
  {
    title: 'Software & Web',
    skills: ['JavaScript / TypeScript', 'React', 'FastAPI', 'Flask', 'REST APIs', 'Java', 'C / C++', 'C#'],
  },
  {
    title: 'Data & Visualization',
    skills: ['SQL', 'Neo4j', 'pandas', 'NumPy', 'D3', 'sigma.js', 'Plotly / Dash'],
  },
  {
    title: 'XR, Robotics & Tools',
    skills: ['Unity', 'Meta Quest', 'ROS 2', 'Git', 'Docker', 'Linux', 'Jupyter'],
  },
]
