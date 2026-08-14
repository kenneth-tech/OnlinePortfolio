type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="border border-brand-ink/15 bg-white p-4">
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-brand-muted/70">
        {label}
      </p>
      <p className="mt-3 text-2xl font-black uppercase leading-none text-brand-ink">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-brand-muted/75">{detail}</p>
    </div>
  );
}
