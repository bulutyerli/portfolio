import { ProjectCardProps } from '@/lib/types';

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'workwise',
    desc: [
      'A company management app built around role-based access control — employees, managers, and HR each see and do different things based on their role, from requesting leave to viewing salaries and financial reports.',
    ],
    image: '/workwise/workwise1.webp',
    githubLink: 'https://github.com/bulutyerli/WorkWise-Frontend',
    casestudy: '/projects/workwise',
    skills: ['typescript', 'react', 'node.js', 'express', 'postgresql', 'docker', 'jest'],
    bulletins: [
      'Hierarchy-based leave approval system',
      'Role-scoped data access across HR, manager, and employee tiers',
      'Financial dashboard with income and expense visualizations',
      'MVC backend deployed on Google Cloud via Docker',
    ],
  },
  {
    title: 'nuvola coffee shop',
    desc: [
      'A demo coffee shop built to properly implement a full Stripe payment flow — webhooks, order fulfillment, and payment status handling.',
      'AWS Cognito handles auth with email verification, and the cart persists in local storage before sign in.',
      'Wrote a Medium article on the Stripe + Next.js integration.',
    ],
    image: '/nuvolacoffee/nuvolacoffee1.webp',
    githubLink: 'https://github.com/bulutyerli/nuvola-coffee-shop',
    livelink: 'https://nuvola-coffee.vercel.app',
    skills: ['typescript', 'next.js', 'redux', 'stripe', 'scss modules', 'aws'],
  },

  {
    title: 'denizweber.com',
    desc: [
      'Freelance project for a professional book translator.',
      'Translated works archive, publisher testimonials, and service listings — with SEO-optimized pages and strong Core Web Vitals scores.',
      'Built with Sanity CMS so the client can manage her own content without touching code.',
    ],
    image: '/denizweber/denizweber1.webp',
    livelink: 'https://denizweber.com',
    skills: ['typescript', 'next.js', 'sanity', 'tailwind'],
  },
];
