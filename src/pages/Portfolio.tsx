// src/pages/Portfolio.tsx
import React from 'react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const LinkAnchor: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    className="text-[#FCC636] hover:text-white transition-colors underline-offset-4 hover:underline"
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </a>
);

const Chip: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-3 py-1 rounded-full text-sm bg-[#2B2B2B] border border-gray-700 text-gray-200">
    {children}
  </span>
);

const SectionTitle: React.FC<{ id: string; children: React.ReactNode }> = ({ id, children }) => (
  <h2 id={id} className="text-2xl md:text-3xl font-bold text-white mb-4 scroll-mt-24">
    {children}
  </h2>
);

const Portfolio: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#1F1F1F] text-gray-200">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-[#1F1F1F]/70 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#about" className="text-white font-bold tracking-tight text-lg">Animesh Raj</a>
          <nav className="hidden md:flex gap-4 text-sm">
            {sections.map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-gray-300 hover:text-white transition-colors">
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        {/* Hero */}
        <section className="pt-12 md:pt-20 pb-10 border-b border-gray-800" aria-labelledby="about">
          <div className="flex flex-col gap-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Distributed Systems Engineer
              </h1>
              <p className="mt-3 text-lg md:text-xl text-gray-300">
                Rust & Go • Full-Stack TypeScript (React, Node.js)
              </p>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-3xl">
              Distributed Systems Engineer specializing in Rust and Go, building high-performance, reliable, and fault-tolerant systems. Experienced in microservices, event-driven architectures, and real-time systems. Skilled in TypeScript for full-stack development. Strong foundation in systems programming, concurrency, and DevOps with PostgreSQL, Redis, and Docker.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <LinkAnchor href="tel:+919102888850">+91-9102888850</LinkAnchor>
              <span className="text-gray-600">/</span>
              <LinkAnchor href="mailto:animesh080808@gmail.com">animesh080808@gmail.com</LinkAnchor>
              <span className="text-gray-600">/</span>
              <LinkAnchor href="https://github.com/itsarraj">github.com/itsarraj</LinkAnchor>
              <span className="text-gray-600">/</span>
              <LinkAnchor href="https://x.com/itsarraj">@itsarraj</LinkAnchor>
              <span className="text-gray-600">/</span>
              <LinkAnchor href="https://linkedin.com/in/itsarraj1">linkedin.com/in/itsarraj1</LinkAnchor>
              <span className="text-gray-600">/</span>
              <LinkAnchor href="https://itsarraj.xyz">itsarraj.xyz</LinkAnchor>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-10 border-b border-gray-800" aria-labelledby="skills">
          <SectionTitle id="skills">Technical Skills</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-gray-400">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Rust', 'Go', 'TypeScript', 'JavaScript', 'Bash'].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-gray-400">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Actix', 'Tokio', 'GoFiber', 'Node.js', 'Express', 'React', 'GraphQL', 'WebSockets'].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-gray-400">Databases</h3>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'Redis', 'MariaDB', 'MongoDB', 'SQLite'].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm uppercase tracking-wider text-gray-400">DevOps & Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {['Docker', 'Kubernetes', 'Jenkins', 'AWS (EC2, S3, RDS)', 'Nginx', 'systemd', 'CI/CD'].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="py-10 border-b border-gray-800" aria-labelledby="experience">
          <SectionTitle id="experience">Experience</SectionTitle>
          <div className="space-y-6">
            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">Tata Consultancy Services • Full Stack Engineer</h3>
                <span className="text-xs text-gray-400">Dec 2023 – Present • Kolkata</span>
              </header>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>Migrated critical distributed banking services from C++ to Rust, reducing crashes.</li>
                <li>Designed high-throughput, fault-tolerant services with gRPC and Tokio.</li>
                <li>Implemented leader election and consensus to improve availability.</li>
                <li>Built AI chatbot platform and MCP server components for LLM orchestration.</li>
                <li>Integrated JWT auth, Redis caching, and secure sessions.</li>
              </ul>
            </article>

            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">Topstack • Full Stack Engineer</h3>
                <span className="text-xs text-gray-400">Sept 2022 – Oct 2023 • Remote</span>
              </header>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>Developed Go Fiber microservices with PostgreSQL/Redis for trading systems.</li>
                <li>Built SEO-friendly React dashboards and real-time GraphQL/WebSocket APIs.</li>
                <li>Deployed on Linux VPS with Nginx, SSL, and Docker for HA.</li>
                <li>Optimized AWS CI/CD to improve reliability and costs.</li>
              </ul>
            </article>

            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">Optimum Wellness • Full Stack Engineer</h3>
                <span className="text-xs text-gray-400">Apr 2022 – Jul 2022 • Remote</span>
              </header>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>Designed Go microservices for high-throughput financial workflows.</li>
                <li>Implemented Node.js services interoperable with Go pipelines.</li>
                <li>Built GraphQL/WebSocket APIs and secure AWS CI/CD pipelines.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Projects */}
        <section className="py-10 border-b border-gray-800" aria-labelledby="projects">
          <SectionTitle id="projects">Personal Projects</SectionTitle>
          <div className="space-y-6">
            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">BerufPlattf • AI Job Matching</h3>
                <span className="text-xs text-gray-400">In Development</span>
              </header>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <LinkAnchor href="https://seekersconnect.xyz/">Live</LinkAnchor>
                <LinkAnchor href="https://github.com/itsarraj/BerufPlattf">Source</LinkAnchor>
              </div>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>Architected Go (Fiber) services + React TS, MariaDB for high-throughput matching.</li>
                <li>JWT, rate limiting, OWASP-aligned controls; AI microservice for resume/JD scoring.</li>
                <li>WebSockets for realtime; evaluating Rust + NATS/Kafka for eventing.</li>
              </ul>
            </article>

            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">itsarraj.me • Portfolio</h3>
                <span className="text-xs text-gray-400">Live</span>
              </header>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <LinkAnchor href="https://itsarraj-me.vercel.app/">Live</LinkAnchor>
                <LinkAnchor href="https://github.com/itsarraj/itsarraj.me">Source</LinkAnchor>
              </div>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>Next.js + Tailwind, dynamic routing and SEO; optimized Lighthouse scores.</li>
                <li>EmailJS integration, GitHub Actions for CI/CD.</li>
              </ul>
            </article>

            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">CircuitCrafter • E-commerce</h3>
                <span className="text-xs text-gray-400">Live</span>
              </header>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <LinkAnchor href="https://circuitcrafter.vercel.app/">Live</LinkAnchor>
                <LinkAnchor href="https://github.com/itsarraj/circuitcrafter">Source</LinkAnchor>
              </div>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>React, Redux, Express, Tailwind; JWT auth and PayPal SDK.</li>
                <li>Cloudinary images and Dockerized backend.</li>
              </ul>
            </article>

            <article className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <header className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-white font-semibold">Kruxigen • Education Platform</h3>
                <span className="text-xs text-gray-400">Live</span>
              </header>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                <LinkAnchor href="https://kruxigen-tech.vercel.app/">Live</LinkAnchor>
                <LinkAnchor href="https://github.com/itsarraj/kruxigen.tech">Source</LinkAnchor>
              </div>
              <ul className="mt-3 list-disc list-inside space-y-1 text-gray-300">
                <li>TypeScript, Node.js, Express, React; modular components and Socket.IO chat.</li>
                <li>Formik + Yup validation, responsive and accessible UI.</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Education */}
        <section className="py-10 border-b border-gray-800" aria-labelledby="education">
          <SectionTitle id="education">Education</SectionTitle>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-white font-semibold">B.E., Electronics and Communication Engineering</p>
                <span className="text-xs text-gray-400">2019 – 2023 • CGPA: 7.96/10</span>
              </div>
              <p className="text-gray-400 mt-1">University Institute of Technology, The University of Burdwan</p>
            </div>

            <div className="p-4 rounded-xl border border-gray-800 bg-[#1F1F1F]">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <p className="text-white font-semibold">AISSCE - Class 12 (PCM + CS)</p>
                <span className="text-xs text-gray-400">2016 – 2018 • 74.2%</span>
              </div>
              <p className="text-gray-400 mt-1">Jawahar Vidhya Mandir Shyamali, Ranchi</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-10" aria-labelledby="contact">
          <SectionTitle id="contact">Contact</SectionTitle>
          <div className="space-y-3">
            <p className="text-gray-300">Open to Distributed Systems, Platform, or Backend roles.</p>
            <div className="flex flex-wrap gap-3">
              <LinkAnchor href="mailto:animesh080808@gmail.com">Email</LinkAnchor>
              <LinkAnchor href="https://github.com/itsarraj">GitHub</LinkAnchor>
              <LinkAnchor href="https://x.com/itsarraj">X (Twitter)</LinkAnchor>
              <LinkAnchor href="https://itsarraj.xyz">Website</LinkAnchor>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-800 mt-8">
        <div className="max-w-4xl mx-auto px-4 py-6 text-sm text-gray-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Animesh Raj</span>
          <a href="#about" className="hover:text-white">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;


