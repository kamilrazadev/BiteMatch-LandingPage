import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollEffects from "./ScrollEffects";

export default function Shell({ children, home = false }: { children: ReactNode; home?: boolean }) {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
      <div className="grain" aria-hidden="true" />
      <Header home={home} />
      {children}
      <Footer />
      <ScrollEffects />
    </>
  );
}
