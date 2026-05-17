import type { Metadata } from "next";
import AwardsView from "@/components/AwardsView";
import SerialBadge from "@/components/SerialBadge";

export const metadata: Metadata = {
  title: "Awards",
  description:
    "1st place at the Ajou University Business Intelligence department hackathon.",
};

export default function AwardsPage() {
  return (
    <>
      <SerialBadge />
      <AwardsView />
    </>
  );
}
