import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_30rem_at_20%_10%,rgba(168,85,247,0.08),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-2 text-white/70">
            I collaborate with teams to ship applied AI: prototypes to production, end-to-end. Reach out for consulting, audits, or full builds.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-white/5 p-6">
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const subject = encodeURIComponent(`Inquiry from ${data.get('name')}`);
                const body = encodeURIComponent(
                  `Hi Aiden,\n\n${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`
                );
                window.location.href = `mailto:aiden.ai@example.com?subject=${subject}&body=${body}`;
              }}
            >
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Name</label>
                <input
                  required
                  name="name"
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm text-white/70">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-white/70">Message</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="What would you like to build?"
                />
              </div>
              <div className="sm:col-span-2 flex items-center justify-between">
                <p className="text-xs text-white/50">I respond within 24 hours.</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-fuchsia-500 px-5 py-2.5 font-medium text-black hover:bg-fuchsia-400 transition shadow-lg shadow-fuchsia-500/20"
                >
                  <Mail className="h-4 w-4" /> Send
                </button>
              </div>
            </form>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="font-semibold">Elsewhere</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="mailto:aiden.ai@example.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white"
                >
                  <Mail className="h-5 w-5" /> aiden.ai@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white"
                >
                  <Github className="h-5 w-5" /> github.com/aiden-ai
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-white/80 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" /> linkedin.com/in/aiden-ai
                </a>
              </li>
            </ul>
            <div className="mt-6 rounded-lg border border-white/10 bg-black/40 p-4 text-sm text-white/70">
              <p className="font-medium text-white">Capabilities</p>
              <ul className="mt-2 list-disc pl-5 space-y-1">
                <li>LLMs, RAG, agents, evals</li>
                <li>Fine-tuning, distillation, quantization</li>
                <li>Realtime inference, GPU orchestration</li>
                <li>Data pipelines, feature stores, monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
