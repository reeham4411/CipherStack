import { ReactNode } from "react";

export default function AppShell({ children }: { children: ReactNode }) {
  return <main className="mx-auto max-w-7xl px-6 py-6">{children}</main>;
}
