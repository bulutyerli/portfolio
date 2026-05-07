import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';
import Badge from '@/components/ui/Badge';
import { FaApple, FaExternalLinkSquareAlt, FaGooglePlay } from 'react-icons/fa';
import Link from 'next/link';
import Divider from '@/components/ui/Divider';
import Marker from '@/components/ui/Marker';

const skills = [
  'typescript',
  'next.js',
  'react native',
  'expo',
  'postgresql',
  'supabase',
  'tailwind',
  'unistyles',
];

export default function MainProject() {
  return (
    <article className="flex flex-col lg:flex-row-reverse items-center lg:items-start justify-center lg:justify-between w-full group lg:gap-4 group/highlight">
      <div className="aspect-video w-full lg:w-3/5 relative">
        <Image
          alt="watchlabb"
          fill
          src="/watchlabb/watchlabb1.webp"
          className={cn(colorFilter)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="lg:w-2/5 text-justify">
        <h3 className="text-2xl font-medium tracking-wider my-4 lg:my-0 text-center lg:text-start">
          Watchlabb Web & Mobile
        </h3>
        <p>
          A watch marketplace where users can list for sale or create real-time auctions for
          watches. Built solo — web and mobile. Currently serving{' '}
          <Marker className="delay-100" group={'highlight'}>
            4,000+ registered users
          </Marker>{' '}
          and{' '}
          <Marker className="delay-700" group={'highlight'}>
            generating revenue
          </Marker>
          .
        </p>
        <ul className="list-['—'] ml-4 mt-3 space-y-1 marker:text-zinc-500 dark:marker:text-zinc-500 [&>li]:pl-1">
          <li>Real-time auction system with live bidding</li>
          <li>KYC & phone verification pipeline</li>
          <li>
            Credit card payment & auto invoice integration for Web, Native in-app purchase system
            for mobile
          </li>
          <li>Role-based access control</li>
          <li>Instagram theme creation and auto-sharing for Store owners</li>
        </ul>
        <ul className="flex flex-wrap gap-2 mt-3">
          {skills.map((skill) => (
            <li key={skill}>
              <Badge text={skill} />
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 items-center justify-between lg:justify-start mt-3">
          <Marker>
            <Link
              href="https://watchlabb.com"
              className="group/link flex items-center gap-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaExternalLinkSquareAlt className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
              <span>Website</span>
            </Link>
          </Marker>
          <Divider width="short" />
          <Marker>
            <Link
              href="https://apps.apple.com/tr/app/watchlabb/id6760569475"
              className="group/link flex items-center gap-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaApple className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
              <span>App Store</span>
            </Link>
          </Marker>
          <Divider width="short" />
          <Marker>
            <Link
              href="https://play.google.com/store/apps/details?id=com.watchlabb.app"
              className="group/link flex items-center gap-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGooglePlay className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
              <span>Google Play</span>
            </Link>
          </Marker>
        </div>
      </div>
    </article>
  );
}
