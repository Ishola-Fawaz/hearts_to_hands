import type { Metadata } from "next";
import { Camera, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Gallery",
  description:
    "Photos and stories from Hearts to Hands distributions, sponsorships, and visitations — organized in one place instead of scattered across posts.",
};

// Preview entries — replace with real dated photos/captions from distributions and visitations.
const entries = [
  {
    date: "August 2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption:
      "Visited with LAUTECH's Graduating Muslim Students group, delivering essentials to residents.",
  },
  {
    date: "June 2025",
    title: "Day of Arafah Feeding Program",
    location: "[Location]",
    caption: "Hot meals delivered to 25 families across two communities.",
  },
  {
    date: "March 2025",
    title: "Eid Clothing & Gift Drive",
    location: "[Location]",
    caption: "60 children received new outfits and small gifts ahead of Eid.",
  },
  {
    date: "[Date]",
    title: "[Distribution or sponsorship name]",
    location: "[Location]",
    caption: "[What was given, to whom, and where.]",
  },
];

export default function ImpactPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-20 lg:py-24 max-w-3xl">
          <span className="eyebrow">
            <Camera className="w-4 h-4" />
            Impact & Gallery
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-primary-deep leading-tight">
            The proof, in one place.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every distribution, sponsorship, and visitation — with context on
            what was given, to whom, and where — instead of scattered across
            posts.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <div key={entry.title + entry.date} className="card overflow-hidden">
              <div className="aspect-[4/3] bg-muted border-b border-border grid place-items-center text-muted-foreground">
                <Camera className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold text-primary uppercase tracking-widest">
                  {entry.date}
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-primary-deep">
                  {entry.title}
                </h3>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {entry.location}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  {entry.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground">
          Photos are placeholders for this site build — swap in real images
          from distributions, sponsorships, and visitations.
        </p>
      </section>
    </div>
  );
}
