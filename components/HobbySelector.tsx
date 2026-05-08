import type { Hobby } from "@/data/hobbies";

const categoryLabels: Record<Hobby["category"], string> = {
  creative: "Creative",
  technical: "Technical",
  fitness: "Fitness",
  food: "Food",
  lifestyle: "Lifestyle",
};

type HobbySelectorProps = {
  hobbies: Hobby[];
  selectedHobbyId?: string;
  onSelect: (hobby: Hobby) => void;
};

export function HobbySelector({ hobbies, selectedHobbyId, onSelect }: HobbySelectorProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {hobbies.map((hobby) => {
        const isSelected = hobby.id === selectedHobbyId;

        return (
          <button
            key={hobby.id}
            type="button"
            onClick={() => onSelect(hobby)}
            className={`group rounded-3xl border p-4 text-left transition duration-200 ${
              isSelected
                ? "border-cyan-300/80 bg-cyan-300/10 shadow-[0_0_30px_rgba(103,232,249,0.16)]"
                : "border-white/10 bg-white/[0.04] hover:border-white/25 hover:bg-white/[0.07]"
            }`}
            aria-pressed={isSelected}
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <span className="text-base font-semibold text-white">{hobby.name}</span>
              <span className="rounded-full border border-white/10 bg-black/20 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                {categoryLabels[hobby.category]}
              </span>
            </div>
            <p className="text-sm leading-6 text-zinc-400 group-hover:text-zinc-300">{hobby.description}</p>
          </button>
        );
      })}
    </div>
  );
}
