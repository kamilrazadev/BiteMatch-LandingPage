import type { CSSProperties } from "react";
import Icon, { type IconName } from "./Icons";

const steps: { icon: IconName; t: string; p: string; tag: string }[] = [
  { icon: "upload", tag: "Snap", t: "Upload & Describe", p: "Take a photo of your food or describe what you’re eating. Choose your meal vibe if you want." },
  { icon: "help", tag: "Ask", t: "Ask Your Question", p: "Ask about portions, ratios, pairings, or use our preset questions for common cooking challenges." },
  { icon: "sparkles", tag: "Enjoy", t: "Get Perfect Results", p: "Receive instant, personalized recommendations with follow-up options for deeper insights." },
];

/** Scroll-linked vertical timeline: the fill line and drop are driven by ScrollEffects (--p) and CSS. */
export default function Timeline() {
  return (
    <ol className="timeline" id="tl">
      <li className="tl-track" aria-hidden="true"><span className="tl-fill" /><span className="tl-drop" /></li>
      {steps.map((s, i) => (
        <li key={s.t} className={`tl-step ${i % 2 ? "r" : "l"}`}>
          <div className="tl-node"><Icon name={s.icon} size={24} /><span className="ring" /></div>
          <article className="tl-card glass rv" style={{ "--d": 1 } as CSSProperties}>
            <span className="n">STEP {i + 1} · {s.tag}</span>
            <span className="big grad" aria-hidden="true">0{i + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.p}</p>
          </article>
        </li>
      ))}
    </ol>
  );
}
