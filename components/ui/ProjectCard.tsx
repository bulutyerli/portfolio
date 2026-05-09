import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';
import Badge from '@/components/ui/Badge';
import { FaBook, FaExternalLinkSquareAlt, FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import Divider from '@/components/ui/Divider';
import Marker from '@/components/ui/Marker';
import { Fragment } from 'react';
import { ProjectCardProps } from '@/lib/types';

export default function ProjectCard({
  title,
  desc,
  image,
  skills,
  livelink,
  bulletins,
  githubLink,
  casestudy,
  className,
}: ProjectCardProps) {
  return (
    <article className={cn('flex flex-col items-center md:items-start w-full group', className)}>
      <div className="aspect-video w-full relative">
        <Image
          alt={`${title} screenshot`}
          src={image}
          fill
          className={cn(colorFilter, 'object-cover object-top')}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="text-justify">
        <h3 className="text-2xl font-medium my-2 text-start">{title}</h3>
        {desc.map((d, index) => {
          return (
            <p key={index} className="not-first-of-type:mt-2">
              {d}
            </p>
          );
        })}
        {bulletins && (
          <ul className="list-['—'] ml-4 mt-2 space-y-1 marker:text-zinc-500 dark:marker:text-zinc-500 [&>li]:pl-1">
            {bulletins.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
        <ul className="flex flex-wrap gap-2 mt-2 md:mt-4">
          {skills.map((skill) => (
            <li key={skill}>
              <Badge text={skill} />
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 items-center justify-start mt-2 md:mt-4">
          {casestudy && (
            <Fragment>
              <Marker>
                <Link href={casestudy} className="group/link flex items-center gap-1">
                  <FaBook className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
                  <span>Case Study</span>
                </Link>
              </Marker>
              <Divider width="short" />
            </Fragment>
          )}
          {livelink && (
            <Fragment>
              <Marker>
                <Link
                  href={livelink}
                  className="group/link flex items-center gap-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaExternalLinkSquareAlt className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
                  <span>Website</span>
                </Link>
              </Marker>
              {(githubLink || casestudy) && <Divider width="short" />}
            </Fragment>
          )}
          {githubLink && (
            <Fragment>
              <Marker>
                <Link
                  href={githubLink}
                  className="group/link flex items-center gap-1"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
                  <span>GitHub</span>
                </Link>
              </Marker>
            </Fragment>
          )}
        </div>
      </div>
    </article>
  );
}
