import Image from 'next/image';
import { WorkExperience, workExperiences } from '../../data/content';

const SkillBadge = ({ skill }: { skill: string }) => (
  <span className="inline-block px-2 py-1 mr-2 mb-2 text-xs font-medium rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-300">
    {skill}
  </span>
);

const WorkExperienceCard = ({ experience }: { experience: WorkExperience }) => {
  return (
    <li className="mb-8 pb-8 last:mb-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {experience.imageUrl && (
          <div className="flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden">
            <Image
              src={experience.imageUrl}
              alt={`${experience.company} logo`}
              fill
              className="object-contain"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              {experience.position} at{' '}
              {experience.link ? (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-blue-500 decoration-2 underline-offset-2 hover:text-blue-500 dark:decoration-blue-400 dark:hover:text-blue-400"
                >
                  {experience.company}
                </a>
              ) : (
                experience.company
              )}
            </h3>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0">
              {experience.period.start} — {experience.period.end}
            </div>
          </div>
          
          {experience.location && (
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
              {experience.location}
            </div>
          )}
          
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            {experience.description}
          </p>
          
          {experience.skills && experience.skills.length > 0 && (
            <div className="mt-3">
              {experience.skills.map((skill, index) => (
                <SkillBadge key={index} skill={skill} />
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default function WorkExperiences() {
  return (
    <div className="content mt-12 sm:mt-24">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Work Experience</h2>
      <p className="max-w-[100ch] mb-8 leading-relaxed text-zinc-500 dark:text-slate-300">
        My professional experience in the industry!
      </p>

      <ul className="space-y-4">
        {workExperiences.map((experience, index) => (
          <WorkExperienceCard key={index} experience={experience} />
        ))}
      </ul>
    </div>
  );
} 