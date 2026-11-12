import { Fragment } from "react";
import Shell from "./Shell";
import { MAIL } from "@/lib/site";

export type Block = { t: "h1" | "h2" | "p"; x: string } | { t: "ul"; items: string[] };

function withMail(s: string) {
  const parts = s.split(MAIL);
  return parts.map((p, i) => (
    <Fragment key={i}>{p}{i < parts.length - 1 && <a href={`mailto:${MAIL}`}>{MAIL}</a>}</Fragment>
  ));
}

export default function LegalDoc({ blocks }: { blocks: Block[] }) {
  return (
    <Shell>
      <main id="main" className="legal">
        <div className="wrap">
          <article className="glass">
            {blocks.map((b, i) =>
              b.t === "h1" ? <h1 key={i}>{b.x}</h1>
              : b.t === "h2" ? <h2 key={i}>{b.x}</h2>
              : b.t === "ul" ? <ul key={i}>{b.items.map((li) => <li key={li}>{withMail(li)}</li>)}</ul>
              : <p key={i}>{withMail(b.x)}</p>,
            )}
          </article>
        </div>
      </main>
    </Shell>
  );
}
