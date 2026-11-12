import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./MailForm";
import Icon from "./Icons";
import { SOCIAL } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Image className="fl" src="/assets/img/logo-color.webp" width={111} height={44} alt="BiteMatch" />
            <p style={{ color: "var(--muted)", maxWidth: "34ch" }}>AI-powered culinary assistant for perfect food portions and flavour pairings.</p>
            <ul><li><Link href="/privacy-policy">Privacy Policy</Link></li><li><Link href="/terms-of-service">Terms of Service</Link></li></ul>
            <h2 className="follow">Follow us</h2>
            <div className="social">
              {SOCIAL.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer me" aria-label={`BiteMatch on ${s.name}`}><Icon name={s.icon} size={20} /></a>
              ))}
            </div>
          </div>
          <nav aria-label="Quick links">
            <h2>Quick Links</h2>
            <ul><li><Link href="/#home">Home</Link></li><li><Link href="/#about">About us</Link></li><li><Link href="/#download">Download</Link></li><li><Link href="/#contact">Contact us</Link></li></ul>
          </nav>
          <div><h2>Join Our Newsletters</h2><NewsletterForm /></div>
        </div>
        <div className="copy"><span>Copyright © 2026 BiteMatch LLC.</span><span>Designed &amp; developed by Bigfinity Publishers</span></div>
      </div>
    </footer>
  );
}
