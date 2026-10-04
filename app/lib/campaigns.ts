export type Campaign = {
  slug: string;
  name: string;
  description: string;
  season: "Ramadan" | "Eid" | "Ongoing";
  status: "active" | "past";
  startDate: string;
  endDate?: string;
  target: number;
  raised: number;
  outcome?: string;
  image?: string;
};

// Preview data — replace with the organization's real campaign figures before launch.
export const campaigns: Campaign[] = [
  {
    slug: "ramadan-food-baskets",
    name: "Iftar for the Ummah (Sharing the Blessings of Ramadan)",
    description:
      "Grocery baskets for families fasting through Ramadan, delivered ahead of the month.",
    season: "Ramadan",
    status: "active",
    startDate: "2026-02-18",
    target: 2500000,
    raised: 27300,
    image: "/media/photos/food-basket-packing.jpeg",
  },
  {
    slug: "eid-clothing-drive",
    name: "Eid Clothing & Gift Drive",
    description:
      "New clothes and small gifts for children in need ahead of Eid.",
    season: "Eid",
    status: "past",
    startDate: "2025-03-20",
    endDate: "2025-03-30",
    target: 400000,
    raised: 400000,
    outcome: "60 children received new outfits and gifts.",
    image: "/media/photos/blind-centre-visitation-2.jpeg",
  },
  {
    slug: "blind-centre-visitation",
    name: "Blind Centre Visitation",
    description:
      "A visitation and essentials drive carried out with LAUTECH's Graduating Muslim Students group.",
    season: "Ongoing",
    status: "past",
    startDate: "2025-08-10",
    endDate: "2025-08-10",
    target: 150000,
    raised: 150000,
    outcome: "Essentials delivered to residents of the Blind Centre.",
    image: "/media/photos/blind-centre-visitation-1.jpeg",
  },
];

export const activeCampaign =
  campaigns.find((c) => c.status === "active") ?? campaigns[0];

export function formatNaira(amount: number) {
  return `₦${amount.toLocaleString("en-NG")}`;
}
