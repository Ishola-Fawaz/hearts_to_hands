"use client";

import { useState } from "react";
import { Copy, Check, ShieldCheck } from "lucide-react";

const suggested = [
  { value: "₦1,000", label: "Give Hope to a Child" },
  { value: "₦5,000", label: "Feed a Child" },
  { value: "₦20,000", label: "Sponsor a Family" },
];

const bankDetails = {
  bankName: "Opay",
  accountNumber: "7057635214",
  accountName: "Yusuff Summayyah (Hearts to Hands)",
};

export function BankTransferCard() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — the number is still visible to copy manually
    }
  }

  return (
    <div className="card p-8 lg:p-10">
      <h3 className="font-display text-xl font-semibold text-primary-deep">
        Give by bank transfer
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        We don&apos;t process card payments on the site — send your gift
        directly to the account below.
      </p>

      <div className="mt-6 rounded-xl border border-border divide-y divide-border">
        <div className="p-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Bank Name
          </div>
          <div className="mt-1 font-semibold text-primary-deep">
            {bankDetails.bankName}
          </div>
        </div>
        <div className="p-4 flex items-center justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">
              Account Number
            </div>
            <div className="mt-1 font-display text-lg font-semibold text-primary-deep">
              {bankDetails.accountNumber}
            </div>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="btn-secondary text-sm shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                Copied
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="p-4">
          <div className="text-xs uppercase tracking-widest text-muted-foreground">
            Account Name
          </div>
          <div className="mt-1 font-semibold text-primary-deep">
            {bankDetails.accountName}
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm font-medium text-foreground">
          Suggested amounts
        </div>
        <div className="mt-3 grid gap-2">
          {suggested.map((item) => (
            <div
              key={item.value}
              className="flex items-center justify-between rounded-xl border border-border px-4 py-3"
            >
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
              <span className="font-display font-semibold text-primary-deep">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-2 text-xs text-muted-foreground">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        After transferring, send your receipt to{" "}
        <a
          href="mailto:heartstohands1@gmail.com"
          className="text-primary font-semibold hover:text-primary-deep"
        >
          heartstohands1@gmail.com
        </a>{" "}
        so we can confirm your gift and log it toward a campaign.
      </div>
    </div>
  );
}
