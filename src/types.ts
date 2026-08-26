export type ProjectCategory = 
  | 'all'
  | 'fintech'
  | 'security'
  | 'data-ai'
  | 'ecommerce'
  | 'cloud-enterprise';

export interface ProjectMetric {
  label: string;
  value: string;
  sub?: string;
}

export interface Project {
  id: string;
  codeName: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: ProjectCategory;
  categoryLabel: string;
  techStack: string[];
  clientSector: string;
  deliveryTimeline: string;
  keyFeatures: string[];
  metrics: ProjectMetric[];
  accentColor: 'cyan' | 'purple' | 'pink' | 'emerald';
  badge: string;
  simulatedPreviewType: 
    | 'crypto-ticker'
    | 'escrow-flow'
    | 'data-scraper'
    | 'ecommerce-checkout'
    | 'academic-chart'
    | 'logistics-radar'
    | 'ai-audio-wave'
    | 'aws-serverless'
    | 'property-map'
    | 'keyword-analyzer';
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
  accentColor: 'cyan' | 'purple' | 'pink' | 'emerald';
}

export interface ContactSubmission {
  fullName: string;
  email: string;
  companyOrRole?: string;
  selectedService: string;
  projectBudget: string;
  timeline: string;
  projectDetails: string;
  submittedAt: string;
}
