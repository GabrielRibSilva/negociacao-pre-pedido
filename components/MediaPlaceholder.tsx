import { ImageIcon, PlayCircle } from "lucide-react";

type MediaPlaceholderProps = {
  type: "video" | "image";
  title: string;
  description: string;
  duration?: string;
};

export function MediaPlaceholder({
  type,
  title,
  description,
  duration,
}: MediaPlaceholderProps) {
  const Icon = type === "video" ? PlayCircle : ImageIcon;

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-2xl shadow-slate-950/10">
      <div className="flex aspect-video flex-col items-center justify-center p-8 text-center">
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-600">
          <Icon size={34} strokeWidth={1.8} />
        </div>
        <h3 className="text-xl font-black text-slate-950">{title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
          {description}
        </p>
        {duration ? (
          <span className="mt-5 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-500 shadow-sm">
            Duração sugerida: {duration}
          </span>
        ) : null}
      </div>
    </div>
  );
}
