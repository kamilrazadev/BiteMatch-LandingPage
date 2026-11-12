import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import Shell from "@/components/Shell";
import Icon, { type IconName } from "@/components/Icons";
import Timeline from "@/components/Timeline";
import VideoShowcase from "@/components/VideoShowcase";
import { ContactForm } from "@/components/MailForm";
import { PLAY, SITE, MAIL } from "@/lib/site";

const d = (n: number) => ({ "--d": n }) as CSSProperties;
const img = (n: string) => `/assets/img/${n}.webp`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": `${SITE}/#org`, name: "BiteMatch LLC", url: `${SITE}/`, logo: `${SITE}/icon-512.png`, email: MAIL },
    { "@type": "WebSite", "@id": `${SITE}/#site`, url: `${SITE}/`, name: "BiteMatch", publisher: { "@id": `${SITE}/#org` }, inLanguage: "en" },
    {
      "@type": "MobileApplication", name: "BiteMatch", operatingSystem: "Android", applicationCategory: "HealthApplication",
      description: "AI-powered culinary assistant that analyses your food and recommends perfect portions to reduce food waste.",
      url: `${SITE}/`, installUrl: PLAY, image: `${SITE}/og-image.jpg`,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" }, publisher: { "@id": `${SITE}/#org` },
    },
    {
      "@type": "VideoObject", name: "BiteMatch app walkthrough", description: "A full walkthrough of the BiteMatch AI portion assistant.",
      thumbnailUrl: `${SITE}${img("demo-walkthrough-poster")}`, contentUrl: `${SITE}/assets/video/demo-walkthrough.mp4`, uploadDate: "2026-08-01",
    },
  ],
};

function Eyebrow({ children, n = 0 }: { children: ReactNode; n?: number }) {
  return <span className="eyebrow rv" style={d(n)}>{children}</span>;
}

const problems = [
  { img: "problem-fries", alt: "Person worried about running out of ketchup for their fries", t: "The Last Fry Problem", p: "Perfect fries, but you ran out of ketchup halfway through. The last bites are always disappointing." },
  { img: "problem-bland", alt: "Person puzzled over ingredient proportions", t: "Bland Combinations", p: "You have all the ingredients but can't figure out the right proportions to make it taste amazing." },
  { img: "problem-guess", alt: "Cook guessing how much sauce and seasoning to add", t: "Guessing Game", p: "How much sauce for this pasta? How much seasoning? You're always guessing and often getting it wrong." },
];
const features = [
  { img: "icon-camera", alt: "Camera and plate icon", t: "Photo Analysis", p: "Upload any food photo for instant AI analysis and recommendations" },
  { img: "icon-ai", alt: "AI chip icon", t: "Smart AI", p: "Advanced AI understands context, preferences, and cooking principles" },
  { img: "icon-instant", alt: "Stopwatch and checklist icon", t: "Instant Results", p: "Get recommendations in seconds with real-time streaming responses" },
  { img: "icon-learn", alt: "Person learning with laptop", t: "Learn & Improve", p: "Build cooking confidence with educational insights and explanations" },
];

