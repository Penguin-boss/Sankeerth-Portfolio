"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { certificates } from "@/data/portfolio";
import { sections } from "@/lib/site";
import SectionHeading from "@/components/ui/SectionHeading";
import Dialog from "@/components/ui/Dialog";
import { Reveal } from "@/components/ui/Reveal";

const meta = sections[2];
/**
 * Credentials.
 *
 * The site previously had two adjacent sections — Hackathons and Certificates —
 * presenting much the same evidence, with the four hackathon certificates
 * duplicated across both. They are now one destination behind a segmented
 * control: the Hackathon tab tells the story round by round with each round's
 * certificate attached to it, and the Certificates tab holds the professional
 * ones. Old #hackathons and #certificates links still resolve here (see NavBar).
 */
export default function Credentials() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = certificates.find((c) => c.id === openId);

  return (
    <section
      id={meta.id}
      className="section"
      aria-labelledby={`${meta.id}-title`}
    >
      <div className="container">
        <SectionHeading
          section={meta}
          lede="Competition results and certifications, viewable in place."
        />

        <ul className="cert-grid" style={{ marginTop: "var(--space-6)" }}>
          {certificates.map((certificate, index) => (
            <Reveal as="li" key={certificate.id} order={index}>
              <button
                type="button"
                className="cert-card"
                onClick={() => setOpenId(certificate.id)}
                aria-haspopup="dialog"
              >
                <span className="cert-card__title">{certificate.title}</span>

                <span className="cert-card__meta">
                  <span className="meta">{certificate.issuer}</span>
                  <span className="meta">{certificate.date}</span>
                </span>
                
                <span className="cert-card__cue">
                  View
                  <Eye aria-hidden="true" width={14} height={14} />
                </span>

                <span className="visually-hidden">
                  Opens a dialog with this certificate
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog
        wide
        open={Boolean(active)}
        onClose={() => setOpenId(null)}
        title={active?.title ?? ""}
        eyebrow={active ? `${active.issuer} · ${active.date}` : undefined}
      >
        {active ? (
          <div className="work-detail">
            {/* `contain`, not `cover` — cropping a certificate hides exactly the
                part that makes it evidence. */}
            <div className="media media--contain media--wide">
              <Image
                src={active.previewImage}
                alt={`${active.title}, issued by ${active.issuer}`}
                fill
                sizes="(max-width: 40rem) 100vw, 56rem"
              />
            </div>

            <p className="work-detail__text">{active.description}</p>
          </div>
        ) : null}
      </Dialog>
    </section>
  );
}
