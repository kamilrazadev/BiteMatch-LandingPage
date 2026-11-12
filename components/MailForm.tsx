"use client";
import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import Icon from "./Icons";

const COLORS = ["#1a73e8", "#38d5ff", "#5eead4", "#a78bfa", "#fbbf24", "#fb7185"];

/** Dummy confetti burst (pure DOM + CSS, no dependency). Skipped for reduced-motion users. */
function burst(host: HTMLElement | null) {
  if (!host || matchMedia("(prefers-reduced-motion:reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "confetti";
  layer.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 70; i++) {
    const s = document.createElement("span");
    const a = Math.random() * Math.PI * 2, dist = 120 + Math.random() * 260;
    s.style.setProperty("--x", `${Math.cos(a) * dist}px`);
    s.style.setProperty("--y", `${Math.sin(a) * dist - 120}px`);
    s.style.setProperty("--r", `${Math.random() * 900 - 450}deg`);
    s.style.setProperty("--c", COLORS[i % COLORS.length]);
    s.style.setProperty("--dl", `${Math.random() * 120}ms`);
    s.style.width = `${6 + Math.random() * 7}px`;
    s.style.height = `${8 + Math.random() * 10}px`;
    if (i % 3 === 0) s.style.borderRadius = "50%";
    layer.appendChild(s);
  }
  host.appendChild(layer);
  setTimeout(() => layer.remove(), 2600);
}

/** Front-end only for now: shows a thank-you celebration. Wire `submit` to a real endpoint later. */
export function ContactForm() {
  const [name, setName] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  const [h, setH] = useState<number | undefined>();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setH(ref.current?.offsetHeight);
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      setName(String(fd.get("name") || "").trim().split(" ")[0] || "friend");
      burst(ref.current);
    }, 900);
  };

  if (name !== null) {
    return (
      <form ref={ref} className="glass done" style={{ minHeight: h }} onSubmit={(e) => e.preventDefault()}>
        <div className="thanks" role="status" aria-live="polite">
          <span className="tick"><Icon name="check" size={44} /></span>
          <h3>Thank you, {name}!</h3>
          <p>Your message is on its way. Our team will get back to you very soon.</p>
          <button className="btn ghost" type="button" onClick={() => { setName(null); }}>Send another message</button>
        </div>
      </form>
    );
  }

  return (
    <form ref={ref} className="glass rv" style={{ "--d": 2 } as CSSProperties} onSubmit={submit}>
      <div className="row">
        <label>Name<input name="name" required autoComplete="name" placeholder="Your name" /></label>
        <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="Phone" /></label>
      </div>
      <label>Email<input name="email" type="email" required autoComplete="email" placeholder="you@example.com" /></label>
      <label>Message<textarea name="message" required placeholder="How can we help?" /></label>
      <button className="btn" type="submit" disabled={busy}>{busy ? "Sending…" : "Send"}</button>
    </form>
  );
}

export function NewsletterForm() {
  const [ok, setOk] = useState(false);
  const ref = useRef<HTMLFormElement>(null);
  if (ok) {
    return (
      <p className="news-ok" role="status"><Icon name="check" size={20} /> You’re subscribed. Thank you!</p>
    );
  }
  return (
    <form ref={ref} className="news" style={{ padding: 0, display: "flex" }} onSubmit={(e) => { e.preventDefault(); setOk(true); }}>
      <label className="sr" htmlFor="nl">Email</label>
      <input id="nl" name="email" type="email" required placeholder="Email" autoComplete="email" />
      <button className="btn sm" type="submit">Submit</button>
    </form>
  );
}
