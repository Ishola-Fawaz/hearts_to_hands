"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";

export function NewsletterForm({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div
        className={`flex items-center gap-3 rounded-full border px-5 py-3 text-sm font-medium max-w-md ${
          variant === "dark"
            ? "border-primary-foreground/25 bg-primary-foreground/10 text-primary-foreground"
            : "border-primary/30 bg-primary/10 text-primary-deep"
        }`}
      >
        <CheckCircle2
          className={`w-5 h-5 shrink-0 ${
            variant === "dark" ? "text-primary-foreground" : "text-primary"
          }`}
        />
        Thanks for subscribing — watch your inbox for updates.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 max-w-md"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={`flex-1 rounded-full border px-5 py-3 text-sm outline-none transition-colors ${
          variant === "dark"
            ? "border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/50"
            : "border-border bg-background focus:border-primary"
        }`}
      />
      <button
        type="submit"
        className={
          variant === "dark" ? "btn-ghost-light whitespace-nowrap" : "btn-primary whitespace-nowrap"
        }
      >
        Subscribe
      </button>
    </form>
  );
}
