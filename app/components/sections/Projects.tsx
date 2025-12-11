import Image from 'next/image';
import { Project, projects } from '../../data/content';

type ExternalLinkProps = {
  url: string;
  text: string;
}

const ExternalLink = ({ url, text }: ExternalLinkProps) => (
  <a
    href={url}
    target="_blank"
    className="focusable rounded-sm font-medium text-zinc-400 underline decoration-slate-700 decoration-2 underline-offset-2 transition duration-100 focus:text-gray-500 focus:ring-slate-500/40 dark:text-zinc-300 dark:hover:decoration-slate-400/30"
  >
    {text}
  </a>
);

const LanguageBadge = ({ language }: { language: string }) => (
  <span className="inline-block px-2.5 py-1 mr-2 mb-2 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-600 bg-zinc-50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 transition-all duration-200 hover:border-indigo-300 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
    {language}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className="group dark:text-zinc-350 my-5 flex flex-col md:flex-row md:items-start gap-4 text-zinc-500 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:-translate-y-0.5">
      <a
        className="link focusable font-medium text-zinc-800 dark:text-white group shrink-0"
        href={project.link}
        rel="noreferrer"
        target="_blank"
      >
        <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] overflow-hidden rounded-md">
          <Image
            src={project.imageUrl}
            alt={`${project.title} photo`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>
      <div className="flex min-w-0 flex-col justify-center">
        <div className="mb-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
          <span className="font-semibold text-zinc-700 dark:text-zinc-100">
            {project.title}
          </span>
          <span className="inline-block flex-none translate-y-px rounded bg-zinc-100 px-1.5 py-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {project.period.start}
            <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
            {project.period.end}
          </span>
        </div>
        <p className="flex items-center">
          <span className="flex-1 text-zinc-500 dark:text-zinc-400">
            {project.links ? (
              <>
                {project.description.split(project.links[0].text).map((part, index, array) => {
                  // If this is the last part, just return it without a link
                  if (index === array.length - 1) return part;

                  // Otherwise, return the part followed by the first link
                  return (
                    <span key={index}>
                      {part}
                      <ExternalLink
                        url={project.links![0].url}
                        text={project.links![0].text}
                      />
                    </span>
                  );
                })}
              </>
            ) : (
              project.description
            )}
          </span>
        </p>

        {/* Language badges */}
        {project.languages && project.languages.length > 0 && (
          <div className="mt-3">
            {project.languages.map((language, index) => (
              <LanguageBadge key={index} language={language} />
            ))}
          </div>
        )}
      </div>
    </li>
  );
};

export default function Projects() {
  return (
    <div className="content mt-12 sm:mt-24">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Projects</h2>
      <p className="max-w-[100ch] mb-8 leading-relaxed text-zinc-500 dark:text-slate-300">

      </p>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
} 