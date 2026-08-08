"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { certificates, Certificate } from "@/data/portfolio";
import { Award, Download, Eye, ExternalLink, X, FileText, CheckCircle, ShieldCheck } from "lucide-react";

type CategoryFilter = "All" | "Professional" | "Hackathon";

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("All");
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const filteredCerts = certificates.filter((c) => {
    if (activeCategory === "Professional") return c.category === "Professional";
    if (activeCategory === "Hackathon") return c.category === "Hackathon";
    return true;
  });

  return (
    <section id="certificates" className="relative px-6 sm:px-8 py-24 sm:py-32 border-t border-border overflow-hidden">
      {/* Subtle Radial Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="radial-glow" style={{ top: "15%", right: "10%", width: "450px", height: "450px", opacity: 0.04, background: "#10B981" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading eyebrow="05 — verification" title="Certificates & Credentials" id="certificates-heading" />

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3 mb-12 pb-6 border-b border-border/60"
        >
          {(
            [
              { id: "All", label: "All Certificates", count: certificates.length },
              { id: "Professional", label: "Professional Dev", count: certificates.filter((c) => c.category === "Professional").length },
              { id: "Hackathon", label: "Hackathon Awards", count: certificates.filter((c) => c.category === "Hackathon").length },
            ] as const
          ).map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as CategoryFilter)}
                className={`relative px-4 py-2 rounded-lg text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-bg font-semibold"
                    : "text-fg-muted hover:text-fg hover:bg-bg-elevated/60"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-cert-tab"
                    className="absolute inset-0 bg-accent rounded-lg shadow-md shadow-accent/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 px-1.5 py-0.5 text-[10px] rounded ${
                    isActive ? "bg-bg/20 text-bg" : "bg-bg-elevated text-fg-faint"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Certificates Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, i) => (
              <motion.div
                layout
                key={cert.id}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between reg-corners border border-border bg-bg-elevated/40 backdrop-blur-md p-6 rounded-xl transition-all duration-300 hover:border-accent/60 hover:shadow-[0_16px_36px_-10px_rgba(34,197,94,0.12)]"
              >
                <div>
                  {/* Top Bar Icon & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-10 h-10 flex items-center justify-center bg-accent/10 border border-accent/30 rounded-lg shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>

                    <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border border-accent/30 bg-accent/10 text-accent font-medium">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="font-display text-xl font-bold text-fg tracking-tight uppercase mb-2 group-hover:text-accent transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="font-mono text-xs text-fg-faint mb-4 flex items-center gap-2">
                    <ShieldCheck size={13} className="text-accent/80" />
                    <span>{cert.issuer}</span>
                  </p>

                  <p className="text-fg-muted text-xs leading-relaxed mb-6">
                    {cert.description}
                  </p>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-border/50 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono text-accent bg-accent/10 hover:bg-accent hover:text-bg border border-accent/30 rounded-lg transition-all font-medium"
                  >
                    <Eye size={14} />
                    <span>View PDF</span>
                  </button>

                  <a
                    href={cert.file}
                    download
                    title="Download Certificate PDF"
                    className="p-2 text-fg-muted hover:text-fg hover:bg-bg-elevated border border-border/60 rounded-lg transition-all"
                  >
                    <Download size={15} />
                  </a>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer"
                    title="Open in New Tab"
                    className="p-2 text-fg-muted hover:text-fg hover:bg-bg-elevated border border-border/60 rounded-lg transition-all"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* PDF View Modal Dialog */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-bg/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-4xl h-[85vh] flex flex-col reg-corners border border-border bg-bg-elevated rounded-2xl shadow-2xl overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border/70 bg-bg/80">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-accent" />
                  <div>
                    <h4 className="font-display text-lg font-bold text-fg uppercase tracking-tight">
                      {selectedCert.title}
                    </h4>
                    <p className="font-mono text-xs text-fg-faint">
                      {selectedCert.issuer} — {selectedCert.date}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={selectedCert.file}
                    download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-accent bg-accent/10 border border-accent/30 hover:bg-accent hover:text-bg rounded-lg transition-all"
                  >
                    <Download size={14} />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="p-2 text-fg-muted hover:text-fg hover:bg-bg rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Embedded PDF Viewer */}
              <div className="flex-1 bg-black/40 relative">
                <iframe
                  src={selectedCert.file}
                  className="w-full h-full border-0"
                  title={selectedCert.title}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
