"use client";

import { useEffect, useState } from "react";
import { certificates, type Certificate } from "@/data/portfolio";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCertificate]);

  return (
    <section
      id="certificates"
      className="section section--certificates"
    >
      <div className="site-container">

        {/* ==================================================
            SECTION HEADER
           ================================================== */}

        <div className="section-heading">
          <p className="section-heading__eyebrow">
            <span />
            Credentials
          </p>

          <h2 className="section-heading__title">
            Certificates.
          </h2>
        </div>

        {/* ==================================================
            INTRO
           ================================================== */}

        <div className="certificate-intro">
          <p>
            Selected certifications and achievements from
            professional development and competitive events.
          </p>
        </div>

        {/* ==================================================
            CERTIFICATE LIST
           ================================================== */}

        <div className="certificate-list">
          {certificates.map((certificate, index) => (
            <article
              key={certificate.id}
              className="certificate-row"
            >
              {/* Number */}

              <div className="certificate-row__icon">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Certificate information */}

              <div className="certificate-row__main">
                <span>
                  {certificate.category} · {certificate.date}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.description}
                </p>
              </div>

              {/* Issuer */}

              <div className="certificate-row__issuer">
                {certificate.issuer}
              </div>

              {/* Preview */}

          <button
  type="button"
  className="certificate-row__view"
  onClick={() => {
    setSelectedCertificate(certificate);
  }}
>
  View certificate
  <span aria-hidden="true">↗</span>
</button>
              
            </article>
          ))}
        </div>
      </div>

      {/* ====================================================
          CERTIFICATE PREVIEW MODAL
         ==================================================== */}

      {selectedCertificate && (
        <div
          className="certificate-preview"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview ${selectedCertificate.title}`}
        >
          {/* Backdrop */}

          <button
            type="button"
            className="certificate-preview__backdrop"
            aria-label="Close certificate preview"
            onClick={() => {
              setSelectedCertificate(null);
            }}
          />

          {/* Panel */}

          <div className="certificate-preview__panel">

            {/* Header */}

            <div className="certificate-preview__header">
              <div>
                <span>
                  Certificate Preview
                </span>

                <h3>
                  {selectedCertificate.title}
                </h3>
              </div>

              <button
                type="button"
                className="certificate-preview__close"
                aria-label="Close certificate preview"
                onClick={() => {
                  setSelectedCertificate(null);
                }}
              >
                ×
              </button>
            </div>

            {/* Certificate image */}

            <div className="certificate-preview__document">
              {selectedCertificate.previewImage ? (
                <img
                  src={selectedCertificate.previewImage}
                  alt={selectedCertificate.title}
                  className="certificate-preview__image"
                />
              ) : (
                <div className="certificate-preview__missing">
                  <span>
                    PREVIEW UNAVAILABLE
                  </span>

                  <p>
                    Add the certificate preview image
                    to the public folder.
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}