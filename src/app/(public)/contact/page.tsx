"use client";
import React, { useState } from "react";



const Contact: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        setSubmitted(true);
    };

    return (
        <div className="max-w-lg mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            {submitted ? (
                <div className="text-green-600 font-semibold">Thank you for contacting us!</div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full border rounded px-3 py-2"
                            type="text"
                            id="name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full border rounded px-3 py-2"
                            type="email"
                            id="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full border rounded px-3 py-2"
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Send Message
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;