import fs from 'fs';
import path from 'path';
import { remark } from 'remark';
import html from 'remark-html';

const articlesDirectory = path.join(process.cwd(), 'src/app/articles');

export async function getArticle(slug: string) {
  const fullPath = path.join(articlesDirectory, slug, 'page.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const processedContent = await remark().use(html).process(fileContents);
  const contentHtml = processedContent.toString();

  return { slug, contentHtml };
}

export function getAllArticles() {
  const articleSlugs = fs.readdirSync(articlesDirectory).filter((slug) => {
    const fullPath = path.join(articlesDirectory, slug, 'page.md');
    return fs.existsSync(fullPath);
  });

  return articleSlugs.map((slug) => {
    const fullPath = path.join(articlesDirectory, slug, 'page.md');
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    return { slug, content: fileContents };
  });
}
