export const features = [
  'Live auctions with custom bidding system',
  'Verified users and store owners',
  'Editor-approved listings',
  'AI-assisted listing/auction creation and price estimation',
  'Individual store pages for sellers',
  'KYC, identity and phone verification',
  'Online payments and custom invoicing',
  'Seller and bidder dashboards',
  'Questions and answers for listings',
  'Push notifications and transactional emails',
  'Admin panel',
  'React Native mobile app',
];

export const skills = [
  'TypeScript',
  'Next.js',
  'React Native',
  'Expo',
  'PostgreSQL',
  'Supabase',
  'Tailwind CSS',
  'Unistyles',
];

export const challenges = [
  {
    title: 'Real-time Auctions',
    paragraphs: [
      'Auctions were really important for the client. Multiple auctions and bids had to be handled carefully.',
      'Because the client chose Supabase, I used Supabase Realtime for live auctions. To prevent conflicts, I used database transactions for new bids.',
      'If a bid came in during the last minute, the auction time was reset to one minute to prevent last-second winners.',
      'Auction endings, winner selection, and two backup winners were handled with cron jobs.',
    ],
  },
  {
    title: 'Complex Billing',
    paragraphs: [
      'Since Supabase does not have queues and I did not want to add another dependency just for queues, I built a custom queue system and handled the billing flow with three well-timed cron jobs. They scan new purchases, update statuses, and handle retries.',
      'I integrated Paraşüt for invoicing, but the billing flow required more than simply sending data to the API. I had to track invoice creation and statuses, wait for invoice PDFs to be generated, update the related database records, and send the invoices to buyers by email.',
    ],
  },
  {
    title: 'Custom Access & Subscription System',
    paragraphs: [
      'The website uses a local credit card payment provider, while the Expo app uses Apple and Google purchases. I had to handle subscriptions and one-time purchases across these different payment flows.',
      'The client also needed a custom system to manage what users could do on the platform. Listing, bidding, auction, and promotion rights could all depend on the user or store subscription.',
      'I designed the system with states such as pending approval, active, expiring, and expired, and handled the related user rights across both web and mobile.',
      'Database webhooks, triggers, and cron jobs were used to keep subscription states and user rights updated.',
    ],
  },
  {
    title: 'SEO & Search Visibility',
    paragraphs: [
      'The marketplace had many dynamic pages for watches, listings, and stores, so SEO had to be handled dynamically across the platform.',
      'I implemented dynamic metadata, structured data, canonical URLs, dynamic sitemaps, and indexing rules for listing and store pages.',
      'Some of the pages reached the top position in Google for relevant general searches within the first 3 months.',
    ],
  },
];
