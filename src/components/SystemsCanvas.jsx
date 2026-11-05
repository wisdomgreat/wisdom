import React, { useState, useRef } from 'react';
import { Plus, Minus, Hand, List } from 'lucide-react';
import { CANVAS_LAYOUT } from '../data/portfolioData';

const WORLD = { w: 2200, h: 1260 };
const START = { x: 12, y: 8, zoom: 0.62 };

function FrameFace({ project, spot }) {
  if (spot.image) {
    return (
      <div className="aspect-[16/10] overflow-hidden bg-[var(--color-paper-3)]">
        <img
          src={spot.image}
          alt={`${spot.title || project.title} home page`}
          width="1280"
          height="800"
          fetchPriority="high"
          draggable="false"
          className="wc-img w-full h-full object-cover object-top"
        />
      </div>
    );
  }
  const night = spot.tone === 'night';
  return (
    <div
      className={`aspect-[16/10] p-[7%] flex flex-col justify-between ${
        night ? 'bg-[var(--color-night)] text-[var(--color-night-ink)]' : 'bg-[var(--color-paper-2)] text-[var(--color-ink)]'
      }`}
    >
      <span className={`font-mono text-[11px] ${night ? 'text-[var(--color-night-muted)]' : 'text-[var(--color-muted)]'}`}>
        {project.domain}
      </span>
      <div className="wc-img space-y-2">
        <div className="text-[1.375rem] leading-[1.08] font-medium tracking-[-0.03em]">{project.title}</div>
        <div className={`text-[11px] leading-snug line-clamp-2 ${night ? 'text-[var(--color-night-muted)]' : 'text-[var(--color-muted)]'}`}>
          {project.headline}
        </div>
      </div>
    </div>
  );
}

export default function SystemsCanvas({ projects, onSelectProject, onShowList }) {
  const viewportRef = useRef(null);
  const [view, setView] = useState(START);
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ x: 0, y: 0, ox: 0, oy: 0, moved: false });

  const byId = Object.fromEntries(projects.map((p) => [p.id, p]));
  const frames = Object.entries(CANVAS_LAYOUT)
    .map(([key, spot]) => ({ key, spot, project: byId[spot.alias || key] }))
    .filter((f) => f.project);

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    if (e.target.closest('[data-control]')) return;
    setDragging(true);
    drag.current = { x: e.clientX, y: e.clientY, ox: view.x, oy: view.y, moved: false };
    viewportRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - drag.current.x;
    const dy = e.clientY - drag.current.y;
    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) drag.current.moved = true;
    setView((v) => ({
      ...v,
      x: Math.max(-1500, Math.min(300, drag.current.ox + dx)),
      y: Math.max(-950, Math.min(200, drag.current.oy + dy))
    }));
  };

  const onPointerUp = (e) => {
    if (!dragging) return;
    setDragging(false);
    if (viewportRef.current?.hasPointerCapture(e.pointerId)) {
      viewportRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const zoomBy = (d) => setView((v) => ({ ...v, zoom: Math.min(1.2, Math.max(0.4, Math.round((v.zoom + d) * 100) / 100)) }));

  const open = (project) => {
    if (drag.current.moved) return;
    onSelectProject(project);
  };

  const chip =
    'flex items-center gap-2 h-9 px-3 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] text-[0.8125rem] text-[var(--color-ink)] shadow-[var(--shadow-card)]';

  return (
    <div className="relative rounded-[var(--radius-card)] border border-[var(--color-rule)] overflow-hidden">
      <div
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className={`dots relative h-[520px] sm:h-[600px] overflow-hidden select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ touchAction: 'none', backgroundPosition: `${view.x}px ${view.y}px` }}
      >
        <div
          className="absolute top-0 left-0 will-change-transform"
          style={{
            width: WORLD.w,
            height: WORLD.h,
            transform: `translate(${view.x}px, ${view.y}px) scale(${view.zoom})`,
            transformOrigin: '0 0'
          }}
        >
          {frames.map(({ key, spot, project }) => (
            <div
              key={key}
              role="button"
              tabIndex={0}
              aria-label={`${spot.title || project.title}: ${project.headline}`}
              onClick={() => open(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectProject(project);
                }
              }}
              className="wc-frame absolute flex flex-col cursor-pointer"
              style={{ left: spot.x, top: spot.y, width: spot.w }}
            >
              <span className="wc-label self-start px-2 py-0.5 font-mono text-[13px]">
                {spot.title || project.title.split(' ')[0]} / {spot.kind}
              </span>
              <div className="wc-box overflow-hidden rounded-[2px] border border-[var(--color-rule)] bg-[var(--color-paper-2)]">
                <FrameFace project={project} spot={spot} />
              </div>
            </div>
          ))}
        </div>

        {/* Canvas chrome */}
        <div className={`${chip} absolute top-4 left-4 pointer-events-none`}>
          <Hand className="w-3.5 h-3.5 text-[var(--color-muted)]" aria-hidden="true" />
          <span>Drag to look around</span>
        </div>

        <button
          type="button"
          data-control
          onClick={onShowList}
          className={`${chip} absolute bottom-4 left-4 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]`}
        >
          <List className="w-3.5 h-3.5" aria-hidden="true" />
          <span>View as list</span>
        </button>

        <div data-control className={`${chip} absolute bottom-4 right-4 px-1 gap-0`}>
          <button
            type="button"
            onClick={() => zoomBy(-0.1)}
            aria-label="Zoom out"
            className="w-8 h-8 flex items-center justify-center rounded-[4px] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <Minus className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => setView(START)}
            aria-label="Reset the view"
            className="num w-14 h-8 font-mono text-[0.8125rem] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            {Math.round(view.zoom * 100)}%
          </button>
          <button
            type="button"
            onClick={() => zoomBy(0.1)}
            aria-label="Zoom in"
            className="w-8 h-8 flex items-center justify-center rounded-[4px] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
