import { ProjectCardProps } from '@/lib/types';

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'workwise',
    desc: [
      'A company management platform built around role-based access control. Employees, managers, and HR each operate within strict permission boundaries — from leave approval workflows to salary visibility and financial reporting.',
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
      'AWS Cognito handles auth with email' + ' verification,' + ' and the cart persists in local storage before sign in.',
      'Wrote a Medium article on the Stripe + Next.js integration.',
    ],
    image: '/nuvolacoffee/nuvolacoffee1.webp',
    githubLink: 'https://github.com/bulutyerli/nuvola-coffee-shop',
    livelink: 'https://nuvola-coffee.vercel.app',
    skills: ['typescript', 'next.js', 'redux', 'stripe', 'scss modules', 'aws'],
  },

  {
    title: 'denizweber.com',
    desc: ['Personal brand site for a professional book translator. Sanity CMS for client-managed content, SEO-optimized pages, and a translated works archive with testimonials.'],
    image: '/denizweber/denizweber1.webp',
    livelink: 'https://denizweber.com',
    skills: ['typescript', 'next.js', 'sanity', 'tailwind'],
  },
];
