type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="max-w-3xl">
      <p className="text-sm font-semibold text-brand-muted/70">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-brand-ink sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-8 text-brand-muted/80">
        {description}
      </p>
    </header>
  );
}
