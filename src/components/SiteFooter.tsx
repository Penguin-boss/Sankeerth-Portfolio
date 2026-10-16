import { identity } from "@/data/site";

/**
 * Footer: the copyright line and a way back to the top. Everything else that
 * used to be down here (social links, location) is already stated once
 * elsewhere on the page.
 */
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__note">
          © {new Date().getFullYear()} {identity.name}. {identity.location.formatted}.
        </p>

        {/* Resolves on every page: each one has a <main id="main">. */}
        <a className="site-footer__link" href="#main">
          Back to top
        </a>
      </div>
    </footer>
  );
}
