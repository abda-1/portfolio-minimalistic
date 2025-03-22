import Image from 'next/image';
import { Experience, experiences } from '../../data/content';

const ExperienceCard = ({ experience }: { experience: Experience }) => {
  return (
    <li className="mb-8 pb-8 last:mb-0 last:pb-0">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        {experience.imageUrl && (
          <div className="flex-shrink-0 w-20 h-20 relative rounded-md overflow-hidden">
            <Image
              src={experience.imageUrl}
              alt={`${experience.title} image`}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between">
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
              {experience.link ? (
                <a
                  href={experience.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-blue-500 decoration-2 underline-offset-2 hover:text-blue-500 dark:decoration-blue-400 dark:hover:text-blue-400"
                >
                  {experience.title}
                </a>
              ) : (
                experience.title
              )}
            </h3>
            <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0">
              {experience.period.start} — {experience.period.end}
            </div>
          </div>
          
          <p className="mt-2 text-zinc-600 dark:text-zinc-300">
            {experience.description}
          </p>
        </div>
      </div>
    </li>
  );
};

export default function Experiences() {
  return (
    <div className="content mt-12 sm:mt-24">
      <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Experiences & Activities</h2>
      <p className="max-w-[100ch] mb-8 leading-relaxed text-zinc-500 dark:text-slate-300">
        Other activities and experiences that have shaped my journey!
      </p>

      <ul className="space-y-4">
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </ul>
    </div>
  );
} 