type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="glass-panel motion-card rounded-lg border border-slate-200 bg-white p-5 text-brand-ink shadow-sm">
      <p className="text-sm font-medium text-brand-muted">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-none text-brand-ink">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-brand-muted">{detail}</p>
    </div>
  );
}
