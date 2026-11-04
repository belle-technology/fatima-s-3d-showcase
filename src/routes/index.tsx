import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, ArrowUpRight, Sparkles, Download } from "lucide-react";
import { Scene3D } from "@/components/Scene3D";
import { TiltCard } from "@/components/TiltCard";

export const Route = createFileRoute("/")({
  component: Index,
});

const works = [
  {
    title: "Carbon Compass",
    tag: "Sustainability · Product",
    year: "2025",
    desc: "A carbon-tracking platform that helps businesses measure and cut their emissions footprint.",
    url: "#",
    accent: "from-[#4c8bf5] to-[#3ecf8e]",
  },
  {
    title: "Belletech Impact",
    tag: "Brand Identity",
    year: "2025",
    desc: "Brand system and visual identity for a technology company with social impact at its core.",
    url: "#",
    accent: "from-[#f2b544] to-[#d16ba5]",
  },
  {
    title: "Fruitful Seedlings",
    tag: "Packaging · Art Direction",
    year: "2024",
    desc: "Packaging and market identity for an agricultural nursery focused on quality seedlings.",
    url: "#",
    accent: "from-[#3ecf8e] to-[#f2b544]",
  },
  {
    title: "Kookie Queens Bakery",
    tag: "Web / E-commerce",
    year: "2024",
    desc: "Playful online storefront and ordering experience for a beloved local bakery.",
    url: "#",
    accent: "from-[#d16ba5] to-[#f2b544]",
  },
  {
    title: "Guardian Pass",
    tag: "Product Design",
    year: "2024",
    desc: "Secure access and credential experience designed for clarity, speed and trust.",
    url: "#",
    accent: "from-[#8a5cf6] to-[#4c8bf5]",
  },
  {
    title: "Zyra Finance",
    tag: "Fintech · UX",
    year: "2023",
    desc: "End-to-end mobile banking experience with a focus on everyday money clarity.",
    url: "#",
    accent: "from-[#f2b544] to-[#8a5cf6]",
  },
];

const timeline = [
  { year: "2024 — Now", role: "Senior Designer", place: "Independent Studio" },
  { year: "2022 — 2024", role: "Product Designer", place: "Paystack" },
  { year: "2020 — 2022", role: "Visual Designer", place: "Andela" },
];

const skills = ["Brand Systems", "Motion", "3D / WebGL", "Product Design", "Art Direction", "Typography"];

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
            Designer, art director and maker of quiet, considered digital things.
            I build brands, products and dimensional web experiences.
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
                  target="_blank"
                  rel="noreferrer"
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
            Six years designing
            <span className="italic text-gradient"> across product, print & pixels.</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Based in Abuja, working globally. I lead brand and product design engagements
            for teams that care about craft — and I keep an obsessive sketchbook.
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
        <p>© 2026 Fatima Yusuf Adam. Designed & built with care.</p>
        <p className="tracking-widest uppercase">Abuja · Available for projects</p>
      </footer>
    </div>
  );
}
