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
} from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/")({
  component: Index,
});

const works = [
  {
    title: "Carbon Compass",
    tag: "Platform · Data",
    year: "2025",
    desc: "Carbon-tracking platform — emissions data pipeline, dashboards and reporting, built end to end.",
    url: "https://verdantcarboncompass.lovable.app",
    accent: "from-[#4c8bf5] to-[#3ecf8e]",
  },
  {
    title: "Belletech Impact",
    tag: "Web · Design System",
    year: "2025",
    desc: "Company marketing site built as a reusable component library.",
    url: "https://belletech.lovable.app",
    accent: "from-[#f2b544] to-[#d16ba5]",
  },
  {
    title: "Fruitful Seedlings",
    tag: "E-commerce · Catalogue",
    year: "2024",
    desc: "Product catalogue and ordering flow for an agricultural nursery, with stock and delivery handling.",
    url: "https://fruitful-seedlingsng.lovable.app",
    accent: "from-[#3ecf8e] to-[#f2b544]",
  },
  {
    title: "Kookie Queens Bakery",
    tag: "Web · Checkout",
    year: "2024",
    desc: "Online storefront with cart, checkout and order tracking for a local bakery.",
    url: "https://kookie-queen-bakery.lovable.app",
    accent: "from-[#d16ba5] to-[#f2b544]",
  },
  {
    title: "Guardian Pass",
    tag: "Security · Access",
    year: "2024",
    desc: "Credential and access system with role-based permissions, expiry rules and audit trails.",
    url: "https://silent-beacon-route-intelligence.lovable.app",
    accent: "from-[#8a5cf6] to-[#4c8bf5]",
  },
  {
    title: "Zyra Finance",
    tag: "Fintech · Payments",
    year: "2023",
    desc: "Mobile banking experience — accounts, transfers and transaction history with honest money states.",
    url: "https://zyrafinance.lovable.app",
    accent: "from-[#f2b544] to-[#8a5cf6]",
  },
];

const timeline = [
  { year: "2024 — Now", role: "Senior Software Engineer", place: "Independent Studio" },
  { year: "2022 — 2024", role: "Software Engineer", place: "Paystack" },
  { year: "2020 — 2022", role: "Frontend Developer", place: "Andela" },
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

const serviceStats = [
  { value: "1,200+", label: "customers helped" },
  { value: "98%", label: "satisfaction score" },
  { value: "< 3 min", label: "average reply time" },
  { value: "0", label: "escalated complaints" },
];

const serviceWins = [
  "Resolved 60+ enquiries a day across phone, email and chat.",
  "Cut average reply time from 12 minutes to under 3 by rebuilding the team's response templates.",
  "Recovered 40+ at-risk accounts with honest, plain-language follow-up.",
  "Trained 8 new hires on tone, product knowledge and de-escalation.",
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
            <Sparkles className="h-3 w-3 text-primary" /> Portfolio · CV · 2026
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
            Software engineer who ships products end to end — data model, API,
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
                  <div className="relative mt-16 aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <div className={`h-full w-full bg-gradient-to-br ${w.accent} opacity-80`} />
                    <div className="absolute inset-0 grain opacity-40" />
                  </div>
                  <div className="relative mt-6 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold md:text-3xl">{w.title}</h3>
                      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{w.desc}</p>
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
      <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:grid md:grid-cols-12 md:gap-12 md:px-10">
        <div className="md:col-span-5">
          <p className="mb-3 text-xs tracking-widest uppercase text-muted-foreground">The short version</p>
          <h2 className="text-4xl font-semibold md:text-5xl">
            Six years shipping
            <span className="italic text-gradient"> software that has to keep working.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Based in Abuja, working globally. I take products from schema to shipped —
            APIs, data models, interfaces — and I leave things documented, tested and easy
            for the next person to pick up.
          </p>
        </div>
        <div className="mt-12 md:col-span-7 md:mt-0">
          <ol className="relative border-l border-border/60 pl-8">
            {timeline.map((t, i) => (
              <motion.li
                key={t.year}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="mb-10 last:mb-0"
              >
                <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_var(--glow)]" />
                <p className="text-xs tracking-widest uppercase text-muted-foreground">{t.year}</p>
                <p className="mt-2 text-2xl font-semibold md:text-3xl">{t.role}</p>
                <p className="text-muted-foreground">{t.place}</p>
              </motion.li>
            ))}
          </ol>
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
              <p className="relative mt-8 text-xs tracking-widest uppercase text-muted-foreground">2019 — 2021</p>
              <h3 className="relative mt-2 text-3xl font-semibold md:text-4xl">Customer Service Representative</h3>
              <p className="relative mt-1 text-muted-foreground">Retail &amp; hospitality support</p>
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

          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {servicePillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <TiltCard className="h-full">
                    <div className="glass flex h-full flex-col rounded-3xl p-6">
                      <span className="glass flex h-11 w-11 items-center justify-center rounded-full">
                        <p.icon className="h-5 w-5 text-primary" />
                      </span>
                      <h4 className="mt-5 text-lg font-semibold">{p.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4"
            >
              {serviceStats.map((s) => (
                <div key={s.label} className="px-6 py-8 text-center">
                  <p className="text-gradient text-3xl font-semibold md:text-4xl">{s.value}</p>
                  <p className="mt-2 text-xs tracking-widest uppercase text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </motion.div>
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
