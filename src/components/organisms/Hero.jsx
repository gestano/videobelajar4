import { useMediaQuery } from "react-responsive";
import Button from "../atoms/Button.jsx";

export default function Hero() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ctaText = isMobile ? "Jelajah Kelas" : "Temukan Video Course untuk Dipelajari!";

  return (
    <section className="mx-auto max-w-7xl px-4 pt-8 md:pt-12">
      <div className="overflow-hidden rounded-2xl bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
        {/* Center horizontal + vertical */}
        <div className="min-h-[360px] md:min-h-[520px] bg-black/70 p-8 md:p-12 grid place-items-center text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-white/90">
              Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda. 
            </p>
            <Button variant="primary" size="lg" className="mt-6 mx-auto">
              {ctaText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}