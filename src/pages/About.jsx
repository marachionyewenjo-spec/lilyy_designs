import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-amber-50 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-transparent to-white" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl">
            <p className="inline-flex rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">
              About Lilyy Designs
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Handmade resin art with personality, passion, and a personal touch.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              I create one-of-a-kind resin pieces inspired by nature, meaningful moments,
              and joyful color. Every design is carefully crafted to bring warmth,
              sparkle, and everyday elegance to your space.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Explore the Gallery
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-900 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Book a Custom Piece
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl lg:px-10">
          <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Crafted from heart, designed for your life.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Lilyy_Designs is your go-to brand for beautiful, elegant, handcrafted resin art and custom decor. Each piece is made with love, creativity and attention to detail. Perfect for gifting, souvenirs or personal use.
              </p>
            </div>
            <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Founder story</p>
              <h3 className="mt-6 text-2xl font-semibold">From passion to purpose</h3>
              <p className="mt-4 leading-7 text-slate-200">
                I started Lilyy Designs after discovering how resin can preserve color,
                create depth, and transform simple materials into memorable keepsakes.
                Today I combine craftsmanship with personal service to make each order feel
                special from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 px-6">
        <div className="mx-auto max-w-7xl lg:px-10">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
              Why choose Lilyy
            </p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
              Thoughtful craft, premium materials, and joyful design.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100 text-2xl">🎨</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Unique Originals</h3>
              <p className="mt-3 text-slate-600">
                Every piece is handmade in small batches, so your order is one-of-a-kind and tailored to your style.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-2xl text-amber-100">✨</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Premium Finish</h3>
              <p className="mt-3 text-slate-600">
                I use high-quality resin, pigments, and protective coatings so your art keeps its shine and strength.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100 text-2xl">❤️</div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Made with Care</h3>
              <p className="mt-3 text-slate-600">
                I value clear communication, thoughtful packaging, and a personal touch in every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl lg:px-10">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Custom Requests</h3>
              <p className="mt-4 text-slate-600">
                Tell me your favorite colors, shapes, and themes. I’ll bring them together in a resin piece you’ll love.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Small Batch Quality</h3>
              <p className="mt-4 text-slate-600">
                I focus on a few thoughtful creations at a time, so every detail receives careful attention.
              </p>
            </div>
            <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">Happy Customers</h3>
              <p className="mt-4 text-slate-600">
                Whether it’s a gift or a keepsake, I take pride in delivering resin art that makes people smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-400 py-20 px-6 text-white">
        <div className="mx-auto max-w-7xl lg:px-10 text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to start your custom resin piece?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-amber-100">
            I’d love to work with you on a design that feels personal, polished, and perfect for your home or gift.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-amber-600 transition hover:bg-slate-100"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}
