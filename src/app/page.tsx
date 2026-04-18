import AppHeader from "@/components/layout/AppHeader";
import AppShell from "@/components/layout/AppShell";
import CipherLibrary from "@/components/cipher-library/CipherLibrary";
import PipelineCanvas from "@/components/pipeline/PipelineCanvas";
import PipelineStats from "@/components/pipeline/PipelineStats";
import InputPanel from "@/components/io/InputPanel";
import OutputPanel from "@/components/io/OutputPanel";
import IntermediateResultsPanel from "@/components/io/IntermediateResultsPanel";
import ExecutionControls from "@/components/io/ExecutionControls";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AppHeader />
      <AppShell>
        <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
          <div className="space-y-6">
            <CipherLibrary />
          </div>

          <div className="space-y-6">
            <PipelineStats />
            <InputPanel />
            <ExecutionControls />
            <PipelineCanvas />
            <OutputPanel />
            <IntermediateResultsPanel />
          </div>
        </div>
      </AppShell>
    </div>
  );
}
