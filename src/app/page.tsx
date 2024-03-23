import SessionPresentation from "@/components/SessionPresentation";
import Gallery from "@/components/Gallery";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
  return (
    <main>
      <Gallery />
      <SessionPresentation />
      <BackgroundVideo />
    </main>
  );
}
