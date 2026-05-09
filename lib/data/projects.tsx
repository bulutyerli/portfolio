import { ProjectCardProps } from '@/lib/types';

export const PROJECTS: ProjectCardProps[] = [
  {
    title: 'workwise',
    desc: [
      'A company management app where HR, managers, and employees each have their own access level and features.',
      'HR manages staff and salaries, managers approve leave requests, employees can submit requests and view the team.',
      'Comes with a financial dashboard, org chart, and a documented REST API.',
    ],

    image: '/workwise/workwise1.webp',
    githubLink: 'https://github.com/bulutyerli/WorkWise-Frontend',
    skills: ['typescript', 'react', 'node.js', 'express', 'postgresql', 'docker', 'jest'],
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
      'Translated works archive, publisher testimonials, and service listings — with SEO-optimized pages.',
      'Built with Sanity CMS so the client can manage her own content without touching code.',
    ],
    image: '/denizweber/denizweber1.webp',
    livelink: 'https://denizweber.com',
    skills: ['typescript', 'next.js', 'sanity', 'tailwind'],
  },
];
