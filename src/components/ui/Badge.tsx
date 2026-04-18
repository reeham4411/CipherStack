export default function Badge({ text }: { text: string }) {
  return (
    <span className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
      {text}
    </span>
  );
}
