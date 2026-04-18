import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white",
        props.className,
      )}
    />
  );
}
