import type { Metadata } from "next";
import { Heart, Calendar } from "lucide-react";
import { BankTransferCard } from "../components/bank-transfer";
import { campaigns, formatNaira } from "@/app/lib/campaigns";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Give Sadaqah to an active Hearts to Hands campaign by bank transfer — every gift goes toward a specific, named need.",
};

const activeCampaigns = campaigns.filter((c) => c.status === "active");

export default function DonatePage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-20 lg:py-24 max-w-2xl">
          <span className="eyebrow">
            <Heart className="w-4 h-4" />
            Donate
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-primary-deep leading-tight">
            Give Sadaqah, directly.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Choose an active campaign and give directly by bank transfer —
            every gift goes toward a specific, named need.
          </p>
        </div>
      </section>

      {activeCampaigns.length > 0 && (
        <section className="section pb-0">
          <div className="container-page">
            <span className="eyebrow">Active campaigns</span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-primary-deep">
              Give to a specific campaign
            </h2>

            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {activeCampaigns.map((campaign) => {
                const pct = Math.min(
                  100,
                  Math.round((campaign.raised / campaign.target) * 100)
                );
                return (
                  <div key={campaign.slug} className="card p-6">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="w-4 h-4 shrink-0" />
                      {campaign.startDate}
                    </div>
                    <h3 className="mt-2 font-display text-lg font-semibold text-primary-deep">
                      {campaign.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {campaign.description}
                    </p>
                    <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
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
              })}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Campaign figures are preview data for this site build.
            </p>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <BankTransferCard />
          </div>

          <div className="lg:pt-4">
            <span className="eyebrow">Where it goes</span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-primary-deep">
              How your gift helps
            </h2>
            <p className="mt-4 text-muted-foreground">
              Every gift is tracked against a specific campaign — food
              baskets, clothing drives, feeding programs, and visitations —
              and shown on our{" "}
              <a
                href="/transparency"
                className="text-primary font-semibold hover:text-primary-deep"
              >
                Transparency
              </a>{" "}
              page as campaigns close.
            </p>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/40 p-6 text-sm text-muted-foreground">
              [Registration status to be added.] Questions about a gift?{" "}
              <a
                href="mailto:heartstohands1@gmail.com"
                className="text-primary font-semibold hover:text-primary-deep"
              >
                Contact us
              </a>{" "}
              and we&apos;ll help you get set up.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
