type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-brand-ink/15 pb-8">
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-muted">
        {eyebrow}
      </p>
      <div className="mt-4 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
        <h1 className="text-4xl font-black uppercase leading-none text-brand-ink sm:text-5xl">
          {title}
        </h1>
        <p className="max-w-3xl text-base leading-8 text-brand-muted/80">
          {description}
        </p>
      </div>
    </header>
  );
}
