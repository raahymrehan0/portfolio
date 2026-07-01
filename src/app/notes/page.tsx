import Layout from '@/components/layout';
import { notes } from '@/lib/profileData';

export const metadata = {
  title: 'Notes'
};

export default function NotesPage() {
  return (
    <Layout
      title="Notes"
      subtitle="Short notes on projects, systems, and what I am learning."
    >
      <div className="mx-auto grid max-w-5xl gap-5">
        {notes.map((note) => (
          <article
            key={note.title}
            className="rounded-lg border border-foreground/10 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/50">
                {note.date}
              </span>
              {note.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-foreground/[0.04] px-3 py-1 text-xs font-medium text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-foreground">
              {note.title}
            </h2>
            <p className="mt-3 leading-relaxed text-foreground/70">
              {note.summary}
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
}
