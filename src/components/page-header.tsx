type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <header className="motion-surface max-w-3xl">
      <p className="text-sm font-semibold text-brand-button">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-8 text-brand-muted">
        {description}
      </p>
    </header>
  );
}
