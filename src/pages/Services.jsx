export default function Services() {
    const services = [
        {
            title: "Custom Resin Pieces",
            description: "Beautiful handmade resin creations made to match your style, space, and personality.",
        },
        {
            title: "Personalized Gifts",
            description: "Thoughtful gifts for birthdays, weddings, anniversaries, and special celebrations.",
        },
        {
            title: "Home Decor & Accessories",
            description: "Elegant decor items and accessories designed to add charm to everyday living.",
        },
        {
            title: "Commissioned Designs",
            description: "Bring your own idea to life with a custom concept crafted just for you.",
        },
        {
            title: "Training/Consultation",
            description: "Learn the art of resin crafting through hands-on training and expert consultations, designed to guide beginners and aspiring resin artists every step of the way",
        },
        {
            title: "Souvenirs",
            description: "Beautiful handcrafted resin souvenirs that make memorable gifts for weddings, birthdays, corporate events, and special occasions.",
        },
    ];

    const steps = [
        {
            title: "Share Your Idea",
            description: "Tell me what you want, your color theme, and the feeling you want the piece to have.",
        },
        {
            title: "Design & Create",
            description: "I sketch, shape, and craft each piece with care and attention to detail.",
        },
        {
            title: "Enjoy Your Piece",
            description: "Your finished resin artwork is delivered ready to be admired and treasured.",
        },
    ];

    return (
        <div className="bg-slate-50 text-slate-800">
            <section className="bg-gradient-to-br from-amber-100 via-white to-slate-100 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="max-w-3xl">
                        <p className="inline-flex rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-amber-800">
                            Our Services
                        </p>
                        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
                            Creative resin services designed with care and detail.
                        </h1>
                        <p className="mt-5 text-lg text-slate-600">
                            From decorative pieces to meaningful gifts, each item is handmade with a unique finish and personal touch.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">What I Offer</h2>
                        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
                            A range of handcrafted resin creations made for beauty, function, and gifting.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {services.map((service) => (
                            <div
                                key={service.title}
                                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                                <p className="mt-3 text-slate-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold">How It Works</h2>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div key={step.title} className="rounded-2xl bg-slate-50 p-8 text-center">
                                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 font-semibold text-white">
                                    0{index + 1}
                                </div>
                                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
                                <p className="mt-3 text-slate-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-amber-400 py-16">
                <div className="mx-auto max-w-4xl px-6 text-center text-white">
                    <h2 className="text-3xl font-bold">Ready to create something beautiful?</h2>
                    <p className="mt-4 text-lg text-amber-50">
                        Let’s turn your idea into a handcrafted resin piece you will love.
                    </p>
                    <a
                        href="/contact"
                        className="mt-8 inline-block rounded-full bg-white px-6 py-3 font-semibold text-amber-600 transition hover:bg-slate-100"
                    >
                        Contact Me
                    </a>
                </div>
            </section>
        </div>
    );
}