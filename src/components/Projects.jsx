import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Realtime RAG Platform',
    description:
      'Low-latency retrieval augmented generation with hybrid search, adaptive reranking, and streaming responses.',
    stack: ['LLMs', 'RAG', 'Vector DB', 'TypeScript', 'Redis'],
    link: '#',
  },
  {
    title: 'Multimodal Search',
    description:
      'Image+text semantic search using CLIP-like encoders, vector quantization, and approximate nearest neighbors.',
    stack: ['Vision', 'Transformers', 'Faiss', 'Python'],
    link: '#',
  },
  {
    title: 'On-device Assistant',
    description:
      'Distilled small language model with int8/4-bit quantization and attention optimizations for mobile.',
    stack: ['Quantization', 'ONNX', 'C++/JNI', 'Android'],
    link: '#',
  },
  {
    title: 'LLM Evaluation Suite',
    description:
      'Automated evals for hallucination, toxicity, robustness, and cost; integrates with CI and dashboards.',
    stack: ['Eval', 'LangChain', 'Weights & Biases', 'Deno'],
    link: '#',
  },
];

function ProjectCard({ title, description, stack, link }) {
  return (
    <a
      href={link}
      className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition block"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <span className="opacity-0 group-hover:opacity-100 transition text-white/70">
          <ExternalLink className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-2 text-sm text-white/75">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded-md border border-white/10 bg-black/30 text-white/70"
          >
            {s}
          </span>
        ))}
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60rem_40rem_at_50%_-10%,rgba(56,189,248,0.08),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Work</h2>
          <p className="mt-2 text-white/70">
            A snapshot of recent systems, research, and production deployments.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
