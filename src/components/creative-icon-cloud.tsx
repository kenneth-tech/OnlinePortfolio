type CreativeIcon = {
  label: string;
  frameClassName: string;
  children: React.ReactNode;
};

const icons: CreativeIcon[] = [
  {
    label: "Web development icon",
    frameClassName: "rotate-[-4deg]",
    children: (
      <span aria-hidden="true" className="font-mono text-lg font-bold">
        &lt;/&gt;
      </span>
    ),
  },
  {
    label: "Multimedia design icon",
    frameClassName: "translate-y-3 rotate-[5deg]",
    children: (
      <span
        aria-hidden="true"
        className="grid h-9 w-9 grid-cols-2 gap-1 rounded-md border border-brand-button/25 p-1"
      >
        <span className="rounded-sm bg-brand-button/80" />
        <span className="rounded-sm bg-brand-soft/55" />
        <span className="rounded-sm bg-white/35" />
        <span className="rounded-sm bg-brand-button/35" />
      </span>
    ),
  },
  {
    label: "UI design icon",
    frameClassName: "translate-y-1 rotate-[3deg]",
    children: (
      <span aria-hidden="true" className="relative h-10 w-10">
        <span className="absolute left-1 top-1 h-6 w-8 rounded-md border border-brand-button/55 bg-brand-ink/65" />
        <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full border border-brand-soft/70 bg-brand-button/20" />
      </span>
    ),
  },
  {
    label: "Video production icon",
    frameClassName: "translate-y-4 rotate-[-6deg]",
    children: (
      <span
        aria-hidden="true"
        className="ml-1 h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-brand-button"
      />
    ),
  },
];

export function CreativeIconCloud() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      {icons.map((icon) => (
        <div
          key={icon.label}
          aria-label={icon.label}
          role="img"
          className={`${icon.frameClassName} motion-icon flex aspect-square items-center justify-center rounded-2xl border border-brand-button/30 bg-brand-card text-brand-button shadow-[0_18px_48px_rgba(0,0,0,0.24)] md:aspect-[5/3]`}
        >
          {icon.children}
        </div>
      ))}
    </div>
  );
}
