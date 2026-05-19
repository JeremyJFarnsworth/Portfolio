import { profile } from "@/lib/resume";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 py-8 text-sm text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} {profile.name}</p>
        <div className="flex gap-5">
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            Email
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-600 dark:hover:text-sky-400"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
