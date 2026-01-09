import SmoothScroll from "@/components/providers/SmoothScroll";
import Navbar from "@/components/layout/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-cyan-500/30">
        {children}
      </main>
    </SmoothScroll>
  );
}
