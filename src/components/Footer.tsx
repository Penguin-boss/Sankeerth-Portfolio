import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="px-6 sm:px-8 py-8 border-t border-hairline">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-ink-faint">
          {profile.name} · {profile.location}
        </p>
        <p className="font-mono text-xs text-ink-faint">built with next.js · tailwind · framer motion</p>
      </div>
    </footer>
  );
}
