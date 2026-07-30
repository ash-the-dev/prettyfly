"use client";

import { useState } from "react";

const topics = ["Suggest a guide", "Report a correction", "Ask a question", "Partnership inquiry", "Other"];

type Errors = Partial<Record<"name" | "email" | "topic" | "message", string>>;

export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});

  function submit(formData: FormData) {
    const nextErrors: Errors = {};
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const topic = String(formData.get("topic") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const website = String(formData.get("website") ?? "").trim();

    if (website) return;
    if (!name) nextErrors.name = "Please add your name.";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Please add a valid email address.";
    if (!topic) nextErrors.topic = "Please choose a topic.";
    if (message.length < 20) nextErrors.message = "Please add at least 20 characters so the message has enough context.";

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nTopic: ${topic}\n\n${message}`);
    window.location.href = `mailto:hello@prettyflyforawebsite.com?subject=${encodeURIComponent(topic)}&body=${body}`;
  }

  return (
    <form action={submit} className="grid gap-5 rounded-2xl border-2 border-black bg-white p-6 text-black shadow-[6px_6px_0_#000]" noValidate>
      {/* TODO: Replace the mailto fallback with a server-side form destination such as Resend, Formspree, or a protected Next.js route before relying on contact submissions in production. */}
      <p className="rounded-xl bg-neutral-100 p-4 text-sm leading-6">
        This form uses your email app as a fallback because no server-side form destination is configured yet.
      </p>
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="grid gap-2 font-bold" htmlFor="name">
        Name
        <input id="name" name="name" className="min-h-12 rounded-[10px] border-2 border-black px-4 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]" aria-describedby={errors.name ? "name-error" : undefined} />
        {errors.name ? <span id="name-error" className="text-sm text-red-700">{errors.name}</span> : null}
      </label>
      <label className="grid gap-2 font-bold" htmlFor="email">
        Email
        <input id="email" name="email" type="email" className="min-h-12 rounded-[10px] border-2 border-black px-4 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]" aria-describedby={errors.email ? "email-error" : undefined} />
        {errors.email ? <span id="email-error" className="text-sm text-red-700">{errors.email}</span> : null}
      </label>
      <label className="grid gap-2 font-bold" htmlFor="topic">
        Topic
        <select id="topic" name="topic" defaultValue="" className="min-h-12 rounded-[10px] border-2 border-black px-4 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]" aria-describedby={errors.topic ? "topic-error" : undefined}>
          <option value="" disabled>Choose a topic</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
        {errors.topic ? <span id="topic-error" className="text-sm text-red-700">{errors.topic}</span> : null}
      </label>
      <label className="grid gap-2 font-bold" htmlFor="message">
        Message
        <textarea id="message" name="message" rows={7} className="rounded-[10px] border-2 border-black px-4 py-3 focus:outline-none focus:ring-4 focus:ring-[#F45BCF]" aria-describedby={errors.message ? "message-error" : undefined} />
        {errors.message ? <span id="message-error" className="text-sm text-red-700">{errors.message}</span> : null}
      </label>
      <button type="submit" className="inline-flex min-h-12 items-center justify-center rounded-[10px] border-2 border-black bg-[#F45BCF] px-5 py-3 font-mono font-bold text-black shadow-[4px_4px_0_#000] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-cyan-300">
        Open email draft
      </button>
    </form>
  );
}
