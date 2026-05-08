"use client";

import { useMemo, useState } from "react";
import { BusinessIdeaCard } from "@/components/BusinessIdeaCard";
import { FilterBar } from "@/components/FilterBar";
import { HobbySelector } from "@/components/HobbySelector";
import { hobbies, type Hobby } from "@/data/hobbies";
import { getIdeasForHobby, type IdeaFilters } from "@/lib/ideas";

const savedIdeasKey = "sidequest:saved-ideas";

export default function Home() {
  const [selectedHobby, setSelectedHobby] = useState<Hobby>(hobbies[0]);
  const [filters, setFilters] = useState<IdeaFilters>({ difficulty: "All", startupCost: "All", businessModel: "All" });
  const [savedIdeaIds, setSavedIdeaIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    const saved = window.localStorage.getItem(savedIdeasKey);
    return saved ? (JSON.parse(saved) as string[]) : [];
  });

  const ideas = useMemo(() => getIdeasForHobby(selectedHobby, filters), [selectedHobby, filters]);
  const savedCount = savedIdeaIds.length;

  function toggleSavedIdea(ideaId: string) {
    setSavedIdeaIds((current) => {
      const next = current.includes(ideaId) ? current.filter((id) => id !== ideaId) : [...current, ideaId];
      window.localStorage.setItem(savedIdeasKey, JSON.stringify(next));
      return next;
    });
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.22),transparent_34%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_36%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-2xl bg-cyan-300 font-black text-zinc-950 shadow-lg shadow-cyan-500/20">SQ</div>
            <div>
              <p className="font-semibold tracking-tight">SideQuest</p>
              <p className="text-xs text-zinc-500">Hobby → business idea</p>
            </div>
          </div>
          <div className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
            {savedCount} saved {savedCount === 1 ? "idea" : "ideas"}
          </div>
        </header>

        <section className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100">
              Local-first business brainstorming for builders
            </div>
            <h1 className="text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Turn what you love into a sharper side quest.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              Pick a hobby and SideQuest surfaces focused business ideas with customers, monetization paths, difficulty, and startup cost — all from local data, no backend required.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">Current quest</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">{selectedHobby.name}</h2>
            <p className="mt-3 leading-7 text-zinc-400">{selectedHobby.description}</p>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Stat value={ideas.length.toString()} label="ideas" />
              <Stat value={selectedHobby.category} label="category" />
              <Stat value="100%" label="local" />
            </div>
          </div>
        </section>

        <section className="grid gap-5">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Step 1</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Choose a hobby</h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-zinc-500">Start broad. The best ideas usually come from combining your taste, skills, and a specific buyer.</p>
          </div>
          <HobbySelector hobbies={hobbies} selectedHobbyId={selectedHobby.id} onSelect={setSelectedHobby} />
        </section>

        <section className="grid gap-5">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">Step 2</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">Explore business ideas</h2>
            </div>
            <div className="lg:min-w-[620px]">
              <FilterBar filters={filters} onChange={setFilters} />
            </div>
          </div>

          {ideas.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {ideas.map((idea) => (
                <BusinessIdeaCard key={idea.id} idea={idea} isSaved={savedIdeaIds.includes(idea.id)} onToggleSaved={toggleSavedIdea} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
              <h3 className="text-xl font-semibold text-white">No ideas match those filters yet.</h3>
              <p className="mt-2 text-zinc-400">Reset one filter or choose another hobby to keep exploring.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <p className="truncate text-lg font-semibold capitalize text-white">{value}</p>
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-500">{label}</p>
    </div>
  );
}
