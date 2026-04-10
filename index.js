import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, BrainCircuit, Cloud, Code2, Cpu, Database, Globe, Layers3, LineChart, Menu, MonitorSmartphone, Rocket, ShieldCheck, ShoppingBag, Sparkles, Workflow, X } from 'lucide-react';

const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Tech Stack', href: '#stack' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why' },
    { label: 'FAQ', href: '#faq' },
];

const services = [
    { title: 'IoT, Sensors & Gateways', description: 'Connected product engineering with device integration, telemetry pipelines, and gateway orchestration.', icon: Cpu },
    { title: 'CRM / ERP / E-commerce', description: 'Business systems that unify sales, service, inventory, and customer experience.', icon: ShoppingBag },
    { title: 'AI / ML & AI Automation', description: 'Practical AI that automates workflows, unlocks insights, and accelerates operations.', icon: BrainCircuit },
    { title: 'BI Dashboards & Analytics', description: 'Decision-ready analytics platforms and dashboards that turn data into clarity.', icon: LineChart },
    { title: 'Modern Web & Mobile Apps', description: 'High-performance web platforms and mobile products built for scale and conversion.', icon: MonitorSmartphone },
    { title: 'Low-Code / No-Code', description: 'Rapid internal tools and business apps that shorten time-to-value.', icon: Workflow },
];

const stackGroups = [
    { title: 'Frontend', icon: Globe, items: ['React', 'Next.js', 'Angular', 'React Native'] },
    { title: 'Backend', icon: Code2, items: ['Node.js', 'APIs', 'Microservices', 'Integrations'] },
    { title: 'Data & State', icon: Database, items: ['Multiple DBs', 'Redis', 'Zustand', 'Caching'] },
    { title: 'Cloud & DevOps', icon: Cloud, items: ['AWS', 'Azure', 'GCP', 'CI/CD', 'Version Control'] },
    { title: 'Intelligence', icon: Bot, items: ['AI/ML', 'Automation', 'BI Dashboards', 'Model Enablement'] },
    { title: 'Delivery', icon: Layers3, items: ['Custom Dev', 'Low Code', 'Modernization', 'Managed Teams'] },
];

const processSteps = [
    { title: 'Discover', text: 'Align goals, workflows, users, and success metrics.' },
    { title: 'Architect', text: 'Design the right foundation across cloud, data, apps, and automation.' },
    { title: 'Build', text: 'Ship in milestones with quality gates and scalable code standards.' },
    { title: 'Scale', text: 'Optimize adoption, performance, and automation after launch.' },
];

const differentiators = [
    { title: 'Business + Engineering Alignment', text: 'Every feature is mapped to measurable business outcomes.', icon: Rocket },
    { title: 'Connected Architecture', text: 'Devices, apps, data, analytics, and enterprise workflows work as one system.', icon: Layers3 },
    { title: 'Cloud-Native Scalability', text: 'Modern infra, CI/CD, and reusable architecture patterns for growth.', icon: Cloud },
    { title: 'Security & Reliability', text: 'Data integrity, operational resilience, and deployment discipline by design.', icon: ShieldCheck },
];

const faqs = [
    { q: 'What kind of projects does Inbox Infotech handle?', a: 'We handle IoT platforms, ERP/CRM modernization, AI automation, dashboards, e-commerce, and modern web/mobile development.' },
    { q: 'Can this landing page be adapted for lead generation?', a: 'Yes. It can include CRM-integrated forms, schedulers, case study blocks, and campaign-specific variants.' },
    { q: 'Can the design reflect exact brand colors and company content?', a: 'Absolutely. Logo, color palette, typography, office/contact details, and proof points can be tailored quickly.' },
    { q: 'Is this structure SEO friendly?', a: 'Yes. The layout is built to support strong heading hierarchy, service keywords, schema markup, and conversion content.' },
];

function Container({ children, className = '' }) {
    return <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, description, center = false }) {
    return (
        <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                {eyebrow}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
            <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
        </div>
    );
}

