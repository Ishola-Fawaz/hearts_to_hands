"use client";

import { useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { formatNaira } from "@/app/lib/campaigns";

const amounts = [
  { value: 1000, label: "Give Hope to a Child" },
  { value: 5000, label: "Feed a Child" },
  { value: 20000, label: "Sponsor a Family" },
];

export function DonateForm() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [selected, setSelected] = useState<number | null>(5000);
  const [custom, setCustom] = useState("");

  const amount = useMemo(() => {
    if (custom.trim()) return Number(custom);
    return selected ?? 0;
  }, [custom, selected]);

  const selectedLabel =
    selected && !custom.trim()
      ? amounts.find((a) => a.value === selected)?.label
      : null;

  return (
    <div className="card p-8 lg:p-10">
      <div className="inline-flex rounded-full border border-border p-1 bg-muted">
        {(["once", "monthly"] as const).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFrequency(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors cursor-pointer ${
              frequency === f
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {f === "once" ? "Give once" : "Sadaqah Circle (monthly)"}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-3">
        {amounts.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            onClick={() => {
              setSelected(value);
              setCustom("");
            }}
            className={`flex items-center justify-between rounded-xl border px-4 py-4 text-left transition-colors cursor-pointer ${
              selected === value && !custom.trim()
                ? "border-primary bg-primary/10"
                : "border-border hover:border-primary/50"
            }`}
          >
            <span className="text-sm font-medium text-foreground">
              {label}
            </span>
            <span className="font-display text-lg font-semibold text-primary-deep">
              {formatNaira(value)}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-3">
        <label htmlFor="custom-amount" className="sr-only">
          Custom amount
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
            ₦
          </span>
          <input
            id="custom-amount"
            type="number"
            min={1}
            placeholder="Custom amount"
            value={custom}
            onChange={(e) => {
              setCustom(e.target.value);
              setSelected(null);
            }}
            className="w-full rounded-xl border border-border bg-background pl-8 pr-4 py-3 text-sm outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        {selectedLabel
          ? `"${selectedLabel}" — ${formatNaira(amount)}${
              frequency === "monthly" ? " every month" : ""
            }.`
          : "Every gift, of any size, goes directly toward an active campaign."}
      </p>

      <button
        type="button"
        disabled={!amount}
        className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Donate {formatNaira(amount || 0)}
        {frequency === "monthly" ? " / month" : ""}
      </button>

      <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
        Payment via Paystack / Flutterwave — card, bank transfer, or USSD.
        Checkout isn&apos;t wired up yet in this preview.
      </div>
    </div>
  );
}
