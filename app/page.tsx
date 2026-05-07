import Hero from '@/components/hero/Hero';
import Divider from '@/components/ui/Divider';
import MainProject from '@/components/ui/MainProject';
import { FaCode } from 'react-icons/fa6';
import { PROJECTS } from '@/lib/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Home() {
  return (
    <main className="flex flex-col gap-4 md:gap-6 px-4 xl:px-0">
      <Hero />
      <div className="space-y-0.5">
        <Divider width="full" />
        <Divider width="full" />
      </div>
      <section>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <FaCode className="text-sm md:text-base" />
          <h2 className="uppercase tracking-widest text-sm md:text-base">projects</h2>
        </div>
        <MainProject />
        <div className="my-4 md:my-6">
          <Divider width="full" />
        </div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          <ProjectCard {...PROJECTS[0]} className="flex-2" />
          <Divider direction="vertical" className="lg:mx-6" />
          <ProjectCard {...PROJECTS[1]} className="flex-1" />
          <Divider direction="vertical" className="lg:mx-6" />
          <ProjectCard {...PROJECTS[2]} className="flex-1" />
        </div>
      </section>
    </main>
  );
}
