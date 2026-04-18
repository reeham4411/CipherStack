import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";

export default function Textarea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-[140px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-800 outline-none transition focus:border-sky-400 focus:bg-white",
        props.className,
      )}
    />
  );
}
