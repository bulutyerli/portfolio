import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8 group">
      <div>
        <h1 className="text-2xl/9 md:text-4xl/12 text-justify">
          I&#39;m a full-stack developer from Istanbul, building web and mobile apps with Next.js,
          React Native, and Node.js. I enjoy taking products from idea to production and care about
          clean code and architecture more than &#39;it just works&#39;.
        </h1>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative overflow-hidden border-2 border-zinc-900 dark:border-zinc-300 shrink-0">
        <Image
          src="/profilepicture.jpeg"
          fill
          alt="Bulut Yerli"
          priority
          sizes="(max-width: 768px) 100vw, 256px"
          className={cn(colorFilter, 'object-cover')}
        />
      </div>
    </section>
  );
}
