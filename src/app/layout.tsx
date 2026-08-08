import type { Metadata } from "next";
import "./globals.css";
import AmbientParticles from "@/components/AmbientParticles";

export const metadata: Metadata = {
  title: "Sankeerth Devella — Student Builder",
  description:
    "Student builder focused on backend & database setup, AI-assisted development, and web projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grain grid-pattern antialiased font-body relative min-h-screen">
        <AmbientParticles />
        {children}
      </body>
    </html>
  );
}