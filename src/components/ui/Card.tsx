import { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

export default function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900/80 p-4 shadow-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
