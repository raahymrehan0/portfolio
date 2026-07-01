import type { BlogPost } from './types';

const PERSONAL_POSTS: BlogPost[] = [
  {
    id: 'hackathons-speed-restraint',
    slug: 'hackathons-speed-restraint',
    title: 'Hackathons taught me speed with restraint',
    content:
      'Hackathons made me better at choosing what matters first. The useful lesson was not speed alone. It was knowing what to leave out.',
    publishedAt: '2026-04-12T00:00:00.000Z',
    tags: ['Hackathons', 'Product', 'Teams'],
    location: 'London',
    body: [
      'The first hour of a hackathon is usually the most honest part. Everyone has ideas. Very few ideas can survive the clock.',
      'I learned to look for the smallest version of a useful thing. That meant cutting features early and keeping the demo path clear.',
      'The best teams I have worked with did not argue for long. They made fast decisions and wrote things down. That made the final hours less chaotic.',
      'I still like hackathons because they reveal how people think under pressure. They reward taste as much as technical output.'
    ],
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'hong-kong-engineering-pace',
    slug: 'hong-kong-engineering-pace',
    title: 'Hong Kong made engineering feel more physical',
    content:
      'Working in Hong Kong changed how I thought about software. Energy data, devices and buildings made the work feel close to the real world.',
    publishedAt: '2025-08-18T00:00:00.000Z',
    tags: ['Hong Kong', 'IoT', 'Energy'],
    location: 'Hong Kong',
    body: [
      'Hong Kong has a pace that makes you pay attention. The city feels dense and direct. That changed how I thought about engineering work there.',
      'At Computime I spent time around smart energy and IoT systems. The work connected code to devices and buildings. It made the feedback loop feel physical.',
      'I worked with telemetry and forecasting ideas. Small errors felt less abstract when the data represented real energy use.',
      'That summer made me more interested in systems that touch the world. It also made me more patient with messy hardware and imperfect data.'
    ],
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'first-year-internship',
    slug: 'first-year-internship',
    title: 'What my first year internship changed',
    content:
      'My first year internship taught me how little code matters without context. I got better at asking questions before trying to look useful.',
    publishedAt: '2025-03-06T00:00:00.000Z',
    tags: ['Internship', 'Learning', 'Engineering'],
    location: 'London',
    body: [
      'The hardest part of an early internship is not syntax. It is understanding what people actually need from you.',
      'I learned to slow down before building. A good question could save more time than a clever implementation.',
      'I also learned how much trust is built through small reliable updates. People do not need dramatic progress every day. They need to know what changed and what is blocked.',
      'That experience made later work easier. It gave me a basic rhythm for joining a team and becoming useful.'
    ],
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'wise-quantitative-risk',
    slug: 'wise-quantitative-risk',
    title: 'Wise made finance feel less abstract',
    content:
      'This year at Wise has put me closer to quantitative FX risk and market data. It has been a good lesson in precision.',
    publishedAt: '2026-07-01T00:00:00.000Z',
    tags: ['Wise', 'Finance', 'Market data'],
    location: 'London',
    body: [
      'Finance can sound abstract from the outside. At Wise it feels more like a set of careful systems that need to behave well under pressure.',
      'I have been working around quantitative FX risk and market data. That means the details matter. Naming, timing and visibility all carry weight.',
      'The work has made me more aware of how engineering choices shape trust. A clean service is useful because people can reason about it.',
      'I am still early in the internship. The strongest lesson so far is that reliability is not a slogan. It is a daily habit.'
    ],
    author: {
      name: 'Raahym Rehan',
      handle: 'raahymrehan'
    }
  },
  {
    id: 'red-cross-microsoft',
    slug: 'red-cross-microsoft',
    title: 'Working with Red Cross and Microsoft changed my standards',
    content:
      'The Virtual Situation Room project made me think harder about language, sources and responsibility in AI systems.',
    publishedAt: '2026-05-04T00:00:00.000Z',
    tags: ['Red Cross', 'Microsoft', 'AI'],
    location: 'UCL IXN',
    body: [
      'The Red Cross and Microsoft project was different from a normal student build. The domain raised the standard immediately.',
      'A crisis intelligence tool cannot be vague. It needs source grounding and careful language. It also needs to show its uncertainty clearly.',
      'I worked around data ingestion, agent orchestration and system integration. The technical work mattered because the output had to be usable by people under pressure.',
      'The project made me less impressed by flashy AI demos. I now care more about traceability and whether a system earns trust.'
    ],
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
