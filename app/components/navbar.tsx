"use client";

import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Logo from "@/public/logo/h2h.png";

const nav = [
  { to: "/about", label: "About" },
  { to: "/campaigns", label: "Campaigns" },
  { to: "/transparency", label: "Transparency" },
  { to: "/impact", label: "Impact" },
  { to: "/get-involved", label: "Get Involved" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-background/80 border-b border-border/60">
      <div className="container-page flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src={Logo}
            alt="Hearts to Hands"
            className="h-16 w-16 object-contain"
            preload
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              className="px-4 py-2 text-sm font-medium text-foreground/80 rounded-full hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/donate" className="btn-primary text-sm">
            <Heart className="w-4 h-4" strokeWidth={2.5} />
            Donate
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-primary-deep"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/60 bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.to}
                href={item.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2"
            >
              <Heart className="w-4 h-4" />
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
