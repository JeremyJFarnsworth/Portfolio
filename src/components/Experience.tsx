import Section from "@/components/Section";
import { experience } from "@/lib/resume";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <ol className="space-y-8 border-l border-zinc-200 pl-6 dark:border-zinc-800">
        {experience.map((entry) => (
          <li key={`${entry.org}-${entry.period}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full bg-sky-500 ring-4 ring-background" />
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              {entry.period}
            </p>
            <h3 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {entry.role}{" "}
              <span className="font-normal text-zinc-500 dark:text-zinc-400">
                · {entry.org}
              </span>
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {entry.location}
            </p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-zinc-700 dark:text-zinc-300">
              {entry.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
