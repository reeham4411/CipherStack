import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-xl border border-zinc-700 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-blue-500",
        props.className,
      )}
    />
  );
}
