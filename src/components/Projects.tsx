"use client";

import { useRef } from "react";
import Section from "@/components/Section";
import { projects } from "@/lib/resume";

export default function Projects() {
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastPlayedRef = useRef(0);

  function playHoverBlip() {
    const now = performance.now();
    if (now - lastPlayedRef.current < 500) return;
    lastPlayedRef.current = now;

    try {
      audioCtxRef.current ??= new AudioContext();
      const ctx = audioCtxRef.current;
      const t = ctx.currentTime;

      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.setValueAtTime(660, t);

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.08, t + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);

      osc.connect(gain).connect(ctx.destination);
      osc.start(t);
      osc.stop(t + 0.5);
    } catch {
      // Autoplay policy or unsupported — fail silently.
    }
  }

  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHoverBlip}
            className="group rounded-2xl border border-zinc-200 p-5 transition-colors hover:border-sky-400 dark:border-zinc-800 dark:hover:border-sky-500"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {project.name}
              </h3>
              <span
                aria-hidden
                className="text-zinc-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-sky-600 dark:group-hover:text-sky-400"
              >
                ↗
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </Section>
  );
}
