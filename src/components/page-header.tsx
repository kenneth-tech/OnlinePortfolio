type PageHeaderProps = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="motion-surface max-w-3xl">
      <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 text-base leading-7 text-brand-muted sm:leading-8">
        {description}
      </p>
    </header>
  );
}
