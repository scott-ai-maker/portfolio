import { metadata } from './metadata.js';

import { Card } from '../../components/Card.tsx';
import { SimpleLayout } from '../../components/SimpleLayout.tsx';
import { getAllArticles } from '../../lib/articles.ts';
import { formatDate } from '../../lib/formatDate.ts';

function Article({ article }: { article: { slug: string; content: string } }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>{article.slug}</Card.Title>
        <Card.Description>{article.content.substring(0, 100)}...</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
    </article>
  );
}

export default async function ArticlesIndex() {
  const articles = await getAllArticles();

  return (
    <SimpleLayout
      title="Writing on software design, company building, and the aerospace industry."
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {articles.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}
