import React from 'react';
import { Cpu, Github, Linkedin } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-cyan-400/30 ring-1 ring-white/10">
            <Cpu className="h-5 w-5 text-cyan-300" />
          </div>
          <span className="font-semibold tracking-tight">Aiden Rivera</span>
          <span className="text-white/50 hidden sm:inline">— AI Engineer</span>
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#contact" className="text-white/80 hover:text-white transition">Contact</a>
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md hover:bg-white/10 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
