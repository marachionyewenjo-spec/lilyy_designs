import { Link } from "react-router-dom";
import clock from "../assets/clock.jpg";
import keyholder from "../assets/keyholder.jpg";
import bookset from "../assets/bookset.jpg";
import videoOne from "../assets/VID-20260802-WA0018.mp4";
import videoTwo from "../assets/VID-20260802-WA0049.mp4";
import videoThree from "../assets/VID.mp4";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 grid gap-4 px-6 py-8 md:grid-cols-3 lg:px-10">
          {[videoOne, videoTwo, videoThree].map((src, index) => (
            <div key={index} className="overflow-hidden rounded-3xl bg-slate-950/60 shadow-2xl shadow-slate-950/40 ring-1 ring-white/10">
              <video
                src={src}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-slate-950/80" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid gap-12 px-6 md:grid-cols-2 md:items-center">

          <div className="relative z-10">
            <h1 className="text-5xl font-bold leading-tight text-white sm:text-6xl">
              Handcrafted <span className="text-amber-300">Resin Art</span> Made
              Just for You
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-slate-200">
              Every piece is uniquely designed with creativity, precision,
              and premium-quality resin to bring your ideas to life.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-500"
              >
                View Gallery
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-white/15 px-6 py-3 text-sm font-semibold text-amber-300 transition hover:bg-white/25 hover:text-white"
              >
                About Me
              </Link>
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center">
            Featured Creations
          </h2>

          <p className="text-center text-gray-500 mt-3">
            A glimpse of some custom resin pieces.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="shadow-lg rounded-xl overflow-hidden animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-72 overflow-hidden bg-slate-100">
                <img src={keyholder} alt="Resin Keyholder" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl">Resin Keyholders</h3>
              </div>
            </div>

            <div className="shadow-lg rounded-xl overflow-hidden animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-72 overflow-hidden bg-slate-100">
                <img src={clock} alt="Resin Wall Clock" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl">Resin Wall Clock</h3>
              </div>
            </div>

            <div className="shadow-lg rounded-xl overflow-hidden animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="h-72 overflow-hidden bg-slate-100">
                <img src={bookset} alt="Resin Book Set" className="h-full w-full object-cover object-center" />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-xl">Resin Book Set</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            What I Craft
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            <div className="bg-white p-8 rounded-xl shadow animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="font-bold text-xl mb-3">
                Resin Book Sets
              </h3>

              <p>
                Elegant handmade resin book sets for students and professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="font-bold text-xl mb-3">
                Personalized Gifts
              </h3>

              <p>
                Unique resin gifts for birthdays, personal use, weddings and anniversaries.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow animate-fade-in transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <h3 className="font-bold text-xl mb-3">
                Home Decor
              </h3>

              <p>
                Beautiful resin pieces that add elegance to your home.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="mb-10 text-center">
            <p className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700 shadow-sm">
              Why Choose Me?
            </p>
            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              A creative experience with a sparkling twist
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Every piece is made with care, personality, and quality that feels special from the first moment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-amber-200/30">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">🎨</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Handmade Designs</h3>
              <p className="mt-3 text-sm text-slate-500">
                One-of-a-kind pieces with unique color, shine, and style.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-amber-200/30">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-3xl text-amber-100">✨</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Premium Materials</h3>
              <p className="mt-3 text-sm text-slate-500">
                Carefully selected resin, pigments, and finishes for lasting beauty.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-amber-200/30">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-3xl">💎</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Unique Artwork</h3>
              <p className="mt-3 text-sm text-slate-500">
                Designs that stand out and become the conversation piece in any room.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-2 hover:border-amber-200 hover:shadow-amber-200/30">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-3xl text-amber-100">❤️</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Crafted With Passion</h3>
              <p className="mt-3 text-sm text-slate-500">
                Every order receives extra care, love, and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-amber-400 text-white py-20">
        <div className="text-center max-w-4xl mx-auto px-6">

          <h2 className="text-4xl font-bold">
            Let's Create Something Beautiful Together
          </h2>

          <p className="mt-6 text-lg">
            Have an idea? I'd love to turn it into a one-of-a-kind resin artwork.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-white text-amber-400 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100"
          >
            Contact Me
          </Link>

        </div>
      </section>

    </div>
  );
}