import { Service } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'full-stack-web',
    number: '01',
    title: 'Full-Stack Web Development',
    tagline: 'High-speed, scalable digital platforms with flawless UX.',
    description: 'We engineer bespoke single-page applications, SaaS dashboards, and complex digital platforms. From responsive React/Next.js client experiences to battle-tested microservice backends, we prioritize performance, accessibility, and clean architecture.',
    features: [
      'Modern React, Next.js, and TypeScript architectures',
      'Real-time WebSocket & server-sent event (SSE) streams',
      'Responsive, pixel-precise cyberpunk or minimalist interfaces',
      'End-to-end automated testing and audit compliance'
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    deliverables: [
      'Production-ready web application',
      'Complete Git source code repository',
      'Comprehensive component documentation',
      'Post-launch performance benchmarks'
    ],
    accentColor: 'cyan'
  },
  {
    id: 'api-integration',
    number: '02',
    title: 'Custom API Integration',
    tagline: 'Flawless data pipelines, Webhooks, and custom endpoints.',
    description: 'Unify disparate systems with high-throughput RESTful, GraphQL, and gRPC APIs. We engineer secure authentication mechanisms, rate-limited gateways, third-party payment bridges, and automated sync jobs with maximum fault tolerance.',
    features: [
      'GraphQL & RESTful microservice interface design',
      'Stripe, PayPal, and regional payment gateway orchestration',
      'OAuth2, JWT, and biometric cryptographic authorization',
      'Webhook processing queues with dead-letter recovery'
    ],
    techStack: ['GraphQL', 'Express', 'FastAPI', 'Redis', 'WebSockets', 'Stripe'],
    deliverables: [
      'Interactive Swagger / OpenAPI 3.0 documentation',
      'SDK packages for multiple client languages',
      'Secure sandbox staging environment',
      'SLA-backed endpoint monitoring configuration'
    ],
    accentColor: 'purple'
  },
  {
    id: 'cloud-infrastructure',
    number: '03',
    title: 'Cloud Infrastructure & DevOps',
    tagline: 'Resilient, auto-scaling architectures with zero downtime.',
    description: 'Design and deploy cost-optimized, bulletproof cloud topologies on AWS, Google Cloud, and edge delivery networks. We automate continuous integration/continuous deployment (CI/CD) pipelines, enforce container security, and manage serverless fleets.',
    features: [
      'AWS (Lambda, ECS, DynamoDB, S3) & Google Cloud Platform',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Automated zero-downtime CI/CD deployment pipelines',
      'Real-time telemetry, Prometheus/Grafana, and DDoS mitigation'
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Cloudflare'],
    deliverables: [
      'Automated deployment pipelines',
      'Infrastructure-as-Code Terraform scripts',
      'Disaster recovery & backup protocols',
      'Cloud cost optimization audit & reports'
    ],
    accentColor: 'pink'
  },
  {
    id: 'ecommerce-solutions',
    number: '04',
    title: 'E-Commerce Solutions',
    tagline: 'Headless, lightning-fast storefronts tailored for conversion.',
    description: 'We build ultra-fast, conversion-driven headless e-commerce storefronts that eliminate friction at every step. From custom product visualizers and instant cart checkouts to ERP and warehouse fulfillment sync, we elevate the global purchasing experience.',
    features: [
      'Shopify Headless Storefront API & Custom Composable CMS',
      'Sub-second page transitions and dynamic cart hydration',
      'Automated inventory, ERP, and dropship supplier sync',
      'Multi-currency, localized tax, and international checkout'
    ],
    techStack: ['Shopify Plus', 'Next.js', 'Stripe', 'Algolia Search', 'Sanity CMS', 'Medusa.js'],
    deliverables: [
      'High-converting custom headless storefront',
      'Product catalog and order management dashboard',
      'Payment gateway and carrier shipping integrations',
      'Core Web Vitals 95+ performance certificate'
    ],
    accentColor: 'emerald'
  }
];
