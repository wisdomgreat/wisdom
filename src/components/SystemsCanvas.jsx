import React, { useState, useRef } from 'react';
import {
  ChevronRight,
  RotateCcw,
  Plus,
  Minus,
  Move
} from 'lucide-react';

export default function SystemsCanvas({ projects, onSelectProject }) {
  const containerRef = useRef(null);
  const [offset, setOffset] = useState({ x: -40, y: -20 });
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0, initialOffsetX: 0, initialOffsetY: 0, moved: false });

  // Handle pointer down for smooth canvas dragging
  const handlePointerDown = (e) => {
    // Only drag with primary pointer (left click or touch)
    if (e.button !== 0 && e.pointerType === 'mouse') return;

    // Check if target is a button or link
    if (e.target.closest('button[data-interactive="true"]') || e.target.closest('a')) {
      return;
    }

    setIsDragging(true);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      initialOffsetX: offset.x,
      initialOffsetY: offset.y,
      moved: false
    };

    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;

    if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
      dragStartRef.current.moved = true;
    }

    // Limit drag boundaries so the user never loses the canvas
    const newX = Math.max(-650, Math.min(250, dragStartRef.current.initialOffsetX + dx));
    const newY = Math.max(-500, Math.min(150, dragStartRef.current.initialOffsetY + dy));

    setOffset({ x: newX, y: newY });
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    setIsDragging(false);
    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const handleZoomIn = () => {
    setZoom((prev) => Math.min(1.3, Number((prev + 0.1).toFixed(1))));
  };

  const handleZoomOut = () => {
    setZoom((prev) => Math.max(0.7, Number((prev - 0.1).toFixed(1))));
  };

  const handleReset = () => {
    setOffset({ x: -40, y: -20 });
    setZoom(1);
  };

  const handleCardClick = (project) => {
    // If the user was dragging the canvas, don't open the modal
    if (dragStartRef.current.moved) return;
    onSelectProject(project);
  };

  return (
    <div className="relative rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-deep)] overflow-hidden">
      {/* Canvas Tooling Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-[var(--color-rule)] bg-[var(--color-paper-2)] select-none">
        <div className="flex items-center gap-2 text-xs text-[var(--color-muted)]">
          <Move className="w-3.5 h-3.5 text-[var(--color-cool)]" aria-hidden="true" />
          <span>Drag to explore systems • Click any frame to inspect architecture</span>
        </div>

        {/* Zoom & Recenter Controls */}
        <div className="flex items-center gap-1.5">
          <button
            type="button"
            data-interactive="true"
            onClick={handleZoomOut}
            aria-label="Zoom out canvas"
            className="w-7 h-7 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:border-[var(--color-cool)] flex items-center justify-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <Minus className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <span className="px-2 py-0.5 text-xs font-mono text-[var(--color-ink-2)] min-w-[3.5rem] text-center">
            {Math.round(zoom * 100)}%
          </span>

          <button
            type="button"
            data-interactive="true"
            onClick={handleZoomIn}
            aria-label="Zoom in canvas"
            className="w-7 h-7 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-ink)] hover:border-[var(--color-cool)] flex items-center justify-center transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            data-interactive="true"
            onClick={handleReset}
            aria-label="Recenter canvas position"
            className="px-2.5 h-7 rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-xs text-[var(--color-ink)] hover:border-[var(--color-cool)] flex items-center gap-1.5 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-[var(--color-focus)]"
          >
            <RotateCcw className="w-3 h-3 text-[var(--color-muted)]" aria-hidden="true" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Interactive Drag Viewport */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className={`relative w-full h-[580px] sm:h-[640px] overflow-hidden select-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{
          touchAction: 'none',
          backgroundImage:
            'radial-gradient(var(--color-rule) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          backgroundPosition: `${offset.x}px ${offset.y}px`
        }}
      >
        {/* World Surface */}
        <div
          className="absolute top-0 left-0 will-change-transform"
          style={{
            width: '1650px',
            height: '1150px',
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
            transformOrigin: '0 0'
          }}
        >
          {projects.map((project) => {
            const coords = project.coords || { x: 60, y: 60 };
            return (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                data-interactive="true"
                onClick={() => handleCardClick(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                className="absolute w-[350px] p-5 rounded-[var(--radius-card)] border border-[var(--color-rule)] bg-[var(--color-paper-2)] hover:border-[var(--color-accent)] hover:shadow-lg transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--color-focus)] group"
                style={{
                  left: `${coords.x}px`,
                  top: `${coords.y}px`
                }}
              >
                {/* Node Top Header */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-[var(--color-rule)]">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                    <span className="text-[11px] font-mono text-[var(--color-muted)]">
                      {project.badge}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[var(--color-cool)] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform duration-150">
                    <span>Inspect</span>
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-bold text-[var(--color-ink)] mt-3">
                  {project.title}
                </h3>

                {/* Outcome Dilemma Headline */}
                <p className="text-xs text-[var(--color-ink-2)] mt-1.5 leading-relaxed line-clamp-2">
                  {project.headline || project.description}
                </p>

                {/* Architecture Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-[var(--color-rule)]">
                  {project.architecture.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[10px] font-mono rounded-[var(--radius-pill)] border border-[var(--color-rule)] bg-[var(--color-paper)] text-[var(--color-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.architecture.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono rounded-[var(--radius-pill)] text-[var(--color-muted)]">
                      +{project.architecture.length - 3}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
