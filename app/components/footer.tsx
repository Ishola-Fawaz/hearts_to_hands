import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { NewsletterForm } from "./newsletter-form";
import { InstagramIcon } from "./social-icons";

import Logo from "@/public/logo/logo.jpg";

const socials = [
  {
    icon: InstagramIcon,
    name: "Instagram",
    href: "https://instagram.com/hearts_to_hands1",
  },
];

const organizationLinks = [
  { href: "/about", label: "About us" },
  { href: "/campaigns", label: "Campaigns" },
  { href: "/transparency", label: "Transparency" },
  { href: "/impact", label: "Impact & Gallery" },
];

const giveLinks = [
  { href: "/donate", label: "Donate" },
  { href: "/get-involved", label: "Get Involved" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-primary-deep text-primary-foreground">
      <div className="container-page pt-14">
        <div className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="font-display text-xl font-extrabold">
              Stay in the loop
            </div>
            <p className="mt-1 text-sm text-primary-foreground/70 max-w-sm">
              Distribution days, campaigns, and stories — once a month, no
              spam.
            </p>
          </div>
          <NewsletterForm variant="dark" />
        </div>
      </div>

      <div className="container-page py-14 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5 space-y-4">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={Logo}
              alt="Hearts to Hands"
              className="h-14 w-14 object-contain mix-blend-screen"
            />
            <div>
              <div className="font-display text-lg font-bold">
                HEARTS to HANDS
              </div>
              <div className="text-xs uppercase tracking-widest text-primary-foreground/60">
                Community · Care · Change
              </div>
            </div>
          </Link>
          <p className="text-primary-foreground/70 max-w-md">
            Turning Sadaqah into direct, dignified support for families and
            individuals who need it most.
          </p>
          <div className="flex gap-3 pt-2">
            {socials.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="h-11 w-11 grid place-items-center rounded-full border border-primary-foreground/20 hover:bg-primary-foreground hover:text-primary-deep hover:border-primary-foreground transition-colors"
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Organization
          </h4>
          <ul className="space-y-2.5 text-primary-foreground/85 text-sm">
            {organizationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Give
          </h4>
          <ul className="space-y-2.5 text-primary-foreground/85 text-sm">
            {giveLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/60 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-primary-foreground/85 text-sm">
            <li>
              <a
                href="tel:+2347057635214"
                className="flex items-start gap-2.5 hover:text-primary-foreground transition-colors"
              >
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +234 705 763 5214
              </a>
            </li>
            <li>
              <a
                href="mailto:heartstohands1@gmail.com"
                className="flex items-start gap-2.5 hover:text-primary-foreground transition-colors"
              >
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                heartstohands1@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              Ogbomoso, Oyo State
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Hearts to Hands.</div>
        </div>
      </div>
    </footer>
  );
}
