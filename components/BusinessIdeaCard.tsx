import type { BusinessIdea } from "@/data/businessIdeas";

type BusinessIdeaCardProps = {
  idea: BusinessIdea;
  isSaved: boolean;
  onToggleSaved: (ideaId: string) => void;
};

const difficultyTone: Record<BusinessIdea["difficulty"], string> = {
  Easy: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  Medium: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  Hard: "border-rose-300/30 bg-rose-300/10 text-rose-200",
};

export function BusinessIdeaCard({ idea, isSaved, onToggleSaved }: BusinessIdeaCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/20 ring-1 ring-white/[0.03] backdrop-blur">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">{idea.businessModel}</p>
          <h3 className="text-xl font-semibold tracking-tight text-white">{idea.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => onToggleSaved(idea.id)}
          className={`shrink-0 rounded-full border px-3 py-1.5 text-sm transition ${
            isSaved
              ? "border-cyan-300/50 bg-cyan-300/15 text-cyan-100"
              : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white"
          }`}
          aria-pressed={isSaved}
        >
          {isSaved ? "Saved" : "Save"}
        </button>
      </div>

      <p className="mb-5 text-sm leading-6 text-zinc-300">{idea.summary}</p>

      <dl className="grid gap-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">Target customer</dt>
          <dd className="mt-1 text-zinc-300">{idea.targetCustomer}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-[0.18em] text-zinc-500">Monetization</dt>
          <dd className="mt-1 text-zinc-300">{idea.monetization}</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 pt-6">
        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${difficultyTone[idea.difficulty]}`}>{idea.difficulty}</span>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">{idea.startupCost} cost</span>
      </div>
    </article>
  );
}
