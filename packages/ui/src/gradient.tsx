export function Gradient({
  small,
  conic,
  className,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`ui:absolute ui:mix-blend-normal ui:will-change-[filter] ui:rounded-[100%] ${
        small ? "ui:blur-[32px]" : "ui:blur-[75px]"
      } ${
        conic
          ? "ui:bg-linear-to-r ui:from-game-red ui:from-10% ui:via-game-purple ui:via-30% ui:to-game-orange ui:to-100%"
          : ""
      } ${className ?? ""}`}
    />
  );
}