export default function AppHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-white/70 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            CipherStack
          </h1>
          <p className="text-sm text-slate-500">
            Visual cascade encryption studio
          </p>
        </div>

        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
          Node-based pipeline
        </div>
      </div>
    </header>
  );
}
