import Link from 'next/link';
import Divider from '@/components/ui/Divider';
import { Fragment } from 'react';
import Marker from '@/components/ui/Marker';

const links = [
  { label: 'GitHub', href: 'https://github.com/bulutyerli' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/bulutyerli/' },
  { label: 'Mail', href: 'mailto:hello@bulutyerli.com' },
];

export default function ContactLinks() {
  return (
    <nav className="flex items-center gap-1">
      {links.map((link, index) => (
        <Fragment key={link.label}>
          <Marker>
            <Link
              href={link.href}
              target={link.label !== 'Mail' ? '_blank' : undefined}
              rel={link.label !== 'Mail' ? 'noopener noreferrer' : undefined}
              className="text-sm underline font-mono text-black/70 dark:text-white/70 hover:text-black dark:hover:text-white transition-all duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          </Marker>
          {index < links.length - 1 && <Divider width="short" />}
        </Fragment>
      ))}
    </nav>
  );
}
