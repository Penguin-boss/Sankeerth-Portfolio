import Image from "next/image";
import { hero, identity } from "@/data/site";
import { ArrowRight, ArrowUpRight } from "@/components/icons";

/**
 * Hero — one composition rather than a stack of parts.
 *
 * The name, the role, one short introduction and four links share a grid with
 * the portrait, which sits in a navy plate so the black suit in the photograph
 * separates from the black page. Because the grid is content-height there is no
 * fixed stage and no dead gap underneath it.
 *
 * The portrait is above the fold on every screen size that shows it, so it is
 * the one image on the site that is not lazy-loaded. Its plate reserves the
 * space (aspect-ratio) before the image arrives.
 */
export default function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1 id="hero-title" className="hero__title">
            {identity.name}
          </h1>

          <p className="hero__role">{identity.role}</p>

          <p className="hero__intro">{hero.intro}</p>

          <ul className="hero__links">
            <li>
              <a className="hero__link hero__link--internal" href="#work">
                Selected work
                <ArrowRight />
              </a>
            </li>
            <li>
              <a
                className="hero__link"
                href={`mailto:${identity.email}`}
                aria-label={`Email ${identity.name}`}
              >
                Email
              </a>
            </li>
            <li>
              <a
                className="hero__link"
                href={identity.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
                <ArrowUpRight />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                className="hero__link"
                href={identity.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <ArrowUpRight />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="hero__plate">
          <Image
            className="hero__portrait"
            src="/hero-portrait.png"
            alt={`${identity.name}, photographed in a dark suit`}
            width={581}
            height={904}
            priority
            sizes="(max-width: 52rem) 20rem, 21rem"
          />
        </div>
      </div>
    </section>
  );
}
