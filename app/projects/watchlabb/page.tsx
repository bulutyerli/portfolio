import Divider from '@/components/ui/Divider';
import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';
import Marker from '@/components/ui/Marker';
import { challenges, features, skills } from './constants';
import Link from 'next/link';
import { FaBook, FaExternalLinkSquareAlt, FaGooglePlay } from 'react-icons/fa';

export default function Page() {
  return (
    <article className="text-justify px-4 xl:px-0 space-y-4 md:space-y-6">
      <div className="grid md:grid-cols-2 group gap-4 md:gap-6">
        <div>
          <div className="max-w-prose space-y-2">
            <h1 className="text-2xl font-medium">Watchlabb Web & Mobile App</h1>
            <p>
              Turkey&#39;s first luxury watch marketplace with live auctions and verified listings.
            </p>
          </div>

          <Divider className="my-4 md:my-6" width="full" />

          <section>
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Overview</h2>
              <p className="max-w-prose">
                In 2025, Vision Ventures hired me to build a luxury watch marketplace for the
                Turkish market. As the sole developer, I was responsible for the project from
                architecture and backend to the web and React Native applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-between lg:justify-start mt-2 md:mt-4">
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
              {/* <Divider width="short" />
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
          </Marker>*/}
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
          </section>
        </div>

        <Image
          className={cn(colorFilter)}
          src="/watchlabb/watchlabb1.webp"
          alt="watchlabb"
          width={1696}
          height={957}
        />
      </div>

      <Divider width="full" />

      <section className="space-y-2 group/highlight">
        <h2 className="text-xl font-medium">Features</h2>

        <ul className="list-disc space-y-1 pl-5 grid md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature}>
              {feature === 'React Native mobile app' ? (
                <Marker group="highlight">{feature}</Marker>
              ) : (
                feature
              )}
            </li>
          ))}
        </ul>
      </section>

      <Divider width="full" />

      <section className="space-y-2 md:space-y-4 max-w-prose">
        <h2 className="text-xl font-medium">Development</h2>
        <p>
          I spent the first four months designing the architecture and building the core
          marketplace. Over the following eight months, I developed the remaining features and the
          React Native mobile application.
        </p>
      </section>

      <Divider width="full" />

      <section className="space-y-2 md:space-y-4">
        <h2 className="text-xl font-medium">Tech Stack</h2>

        <ul className="list-disc space-y-1 pl-5 grid md:grid-cols-2">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <Divider width="full" />

      <section className="space-y-2 md:space-y-4">
        <h2 className="text-xl font-medium">Challenges</h2>

        <div className="space-y-4 grid md:grid-cols-2 gap-4">
          {challenges.map(({ title, paragraphs }) => (
            <div key={title} className="space-y-2 max-w-prose">
              <h3 className="font-medium">
                <span className="mr-2 text-zinc-400">—</span>
                {title}
              </h3>

              <div className="space-y-1">
                {paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider width="full" />

      <section className="space-y-2 md:space-y-4 group/highlight">
        <h2 className="text-xl font-medium">Outcome</h2>
        <p>
          The platform launched with both web and mobile applications and is currently serving{' '}
          <Marker group="highlight" className="delay-100">
            4,000+ registered users
          </Marker>{' '}
          and{' '}
          <Marker group="highlight" className="delay-700">
            generating revenue
          </Marker>
          .
        </p>
      </section>
    </article>
  );
}
