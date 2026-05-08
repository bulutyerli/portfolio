import Hero from '@/components/hero/Hero';
import Divider from '@/components/ui/Divider';
import MainProject from '@/components/ui/MainProject';
import { FaCode } from 'react-icons/fa6';
import { PROJECTS } from '@/lib/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';
import { PiArticleMedium } from 'react-icons/pi';
import Parser from 'rss-parser';
import { getMediumImage } from '@/utils/getMediumImage';
import ArticleCard from '@/components/ui/ArticleCard';

const parser = new Parser();

export default async function Home() {
  const feed = await parser.parseURL('https://medium.com/feed/@bulutyerli');

  const articles = feed.items.map((item) => ({
    title: item.title ?? '',
    content: item['content:encodedSnippet'] ?? '',
    link: item.link ?? '',
    date: item.pubDate ?? '',
    image: getMediumImage(item['content:encoded'] ?? ''),
  }));

  return (
    <main className="flex flex-col gap-4 md:gap-6 px-4 xl:px-0">
      <Hero />
      <div className="space-y-0.5">
        <Divider width="full" />
        <Divider width="full" />
      </div>
      <section>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <FaCode size="20" className="text-foreground" />
          <h2 className="uppercase tracking-wide text-sm">projects</h2>
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
      <div className="space-y-0.5">
        <Divider width="full" />
        <Divider width="full" />
      </div>
      <section>
        <div className="flex items-center gap-2 mb-4 md:mb-6">
          <PiArticleMedium size="20" className="text-foreground" />
          <h2 className="uppercase tracking-wide text-sm">articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.link}
                title={article.title}
                desc={article.content}
                image={article.image ?? ''}
                link={article.link}
                date={article.date}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
