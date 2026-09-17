"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ImageIcon, CalendarClock } from "lucide-react";
import { campaigns, formatNaira, type Campaign } from "@/app/lib/campaigns";

const seasons = ["All", "Ramadan", "Eid", "Day of Arafah", "Ongoing"] as const;

function ProgressBar({ campaign }: { campaign: Campaign }) {
  const pct = Math.min(
    100,
    Math.round((campaign.raised / campaign.target) * 100)
  );
  return (
    <div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-primary"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>{formatNaira(campaign.raised)} raised</span>
        <span>{formatNaira(campaign.target)} target</span>
      </div>
    </div>
  );
}

export default function CampaignsPage() {
  const [season, setSeason] =
    useState<(typeof seasons)[number]>("All");

  const filtered = campaigns.filter(
    (c) => season === "All" || c.season === season
  );

  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-20 lg:py-24 max-w-3xl">
          <span className="eyebrow">
            <CalendarClock className="w-4 h-4" />
            Campaigns
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-primary-deep leading-tight">
            Every campaign, past and present.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A full record of what we&apos;ve run and what&apos;s active right
            now — instead of scattered posts, one place to see it all.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap gap-2">
            {seasons.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSeason(s)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer border ${
                  season === s
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/50"
                }`}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {filtered.map((campaign) => (
              <div key={campaign.slug} className="card p-6 flex flex-col gap-4">
                <div className="relative aspect-[16/9] rounded-xl bg-muted border border-border overflow-hidden grid place-items-center text-muted-foreground">
                  {campaign.image ? (
                    <Image
                      src={campaign.image}
                      alt={campaign.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
                  )}
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="eyebrow">{campaign.season}</span>
                  {campaign.status === "active" && (
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      Active
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-primary-deep">
                    {campaign.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {campaign.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-4 h-4 shrink-0" />
                  {campaign.startDate}
                  {campaign.endDate && campaign.endDate !== campaign.startDate
                    ? ` – ${campaign.endDate}`
                    : ""}
                </div>

                <ProgressBar campaign={campaign} />

                {campaign.outcome && (
                  <p className="text-sm font-semibold text-primary-deep">
                    Outcome: {campaign.outcome}
                  </p>
                )}

                {campaign.status === "active" && (
                  <Link href="/donate" className="btn-primary mt-1">
                    Donate to this campaign
                  </Link>
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Figures shown are preview data for this site build — they will be
            replaced with the organization&apos;s real campaign records.
          </p>
        </div>
      </section>
    </div>
  );
}
