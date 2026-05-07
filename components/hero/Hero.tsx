import Image from 'next/image';
import cn from '@/utils/cn';
import { colorFilter } from '@/utils/styles';

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-8 group">
      <div>
        <h1 className="text-2xl md:text-4xl text-justify">
          Bulut is a full-stack developer from Istanbul, building web and mobile applications with
          Next.js, React Native, and Node.js. He loves taking a product from zero to production and
          cares about clean code and project architecture more than &#34;it just works&#34;.
        </h1>
      </div>
      <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative overflow-hidden border-2 border-zinc-900 dark:border-zinc-300 shrink-0">
        <Image
          src="/profilepicture.jpeg"
          fill
          alt="Bulut Yerli"
          priority
          sizes="(max-width: 768px) 100vw, 256px"
          className={cn(colorFilter)}
          objectFit="cover"
        />
      </div>
    </section>
  );
}
