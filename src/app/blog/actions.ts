import type { BlogPost } from './types';

const PERSONAL_POSTS: BlogPost[] = [
  {
    id: 'building-with-purpose',
    title: 'What I look for when building software',
    content:
      'I care most about whether a tool solves a real problem in a clear way. The best software often feels simple after the fact, even when the process was messy.',
    url: 'https://www.linkedin.com/in/raahymrehan',
    publishedAt: '2025-06-01T00:00:00.000Z',
    heroImage: '/images/profile.jpg',
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'ai-for-early-stage-work',
    title: 'Using AI to speed up the boring parts',
    content:
      'The best use of AI in my work has been cutting down repetitive tasks so I can spend more time on engineering and user needs.',
    url: 'https://github.com/raahymrehan0',
    publishedAt: '2025-04-18T00:00:00.000Z',
    heroImage: '/images/techstack/azure-logo.png',
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'learning-by-building',
    title: 'Why I keep shipping small things',
    content:
      'The most useful lessons I have learned came from building something rough, testing it, and then improving it with real feedback.',
    url: 'https://www.linkedin.com/in/raahymrehan',
    publishedAt: '2025-02-10T00:00:00.000Z',
    heroImage: '/images/profile2.jpg',
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'hong-kong-week',
    title: 'A week in Hong Kong',
    content:
      'A short trip that gave me a better sense of pace, perspective and how much I value building while being somewhere new.',
    url: 'https://www.linkedin.com/in/raahymrehan',
    publishedAt: '2025-01-08T00:00:00.000Z',
    heroImage: '/images/profile.jpg',
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  }
];

export async function getBlogPosts(): Promise<BlogPost[]> {
  return PERSONAL_POSTS.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}