export default function Home() {
  return (
    <Shell home>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main id="main">
        <section className="hero" id="home">
          <div className="wrap">
            <div>
              <span className="eyebrow">AI culinary assistant</span>
              <h1>Perfect Food Portions,<br /><span className="grad">Every Single Bite</span></h1>
              <p className="lead">AI-powered culinary assistant that analyzes your food and gives you the perfect portion recommendations. Never run out of sauce or have bland combinations again.</p>
              <div className="cta">
                <a className="play" href={PLAY} target="_blank" rel="noopener" aria-label="Get BiteMatch on Google Play">
                  <Image src={img("badge-google-play")} width={174} height={58} alt="Get it on Google Play" priority />
                </a>
                <a className="btn ghost" href="#about">Learn More</a>
              </div>
            </div>
            <div className="stage">
              <Image className="phone" src={img("hero-phone")} width={430} height={614} sizes="(max-width:900px) 80vw, 430px" priority fetchPriority="high" alt="BiteMatch app: upload a food photo and get AI portion advice" />
              <div className="chip glass a"><b><Icon name="camera" size={16} /></b>Snap your food</div>
              <div className="chip glass b"><b><Icon name="scale" size={16} /></b>Perfect ratio</div>
              <div className="chip glass c"><b><Icon name="recycle" size={16} /></b>Less waste</div>
            </div>
          </div>
          <span className="scroll-hint" aria-hidden="true" />
        </section>

        <div className="marquee" aria-hidden="true">
          <div>
            {[...Array(2)].flatMap((_, i) => ["Perfect portions", "AI photo analysis", "Smarter flavour pairings", "Less food waste", "Healthier choices"].map((t) => <span key={`${i}-${t}`}>{t}</span>))}
          </div>
        </div>

        <section id="problem">
          <div className="wrap center">
            <Eyebrow>The problem</Eyebrow>
            <h2 className="rv" style={d(1)}>We&apos;ve All Been There...</h2>
            <div className="grid g3">
              {problems.map((c, i) => (
                <article key={c.t} className="card glass tilt rv" style={d(i + 1)}>
                  <Image className="art" src={img(c.img)} width={180} height={180} sizes="180px" alt={c.alt} />
                  <h3>{c.t}</h3><p>{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about">
          <div className="wrap split">
            <div>
              <Eyebrow>About us</Eyebrow>
              <h2 className="rv" style={d(1)}>What is <span className="grad">BiteMatch?</span></h2>
              <p className="lead rv" style={d(2)}>BiteMatch is your smart partner to healthier eating, smarter portions and less food waste. Use our app to monitor what you eat, learn about healthy food choices and find ways to save and reduce waste! BiteMatch’s AI-driven meal insights and tailored recommendations help you to create healthier habits, make every bite enjoyable, and make every meal count.</p>
              <div className="pills rv" style={d(3)}>
                <span className="pill glass"><Icon name="leaf" size={18} />Healthier Choices</span>
                <span className="pill glass"><Icon name="bot" size={18} />AI-Powered Insights</span>
                <span className="pill glass"><Icon name="recycle" size={18} />Less Waste, More Value</span>
              </div>
            </div>
            <div className="rv" style={d(2)}>
              <Image className="big" src={img("phone-about")} width={440} height={628} sizes="(max-width:900px) 90vw, 440px" alt="BiteMatch About Us screen: smarter meals, more sustainable" />
            </div>
          </div>
        </section>

        <section id="ai">
          <div className="wrap split rev">
            <div className="rv">
              <Image className="big" src={img("phone-meal")} width={440} height={594} sizes="(max-width:900px) 90vw, 440px" alt="BiteMatch Your Meal Analysis screen with serving guide" />
            </div>
            <div>
              <Eyebrow>AI assistant</Eyebrow>
              <h2 className="rv" style={d(1)}>Meet Your <span className="grad">AI Cooking Assistant</span></h2>
              <p className="lead rv" style={d(2)}>BiteMatch uses advanced AI to analyse your food and give you precise, personalised recommendations for perfect portions and flavour combinations.</p>
              <ul className="list">
                {([["camera", "Smart Visual Analysis", "Take a photo of your food and our AI instantly recognizes what you’re eating and how much you have."],
                  ["target", "Personalized Recommendations", "Get precise measurements and ratios tailored to your specific food and preferences."],
                  ["cap", "Learn as You Cook", "Understand the “why” behind recommendations and become a better cook with every meal."]] as [IconName, string, string][]).map(([i, t, p], k) => (
                  <li key={t} className="glass rv" style={d(k + 2)}><b aria-hidden="true"><Icon name={i} size={22} /></b><div><h3>{t}</h3><p>{p}</p></div></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="features">
          <div className="wrap center">
            <Eyebrow>Features</Eyebrow>
            <h2 className="rv" style={d(1)}>Everything You Need for <span className="grad">Perfect Bites</span></h2>
            <div className="grid g4">
              {features.map((c, i) => (
                <article key={c.t} className="card glass tilt rv" style={d(i + 1)}>
                  <Image className="art" src={img(c.img)} width={180} height={180} sizes="180px" alt={c.alt} />
                  <h3>{c.t}</h3><p>{c.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="how">
          <div className="wrap center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="rv" style={d(1)}>How <span className="grad">BiteMatch</span> Works</h2>
            <p className="lead rv" style={d(2)}>Three simple steps to perfect portions</p>
            <Timeline />
          </div>
        </section>

        <section id="watch">
          <div className="wrap center">
            <Eyebrow>Watch</Eyebrow>
            <h2 className="rv" style={d(1)}>See <span className="grad">BiteMatch</span> in action</h2>
            <p className="lead rv" style={d(2)}>Watch how a single photo turns into perfect portions.</p>
            <div className="rv" style={d(3)}><VideoShowcase /></div>
          </div>
        </section>

        <section id="download">
          <div className="wrap">
            <div className="cta-box glass rv">
              <Image className="appicon" src={img("app-icon")} width={88} height={88} alt="BiteMatch app icon" />
              <h2>Download <span className="grad">BiteMatch</span> today</h2>
              <p className="lead">Eat smarter, waste less and make every meal count. Get perfect portions in seconds.</p>
              <a href={PLAY} target="_blank" rel="noopener" aria-label="Get BiteMatch on Google Play">
                <Image className="badge" src={img("badge-google-play")} width={192} height={64} alt="Get it on Google Play" />
              </a>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap contact">
            <div>
              <Eyebrow>Contact us</Eyebrow>
              <h2 className="rv" style={d(1)}>Get in <span className="grad">touch</span></h2>
              <p className="lead rv" style={d(2)}>If you have any query in your mind let us know!</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </Shell>
  );
}
