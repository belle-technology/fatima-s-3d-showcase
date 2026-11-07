import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  ArrowUpRight,
  Sparkles,
  Download,
  Headphones,
  HeartHandshake,
  Star,
  ShieldCheck,
  Leaf,
  Sprout,
  ShoppingBasket,
  Cookie,
  ShieldAlert,
  Coins,
} from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fatima Yusuf Adam — Full Stack Software Engineer" },
      {
        name: "description",
        content:
          "Full stack software engineer Fatima Yusuf Adam's selected projects, customer service experience, and contact details.",
      },
      { property: "og:title", content: "Fatima Yusuf Adam — Full Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Explore selected software projects by Fatima Yusuf Adam, a full stack software engineer based in Abuja.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const works = [
  {
    title: "Carbon Compass",
    tag: "Platform · Data",
    year: "2025",
    desc: "Calculate personal or organizational carbon footprints and get AI-guided recommendations for reducing emissions.",
    url: "https://verdantcarboncompass.lovable.app",
    accent: "from-[#4c8bf5] to-[#3ecf8e]",
    icon: Leaf,
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase", "AI SDK", "Recharts", "Three.js"],
  },
  {
    title: "Belletech Impact",
    tag: "Web · Design System",
    year: "2025",
    desc: "A climate-impact platform featuring environmental initiatives, project showcases, research, and sustainability tools.",
    url: "https://belletech.lovable.app",
    accent: "from-[#f2b544] to-[#d16ba5]",
    icon: Sprout,
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase", "Framer Motion"],
  },
  {
    title: "Fruitful Seedlings",
    tag: "E-commerce · Catalogue",
    year: "2024",
    desc: "An online nursery for exploring fruit trees and seedlings, placing orders, and following delivery progress.",
    url: "https://fruitful-seedlingsng.lovable.app",
    accent: "from-[#3ecf8e] to-[#f2b544]",
    icon: ShoppingBasket,
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Kookie Queens Bakery",
    tag: "Web · Checkout",
    year: "2024",
    desc: "A bakery storefront for browsing handmade cookies and placing small-batch pre-orders for delivery.",
    url: "https://kookie-queen-bakery.lovable.app",
    accent: "from-[#d16ba5] to-[#f2b544]",
    icon: Cookie,
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Guardian Pass",
    tag: "Security · Access",
    year: "2024",
    desc: "A personal-safety experience for discreetly signaling distress, alerting trusted contacts, and sharing location.",
    url: "https://silent-beacon-route-intelligence.lovable.app",
    accent: "from-[#8a5cf6] to-[#4c8bf5]",
    icon: ShieldAlert,
    tech: ["React", "TypeScript", "TanStack Start", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Zyra Finance",
    tag: "Fintech · Payments",
    year: "2023",
    desc: "A Web3 finance showcase introducing a decentralized exchange concept, with its roadmap and token information.",
    url: "https://zyrafinance.lovable.app",
    accent: "from-[#f2b544] to-[#8a5cf6]",
    icon: Coins,
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Recharts"],
  },
];

const skills = ["TypeScript", "React", "Node.js", "PostgreSQL", "Python", "AWS"];

const servicePillars = [
  {
    icon: Headphones,
    title: "Front-line support",
    line: "Phone, email and chat handled with patience and a fast, human answer.",
  },
  {
    icon: HeartHandshake,
    title: "De-escalation",
    line: "Turning an angry call into a saved relationship, calmly and in plain language.",
  },
  {
    icon: Star,
    title: "Follow-through",
    line: "Closing the loop so nobody ever has to ask twice.",
  },
];

const serviceWins = [
  "Handled a steady stream of enquiries across phone, email and chat without losing patience or accuracy.",
  "Turned complaints into fixes by explaining things in plain language, not policy language.",
  "Followed up until the problem was actually closed, not just marked done.",
  "Showed new team members how to hold tone and product knowledge under pressure.",
];

function Index() {
  return (
    <div className="grain relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Ambient gradient blobs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.72_0.20_350/0.35)] blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.55_0.22_280/0.35)] blur-[140px]" />

      {/* Nav */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <div className="flex items-center gap-2 text-sm font-medium tracking-widest uppercase">
          <span className="inline-block h-2 w-2 rounded-full bg-primary shadow-[0_0_20px_var(--glow)]" />
          FYA
        </div>
        <nav className="hidden gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#about" className="hover:text-foreground transition">About</a>
          <a href="#service" className="hover:text-foreground transition">Service</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="glass rounded-full px-4 py-2 text-xs font-medium tracking-wide uppercase transition hover:bg-primary hover:text-primary-foreground"
        >
          Hire me
        </a>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 pt-8 pb-24 md:grid-cols-2 md:px-10 md:pt-16 md:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase text-muted-foreground"
          >
            <Sparkles className="h-3 w-3 text-primary" /> Full Stack Engineer · CV · 2026
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl leading-[0.95] font-semibold sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Fatima
            <br />
            <span className="text-gradient italic">Yusuf Adam</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 max-w-md text-lg text-muted-foreground"
          >
            Full stack engineer who ships products end to end — data model, API,
            interface — and cares about the parts users never see as much as the ones they do.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:brightness-110"
            >
              View selected work <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:bg-white/10"
            >
              <Download className="h-4 w-4" /> Contact
            </a>
          </motion.div>
        </div>

        {/* 3D scene */}
        <div className="relative h-[420px] w-full md:h-[560px]">
          <Scene3D />
        </div>
      </section>

      {/* Marquee */}
      <div className="border-y border-border/50 bg-black/20 py-4 overflow-hidden">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-12 whitespace-nowrap text-xl font-medium tracking-tight text-muted-foreground md:text-2xl">
          {[...Array(2)].flatMap((_, i) =>
            skills.map((s) => (
              <span key={`${i}-${s}`} className="flex items-center gap-12">
                {s} <span className="text-primary">✦</span>
              </span>
            )),
          )}
        </div>
        <style>{`@keyframes marquee { to { transform: translateX(-50%); } }`}</style>
      </div>

      {/* Work */}
      <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-3 text-xs tracking-widest uppercase text-muted-foreground">Selected work</p>
            <h2 className="text-4xl font-semibold md:text-6xl">Recent things<br /><span className="italic text-gradient">I'm proud of.</span></h2>
          </div>
          <span className="hidden text-sm text-muted-foreground md:block">06 projects</span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {works.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              style={{ perspective: 1200 }}
            >
              <TiltCard className="group relative h-full">
                <a
                  href={w.url}
                  target={w.url.startsWith("http") ? "_blank" : undefined}
                  rel={w.url.startsWith("http") ? "noreferrer" : undefined}
                  className="glass relative flex h-full flex-col overflow-hidden rounded-3xl p-8 transition"
                >
                  <div className={`absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-30 bg-gradient-to-br ${w.accent}`} />
                  <div className="relative flex items-start justify-between">
                    <span className="text-xs tracking-widest uppercase text-muted-foreground">{w.tag}</span>
                    <span className="text-xs text-muted-foreground">{w.year}</span>
                  </div>
                  <div className="relative mt-10 flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl">
                    <div className={`h-full w-full bg-gradient-to-br ${w.accent} opacity-80`} />
                    <div className="absolute inset-0 grain opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <w.icon aria-hidden="true" className="h-16 w-16 text-foreground drop-shadow-lg md:h-20 md:w-20" strokeWidth={1.35} />
                    </div>
                  </div>
                  <div className="relative mt-6 flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <h3 className="text-2xl font-semibold md:text-3xl">{w.title}</h3>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{w.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2" aria-label={`${w.title} technology stack`}>
                        {w.tech.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border/70 px-2.5 py-1 text-xs text-muted-foreground"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="glass ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About / CV */}
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-xs tracking-widest uppercase text-muted-foreground">The short version</p>
          <h2 className="text-4xl font-semibold md:text-7xl">
            Full stack,
            <span className="italic text-gradient"> from schema to shipped.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Based in Abuja, working globally. I take products from schema to shipped —
            APIs, data models, interfaces — and I leave things documented, tested and easy
            for the next person to pick up.
          </p>
        </div>
      </section>

      {/* Customer service */}
      <section id="service" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs tracking-widest uppercase text-muted-foreground">Customer service</p>
          <h2 className="text-4xl font-semibold md:text-6xl">
            Service is an
            <span className="italic text-gradient"> engineering skill.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Before code, I worked the front line — listening, de-escalating and turning
            frustrated people into loyal ones. It is the reason I build for the person on
            the other side of the screen, not just for the ticket in front of me.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass relative h-full overflow-hidden rounded-3xl p-8 md:p-10">
              <div className="pointer-events-none absolute -top-24 -left-24 h-[280px] w-[280px] rounded-full bg-[oklch(0.85_0.16_75/0.22)] blur-[90px]" />
              <span className="glass relative inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs tracking-widest uppercase text-muted-foreground">
                <ShieldCheck className="h-3 w-3 text-primary" /> Experience
              </span>
              <h3 className="relative mt-8 text-3xl font-semibold md:text-4xl">Customer Service Representative</h3>
              <p className="relative mt-1 text-muted-foreground">Front-line support · phone, email &amp; chat</p>
              <ul className="relative mt-8 space-y-4">
                {serviceWins.map((w) => (
                  <li key={w} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
                    <span className="leading-relaxed">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="flex flex-col justify-between gap-6 lg:col-span-7">
            {servicePillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard className="h-full">
                  <div className="glass flex items-center gap-6 rounded-3xl p-6 md:p-8">
                    <span className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                      <p.icon className="h-5 w-5 text-primary" />
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold">{p.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="glass relative overflow-hidden rounded-[2.5rem] p-10 md:p-16">
          <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-[oklch(0.85_0.16_75/0.35)] blur-[120px]" />
          <p className="mb-3 text-xs tracking-widest uppercase text-muted-foreground">Get in touch</p>
          <h2 className="max-w-3xl text-5xl font-semibold leading-[0.95] md:text-7xl">
            Let's make something
            <span className="italic text-gradient"> unforgettable.</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="mailto:zzahrayadam@gmail.com"
              className="group glass flex items-center justify-between rounded-2xl p-6 transition hover:bg-white/10"
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Email</p>
                <p className="mt-2 text-lg font-medium md:text-xl">zzahrayadam@gmail.com</p>
              </div>
              <Mail className="h-6 w-6 text-primary transition group-hover:rotate-12" />
            </a>
            <a
              href="tel:08032719354"
              className="group glass flex items-center justify-between rounded-2xl p-6 transition hover:bg-white/10"
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground">Phone</p>
                <p className="mt-2 text-lg font-medium md:text-xl">0803 271 9354</p>
              </div>
              <Phone className="h-6 w-6 text-primary transition group-hover:-rotate-12" />
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 border-t border-border/50 px-6 py-8 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
        <p>© 2026 Fatima Yusuf Adam. Built with care.</p>
        <p className="tracking-widest uppercase">Abuja · Available for projects</p>
      </footer>
    </div>
  );
}
