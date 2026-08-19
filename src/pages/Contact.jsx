import { useState } from "react";
import api from "../api/client";

export default function Contact() {
   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

        if (error) setError("");
        if (submitted) setSubmitted(false);
    };

    async function handleSubmit(event) {
        event.preventDefault();

        const { name, email, message } = formData;

        // Validate fields
        if (!name.trim() || !email.trim() || !message.trim()) {
            setError("Please fill in all required fields.");
            setSubmitted(false);
            return;
        }

        setError("");

        try {
            const contactModel = {
                Name: name,
                Email: email,
                Message: message
            };

            const response = await api.post("/contact", contactModel);

            setSubmitted(true);

            alert(response.data.message || "Thanks for reaching out!");

            // Clear the form
            setFormData({
                name: "",
                email: "",
                message: ""
            });

        } catch (error) {
            console.error("Error:", error);

            setSubmitted(false);

            setError(
                error.response?.data?.message ||
                "Failed. Please try again."
            );
        }
    }

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

                    <form onSubmit={handleSubmit} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                        {submitted && (
                            <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                                Thank you for reaching out.
                            </div>
                        )}
                        {error && (
                            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                {error}
                            </div>
                        )}

                        <div className="grid gap-4">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Tell me about your idea or order"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-white transition hover:bg-amber-500"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}