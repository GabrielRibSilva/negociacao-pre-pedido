import { CheckCircle } from "lucide-react";
import { MediaPlaceholder } from "./MediaPlaceholder";

type FeatureSectionProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
  mediaType: "video" | "image";
  mediaTitle: string;
  mediaDescription: string;
  duration?: string;
  reverse?: boolean;
};

export function FeatureSection({
  eyebrow,
  title,
  highlight,
  description,
  bullets,
  mediaType,
  mediaTitle,
  mediaDescription,
  duration,
  reverse = false,
}: FeatureSectionProps) {
  return (
    <section className="bg-slate-50 py-24">
      <div className={`mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-600">{eyebrow}</p>
          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {title}
            <span className="block text-blue-600">{highlight}</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-500">{description}</p>
          <div className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-3 text-base font-semibold text-slate-700">
                <CheckCircle size={20} className="shrink-0 text-blue-600" />
                {bullet}
              </div>
            ))}
          </div>
        </div>
        <MediaPlaceholder type={mediaType} title={mediaTitle} description={mediaDescription} duration={duration} />
      </div>
    </section>
  );
}
