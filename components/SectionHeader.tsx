type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && (
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-slate-500">
          {description}
        </p>
      )}
    </div>
  );
}