export default function AppHeader() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-white">CipherStack</h1>
          <p className="text-sm text-zinc-400">
            Node-Based Cascade Encryption Builder
          </p>
        </div>
        {/* <div className="text-sm text-zinc-400">Frontend Hackathon Build</div> */}
      </div>
    </header>
  );
}
