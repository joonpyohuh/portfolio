"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { dict, type Dict, type Lang } from "./dict";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "jp-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ko");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ko" || saved === "en") setLangState(saved);
    } catch {
      /* ignore */
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
  }, [lang, mounted]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "ko" ? "en" : "ko";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const activeLang: Lang = mounted ? lang : "ko";

  const value = useMemo<Ctx>(
    () => ({
      lang: activeLang,
      setLang,
      toggle,
      t: dict[activeLang],
    }),
    [activeLang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLang(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return ctx;
}
