import type { Metadata } from "next";
import { ShieldCheck, Mail, Phone, FileText } from "lucide-react";
import { campaigns, formatNaira } from "@/app/lib/campaigns";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "How Hearts to Hands tracks and reports what's raised and spent, and our registration status as an organization.",
};

// Preview data — replace with real, audited totals before launch.
const totals = {
  raised: 0,
  spent: 0,
};

export default function TransparencyPage() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-page py-20 lg:py-24 max-w-3xl">
          <span className="eyebrow">
            <ShieldCheck className="w-4 h-4" />
            Transparency
          </span>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-extrabold text-primary-deep leading-tight">
            Where every Naira goes.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A running account of what&apos;s been given and what&apos;s been
            spent not scattered across posts, but in one place, updated as
            campaigns close.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="card p-8">
              <span className="eyebrow">All-time raised</span>
              <div className="mt-3 font-display text-4xl font-extrabold text-primary-deep">
                {formatNaira(totals.raised)}
              </div>
            </div>
            <div className="card p-8">
              <span className="eyebrow">All-time spent</span>
              <div className="mt-3 font-display text-4xl font-extrabold text-primary-deep">
                {formatNaira(totals.spent)}
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            These totals are placeholders for this site build — they will be
            updated with real, verified figures before the site goes live.
          </p>
        </div>
      </section>

      <section className="section bg-secondary/40 border-y border-border">
        <div className="container-page">
          <span className="eyebrow">Breakdown by campaign</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
            Campaign by campaign
          </h2>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {campaigns.map((campaign) => (
              <div
                key={campaign.slug}
                className="py-5 flex flex-wrap items-center justify-between gap-4"
              >
                <div>
                  <div className="font-semibold text-primary-deep">
                    {campaign.name}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    {campaign.outcome ?? "Currently active"}
                  </div>
                </div>
                <div className="text-sm font-semibold text-primary-deep shrink-0">
                  {formatNaira(campaign.raised)} / {formatNaira(campaign.target)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid lg:grid-cols-2 gap-12">
          <div>
            <span className="eyebrow">Legal status</span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-primary-deep">
              Registration status
            </h2>
            <p className="mt-4 text-muted-foreground">
              [CAC registration status to be added here — priority item if
              not yet registered as an NGO in Nigeria.]
            </p>
          </div>

          <div>
            <span className="eyebrow">Accountable contact</span>
            <h2 className="mt-4 font-display text-2xl font-semibold text-primary-deep">
              Reach us about any gift
            </h2>
            <p className="mt-4 text-muted-foreground">
              Questions about a specific donation or campaign go directly to
              our team, not just a payment account.
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href="tel:+2347057635214"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                +234 705 763 5214
              </a>
              <a
                href="mailto:heartstohands1@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                heartstohands1@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <FileText className="w-4 h-4 shrink-0" />
                [Link to receipts / disbursement records, if available]
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
