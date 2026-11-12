"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PLAY } from "@/lib/site";
import Icon from "./Icons";

const items: [string, string][] = [["home", "Home"], ["about", "About us"], ["how", "How it works"], ["download", "Download"], ["contact", "Contact us"]];

export default function Header({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const p = home ? "" : "/";
  return (
    <header className="hdr">
      <div className="wrap">
        <nav className="nav glass" aria-label="Main">
          <Link className="logo" href="/" aria-label="BiteMatch home">
            <Image src="/assets/img/logo-color.webp" width={87} height={34} alt="BiteMatch" priority />
          </Link>
          <ul id="menu" className={open ? "open" : ""} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
            {items.map(([id, label]) => (<li key={id}><a href={`${p}#${id}`}>{label}</a></li>))}
          </ul>
          <a className="btn sm" href={PLAY} rel="noopener" target="_blank">Get the app</a>
          <button className="menu-btn" aria-label="Menu" aria-expanded={open} aria-controls="menu" type="button" onClick={() => setOpen((o) => !o)}><Icon name={open ? "close" : "menu"} size={22} /></button>
        </nav>
      </div>
    </header>
  );
}
