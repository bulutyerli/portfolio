export const features = [
  'Birth chart calculation',
  'Personalized daily horoscope',
  'Planetary transits',
  'Moon calendar and daily moon insights',
  'Synastry and compatibility reports',
  'Astrology encyclopedia',
  'AI-assisted astrology interpretations',
  'Premium subscription',
];

export const skills = [
  'TypeScript',
  'React Native',
  'Expo',
  'NestJS',
  'PostgreSQL',
  'Prisma',
  'Redis',
  'BullMQ',
  'OpenAI',
  'Swiss Ephemeris',
  'RevenueCat',
];

export const challenges = [
  {
    title: 'Astrology Data & Calculations',
    paragraphs: [
      'Accurate birth charts and planetary positions were the foundation of the app, so I built the calculation system around Swiss Ephemeris.',
      'The backend handles planets, houses, aspects, transits, and other chart data and uses the same calculated data across different reports and features.',
      'To avoid recalculating the same data repeatedly, I implemented a Redis caching layer for calculated astrology data and reused cached results across the application.',
    ],
  },
  {
    title: 'Scalable Background Processing',
    paragraphs: [
      'Content generation and other long-running tasks are handled outside the main API using BullMQ workers and scheduled cron jobs.',
      'The API, workers, and cron services are separated so each can be scaled independently based on its workload.',
      'When a user becomes premium, existing content that was previously unavailable to them can be generated in the background without blocking the application.',
    ],
  },
  {
    title: 'AI & Multilingual Content',
    paragraphs: [
      'The app supports multiple languages, so I designed the GPT prompts to produce consistent interpretations while adapting the output to each language.',
      'I structured the prompts around the calculated astrology data instead of asking the model to calculate it, keeping the AI focused on interpretation.',
      'Prompt caching and reusable prompt structures help reduce unnecessary token usage when generating similar content.',
    ],
  },
  {
    title: 'Authentication & Subscriptions',
    paragraphs: [
      'I built custom authentication with email, Google, and Apple sign-in, including universal linking for authentication flows.',
      'RevenueCat handles mobile purchases while the backend manages subscription states and user entitlements.',
      'The same access logic is used across premium reports and features so subscription rights remain consistent throughout the application.',
    ],
  },
];
