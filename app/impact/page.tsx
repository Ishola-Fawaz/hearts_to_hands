import type { Metadata } from "next";
import Image from "next/image";
import { Camera, MapPin, PlayCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Impact & Gallery",
  description:
    "Photos and videos from Hearts to Hands distributions and visitations — organized in one place instead of scattered across posts.",
};

const photoEntries = [
  {
    date: "2025",
    title: "Food Basket Packing",
    location: "[Location]",
    caption: "Grocery bags packed and ready ahead of a distribution day.",
    src: "/media/photos/food-basket-packing.jpeg",
  },
  {
    date: "2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption:
      "Visited with LAUTECH's Graduating Muslim Students group, delivering essentials to students and residents.",
    src: "/media/photos/blind-centre-visitation-1.jpeg",
  },
  {
    date: "2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption: "The team and volunteers with students at the centre.",
    src: "/media/photos/blind-centre-visitation-2.jpeg",
  },
  {
    date: "2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption: "Students gathered during the visitation.",
    src: "/media/photos/blind-centre-visitation-3.jpeg",
  },
  {
    date: "2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption: "Volunteers with students after item distribution.",
    src: "/media/photos/blind-centre-visitation-4.jpeg",
  },
  {
    date: "2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption: "The wider group during the visitation program.",
    src: "/media/photos/blind-centre-visitation-5.jpeg",
  },
  {
    date: "2025",
    title: "Blind Centre Visitation",
    location: "[Location]",
    caption: "A quiet moment between students during the visit.",
    src: "/media/photos/blind-centre-visitation-6.jpeg",
  },
];

const videoEntries = [
  {
    title: "Blind Centre Visitation — clip 1",
    src: "/media/videos/blind-centre-visitation-1.mp4",
  },
  {
    title: "Blind Centre Visitation — clip 2",
    src: "/media/videos/blind-centre-visitation-2.mp4",
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
          {photoEntries.map((entry, i) => (
            <div
              key={entry.title + i}
              className="card overflow-hidden"
            >
              <div className="relative aspect-[4/3] bg-muted border-b border-border">
                <Image
                  src={entry.src}
                  alt={entry.title}
                  fill
                  className="object-cover"
                />
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
      </section>

      <section className="section bg-secondary/40 border-y border-border">
        <div className="container-page">
          <span className="eyebrow">
            <PlayCircle className="w-4 h-4" />
            Videos
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
            From the visitation
          </h2>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {videoEntries.map((video) => (
              <div key={video.src} className="card overflow-hidden">
                <video
                  src={video.src}
                  controls
                  preload="metadata"
                  className="w-full aspect-video bg-black"
                />
                <div className="p-4">
                  <div className="text-sm font-semibold text-primary-deep">
                    {video.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
