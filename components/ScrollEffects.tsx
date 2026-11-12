"use client";
import { useEffect } from "react";

/** Reveal-on-scroll, active-nav highlighting and pointer tilt in one tiny client island. */
export default function ScrollEffects() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".rv");
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
    );
    els.forEach((e) => io.observe(e));

    const links = [...document.querySelectorAll<HTMLAnchorElement>("#menu a[href*='#']")];
    const map = new Map(links.map((a) => [a.getAttribute("href")!.split("#")[1], a]));
    const so = new IntersectionObserver(
      (es) => es.forEach((e) => {
        if (e.isIntersecting) { links.forEach((a) => a.removeAttribute("aria-current")); map.get(e.target.id)?.setAttribute("aria-current", "true"); }
      }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) so.observe(s); });

    const cleanups: (() => void)[] = [];
    if (matchMedia("(hover:hover) and (pointer:fine) and (prefers-reduced-motion:no-preference)").matches) {
      document.querySelectorAll<HTMLElement>(".tilt").forEach((c) => {
        const move = (e: PointerEvent) => {
          const k = c.getBoundingClientRect(), x = (e.clientX - k.left) / k.width - 0.5, y = (e.clientY - k.top) / k.height - 0.5;
          c.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-6px)`;
        };
        const leave = () => { c.style.transform = ""; };
        c.addEventListener("pointermove", move);
        c.addEventListener("pointerleave", leave);
        cleanups.push(() => { c.removeEventListener("pointermove", move); c.removeEventListener("pointerleave", leave); });
      });
    }
    // Timeline: fill the line with scroll progress and light each node as the line reaches it.
    const tl = document.getElementById("tl");
    if (tl) {
      const nodes = [...tl.querySelectorAll<HTMLElement>(".tl-node")];
      let raf = 0;
      const update = () => {
        raf = 0;
        const k = tl.getBoundingClientRect(), mid = innerHeight * 0.6;
        const p = Math.min(1, Math.max(0, (mid - k.top) / k.height));
        tl.style.setProperty("--p", p.toFixed(4));
        nodes.forEach((n) => { const r = n.getBoundingClientRect(); n.classList.toggle("lit", r.top + r.height / 2 < mid); });
      };
      const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
      update();
      addEventListener("scroll", onScroll, { passive: true });
      addEventListener("resize", onScroll);
      cleanups.push(() => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf); });
    }
    return () => { io.disconnect(); so.disconnect(); cleanups.forEach((f) => f()); };
  }, []);
  return null;
}
