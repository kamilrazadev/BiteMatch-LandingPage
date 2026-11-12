import type { Metadata } from "next";
import LegalDoc, { type Block } from "@/components/LegalDoc";
import data from "@/lib/privacy.json";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BiteMatch LLC collects, uses and protects your information when you use the BiteMatch app and related services.",
  alternates: { canonical: "/privacy-policy" },
};

export default function Page() {
  return <LegalDoc blocks={data as Block[]} />;
}
