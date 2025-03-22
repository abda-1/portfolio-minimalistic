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
  <span className="inline-block px-2 py-1 mr-2 mb-2 text-xs font-medium rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
    {language}
  </span>
);

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <li className="dark:text-zinc-350 my-5 flex items-center gap-4 text-zinc-500">
      <a
        className="link focusable font-medium text-zinc-800 dark:text-white"
        href={project.link}
        rel="noreferrer"
        target="_blank"
      >
        <Image
          src={project.imageUrl}
          alt={`${project.title} photo`}
          width={300}
          height={300}
          className="rounded-md"
        />
      </a>
      <div className="flex min-w-0 flex-col justify-center">
        <p className="mb-1 flex items-center">
          <span className="truncate font-semibold text-zinc-700 dark:text-zinc-100">
            {project.title}
          </span>
          <span className="ml-1.5 inline-block flex-none translate-y-px rounded bg-zinc-100 p-1 text-xs font-medium leading-none text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
            {project.period.start}
            <span className="text-zinc-350 dark:text-zinc-550 mx-0.5">—</span>
            {project.period.end}
          </span>
        </p>
        <p className="flex items-center">
          <span className="flex-1 text-zinc-500 dark:text-zinc-400">
            {project.links ? (
              <>
                {project.description.split(project.links[0].text).map((part, index, array) => {
                  // If this is the last part, just return it without a link
                  if (index === array.length - 1) return part;
                  
                  // Otherwise, return the part followed by a link
                  return (
                    <span key={index}>
                      {part}
                      <ExternalLink 
                        url={project.links?.[index].url ?? '#'} 
                        text={project.links?.[index].text ?? ''} 
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
        Some of the projects I've worked on in the past!
      </p>

      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
} 