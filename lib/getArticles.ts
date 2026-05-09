import Parser from 'rss-parser';
import { getMediumImage } from '@/utils/getMediumImage';

export async function getArticles() {
  'use cache';

  try {
    const parser = new Parser();

    const feed = await parser.parseURL('https://medium.com/feed/@bulutyerli');

    const articles = feed.items.map((item) => ({
      title: item.title ?? '',
      content: item['content:encodedSnippet'] ?? '',
      link: item.link ?? '',
      date: item.pubDate ?? '',
      image: getMediumImage(item['content:encoded'] ?? ''),
    }));

    return articles;
  } catch (error) {
    console.error(error);
    return [];
  }
}
