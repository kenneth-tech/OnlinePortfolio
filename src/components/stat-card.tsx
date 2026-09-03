type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="motion-card rounded-xl border border-brand-button/30 bg-white p-5 text-brand-ink shadow-[0_18px_60px_rgba(0,0,0,0.18)]">
      <p className="text-sm font-medium text-brand-card/70">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-none text-brand-ink">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-brand-card/75">{detail}</p>
    </div>
  );
}
