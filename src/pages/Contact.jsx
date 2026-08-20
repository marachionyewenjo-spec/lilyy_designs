import { useState } from "react";
import api from "../api/client";
import {FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaWhatsapp} from "react-icons/fa";

export default function Contact() {

    return (
        <section className="bg-[radial-gradient(circle_at_top,_#fff7ed_0%,_#f8fafc_55%,_#f1f5f9_100%)] py-20 ">
            <div className="w-[300px] lg:w-[800px] md:w-[600px] mx-auto">
                <div className="grid gap-10 rounded-[32px] bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-12">
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
                        <br />
                        <hr /> 
                    </div>
                    <div>
                        <div className="flex gap-5 items-center justify-center text-2xl text-slate-600">

                            <a href="https://www.facebook.com/lilian.alexander.902"> <FaFacebook/> </a>

                            <a href="https://www.linkedin.com/in/lilian-alexander-382b8836b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <FaLinkedin/> </a>

                            <a href="https://www.tiktok.com/@lilyy_designs?_t=ZS-90doGtEr1Vg&_r=1"> <FaTiktok/> </a>

                            <a href="https://www.instagram.com/lilyy_designz?igsh=cnJ2NTZlbXN6eXVy"> <FaInstagram/> </a>                                                 

                            <a href="https://pin.it/725PqQVSS" > <FaPinterest/> </a>

                            <a href="https://wa.me/2347030523750"> <FaWhatsapp/> </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}