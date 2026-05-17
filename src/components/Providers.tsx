"use client";

import type { ReactNode } from "react";
import { LanguageProvider } from "@/lib/i18n";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
