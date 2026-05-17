import type { Metadata } from "next";
import ManifestoView from "@/components/ManifestoView";
import SerialBadge from "@/components/SerialBadge";

export const metadata: Metadata = {
  title: "Manifesto",
  description: "Brand thinking — intended imperfection and the beauty of inefficiency.",
};

export default function ManifestoPage() {
  return (
    <>
      <SerialBadge />
      <ManifestoView />
    </>
  );
}
