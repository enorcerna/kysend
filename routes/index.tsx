import Canva from "../components/Canva.tsx";

export default function Home() {
  return (
    <main class="flex justify-center items-center min-h-screen h-full">
      <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1bce7176_100%)]">
      </div>
      <Canva />
    </main>
  );
}
