"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import Icon from "./Icons";

const videos = [
  { id: "demo-walkthrough", title: "App walkthrough", sub: "Full tour · 1:02" },
  { id: "demo-promo", title: "BiteMatch in action", sub: "Quick promo · 0:35" },
];

/** One featured player + a switcher, instead of two heavy players side by side. */
export default function VideoShowcase() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLVideoElement>(null);
  const v = videos[i];

  const pick = (n: number) => {
    if (n === i) return;
    setI(n);
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  };
  // Pause the decorative background animation while a video plays so playback stays smooth.
  const setPlaying = (on: boolean) => document.body.classList.toggle("playing", on);

  return (
    <div className="showcase">
      <div className="player">
        <video
          key={v.id}
          ref={ref}
          controls
          playsInline
          preload="metadata"
          poster={`/assets/img/${v.id}-poster.webp`}
          width={1440}
          height={960}
          aria-label={v.title}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          <source src={`/assets/video/${v.id}.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="tabs" role="tablist" aria-label="Choose a video">
        {videos.map((x, n) => (
          <button key={x.id} role="tab" aria-selected={n === i} className={n === i ? "tab on" : "tab"} onClick={() => pick(n)} type="button">
            <span className="thumb">
              <Image src={`/assets/img/${x.id}-poster.webp`} alt="" width={160} height={107} sizes="160px" />
              <span className="pl"><Icon name="play" size={14} /></span>
            </span>
            <span className="meta"><b>{x.title}</b><small>{x.sub}</small></span>
          </button>
        ))}
      </div>
    </div>
  );
}
