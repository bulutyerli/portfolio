import Divider from '@/components/ui/Divider';
import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';
import Marker from '@/components/ui/Marker';
import { challenges, features, skills } from './constants';

export default function Page() {
  return (
    <article className="text-justify px-4 xl:px-0 space-y-4 md:space-y-6">
      <div className="grid md:grid-cols-2 group gap-4 md:gap-6">
        <div>
          <div className="max-w-prose space-y-2">
            <h1 className="text-2xl font-medium">Siryona — Astrology App</h1>
            <p>
              An astrology application for personalized birth charts, planetary transits,
              compatibility, and daily insights.
            </p>
          </div>

          <Divider className="my-4 md:my-6" width="full" />

          <section>
            <div className="space-y-2">
              <h2 className="text-xl font-medium">Overview</h2>
              <p className="max-w-prose">
                In 2026, I built Siryona as an independent product from the ground up. I was
                responsible for the product architecture, backend, astrology calculations, mobile
                application, and subscription system.
              </p>
            </div>
          </section>
        </div>

        <Image
          className={cn(colorFilter)}
          src="/siryona/siryona1.webp"
          alt="Siryona astrology app"
          width={1696}
          height={957}
        />
      </div>

      <Divider width="full" />

      <section className="space-y-2 group/highlight">
        <h2 className="text-xl font-medium">Features</h2>

        <ul className="list-disc space-y-1 pl-5 grid md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <Divider width="full" />

      <section className="space-y-2 md:space-y-4 max-w-prose">
        <h2 className="text-xl font-medium">Development</h2>
        <p>
          I designed and developed the entire application independently, from the backend and
          astrology calculation system to the React Native mobile application and subscription
          infrastructure.
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

      <section className="space-y-2 md:space-y-4">
        <h2 className="text-xl font-medium">Outcome</h2>
        <p>
          Siryona was developed as a complete, production-ready astrology platform, with the core
          product, backend infrastructure, and mobile application fully built but not yet launched.
        </p>
      </section>
    </article>
  );
}
