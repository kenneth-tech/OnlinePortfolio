type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="border border-brand-ink/10 bg-white p-5">
      <p className="text-sm font-medium text-brand-muted/70">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold leading-none text-brand-ink">
        {value}
      </p>
      <p className="mt-2 text-sm leading-6 text-brand-muted/75">{detail}</p>
    </div>
  );
}
