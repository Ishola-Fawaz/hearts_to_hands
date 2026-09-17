import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  HeartHandshake,
  ArrowRight,
  HandHeart,
  Users2,
  BookOpenText,
  Mail,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Hearts to Hands' mission, values, and the people turning Sadaqah into direct, on-the-ground support for our community.",
};

const values = [
  {
    icon: HandHeart,
    title: "Sadaqah, made simple",
    description:
      "We exist to make giving easy and direct — every Naira given is tracked to a specific person, family, or need.",
  },
  {
    icon: Users2,
    title: "Community care",
    description:
      "We show up in person — distributions, visitations, and drives carried out alongside the people we serve, not at a distance.",
  },
  {
    icon: BookOpenText,
    title: "Rooted in faith",
    description:
      "Our work is guided by the Islamic tradition of charity and care for the vulnerable, drawn on naturally rather than as decoration.",
  },
];

// Placeholder slots — replace with the real founders/team names, roles, and bios.
const team = [
  { name: "[Founder Name]", role: "Founder" },
  { name: "[Team Member Name]", role: "Program Coordinator" },
  { name: "[Team Member Name]", role: "Outreach Lead" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-20 lg:py-24 max-w-3xl">
          <span className="eyebrow">
            <HeartHandshake className="w-4 h-4" />
            About Hearts to Hands
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-primary-deep leading-tight">
            Serving hope, one individual at a time.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Hearts to Hands is a community Sadaqah initiative dedicated to
            turning everyday giving into direct, dignified support for
            families and individuals in need.
          </p>
        </div>
      </section>

      <section className="container-page py-10">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            "/media/photos/blind-centre-visitation-2.jpeg",
            "/media/photos/blind-centre-visitation-4.jpeg",
            "/media/photos/blind-centre-visitation-6.jpeg",
          ].map((src) => (
            <div
              key={src}
              className="relative aspect-[4/3] rounded-2xl border border-border overflow-hidden"
            >
              <Image
                src={src}
                alt="Hearts to Hands team and volunteers"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-primary-deep">
              Why Hearts to Hands started
            </h2>
            <p className="mt-6 text-muted-foreground">
              [Add the organization&apos;s origin story here — why it started,
              who started it, and the moment or need that made the first
              campaign happen.]
            </p>
            <p className="mt-4 text-muted-foreground">
              What began as small, direct acts of giving has grown into
              recurring campaigns around Ramadan, Eid, and the Day of Arafah —
              always aimed at meeting a specific, named need rather than a
              vague appeal.
            </p>
          </div>

          <div className="card p-8">
            <h3 className="font-display text-xl font-semibold text-primary-deep">
              What guides us
            </h3>
            <div className="mt-6 space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="h-11 w-11 shrink-0 grid place-items-center rounded-xl bg-primary/10 text-primary">
                    <value.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-deep">
                      {value.title}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-secondary/40 border-y border-border">
        <div className="container-page">
          <span className="eyebrow">Our team</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
            The people behind the work
          </h2>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6">
                <div className="h-16 w-16 rounded-full bg-primary/10 grid place-items-center font-display text-xl font-semibold text-primary">
                  {member.name.startsWith("[") ? "?" : member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="mt-4 font-semibold text-primary-deep">
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <span className="eyebrow">Reach us directly</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
            Contact Hearts to Hands
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row gap-6 text-foreground">
            <a
              href="tel:+2347057635214"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4 text-primary" />
              +234 705 763 5214
            </a>
            <a
              href="mailto:heartstohands1@gmail.com"
              className="flex items-center gap-3 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary" />
              heartstohands1@gmail.com
            </a>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            [Add physical location, if the organization has a fixed one.]
          </p>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page">
          <div className="rounded-3xl bg-primary-deep text-primary-foreground px-8 py-14 lg:px-16 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold">
              Want to be part of the story?
            </h2>
            <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">
              Whether it&apos;s an hour of your time or a Sadaqah gift,
              there&apos;s a place for you at Hearts to Hands.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/get-involved" className="btn-ghost-light">
                Get involved
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
