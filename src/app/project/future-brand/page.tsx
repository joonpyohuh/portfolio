import type { Metadata } from "next";
import IovePage from "@/components/IovePage";
import SerialBadge from "@/components/SerialBadge";
import { IOVE_CODENAME } from "@/lib/iove-content";

export const metadata: Metadata = {
  title: IOVE_CODENAME,
  description: "A future brand — first trace. Concept by Junpyo Heo.",
};

export default function FutureBrandPage() {
  return (
    <>
      <SerialBadge />
      <IovePage />
    </>
  );
}
