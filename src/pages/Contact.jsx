import { useState } from "react";
import api from "../api/client";

export default function Contact() {

    return (
        <section className="bg-[radial-gradient(circle_at_top,_#fff7ed_0%,_#f8fafc_55%,_#f1f5f9_100%)] py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid gap-10 rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-[1.1fr_0.9fr] md:p-12">
                    <div>
                        <p className="inline-flex rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">
                            Contact Me
                        </p>
                        <h1 className="mt-5 text-4xl font-bold text-slate-900 sm:text-5xl">
                            Let’s create something beautiful together.
                        </h1>
                        <p className="mt-4 max-w-2xl text-lg text-slate-600">
                            Have an idea for a custom resin piece or want to place an order? I’d love to hear from you.
                        </p>

                        <div className="mt-8 space-y-4">
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <h2 className="font-semibold text-slate-900">Email</h2>
                                <p className="mt-1 text-slate-600">alexanderlillian679@gmail.com</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <h2 className="font-semibold text-slate-900">Phone</h2>
                                <p className="mt-1 text-slate-600">+234 816 769 0917</p>
                            </div>
                            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                                <h2 className="font-semibold text-slate-900">Location</h2>
                                <p className="mt-1 text-slate-600">Based in Owerri, Imo state</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}