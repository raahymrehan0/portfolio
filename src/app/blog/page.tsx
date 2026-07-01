import Layout from '@/components/layout';
import { getBlogPosts } from './actions';

export const metadata = {
  title: 'Blog'
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <Layout
      title="Blog"
      subtitle="Personal writing from internships, hackathons and work that changed how I build."
    >
      <div className="mx-auto grid max-w-5xl gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            id={post.slug}
            className="rounded-lg border border-foreground/10 bg-white p-6 shadow-sm sm:p-8"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/50">
                {new Date(post.publishedAt).getFullYear()}
              </span>
              {post.location && (
                <span className="text-sm font-medium text-foreground/55">
                  {post.location}
                </span>
              )}
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-5 text-2xl font-semibold leading-tight text-foreground sm:text-4xl">
              {post.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/70 sm:text-lg">
              {post.content}
            </p>
            <div className="mt-6 space-y-4 border-t border-foreground/10 pt-6">
              {post.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="leading-relaxed text-foreground/70"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Layout>
  );
}
