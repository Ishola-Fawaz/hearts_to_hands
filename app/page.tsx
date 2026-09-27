import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  HeartHandshake,
  Users,
  Camera,
} from "lucide-react";
import { activeCampaign, campaigns, formatNaira } from "@/app/lib/campaigns";

const impactStats = [
  { value: "50+", label: "Families fed since founding" },
  { value: formatNaira(800_000), label: "Given through Sadaqah" },
  { value: "2", label: "Campaigns run" },
  { value: "120+", label: "Children reached" },
];

const quickDonateTiles = [
  { amount: 1000, label: "Give Hope to a Child" },
  { amount: 5000, label: "Feed a Child" },
  { amount: 20000, label: "Sponsor a Family" },
];

const recentActivity = campaigns
  .filter((c) => c.status === "past")
  .slice(0, 3);

export default function Home() {
  const pct = Math.min(
    100,
    Math.round((activeCampaign.raised / activeCampaign.target) * 100)
  );
  const shortfall = Math.max(0, activeCampaign.target - activeCampaign.raised);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl"
          aria-hidden
        />

        <div className="container-page relative py-20 lg:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="max-w-2xl">
            <span className="eyebrow hero-in hero-in-1">
              <HeartHandshake className="w-4 h-4" />
              Hearts to Hands
            </span>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-deep leading-[1.05] hero-in hero-in-2">
              Serving hope, one individual at a time.
            </h1>

            <svg
              className="mt-3 w-56 h-6 text-accent hero-in hero-in-3"
              viewBox="0 0 220 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 18C40 2 160 2 218 14"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl hero-in hero-in-4">
              Hearts to Hands turns Sadaqah into direct, dignified support —
              food baskets, clothing, and care delivered straight to the
              families and individuals who need them.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 hero-in hero-in-5">
              <Link href="/donate" className="btn-primary">
                Donate
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/get-involved" className="btn-secondary">
                Get involved
              </Link>
            </div>
          </div>

          {/* Photo collage — real distribution/volunteer photos */}
          <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-3 sm:gap-4 hero-collage-in">
            <div className="relative aspect-[3/5] rounded-full border border-border overflow-hidden">
              <Image
                src="/media/photos/blind-centre-visitation-6.jpeg"
                alt="Hearts to Hands volunteers with students"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-[3/5] rounded-full bg-primary" />

            <div className="relative aspect-[3/5] rounded-full border border-border overflow-hidden -translate-y-6 sm:-translate-y-8 lg:-translate-y-12">
              <Image
                src="/media/photos/blind-centre-visitation-4.jpeg"
                alt="Hearts to Hands volunteers"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[3/5] rounded-full border border-border overflow-hidden -translate-y-6 sm:-translate-y-8 lg:-translate-y-12">
              <Image
                src="/media/photos/blind-centre-visitation-3.jpeg"
                alt="Students at a Hearts to Hands visitation"
                fill
                className="object-cover"
              />
            </div>

            <div className="aspect-[3/5] rounded-full bg-accent" />
            <div className="relative aspect-[3/5] rounded-full border border-border overflow-hidden">
              <Image
                src="/media/photos/blind-centre-visitation-5.jpeg"
                alt="Hearts to Hands community visitation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Active campaign progress */}
        <div className="border-t border-border bg-secondary/40">
          <div className="container-page py-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                  Active campaign
                </span>
                <div className="mt-1 font-display text-xl font-semibold text-primary-deep">
                  {activeCampaign.name}
                </div>
              </div>
              <Link
                href="/donate"
                className="text-sm font-semibold text-primary hover:text-primary-deep transition-colors"
              >
                Donate to this campaign
              </Link>
            </div>

            <div className="mt-4 h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="mt-2 flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
              <span>{formatNaira(activeCampaign.raised)} raised</span>
              <span>{formatNaira(shortfall)} shortfall</span>
              <span>{formatNaira(activeCampaign.target)} target</span>
            </div>
          </div>
        </div>
      </section>

      {/* Impact snapshot */}
      <section className="section pb-0">
        <div className="container-page grid grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl font-semibold text-primary-deep">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <div className="container-page mt-4">
          <p className="text-xs text-muted-foreground">
            Figures shown are preview data for this site build.
          </p>
        </div>
      </section>

      {/* Quick donate */}
      <section className="section">
        <div className="container-page">
          <div className="max-w-xl">
            <span className="eyebrow">Give now</span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
              Pick an amount, make an impact
            </h2>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-6">
            {quickDonateTiles.map((tile) => (
              <Link
                key={tile.amount}
                href="/donate"
                className="card p-6 flex flex-col gap-2"
              >
                <span className="font-display text-2xl font-extrabold text-primary-deep">
                  {formatNaira(tile.amount)}
                </span>
                <span className="text-sm text-muted-foreground">
                  {tile.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/donate"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-deep transition-colors"
            >
              Or give a custom amount
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section bg-secondary/40 border-y border-border">
        <div className="container-page grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative max-w-xs sm:max-w-md mx-auto lg:mx-0">
            <div
              className="hidden lg:block absolute left-0 top-0 h-60 w-32 -translate-x-10 rounded-r-[2.5rem] rounded-l-lg bg-primary"
              aria-hidden
            />
            <div
              className="hidden lg:block absolute bottom-0 right-0 h-48 w-40 translate-x-4 translate-y-4 rounded-tl-2xl rounded-bl-2xl rounded-tr-[4rem] rounded-br-[4rem] bg-muted"
              aria-hidden
            />
            <div className="relative w-full aspect-[4/5] rounded-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl lg:rounded-tr-[5rem] lg:rounded-br-[5rem] overflow-hidden lg:border lg:border-border lg:bg-background lg:shadow-xl">
              <Image
                src="/media/photos/blind-centre-visitation-2.jpeg"
                alt="Hearts to Hands team and volunteers"
                fill
                sizes="(min-width: 1024px) 24rem, 20rem"
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-2 lg:gap-3">
              <span className="h-12 w-12 grid place-items-center rounded-full bg-background text-primary-deep">
                <Users className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="font-semibold text-primary-deep">About Us</span>
            </div>

            <h2 className="mt-6 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
              We are Hearts to Hands!
            </h2>

            <p className="mt-4 text-lg text-muted-foreground max-w-sm lg:max-w-none mx-auto lg:mx-0">
              A community Sadaqah initiative turning everyday giving into
              direct, dignified support — food baskets, clothing drives, and
              feeding programs delivered straight to the people who need
              them.
            </p>

            <div className="relative inline-flex mt-8">
              <div
                className="absolute inset-0 rounded-full bg-accent/40 blur-xl"
                aria-hidden
              />
              <Link href="/about" className="btn-primary relative">
                Read more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial
      <section className="section bg-primary-deep text-primary-foreground">
        <div className="container-page">
          <Quote className="w-10 h-10 text-primary-foreground/40" />
          <p className="mt-6 font-display text-2xl sm:text-3xl font-medium max-w-3xl leading-snug">
            &ldquo;When I lost my job, Hearts to Hands didn&apos;t just hand
            me a grocery box — they helped me find childcare, connected me
            with a clinic, and checked in every week. I never felt like a
            number.&rdquo;
          </p>
          <div className="mt-6 text-sm text-primary-foreground/70">
            Maria S. — Program participant since 2023
          </div>
        </div>
      </section>
      */}

      {/* Recent activity */}
      <section className="section">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">Recent activity</span>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-primary-deep">
                What we&apos;ve been doing
              </h2>
            </div>
            <Link
              href="/impact"
              className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-deep transition-colors"
            >
              View full impact & gallery
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {recentActivity.map((campaign) => (
              <div key={campaign.slug} className="card overflow-hidden">
                <div className="relative aspect-[4/3] bg-muted border-b border-border grid place-items-center text-muted-foreground">
                  {campaign.image ? (
                    <Image
                      src={campaign.image}
                      alt={campaign.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <Camera className="w-8 h-8" strokeWidth={1.5} />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-primary-deep">
                    {campaign.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {campaign.outcome ?? campaign.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
