import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';
import Link from 'next/link';
import Marker from '@/components/ui/Marker';
import { formatDate } from '@/lib/formatDate';

export default function ArticleCard({
  title,
  desc,
  image,
  link,
  className,
  date,
}: {
  title: string;
  desc: string;
  image: string;
  link: string;
  className?: string;
  date: string;
}) {
  return (
    <article className={cn('flex flex-col items-center md:items-start w-full group', className)}>
      <div className="aspect-video w-full relative">
        <Image
          alt={`${title} screenshot`}
          src={image}
          fill
          className={cn(colorFilter, 'object-cover object-center')}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <span className="text-xs mt-1 text-start">{formatDate(date)}</span>

      <div className="w-full text-justify">
        <h3 className="text-xl font-medium tracking-wider my-2 text-start line-clamp-2">{title}</h3>
        <p className="line-clamp-6">{desc}</p>
      </div>
      <div className="mt-2 md:mt-4">
        <Marker>
          <Link
            href={link}
            className="group/link flex items-center gap-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaExternalLinkSquareAlt className="group-hover/link:opacity-100 opacity-50 transition-opacity duration-300" />
            <span>Read on Medium</span>
          </Link>
        </Marker>
      </div>
    </article>
  );
}
