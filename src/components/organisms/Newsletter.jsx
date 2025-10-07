import Button from "../atoms/Button";
import Input from "../atoms/Input";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-7xl px-4">
      <div className="mt-16 overflow-hidden rounded-2xl bg-[url('/images/newsletter.jpg')] bg-cover bg-center">
        <div className="min-h-[220px] bg-black/50 p-8 md:p-12 text-center">
          <p className="text-xs tracking-widest text-white/80">NEWSLETTER</p>
          <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">Mau Belajar Lebih Banyak?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/90">
            Daftarkan emailmu untuk dapatkan info dan promo terbaru dari kami.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Subscribed (dummy)!");
            }}
            className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row sm:justify-center"
          >
            <Input type="email" placeholder="Masukkan Emailmu" className="bg-white/95" required />
            <Button type="submit" variant="secondary">Subscribe</Button>
          </form>
        </div>
      </div>
    </section>
  );
}