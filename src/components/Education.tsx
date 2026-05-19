import Section from "@/components/Section";
import { education } from "@/lib/resume";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Where I've studied">
      <div className="space-y-6">
        {education.map((entry) => (
          <article
            key={`${entry.school}-${entry.period}`}
            className="rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {entry.credential}
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                {entry.period}
              </p>
            </div>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {entry.school} · {entry.location}
            </p>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              {entry.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
