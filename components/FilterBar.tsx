import type { BusinessModel, Difficulty, StartupCost } from "@/data/businessIdeas";
import { businessModels, difficulties, startupCosts, type IdeaFilters } from "@/lib/ideas";

type FilterBarProps = {
  filters: IdeaFilters;
  onChange: (filters: IdeaFilters) => void;
};

export function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 sm:grid-cols-3">
      <Select
        label="Difficulty"
        value={filters.difficulty ?? "All"}
        values={difficulties}
        onChange={(difficulty) => onChange({ ...filters, difficulty: difficulty as Difficulty | "All" })}
      />
      <Select
        label="Startup cost"
        value={filters.startupCost ?? "All"}
        values={startupCosts}
        onChange={(startupCost) => onChange({ ...filters, startupCost: startupCost as StartupCost | "All" })}
      />
      <Select
        label="Model"
        value={filters.businessModel ?? "All"}
        values={businessModels}
        onChange={(businessModel) => onChange({ ...filters, businessModel: businessModel as BusinessModel | "All" })}
      />
    </div>
  );
}

type SelectProps<T extends readonly string[]> = {
  label: string;
  value: T[number];
  values: T;
  onChange: (value: T[number]) => void;
};

function Select<T extends readonly string[]>({ label, value, values, onChange }: SelectProps<T>) {
  return (
    <label className="grid gap-2 text-sm text-zinc-400">
      <span className="px-1 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as T[number])}
        className="h-11 rounded-2xl border border-white/10 bg-black/40 px-3 text-sm font-medium text-white outline-none transition focus:border-cyan-300/70"
      >
        {values.map((item) => (
          <option key={item} value={item} className="bg-zinc-950 text-white">
            {item}
          </option>
        ))}
      </select>
    </label>
  );
}
