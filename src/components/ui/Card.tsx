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
        "rounded-3xl border border-white/70 bg-white/88 p-5 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
