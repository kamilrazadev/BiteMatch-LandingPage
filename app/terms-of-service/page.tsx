import type { Metadata } from "next";
import LegalDoc, { type Block } from "@/components/LegalDoc";
import data from "@/lib/terms.json";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions for using the BiteMatch AI-powered culinary assistant.",
  alternates: { canonical: "/terms-of-service" },
};

export default function Page() {
  return <LegalDoc blocks={data as Block[]} />;
}
