type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="motion-card rounded-xl border border-brand-button/15 bg-brand-card/75 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <p className="text-sm font-medium text-brand-muted">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-none text-white">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-brand-muted">{detail}</p>
    </div>
  );
}
