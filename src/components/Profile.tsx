import { profile } from "@/data/site";

/**
 * Profile — a short, readable introduction and nothing else. The old version
 * put location, education and email in a panel beside the text; all three are
 * now stated once, in the background section or the closing, so this is prose
 * the reader can simply read.
 */
export default function Profile() {
  return (
    <section id="profile" className="section" aria-labelledby="profile-title">
      <div className="container">
        <div className="section__head">
          <h2 id="profile-title">Profile</h2>
        </div>

        <div className="prose">
          {profile.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p>{profile.highlight.text}</p>
        </div>
      </div>
    </section>
  );
}
