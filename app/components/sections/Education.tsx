import Image from 'next/image';
import { Education, education } from '../../data/content';

const AchievementBadge = ({ achievement }: { achievement: string }) => (
    <span className="inline-block px-2.5 py-1 mr-2 mb-2 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-600 bg-zinc-50 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300 transition-all duration-200 hover:border-emerald-300 dark:hover:border-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/30">
        {achievement}
    </span>
);

const EducationCard = ({ edu }: { edu: Education }) => {
    return (
        <li className="group mb-8 pb-8 last:mb-0 last:pb-0 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 p-4 transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50 hover:-translate-y-0.5">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
                {edu.imageUrl && (
                    <div className="shrink-0 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] relative rounded-md overflow-hidden">
                        <Image
                            src={edu.imageUrl}
                            alt={`${edu.institution} logo`}
                            fill
                            className="object-contain"
                        />
                    </div>
                )}
                <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                        <h3 className="text-lg font-semibold text-zinc-800 dark:text-white">
                            {edu.link ? (
                                <a
                                    href={edu.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline decoration-emerald-500 decoration-2 underline-offset-2 hover:text-emerald-500 dark:decoration-emerald-400 dark:hover:text-emerald-400"
                                >
                                    {edu.institution}
                                </a>
                            ) : (
                                edu.institution
                            )}
                        </h3>
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1 sm:mt-0">
                            {edu.period.start} — {edu.period.end}
                        </div>
                    </div>

                    <div className="text-base font-medium text-zinc-700 dark:text-zinc-200 mt-1">
                        {edu.degree}
                    </div>

                    <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                        {edu.field}
                    </div>

                    {edu.location && (
                        <div className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                            📍 {edu.location}
                        </div>
                    )}

                    {edu.description && (
                        <p className="mt-2 text-zinc-600 dark:text-zinc-300">
                            {edu.description}
                        </p>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                        <div className="mt-3">
                            {edu.achievements.map((achievement, index) => (
                                <AchievementBadge key={index} achievement={achievement} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default function EducationSection() {
    return (
        <div className="content mt-12 sm:mt-24">
            <h2 className="mb-2 text-xl font-bold text-zinc-800 dark:text-white">Education</h2>
            <p className="max-w-[100ch] mb-8 leading-relaxed text-zinc-500 dark:text-slate-300">
                My academic journey and qualifications.
            </p>

            <ul className="space-y-4">
                {education.map((edu, index) => (
                    <EducationCard key={index} edu={edu} />
                ))}
            </ul>
        </div>
    );
}
