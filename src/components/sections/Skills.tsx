import { Code2, Database, Users, Wrench } from "lucide-react";
import { skillGroups } from "@/data/portfolio";
import { sections } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const meta = sections[3];

const ICONS: Record<string, typeof Code2> = {
  Web: Code2,
  Backend: Database,
  Tools: Wrench,
  Other: Users,
};

/**
 * Capabilities.
 *
 * Plain grouped lists rather than proficiency bars or percentages. A bar that
 * says "CSS 85%" states something the reader cannot verify and the author cannot
 * defend; the group heading already carries the meaning.
 */
export default function Skills() {
  return (
    <section
      id={meta.id}
      className="section"
      aria-labelledby={`${meta.id}-title`}
    >
      <div className="container">
        <SectionHeading section={meta} />

        <ul className="skills__grid">
          {skillGroups.map((group, index) => {
            const Icon = ICONS[group.label] ?? Code2;
            return (
              <Reveal as="li" key={group.label} order={index}>
                <div className="skill-group glass-panel glass-panel--interactive">
                  <h3 className="skill-group__title">
                    <Icon aria-hidden="true" width={18} height={18} />
                    {group.label}
                  </h3>

                  <ul className="skill-group__list">
                    {group.skills.map((skill) => (
                      <li key={skill} className="skill-group__item">
                        <span className="skill-group__marker" aria-hidden="true">
                          <span className="skill-group__dot"></span>
                        </span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
