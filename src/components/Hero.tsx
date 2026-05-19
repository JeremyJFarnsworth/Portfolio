import { profile } from "@/lib/resume";

export default function Hero() {
  return (
    <section id="top" className="pt-16 sm:pt-24">
      <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
        Hi, I&apos;m
      </p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
        {profile.name}
      </h1>
      <p className="mt-1 text-base text-zinc-500 dark:text-zinc-400">
        {profile.location}
      </p>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex h-10 items-center rounded-full bg-zinc-900 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Email me
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          GitHub
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-900"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
