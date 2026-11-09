import { type ReactNode } from "react";

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      className="ui:group uirounded-xl ui:border ui:border-game-red ui:px-6 ui:py-5 ui:transition-colors ui:hover:border-game-red ui:hover:bg-game-surface"
      href={`${href}?utm_source=auto-game-live-tiktok&utm_medium=with-tailwind&utm_campaign=autogame`}
      rel="noopener noreferrer"
      target="_blank"
    >
      <h2 className="ui:mb-4 ui:text-2xl ui:font-bold ui:tracking-tight">
        {title}{" "}
        <span className="ui:inline-block ui:transition-transform ui:group-hover:translate-x-2 ui:motion-reduce:transform-none">
          →
        </span>
      </h2>
      <p className="ui:m-0 ui:max-w-[36ch] ui:text-base ui:text-game-muted leading-relaxed">
        {children}
      </p>
    </a>
  );
}