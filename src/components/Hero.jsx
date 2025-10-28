import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[92vh]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Available for freelance & consulting
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight">
            Building intelligent systems that ship
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">
            I’m Aiden, an AI engineer crafting production-grade models and platforms: LLM apps, multimodal search, retrieval pipelines, and real-time inference at scale.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-500 px-5 py-3 font-medium text-black hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
            >
              <Rocket className="h-4 w-4" />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-6 max-w-md text-center">
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-xs text-white/60">Years</dt>
              <dd className="text-xl font-semibold">6+</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-xs text-white/60">Models Shipped</dt>
              <dd className="text-xl font-semibold">20+</dd>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <dt className="text-xs text-white/60">Latency</dt>
              <dd className="text-xl font-semibold">sub-100ms</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
