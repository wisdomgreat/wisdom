import React, { useState } from 'react';
import Selection from './Selection';

export default function Hero({ onScrollTo }) {
  const [hasPortrait, setHasPortrait] = useState(true);

  return (
    <section className="dots">
      <div className="container pt-10 pb-20 lg:pt-14 lg:pb-24">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-start">
          {/* Portrait frame */}
          <div className="lg:col-span-5 pt-7">
            <Selection tag="Portrait, Toronto studio" className="block aspect-[4/5] max-h-[620px] w-full max-w-[520px]">
              <div className="absolute inset-0 overflow-hidden bg-[var(--color-night-2)]">
                {hasPortrait ? (
                  <img
                    src="/portrait.jpg"
                    alt="Wisdom Ikhuoria Salami"
                    width="1040"
                    height="1300"
                    className="w-full h-full object-cover"
                    onError={() => setHasPortrait(false)}
                  />
                ) : (
                  <div className="w-full h-full flex items-end p-8">
                    <span className="text-[9rem] leading-none font-medium tracking-[-0.06em] text-[var(--color-night-muted)]" aria-hidden="true">
                      ws
                    </span>
                  </div>
                )}
              </div>
            </Selection>
          </div>

          {/* Name box, overlapping the portrait edge */}
          <div className="lg:col-span-7 lg:-ml-24 lg:pt-36 space-y-10">
            <Selection tag="Systems architect" className="inline-block bg-[var(--color-paper-2)] px-6 py-3 sm:px-7 sm:py-4 mt-6 lg:mt-0">
              <h1 className="text-[clamp(2.75rem,5.4vw,4.75rem)] leading-[1.02] font-medium tracking-[-0.045em] text-[var(--color-ink)]">
                Wisdom Salami
              </h1>
            </Selection>

            <div className="lg:pl-60 space-y-7 max-w-[44rem]">
              <p className="text-[1.25rem] leading-[1.5] text-[var(--color-ink)]">
                Securing, operating, and automating hybrid cloud and AI infrastructure for enterprise teams.
              </p>

              <p className="flex items-center gap-3 text-[0.9375rem] text-[var(--color-ink-2)]">
                <span className="relative inline-flex w-3.5 h-3.5 items-center justify-center rounded-full bg-[var(--color-accent-soft)]" aria-hidden="true">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                </span>
                Booking consultations across the Greater Toronto Area & remote
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => onScrollTo('contact')}
                  className="h-12 px-6 rounded-[var(--radius-pill)] text-base font-medium bg-[var(--color-ink)] text-[var(--color-paper)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-ink)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  Say hello
                </button>
                <button
                  type="button"
                  onClick={() => onScrollTo('projects')}
                  className="h-12 px-6 rounded-[var(--radius-pill)] text-base font-medium border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
                >
                  See the work
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[var(--color-rule)]">
                <div>
                  <div className="text-[1.375rem] font-medium tracking-tight text-[var(--color-ink)]">14+</div>
                  <div className="text-xs text-[var(--color-muted)]">Live platforms</div>
                </div>
                <div>
                  <div className="text-[1.375rem] font-medium tracking-tight text-[var(--color-ink)]">7+ yrs</div>
                  <div className="text-xs text-[var(--color-muted)]">GRC & risk ops</div>
                </div>
                <div>
                  <div className="text-[1.375rem] font-medium tracking-tight text-[var(--color-ink)]">450+</div>
                  <div className="text-xs text-[var(--color-muted)]">Weekly active kiosks</div>
                </div>
                <div>
                  <div className="text-[1.375rem] font-medium tracking-tight text-[var(--color-ink)]">100%</div>
                  <div className="text-xs text-[var(--color-muted)]">Audit pass record</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
