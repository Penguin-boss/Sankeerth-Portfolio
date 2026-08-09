"use client";

import { useState } from "react";
import { certificates, type Certificate } from "@/data/portfolio";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section
      id="certificates"
      className="section section--certificates"
    >
      <div className="site-container">

        {/* ==================================================
            HEADER
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

              {/* Main information */}

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

              {/* PREVIEW BUTTON */}

              <button
                type="button"
                className="certificate-row__link"
                aria-label={`Preview ${certificate.title}`}
                onClick={() =>
                  setSelectedCertificate(certificate)
                }
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  aria-hidden="true"
                >
                  <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                  <circle cx="12" cy="12" r="2.5" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* ====================================================
          CERTIFICATE PREVIEW
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
            onClick={() =>
              setSelectedCertificate(null)
            }
          />

          {/* Preview panel */}

          <div className="certificate-preview__panel">

            {/* Header */}

            <div className="certificate-preview__header">
              <div>
                <span className="certificate-preview__eyebrow">
                  Certificate Preview
                </span>

                <h3>
                  {selectedCertificate.title}
                </h3>
              </div>

              <button
                type="button"
                className="certificate-preview__close"
                aria-label="Close preview"
                onClick={() =>
                  setSelectedCertificate(null)
                }
              >
                ×
              </button>
            </div>

            {/* PDF */}

            <div className="certificate-preview__document">
              <iframe
                src={`${selectedCertificate.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                title={selectedCertificate.title}
                className="certificate-preview__iframe"
              />
            </div>

          </div>
        </div>
      )}
    </section>
  );
}