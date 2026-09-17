import type { Metadata } from "next";
import Link from "next/link";
import {
  Handshake,
  Package,
  Megaphone,
  ArrowRight,
  Mail,
  Phone,
  Calendar,
} from "lucide-react";
import { NewsletterForm } from "../components/newsletter-form";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Volunteer on distribution days, donate goods, spread the word, or partner with Hearts to Hands as a student or community group.",
};

const ways = [
  {
    icon: Handshake,
    title: "Join a distribution day",
    description:
      "Help pack and hand out food baskets, clothing, or essentials on active campaign days.",
    cta: "See upcoming distribution days",
  },
  {
    icon: Package,
    title: "Donate goods",
    description:
      "Non-perishable food, clothing, and essentials are always needed for upcoming drives.",
    cta: "View current needs list",
  },
  {
    icon: Megaphone,
    title: "Spread the word",
    description:
      "Share our campaigns with your network — awareness is often what closes the gap on a target.",
    cta: "Follow @hearts_to_hands1",
  },
];

// Placeholder — replace with real upcoming distribution dates.
const upcomingDates = [
  {
    campaign: "Ramadan Food Basket Drive",
    time: "[Date & time]",
    location: "[Location]",
  },
  {
    campaign: "[Next distribution day]",
    time: "[Date & time]",
    location: "[Location]",
  },
];

export default function GetInvolvedPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-20 lg:py-24 max-w-3xl">
          <span className="eyebrow">Get involved</span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-primary-deep leading-tight">
            There&apos;s a place for you here.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Not everyone can give financially every time — your hour, your
            voice, or your goods help just as much.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ways.map((way) => (
            <div key={way.title} className="card p-8">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary/10 text-primary">
                <way.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-primary-deep">
                {way.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {way.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                {way.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-secondary/40 border-y border-border">
        <div className="container-page">
          <span className="eyebrow">Upcoming distribution days</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
            Where we need hands next
          </h2>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {upcomingDates.map((slot, i) => (
              <div
                key={i}
                className="py-5 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <div className="font-semibold text-primary-deep">
                    {slot.campaign}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" /> {slot.time}
                    </span>
                    <span>{slot.location}</span>
                  </div>
                </div>
                <a
                  href="mailto:heartstohands1@gmail.com"
                  className="btn-secondary"
                >
                  Sign up
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div className="card p-8">
            <span className="eyebrow">Partner with us</span>
            <h3 className="mt-3 font-display text-xl font-semibold text-primary-deep">
              For student & community groups
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              We&apos;ve partnered with groups like LAUTECH&apos;s Graduating
              Muslim Students on visitations and drives. If your group wants
              to co-host or support a campaign, reach out — we&apos;ll shape
              something together.
            </p>
            <a
              href="mailto:heartstohands1@gmail.com"
              className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
            >
              Start a partnership
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div>
            <span className="eyebrow">Stay connected</span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-primary-deep">
              Get monthly updates
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Join our newsletter for distribution days, campaigns, and
              stories from the community.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>

            <div className="mt-8 space-y-3 text-sm">
              <a
                href="mailto:heartstohands1@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                heartstohands1@gmail.com
              </a>
              <a
                href="tel:+2347057635214"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +234 705 763 5214
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="rounded-3xl bg-primary-deep text-primary-foreground px-8 py-14 lg:px-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
              Ready to give instead?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              A Sadaqah gift of any size goes directly toward an active
              campaign.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/donate" className="btn-ghost-light">
                Donate now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
