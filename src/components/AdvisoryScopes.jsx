import React from 'react';
import { ADVISORY_SCOPES } from '../data/portfolioData';

const COLLAGE = {
  'grc-audit': ['/work/tdwas.jpg', '/work/simcoeconnect.jpg'],
  'cloud-infra': ['/work/simcoeconnect.jpg', '/work/bwglife.jpg'],
  'ai-automation': ['/work/bwglife.jpg', '/work/ileoja.jpg']
};

export default function AdvisoryScopes({ onSelectScope }) {
  return (
    <section id="advisory" className="band band-bone scroll-mt-20">
      <div className="container space-y-10">
        <div className="max-w-[34rem] space-y-3">
          <h2 className="text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1] text-[var(--color-ink)]">What I can do for you</h2>
          <p className="text-[1.0625rem] leading-relaxed text-[var(--color-muted)]">
            Most engagements are one of these three. If yours is not, ask anyway.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ADVISORY_SCOPES.map((scope) => {
            const [back, front] = COLLAGE[scope.id] || [];
            return (
              <article
                key={scope.id}
                className="flex flex-col rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] p-2 shadow-[var(--shadow-card)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[6px] bg-[var(--color-paper)]">
                  <img
                    src={back}
                    alt=""
                    width="1280"
                    height="800"
                    fetchPriority="high"
                    className="absolute left-[8%] top-[10%] w-[70%] rounded-[3px] border border-[var(--color-rule)] shadow-[var(--shadow-card)] -rotate-2"
                  />
                  <img
                    src={front}
                    alt=""
                    width="1280"
                    height="800"
                    loading="lazy"
                    className="absolute right-[6%] bottom-[8%] w-[66%] rounded-[3px] border border-[var(--color-rule)] shadow-[var(--shadow-card)] rotate-1"
                  />
                </div>

                <div className="flex flex-col flex-1 px-4 pt-5 pb-4">
                  <h3 className="text-[1.1875rem] leading-snug text-[var(--color-ink)]">{scope.title}</h3>
                  <p className="text-[0.9375rem] leading-relaxed text-[var(--color-muted)] mt-2">{scope.tagline}</p>
                  <p className="text-[0.875rem] text-[var(--color-muted)] mt-3">For {scope.idealFor.toLowerCase()}.</p>

                  <div className="mt-auto pt-6 flex items-center justify-between gap-3 text-[0.875rem]">
                    <span className="text-[var(--color-muted)]">{scope.duration}</span>
                    <button
                      type="button"
                      onClick={() => onSelectScope(scope)}
                      className="font-medium text-[var(--color-ink)] underline decoration-[var(--color-rule-2)] underline-offset-4 hover:text-[var(--color-accent)] hover:decoration-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                    >
                      Scope it
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
