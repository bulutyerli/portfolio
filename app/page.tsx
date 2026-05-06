import Hero from '@/components/hero/Hero';
import Divider from '@/components/ui/Divider';
import MainProject from '@/components/ui/MainProject';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-8 px-4 xl:px-0">
      <Hero />
      <div className="space-y-0.5">
        <Divider width="full" />
        <Divider width="full" />
      </div>
      <MainProject />
    </main>
  );
}
