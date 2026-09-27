import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* There is a stray package-lock.json in the user's home directory, which
     Turbopack would otherwise pick as the workspace root. Pin the root to this
     project so module resolution and the build output stay predictable. */
  turbopack: {
    root: path.resolve(import.meta.dirname ?? "."),
  },
};

export default nextConfig;
