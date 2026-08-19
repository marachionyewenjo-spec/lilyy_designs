import { useEffect, useState } from "react";
import clock from "../assets/clock.jpg";
import keyholder from "../assets/keyholder.jpg";
import bookset from "../assets/bookset.jpg";
import carhanger from "../assets/carhanger.jpg";
import giftset from "../assets/giftset.jpg";
import jewerly from "../assets/jewerly.jpg";
import jewerly2 from "../assets/jewerly2.jpg";
import jewerly3 from "../assets/jewerly3.jpg";
import jewerly4 from "../assets/jewerly4.jpg";
import jewerly5 from "../assets/jewerly5.jpg";
import jewerly6 from "../assets/jewerly6.jpg";
import keyholder2 from "../assets/keyholder2.jpg";
import keyholder3 from "../assets/keyholder3.jpg";
import keyholder4 from "../assets/keyholder4.jpg";
import keyholder5 from "../assets/keyholder5.jpg";
import keyholder6 from "../assets/keyholder6.jpg";
import keyholder7 from "../assets/keyholder7.jpg";
import phonepouch from "../assets/phonepouch.jpg";
import phonepouch2 from "../assets/phonepouch2.jpg";
import pictureandjew from "../assets/pictureandjew.jpg";
import phone from "../assets/phone.jpg";
import fb from "../assets/fb.jpg";
import pic from "../assets/pic.jpg";

const galleryItems = [
    { title: "Resin Keyholders", images: [keyholder, keyholder2, keyholder3, keyholder4, keyholder5, keyholder6, keyholder7], alt: "Resin Keyholder", accent: "from-amber-400 to-orange-500" },
    { title: "Resin Wall Clock", images: [clock], alt: "Resin Wall Clock", accent: "from-pink-400 to-rose-500" },
    { title: "Resin Book Set", images: [bookset, fb, giftset], alt: "Resin Book Set", accent: "from-violet-400 to-purple-500" },
    { title: "Resin Jewelries", images: [jewerly, jewerly2, jewerly3, jewerly4, jewerly5, jewerly6], alt: "Resin Jewellery", accent: "from-cyan-400 to-sky-500" },
    { title: "Resin Car Hanger", images: [carhanger], alt: "Resin Car Hanger", accent: "from-emerald-400 to-green-500" },
    { title: "Resin Phone Pouch", images: [phonepouch, phonepouch2, phone], alt: "Resin Phone Pouch", accent: "from-fuchsia-400 to-pink-500" },
    { title: "Resin Home Decor", images: [], alt: "Resin Home Decor", accent: "from-lime-400 to-emerald-500" },
    { title: "Resin Picture Frame", images: [pictureandjew, pic], alt: "Resin Picture Frame", accent: "from-slate-400 to-slate-600" },
    { title: "Resin Gift Set", images: [giftset], alt: "Resin Gift Set", accent: "from-amber-300 to-yellow-500" },
];

function GalleryCard({ title, images, alt, accent }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const intervalId = window.setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 2500);

        return () => window.clearInterval(intervalId);
    }, [images]);

    const hasMultipleImages = images.length > 1;

    return (
        <div className="group overflow-hidden rounded-[24px] border border-white/70 bg-white shadow-[0_10px_40px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.16)]">
            <div className={`relative h-72 overflow-hidden bg-gradient-to-br ${accent}`}>
                <img
                    src={images[currentImage] || images[0]}
                    alt={alt}
                    className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                {hasMultipleImages && (
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`h-2.5 w-2.5 rounded-full transition ${index === currentImage ? "bg-white" : "bg-white/60"}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="p-5">
                <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                    {hasMultipleImages && (
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                            Slide
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function Gallery() {
    return (
        <section className="bg-[radial-gradient(circle_at_top,_#fff7ed_0%,_#f8fafc_55%,_#f1f5f9_100%)] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="mb-10 text-center">
                    <p className="inline-flex rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">
                        Sparkle Gallery
                    </p>
                    <h2 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
                        Explore Some Of Our Hand-made Resin Products
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-600">
                        A colorful collection of resin pieces that brings charm, texture, and personality to every corner.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 md:grid-cols-3 sm:grid-cols-1 animate-fade-in transform transition duration-300">
                    {galleryItems.map((item) => (
                        <GalleryCard
                            key={item.title}
                            title={item.title}
                            images={item.images}
                            alt={item.alt}
                            accent={item.accent}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}