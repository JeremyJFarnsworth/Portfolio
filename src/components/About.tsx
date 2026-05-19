import Section from "@/components/Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
        <p>
          I&apos;m a Computer Science student at Neumont University&apos;s
          accelerated three-year program, where I learn through project-driven
          coursework on modern languages and frameworks. Before Neumont I
          completed a full-stack development bootcamp at Bottega University,
          which kicked off my path into software.
        </p>
        <p>
          These days I split my time between coursework and tutoring as an
          Academic Coach — explaining things clearly to fellow students has
          made me a sharper developer in the process. I&apos;m drawn to
          front-end work with React and TypeScript, and I&apos;m steadily
          getting more comfortable on the backend with Python and SQL.
        </p>
      </div>
    </Section>
  );
}
