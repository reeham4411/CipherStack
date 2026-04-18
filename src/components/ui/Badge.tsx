export default function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
      {text}
    </span>
  );
}
