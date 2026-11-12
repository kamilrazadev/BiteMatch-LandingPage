import Link from "next/link";
import Shell from "@/components/Shell";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <Shell>
      <main id="main" className="legal">
        <div className="wrap center"><div className="glass" style={{ padding: "4rem 1.5rem" }}>
          <h1 className="grad">404</h1>
          <p className="lead">That bite got away. Let’s get you back home.</p>
          <Link className="btn" href="/">Back to home</Link>
        </div></div>
      </main>
    </Shell>
  );
}