export default function InboxLandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="min-h-screen bg-[#050816] text-slate-100">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute right-[-6rem] top-[12rem] h-[18rem] w-[18rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
                <div className="absolute left-[-6rem] bottom-[10rem] h-[18rem] w-[18rem] rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]" />
            </div>

            <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
                <Container className="flex items-center justify-between py-4">
                    <a href="#top" className="flex items-center gap-3">
                        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/25">
                            <Rocket className="h-5 w-5 text-white" />
                        </div>
                        <div>
                            <div className="text-base font-semibold text-white">Inbox Infotech</div>
                            <div className="text-xs text-slate-400">Connected Digital Engineering</div>
                        </div>
                    </a>

                    <nav className="hidden gap-7 lg:flex">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="text-sm text-slate-300 transition hover:text-white">{item.label}</a>
                        ))}
                    </nav>

                    <a href="#contact" className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-white/10 lg:inline-flex">
                        Book a Discovery Call
                    </a>

                    <button className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-white/5 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </Container>

                {menuOpen && (
                    <Container className="pb-4 lg:hidden">
                        <div className="rounded-3xl border border-white/10 bg-slate-900/90 p-3">
                            {navItems.map((item) => (
                                <a key={item.label} href={item.href} className="block rounded-2xl px-4 py-3 text-sm text-slate-200 hover:bg-white/5" onClick={() => setMenuOpen(false)}>{item.label}</a>
                            ))}
                        </div>
                    </Container>
                )}
            </header>

            <main id="top">
                <Container className="py-16 sm:py-24 lg:py-28">
                    <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                                <Sparkles className="h-4 w-4" />
                                Future-ready digital engineering for connected business
                            </div>

                            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
                                Build <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-fuchsia-300 bg-clip-text text-transparent">smart systems</span> that connect products, people, and growth.
                            </h1>

                            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                From IoT and sensors to AI automation, CRM/ERP, BI dashboards, e-commerce, and modern web/mobile apps — Inbox Infotech helps enterprises modernize with scalable technology foundations.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20">
                                    Start Your Transformation <ArrowRight className="h-4 w-4" />
                                </a>
                                <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10">
                                    Explore Capabilities
                                </a>
                            </div>

                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                {[
                                    ['Connected Platforms', 'IoT + AI + Apps'],
                                    ['Enterprise Systems', 'CRM / ERP / Commerce'],
                                    ['Delivery Backbone', 'Cloud + CI/CD + Data'],
                                ].map(([label, value]) => (
                                    <div key={label} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                                        <div className="text-sm text-slate-400">{label}</div>
                                        <div className="mt-2 text-lg font-semibold text-white">{value}</div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl">
                            <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-4 sm:p-6">
                                <div className="mb-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                                        <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                    </div>
                                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">Unified Delivery Engine</div>
                                </div>
                                <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
                                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Experience Layer</p>
                                                <h3 className="mt-1 text-lg font-semibold text-white">Apps, Portals & Commerce</h3>
                                            </div>
                                            <MonitorSmartphone className="h-8 w-8 text-cyan-300" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 sm:grid-cols-3">
                                            {['Web Apps', 'Mobile Apps', 'Dashboards', 'E-commerce', 'Admin Panels', 'Portals'].map((item) => (
                                                <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-center">{item}</div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 p-4">
                                            <div className="flex items-center gap-3">
                                                <Bot className="h-8 w-8 text-cyan-300" />
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">AI Layer</p>
                                                    <h3 className="text-lg font-semibold text-white">Automation & Intelligence</h3>
                                                </div>
                                            </div>
                                            <p className="mt-3 text-sm leading-6 text-slate-200">Connect business systems, automate workflows, and surface insights with practical AI.</p>
                                        </div>
                                        <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                                            <div className="flex items-center gap-3">
                                                <Database className="h-7 w-7 text-indigo-300" />
                                                <div>
                                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Core Systems</p>
                                                    <h3 className="text-lg font-semibold text-white">Data + Cloud + Delivery</h3>
                                                </div>
                                            </div>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {['IoT', 'Gateways', 'AI/ML', 'CRM/ERP', 'BI', 'Web', 'Mobile', 'Cloud', 'Automation', 'CI/CD'].map((badge) => (
                                                    <span key={badge} className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs text-slate-200">{badge}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </Container>

                <section className="border-y border-white/10 bg-white/[0.03] py-5">
                    <Container>
                        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                            {['React', 'Next.js', 'Angular', 'Node.js', 'React Native', 'Redis', 'Zustand', 'AWS', 'Azure', 'GCP', 'AI Automation', 'BI Dashboards'].map((item) => (
                                <span key={item} className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">{item}</span>
                            ))}
                        </div>
                    </Container>
                </section>

                <section id="services" className="py-20 sm:py-24">
                    <Container>
                        <SectionHeading eyebrow="Core Services" title="A premium landing page narrative for high-value digital transformation" description="Position the company as a strategic engineering partner across connected products, enterprise systems, intelligent automation, and modern digital experiences." />
                        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {services.map((service) => {
                                const Icon = service.icon;
                                return (
                                    <div key={service.title} className="group rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl shadow-black/10">
                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 text-cyan-200 ring-1 ring-white/10">
                                            <Icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mt-5 text-xl font-semibold text-white">{service.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">Learn more <ArrowRight className="h-4 w-4" /></div>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                <section id="stack" className="py-20 sm:py-24">
                    <Container>
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
                            <SectionHeading eyebrow="Technical Stack" title="Modern stack architecture presented with clarity and confidence" description="Show buyers the value behind the tools by grouping technologies into business functions instead of using a generic logo wall." />
                            <div className="grid gap-4 sm:grid-cols-2">
                                {stackGroups.map((group) => {
                                    const Icon = group.icon;
                                    return (
                                        <div key={group.title} className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5 text-cyan-300 ring-1 ring-white/10">
                                                    <Icon className="h-5 w-5" />
                                                </div>
                                                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                                            </div>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {group.items.map((item) => (
                                                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200">{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Container>
                </section>

                <section id="process" className="py-20 sm:py-24">
                    <Container>
                        <SectionHeading eyebrow="Delivery Model" title="A process that earns trust from enterprise buyers" description="A clear story from discovery to scale helps visitors understand that your team can execute complex work with discipline." center />
                        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {processSteps.map((step, index) => (
                                <div key={step.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                                    <div className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">0{index + 1}</div>
                                    <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300">{step.text}</p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                <section id="why" className="py-20 sm:py-24">
                    <Container>
                        <SectionHeading eyebrow="Why Us" title="One team. Full digital ecosystem." description="Most vendors do only one layer. This page positions Inbox Infotech as the partner that can integrate product, platform, data, and intelligence into one scalable system." />
                        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {differentiators.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6">
                                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-300 ring-1 ring-white/10">
                                            <Icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </Container>
                </section>

                <section id="faq" className="py-20 sm:py-24">
                    <Container>
                        <SectionHeading eyebrow="FAQ" title="Frequently asked questions" description="A buyer-friendly FAQ improves trust, handles objections, and strengthens the SEO footprint of the page." center />
                        <div className="mx-auto mt-12 max-w-4xl space-y-4">
                            {faqs.map((item, index) => (
                                <div key={item.q} className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
                                    <button className="flex w-full items-center justify-between gap-4 text-left" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                                        <span className="text-lg font-semibold text-white">{item.q}</span>
                                        <span className="text-cyan-300">{openFaq === index ? '−' : '+'}</span>
                                    </button>
                                    {openFaq === index && <p className="mt-4 text-sm leading-7 text-slate-300">{item.a}</p>}
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                <section id="contact" className="pb-24">
                    <Container>
                        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-fuchsia-500/10 p-8 sm:p-10 lg:p-12">
                            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                                <div>
                                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                                        <Sparkles className="h-3.5 w-3.5" />
                                        Final CTA
                                    </div>
                                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to build your next digital advantage?</h2>
                                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-200">
                                        From connected products and enterprise systems to modern applications and AI-driven automation, Inbox Infotech helps organizations move faster with the right technology foundation.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                    <a href="mailto:hello@inboxtechs.com" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950">Schedule a Strategy Call</a>
                                    https://inboxtechs.com
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </div>
    );
}