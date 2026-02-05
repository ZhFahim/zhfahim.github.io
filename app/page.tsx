import Image from "next/image";
import { Bio } from "../components/Bio";
import { SocialIcon } from "../components/SocialIcon";
import { DEVICON_CDN, skillDeviconMap } from "../lib/constants";
import { content } from "../lib/content";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-24 sm:px-10 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="portfolio-intro">
          <div className="flex flex-wrap items-baseline gap-3 gap-y-1">
            <h1
              className="font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-fraunces), ui-serif, serif" }}
            >
              {content.name}
            </h1>
          </div>
          <p className="mt-1 text-lg text-foreground/80">{content.role}</p>
          <p className="mt-1 text-sm text-foreground/50">{content.location}</p>

          <Bio segments={content.bio} />

          {content.currently && (
            <p className="mt-4 text-sm text-foreground/60">
              {typeof content.currently === "string" ? (
                content.currently
              ) : (
                <>
                  {content.currently.prefix}
                  <a
                    href={content.currently.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-accent/40 underline-offset-2 hover:text-accent hover:decoration-accent"
                  >
                    {content.currently.projectName}
                  </a>
                  {content.currently.suffix}
                </>
              )}
            </p>
          )}

          {content.skills.length > 0 && (
            <section
              className="mt-8 flex flex-wrap gap-2"
              aria-label="Technologies"
            >
              {content.skills.map((skill) => {
                const iconPath = skillDeviconMap[skill];
                return (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 rounded-full border border-foreground/10 bg-white/80 px-2.5 py-1 text-xs font-medium text-foreground/85 transition-colors duration-200 hover:border-foreground/20 hover:bg-white"
                  >
                    {iconPath ? (
                      <Image
                        src={`${DEVICON_CDN}/${iconPath}`}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5 shrink-0"
                      />
                    ) : null}
                    {skill}
                  </span>
                );
              })}
            </section>
          )}

          <nav
            className="mt-10 flex items-center gap-6"
            aria-label="Social links"
          >
            {content.links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="brightness-0 transition-[filter,transform] duration-200 hover:brightness-100 hover:scale-110"
                aria-label={label}
              >
                <SocialIcon label={label} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}
