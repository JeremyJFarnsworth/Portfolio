const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
];

export default function SiteHeader({ name }: { name: string }) {
  return (
    <header className="sticky top-0 z-10 border-b border-zinc-200/70 bg-background/80 backdrop-blur dark:border-zinc-800/70">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-zinc-900 hover:text-sky-600 dark:text-zinc-50 dark:hover:text-sky-400"
        >
          {name}
        </a>
        <nav className="hidden sm:block">
          <ul className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-sky-600 dark:hover:text-sky-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
